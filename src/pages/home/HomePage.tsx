import { useEffect, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { useOutletContext } from "react-router";
import LoginForm from "../../components/auth/LoginForm";

// export (default, named)
export default function HomePage() {
  const {setPageContent} = useOutletContext<{ setPageContent: Dispatch<SetStateAction<{pageTitle: string, content: string, formTitle: ReactNode}>> }>();

  useEffect(()=> {
    setPageContent({
      pageTitle: "Welcome Back!",
      content: "Log in to access your dashboard and manage your content efficiently. We're glad to see you again!",
      formTitle: "Sign In From Here!!!"
    })
  },[])
  return (
      <LoginForm />
  );
}