export const ProductSkeleton = ({size=12}: Readonly<{size?: number}>) => {
  return [...Array(size)].map((_, i: number) => {
    return (
      <div
        key={i}
        className="w-full border border-gray-100 rounded-b-sm shadow flex flex-col animate-pulse"
      >
        <div className="bg-gray-300 h-75 w-full"></div>
        <div className="p-5 w-full flex flex-col gap-3">
          <p className="w-full h-4 bg-gray-400 rounded-md"></p>
          <div className="flex flex-col gap-0.5">
            <p className="w-full h-2 rounded bg-gray-300"></p>
            <p className="w-full h-2 rounded bg-gray-300"></p>
            <p className="w-1/2 h-2 rounded bg-gray-300"></p>
          </div>
          <div className="w-full flex bg-gray-400 p-5 rounded-full"></div>
        </div>
      </div>
    );
  });
}