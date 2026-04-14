import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";
import type { IResetPassword } from "./Auth.contract";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CancelButton, SubmitButton } from "../ui/button/Button";
import { LuSend, LuX } from "react-icons/lu";

const ResetPasswordSchema = z.object({
  password: z.string().min(8).nonempty().nonoptional(),
  confirmPassword: z.string().min(8).nonempty().nonoptional(),
});

export default function ResetPasswordForm() {
  const { control, handleSubmit, formState: { errors, isSubmitting }, } = useForm({
    defaultValues: { password: "", confirmPassword: "" },
    resolver: zodResolver(ResetPasswordSchema),
  });

  const submitHandle = async (data: IResetPassword) => {
    try {
      console.log(data);
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandle)}
      action=""
      className="flex flex-col gap-5"
    >
      <div className="flex w-full items-center">
        <FormLabel htmlFor="password">Password: </FormLabel>
        <div className="w-2/3 flex flex-col gap-1">
          <TextInput
            type="password"
            name="password"
            control={control}
            errMsg={errors?.password?.message}
          />
        </div>
      </div>
      <div className="flex w-full items-center">
        <FormLabel htmlFor="confirmPassword">Re-Password: </FormLabel>
        <div className="w-2/3 flex flex-col gap-1">
          <TextInput
            type="password"
            name="confirmPassword"
            control={control}
            errMsg={errors?.confirmPassword?.message}
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3">
        <CancelButton className="gap-2" disabled={isSubmitting}>
          <LuX />
          Cancel
        </CancelButton>
        <SubmitButton className="gap-2" disabled={isSubmitting}>
          <LuSend />
          Reset
        </SubmitButton>
      </div>
    </form>
  );
}
