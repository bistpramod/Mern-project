import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "../pages/error/NotFound";
import { AdminRouter } from "../lib/router/admin-router";
import { UserRouter } from "../lib/router/user-router";
import { PublicRouter } from "../lib/router/public-router";

import AllProductList from "../pages/product/AllProductList";
import ProductDetail from "../pages/product/ProductDetail";
import { ProductLayout } from "../pages/layouts/ProductLayout";

const routerData = createBrowserRouter([
  // { path: "/product-list", Component: AllProductList },
  
  { path: "/product-list", element: <ProductLayout />, children: [
    { index: true, element: <AllProductList /> },     // index route
    { path: ":slug", Component: ProductDetail },
  ]},
  
  
  ...PublicRouter,
  ...AdminRouter,
  ...UserRouter,
  // Design a 404 not found page
  { path: "*", element: <NotFound /> },
]);


export default function RouterConfig() {
  return (
    <RouterProvider router={routerData} />
  );
}