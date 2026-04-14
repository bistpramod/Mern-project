import HomePage from "../../pages/home/HomePage";
import ForgetPassword from "../../pages/auth/ForgetPassword";
import ResetPassword from "../../pages/auth/PasswordReset";
import AdminLayout from "../../pages/layouts/AdminLayout";
import AuthLayout from "../../pages/layouts/AuthLayout";

export const PublicRouter = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/forget-password", Component: ForgetPassword },
      { path: "/reset-password", Component: ResetPassword },
    ],
  },

  { path: "/moderator", Component: AdminLayout },
  { path: "/user", Component: AdminLayout },
];