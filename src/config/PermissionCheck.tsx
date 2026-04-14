import type React from "react";
import { useAuth } from "../lib/hooks/useAuth";
import { Navigate } from "react-router";

export default function PermissionCheck({children, allowedRole}: Readonly<{children: React.ReactNode, allowedRole: string}>) {

  const {authUser} = useAuth()

  // 
  if(authUser && authUser.role !== allowedRole) {
    // if I am a logged Inuser but not permission then redirect to my dashboard
    return <Navigate to={'/'+authUser.role} />
  } else if(!authUser) {
    // if I am not a loggedinUser redirect to login 
    return <Navigate to="/" />
  }

  // if I am a logged in user with permission (allowedRole)
  return <>{children}</>
}