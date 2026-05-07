import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.png"

import { NavLink, Outlet } from "react-router"
import type { RootState } from "../../config/store";

export const ProductLayout = () =>{
  // redux store data fetch 
  const totalQuantity = useSelector((store: RootState) => {
    if(store.cart.cartDetail?.length) {
      return store.cart.cartDetail.reduce((acc, cur) => {
        return acc += Number(cur.quantity)
      }, 0)
    }
    return 0
    // return store?.cart?.cartDetail as Array<{productId: number, quantity: number}>

  })

  
  return (
    <>
      <header className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <NavLink
                className="block text-teal-600 dark:text-teal-300"
                to="/"
              >
                <span className="sr-only">Home</span>
                <img src={logo} className="size-15 rounded-full" />
              </NavLink>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <NavLink
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      to="/product-list"
                    >
                      Products
                    </NavLink>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <NavLink
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      to="/cart"
                    >
                      ({totalQuantity}) Cart
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="relative hidden md:block">
                <button
                  type="button"
                  className="overflow-hidden rounded-full border border-gray-300 shadow-inner dark:border-gray-600"
                >
                  <span className="sr-only">Toggle dashboard menu</span>

                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    alt=""
                    className="size-10 object-cover"
                  />
                </button>

                <div
                  className="hidden absolute inset-e-0 z-10 mt-0.5 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
                  role="menu"
                >
                  <div className="p-2">
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      role="menuitem"
                    >
                      My profile
                    </a>

                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      role="menuitem"
                    >
                      My data
                    </a>

                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      role="menuitem"
                    >
                      Team settings
                    </a>

                    <form method="POST" action="#">
                      <button
                        type="submit"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50 dark:text-red-500 dark:hover:bg-red-600/10"
                        role="menuitem"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                          ></path>
                        </svg>
                        Logout
                      </button>
                    </form>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
}