import ForgetPasswordForm from "../../components/auth/ForgetPasswordForm";
import { NavLink, useOutletContext } from "react-router";
import { useEffect, type Dispatch, type SetStateAction, type ReactNode } from "react";

export default function ForgetPassword() {
  const { setPageContent } = useOutletContext<{
    setPageContent: Dispatch<
      SetStateAction<{
        pageTitle: string;
        content: string;
        formTitle: ReactNode;
      }>
    >;
  }>();

  useEffect(() => {
    setPageContent({
      pageTitle: "Forgot Password?",
      content:
        "Forgot your password? Don't worry! Enter your registered email address below and we'll email you instructions to reset your password securely. Regain access to all your content and continue managing your dashboard with ease. If you need further assistance, our support team is here to help.",
   
      formTitle: "Request for password change",
    });
  }, []);
  return (
    <>
        <ForgetPasswordForm />

        <div className="flex w-full justify-center items-center">
          <span className="text-lg text-teal-800"> - Or -</span>
        </div>

        <div className="flex w-full items-center justify-center">
          <NavLink
            to="/"
            className="border p-2 text-center rounded-full shadow border-teal-800/40 w-full text-teal-700 text-sm hover:underline hover:text-teal-600 hover:bg-teal-800/5 transition hover:scale-98"
          >
            Login
          </NavLink>
        </div>
    </>
  );
}