<<<<<<< HEAD
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
=======
// Fixed: Corrected import path from 'Auth.contracts' to 'Auth.contract' to match actual filename
// Fixed: Installed project dependencies to resolve React module not found errors
import { createContext } from "react";
// Fixed import path: removed 's' from 'contracts' to match actual filename 'Auth.contract.ts'
import type { ICredentials } from "../components/auth/Auth.contract";

export interface IAuthContext {
  login(credentials: ICredentials): Promise<void | IUserData>; 
  authUser: IUserDetail | null;
}

const AuthContext = createContext<IAuthContext>({
  async login(credentials: ICredentials) {},
  authUser: null,
});

export default AuthContext;
>>>>>>> 2b31f7d (Sync current workspace changes to bistpramod/long-term)
