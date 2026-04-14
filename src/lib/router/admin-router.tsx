import { Suspense } from "react";
import Loading from "../../components/ui/loading/Loading";
import PermissionCheck from "../../config/PermissionCheck";
import AdminLayout from "../../pages/layouts/AdminLayout";
import AdminDashboard from "../../pages/admin/Dashboard";
import UserList from "../../pages/admin/user/UserList";
import UserRegister from "../../pages/admin/user/UserRegister";
import UserDetail from "../../pages/admin/user/UserDetail";
import NotFound from "../../pages/error/NotFound";

export const AdminRouter = [
  {path: "/admin", element: (
      <Suspense fallback={<Loading />}>
        <PermissionCheck allowedRole="admin">
          <AdminLayout />
        </PermissionCheck>
      </Suspense>
    ), children: [
      { index: true, Component: AdminDashboard },
      { path: "users", element: <UserList /> }, // user listing table
      { path: "user/create", element: <UserRegister /> }, // User form
      { path: "user/:username/detail", element: <UserDetail /> },
      { path: "user/:id", element: <>User Edit form dispaly</> },
      { path: "*", Component: NotFound },
    ],
  },
];

