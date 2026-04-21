import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "../pages/error/NotFound";
import { AdminRouter } from "../lib/router/admin-router";
import { UserRouter } from "../lib/router/user-router";
import { PublicRouter } from "../lib/router/public-router";
import ProductLayout from "../pages/layouts/ProductLayout";
import ProductDetail from "../pages/product/ProductDetail";
import AllProductList from "../pages/product/AllProductList";

const routerData = createBrowserRouter([
  {path:"/product-list", element: <ProductLayout/>, children:[
    {index:true, element: <AllProductList/>},  // index route 
    {index:false, path:":id", element: <ProductDetail/>}
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