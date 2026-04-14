import { NavLink } from "react-router";
import { H2 } from "../../../components/ui/typography/PageTitle";
import { LuChevronLeft, LuChevronRight, LuPlus, LuPen, LuTrash } from "react-icons/lu";
import ShowComponent from "../../../components/auth/AllowAccess";
import { RowSkeleton } from "../../../components/ui/table/Skeleton";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axiosInstance from "../../../config/ApiClient";
import { type IUserDetail } from "../../../components/auth/Auth.contract";
import { ucFirst } from "../../../lib/utilities/helpers";
import { Badge } from "../../../components/ui/badge/Badge";

// type definition 
export interface IUserListResponse{limit: number, skip: number, total:number, users: Array<IUserDetail>}
export interface IPaginationType {limit: number, skip: number, total: number, totalNoOfPages: number, currentPage?: number}

export default function UserList() {
  // Listing manage 
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<Array<IUserDetail> | null>(null);
  const [pagination, setPagintaion] = useState<IPaginationType>({
    limit: 10,
    skip: 0,
    total: 0,
    totalNoOfPages: 1,
    currentPage: 1
  })

  // data fetch 
  const getAllUsers = async (limit=pagination.limit, skip=pagination.skip, page=1) => {
    try {
      const response = await axiosInstance.get("/users",{
        params: { limit: limit, skip: skip,
          select: "id,firstName,lastName,email,role,gender,address,image"
        }
      }) as IUserListResponse

      setUsers(response.users)
      setPagintaion({
        currentPage: page,
        limit: +response.limit,
        skip: +response.limit,
        total: +response.total,
        totalNoOfPages: Math.ceil(+response.total / +response.limit),
      });
    } catch(exception) {
      console.log(exception)
      toast.error("Error fetching user list")
    } finally {
      setLoading(false)
    }
  }

  const handleNextPageChange = async(page=1) => {
    const skip  = (page-1) * (pagination.limit)
    // 1 => 0, 2 => 15, 3 => 30
    setLoading(true)
    setPagintaion({
      ...pagination
    })
    await getAllUsers(pagination.limit, skip, page)
  }

  useEffect(() => {
    getAllUsers()
  },[])
  return (
    <section className="bg-white w-full p-5">
      {/* Page Header */}
      <div className="flex w-full justify-between items-center border-b border-b-emerald-800/10 pb-5">
        <H2>User List</H2>
        <div className="w-1/3 flex gap-3">
          <input
            type="search"
            className="w-full border border-gray-200 p-2 rounded shadow-lg bg-gray-50"
            placeholder="Enter your search keyword..."
          />

          <ShowComponent role="admin">
            <NavLink
              to="/admin/user/create"
              className={
                "w-50 bg-emerald-900 p-2 text-white text-center rounded-md transition duration-500 hover:scale-96 flex items-center justify-center gap-2 font-semibold"
              }
            >
              <LuPlus className="size-5" /> Add users
            </NavLink>
          </ShowComponent>
        </div>
      </div>

      {/* Data listing */}
      <div className="w-full mt-5">
        <table className="w-full">
          <thead className="bg-gray-900">
            <tr>
              <th className="p-2 text-white border-r border-gray-100">
                Full Name
              </th>
              <th className="p-2 text-white border-r border-gray-100">Email</th>
              <th className="p-2 text-white border-r border-gray-100">Role</th>
              <th className="p-2 text-white border-r border-gray-100">
                Gender
              </th>
              <th className="p-2 text-white border-r border-gray-100">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <RowSkeleton rows={7} cols={5} showAction={true} />
            ) : (
              users &&
              users.map((user: IUserDetail, i: number) => {
                return (
                  <tr key={i}>
                    <td className="p-2 border-r border-gray-500 border">
                      <div className="flex gap-3 items-center w-full">
                        <img
                          src={user.image}
                          className="size-7 rounded-full bg-gray-50"
                        />
                        {`${user.firstName} ${user.lastName}`}
                      </div>
                    </td>
                    <td className="p-2 border-r border-gray-500 border-b">
                      <a
                        href={`mailto:${user.email}`}
                        className="text-teal-700 underline"
                      >
                        {user.email}
                      </a>
                    </td>
                    <td className="p-2 border-r border-gray-500 border-b">
                      <Badge
                        type={
                          user.role === "admin"
                            ? "success"
                            : user.role === "moderator"
                              ? "warning"
                              : user.role === "user"
                                ? "info"
                                : "danger"
                        }
                      >
                        {ucFirst(user.role)}
                      </Badge>
                    </td>
                    <td className="p-2 border-r border-gray-500 border-b">
                      {ucFirst(user.gender)}
                    </td>
                    <td className="p-2 border-r border-gray-500 border-b">
                      <div className="flex gap-3">
                        <NavLink
                          className={
                            "size-10 text-white flex items-center justify-center rounded-full hover:bg-green-900 transition hover:scale-102 bg-green-800"
                          }
                          to={"/admin/user/123"}
                        >
                          <LuPen />
                        </NavLink>
                        <NavLink
                          className={
                            "size-10 text-white flex items-center justify-center rounded-full hover:bg-red-900 transition hover:scale-102 bg-red-800"
                          }
                          to={"/admin/user/123"}
                        >
                          <LuTrash />
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex w-full mt-5 justify-end">
        <ul className="flex gap-2">
          <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600 bg-gray-100 items-center justify-center flex rounded-full shadow">
            <LuChevronLeft />
          </li>
          {[...Array(pagination.totalNoOfPages)].map((_, i: number) => (
            <li
              className={`size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600 items-center justify-center flex rounded-full shadow 
                ${(i+1) === pagination.currentPage  ? "bg-teal-100" : "bg-gray-100"
              }`}
              onClick={() =>{
                handleNextPageChange(i+1)
              }}
            >
              {i + 1}
            </li>
          ))}
          <li className="size-7 cursor-pointer hover:bg-teal-50 hover:text-teal-600 bg-gray-100 items-center justify-center flex rounded-full shadow">
            <LuChevronRight />
          </li>
        </ul>
      </div>
    </section>
  );
}
