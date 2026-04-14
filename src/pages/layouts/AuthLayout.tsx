import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { useAuth } from "../../lib/hooks/useAuth";
import { useNavigate } from "react-router";
import LeftSidePanel from "../../components/auth/LeftSidePanel";
import RightSidePanel from "../../components/auth/RightSidePanel";

export default function AuthLayout(){
  const { authUser } = useAuth();
  const navigate = useNavigate();
  const [pageContent, setPageContent] = useState({
    pageTitle: "Welcome to CMS!",
    content: "Welcome to the Content Management System. Easily manage your content, collaborate with your team, and stay organized. Please log in to access your personalized dashboard and take full control of your publishing and administration tasks. We're glad to have you here!",
    formTitle: "Sign In"
  })

  useEffect(() => {
    if (authUser && authUser.role) {
      navigate("/" + authUser.role);
    }
  }, [authUser]);
  
  return (
    <section className="bg-gray-50 flex w-full h-screen p-5">
      <LeftSidePanel pageTitle={pageContent.pageTitle} content={pageContent.content}/>
      <RightSidePanel formTitle={pageContent.formTitle}>
          <Outlet context={{
            setPageContent: setPageContent
          }} />
        </RightSidePanel>

    </section>
  );
}