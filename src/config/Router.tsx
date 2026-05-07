import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "../pages/error/NotFound";
import { AdminRouter } from "../lib/router/admin-router";
import { UserRouter } from "../lib/router/user-router";
import { PublicRouter } from "../lib/router/public-router";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store";
import { loadFromLocalStorage } from "../lib/reducers/cart-reducer";

const routerData = createBrowserRouter([
  // { path: "/product-list", Component: AllProductList },

  
  ...PublicRouter,
  ...AdminRouter,
  ...UserRouter,
  // Design a 404 not found page
  { path: "*", element: <NotFound /> },
]);


export default function RouterConfig() {
  const dispatch = useDispatch<AppDispatch>()
  dispatch(loadFromLocalStorage())

  return (
    <RouterProvider router={routerData} />
  );
}