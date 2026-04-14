import ResetPasswordForm from "../../components/auth/ResetPasswordForm";
import { NavLink, useOutletContext } from "react-router";
import { type Dispatch, useEffect, type SetStateAction, type ReactNode } from "react";

export default function ResetPassword() {
const { setPageContent } = useOutletContext<{
  setPageContent: Dispatch<
    SetStateAction<{ pageTitle: string; content: string; formTitle: ReactNode }>
  >;
}>();

useEffect(() => {
  setPageContent({
    pageTitle: "Set password!",
    content:
      "Set a new password for your account below. Make sure your new password is strong and secure. Once updated, you'll be able to log in and continue managing your content safely. If you need assistance, our support team is here to help.",
 
    formTitle: "Reset your password!!!",
  });
}, []);
  return (
    <>
      <ResetPasswordForm />

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
