import { useContext } from "react"
import AuthContext from "../../context/AuthContext"

export const useAuth = () => {
  const { login, authUser, getLoggedInUser, authLoading } = useContext(AuthContext);
  
  return { login, authUser, getLoggedInUser, authLoading };
}