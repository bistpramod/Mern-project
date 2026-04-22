import { Outlet } from "react-router"

export const ProductLayout = () =>{
  return (<>
    <header></header>
      <Outlet />
    <footer></footer>
  </>)
}