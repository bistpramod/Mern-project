import { createContext } from "react";
import type { ICredentials, IUserDetail } from "../components/auth/Auth.contract";

export interface IAuthContext {
  login(credentials: ICredentials): Promise<void | IUserDetail>;
  getLoggedInUser(): Promise<IUserDetail | void>;
  authUser: IUserDetail | null;
  authLoading: boolean;
}


const AuthContext = createContext<IAuthContext>({
  // data
  authUser: null,
  authLoading: true,
  // methods(default value)
  async login(){},
  async getLoggedInUser(){}
})

export default AuthContext