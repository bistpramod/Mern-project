import type { ReactNode } from "react"

export const Badge = ({children, type='success'}: Readonly<{children: ReactNode, type:'success' | 'danger' | 'info' | 'warning'}>) => {
  
  return (
    <span
      className={`w-50 py-2 flex items-center justify-center rounded-full font-semibold text-lg 
    ${
      type === "success"
        ? "text-teal-800 bg-teal-200"
        : type === "danger"
          ? "text-red-800 bg-red-200"
          : type === "info"
            ? "text-sky-800 bg-sky-200"
            : type === "warning"
              ? "text-yellow-800 bg-yellow-200"
              : "text-gray-900 bg-gray-200"
    }
  `}
    >
      {children}
    </span>
  );
}