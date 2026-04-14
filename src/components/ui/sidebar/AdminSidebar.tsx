import { NavLink } from "react-router";
import type { IUserDetail } from "../../auth/Auth.contract";
import ShowComponent from "../../auth/AllowAccess";

export const AdminSidebar = ({loggedInUser}: Readonly<{loggedInUser: IUserDetail}>) => {
  return (
    <aside className="w-80">
      <div className="flex h-[95vh] flex-col justify-between border-e border-gray-100 bg-white">
        <div className="p-4">
          <ul className="space-y-1">
            
            <ShowComponent role={"admin"}>
              <li>
                <NavLink
                  to="/admin"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  end
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/users"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Users
                </NavLink>
              </li>
            </ShowComponent>

            <li>
              <NavLink
                to="/admin/food-items"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Food Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/menu"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/orders"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Orders
              </NavLink>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Inventory
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Invoices
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Offers
              </a>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <article className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
            <img
              alt=""
              src={loggedInUser?.image}
              className="size-10 rounded-full object-cover"
            />

            <div className="text-xs text-wrap">
              <strong className="block font-medium">
                {loggedInUser?.firstName + " " + loggedInUser?.lastName}
              </strong>
              <span> {loggedInUser?.email}</span>
            </div>
          </article>
        </div>
      </div>
    </aside>
  );
}