import { Outlet } from "react-router";
import Logo from "../../components/logo/Logo";
import { LuCircleUserRound } from "react-icons/lu";
import { AdminSidebar } from "../../components/ui/sidebar/AdminSidebar";
import { useAuth } from "../../lib/hooks/useAuth";
import type { IUserDetail } from "../../components/auth/Auth.contract";

export default function AdminLayout() {
  // auth 
  const {authUser} = useAuth()
  return (
    <>
      <section className="w-full bg-gray-100 h-screen">
        <header className="bg-gray-300 py-2 px-5 w-full shadow flex justify-between dark:bg-gray-900">
          <div className="flex gap-3 items-center">
            <Logo className="size-10" />
            <h2 className="text-2xl font-semibold text-emerald-900 text-shadow-lg dark:text-emerald-50">
              Admin Portal
            </h2>
          </div>
          <div className="flex items-center text-gray-900 dark:text-white gap-3">
            <div className="relative inline-flex">
              <span className="inline-flex divide-x overflow-hidden rounded shadow-sm">
                <button
                  type="button"
                  className="flex items-center gap-3 text-sm font-medium transition-colors focus:relative hover:cursor-pointer"
                >
                  <LuCircleUserRound className="size-7" />
                  <span className="font-semibold">
                    {authUser?.firstName} {authUser?.lastName}
                  </span>
                </button>
              </span>

              <div
                role="menu"
                className="hidden absolute inset-end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
              >
                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  role="menuitem"
                >
                  Storefront
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  role="menuitem"
                >
                  Warehouse
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  role="menuitem"
                >
                  Stock
                </a>

                <button
                  type="button"
                  className="block w-full px-3 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50 ltr:text-left rtl:text-right"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex w-full gap-3">
          {/* {
            (loggedInUser.role === 'admin') ? <AdminSidebar /> : <></>
          } */}
          <AdminSidebar loggedInUser={authUser as IUserDetail} />

          <section className="w-full bg-gray-200 p-3 mt-3 rounded-md">
            <Outlet />
          </section>
        </main>
      </section>
    </>
  );
}