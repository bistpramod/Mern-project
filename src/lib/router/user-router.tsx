import PermissionCheck from "../../config/PermissionCheck";
import UserLayout from "../../pages/layouts/UserLayout";
import UserDashboard from "../../pages/user/UserDashboard";
import UserProfile from "../../pages/user/UserProfile";

export const UserRouter = [
  {
    path: "/user",
    element: (
      <PermissionCheck allowedRole="user">
        <UserLayout />
      </PermissionCheck>
    ),
    children: [
      { index: true, element: <UserDashboard /> },
      { path: "profile", element: <UserProfile /> },
    ],
  },
];