import React from "react";

export interface IButtonProps{
  disabled?: boolean, 
  className?: string, 
  children: React.ReactNode
}
export const CancelButton = ({disabled=false, className='', children}: Readonly<IButtonProps>) => {
  return (
    <>
      <button
        type="reset"
        disabled={disabled}
        className={`rounded-md cursor-pointer transition hover:scale-98 hover:bg-red-700 w-full bg-red-800 text-white flex items-center justify-center p-2 ${className}`}
      >
        {children}
      </button>
    </>
  );
}

export const SubmitButton = ({
  disabled = false,
  className = "",
  children,
}: Readonly<IButtonProps>) => {
  return (
    <>
      <button
        type="submit"
        disabled={disabled}
        className={`rounded-md cursor-pointer transition hover:scale-98 hover:bg-teal-700 w-full bg-teal-800 text-white flex items-center justify-center p-2 ${className}`}
      >
        {children}
      </button>
    </>
  );
};