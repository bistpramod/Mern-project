import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";
import { LoginSchema, type ICredentials, type IUserDetail } from "./Auth.contract";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../lib/hooks/useAuth";

export default function LoginForm() {
  const router = useNavigate();
  const { login } = useAuth();

  const {control, handleSubmit, formState: {errors}} = useForm<ICredentials>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema)
  });
  
  const loginHandle = async(credentials: ICredentials) => {
    try {
      const loggedInUser = (await login(credentials)) as IUserDetail
      router("/"+loggedInUser.role)
    } catch(exception) {
      console.log(exception)
    }
  }

  return (
    <form onSubmit={handleSubmit(loginHandle)} className="flex flex-col gap-5">
      <div className="flex w-full items-center">
        <FormLabel htmlFor="username">User Name: </FormLabel>
        <div className="w-2/3 flex flex-col gap-1">
          <TextInput
            control={control}
            errMsg={errors?.username?.message}
            type="text"
            name="username"
          />
        </div>
      </div>

      <div className="flex w-full items-center">
        <FormLabel htmlFor="password">Password: </FormLabel>
        <div className="w-2/3 flex flex-col gap-1">
          <TextInput
            errMsg={errors?.password?.message}
            control={control}
            type="password"
            name="password"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-end">
        <NavLink
          to="/forget-password"
          className="text-teal-700 italic text-sm hover:underline hover:text-teal-600 transition hover:scale-96"
        >
          Forgot password?
        </NavLink>
      </div>
      <div className="flex w-full items-center gap-3">
        <button
          type="reset"
          className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-red-700 w-full bg-red-800 text-white flex items-center justify-center p-2"
        >
          Reset
        </button>
        <button className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-teal-700 w-full bg-teal-800 text-white flex items-center justify-center p-2">
          Submit
        </button>
      </div>
    </form>
  );
}