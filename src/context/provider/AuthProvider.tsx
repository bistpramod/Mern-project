import {type ReactNode, useEffect, useState } from "react";
import AuthContext from "../AuthContext";
import type { ICredentials, IUserDetail } from "../../components/auth/Auth.contract";
import axiosInstance from "../../config/ApiClient";
import Cookies from "js-cookie";

import Loading from "../../components/ui/loading/Loading";

export default function AuthProvider({children}: Readonly<{children: ReactNode}>) {
  const [authUser, setAuthUser] = useState<IUserDetail | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  const getLoggedInUser = async () => {
    try {
      const loggedInUser = (await axiosInstance.get("auth/me")) as IUserDetail
      setAuthUser(loggedInUser)
      return loggedInUser;
    } catch(exception) {
      console.log(exception)
      throw exception
    } finally {
      setAuthLoading(false);
    }
  }
  
  const login = async(credentials: ICredentials): Promise<IUserDetail | void> => {
      try {
        const response = await axiosInstance.post("auth/login", {
          ...credentials,
          expiresInMins: 24*60,
        }) as {accessToken: string}
        Cookies.set("auth_key_61", response.accessToken, {
          expires: 1,
          sameSite: "lax",
          secure: true,
        });
        return await getLoggedInUser()
      } catch(exception) {
        console.log(exception)
        throw exception
      }
  }

  // loadng inital 
  useEffect(() => {
    return () => {
      const token = Cookies.get("auth_key_61");
      if (token) {
        getLoggedInUser();
      } else {
        setAuthLoading(false);
      }
    }
  },[])


  return authLoading ? (
    <section className="w-full h-screen flex items-center justify-center">
      <Loading />
    </section>
  ) : (
    <AuthContext.Provider
      value={{
        login: login,
        getLoggedInUser: getLoggedInUser,
        authUser: authUser,
        authLoading: authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

}