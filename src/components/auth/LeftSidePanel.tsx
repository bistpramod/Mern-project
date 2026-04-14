import Logo from "../logo/Logo";
import { H1 } from "../ui/typography/PageTitle";

export default function LeftSidePanel({pageTitle, content}: Readonly<{pageTitle: string, content: string}>) {
  return (
    <div className="w-1/3 bg-emerald-800 rounded-md p-10 items-center justify-center flex flex-col gap-5 text-white">
      <Logo />
      
      <H1 className="text-green-100">
        {pageTitle}
      </H1>
      
      <p className="text-center p-5">
        {content}
      </p>
    </div>
  );  
}