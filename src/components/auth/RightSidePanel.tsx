import type { ReactNode } from "react";
import { H1 } from "../ui/typography/PageTitle";

export default function RightSidePanel({children, formTitle}: Readonly<{formTitle: ReactNode, children: ReactNode}>) {
  return (
    <div className="w-2/3 flex flex-col gap-10 bg-gray-100 p-10 rounded-md">
      <div className="flex border-b border-b-green-900/30 pb-5">
        
        <H1 className="text-green-900">
          <em>{formTitle}</em>
        </H1>

      </div>

      {children}
    </div>
  );
}