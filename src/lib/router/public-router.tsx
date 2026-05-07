import HomePage from "../../pages/home/HomePage";
import ForgetPassword from "../../pages/auth/ForgetPassword";
import ResetPassword from "../../pages/auth/PasswordReset";
import AdminLayout from "../../pages/layouts/AdminLayout";
import AuthLayout from "../../pages/layouts/AuthLayout";
import { ProductLayout } from "../../pages/layouts/ProductLayout";
import AllProductList from "../../pages/product/AllProductList";
import ProductDetail from "../../pages/product/ProductDetail";
import { Outlet } from "react-router";
import CartDetail from "../../pages/cart/CartDetail";

export const PublicRouter = [
  {path: "/",element: <ProductLayout />,children: [
    { path: "product-list",element: <Outlet />,children: [
        { index: true, element: <AllProductList /> }, // index route
        { path: ":slug", Component: ProductDetail },
      ],
    },
    { path: "cart", element: <CartDetail />},
  ],
  },
  {
    path: "/cms",
    element: <AuthLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "forget-password", Component: ForgetPassword },
      { path: "reset-password", Component: ResetPassword },
    ],
  },

  { path: "/moderator", Component: AdminLayout },
  { path: "/user", Component: AdminLayout },
];