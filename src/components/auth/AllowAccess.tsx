import type { ReactNode } from "react";
import { useAuth } from "../../lib/hooks/useAuth";

export default function ShowComponent({children, role}: Readonly<{children: ReactNode, role: string}>){
  const {authUser} = useAuth()
  if(authUser && authUser.role === role) {
    return children
  } else {
    return <></>
  }
}