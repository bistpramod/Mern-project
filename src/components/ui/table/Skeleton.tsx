export const RowSkeleton = ({rows=7, cols, showAction=true}: Readonly<{
  rows?: number,
  cols: number, 
  showAction?: boolean
}>) => {
  const noOfCols = showAction ? cols-1 : cols;

  return [...Array(rows)].map((_, i: number) => (
    <tr key={i}>
      {[...Array(noOfCols)].map((_, j: number) => (
        <td className="p-2 border-r border-gray-500 border" key={j}>
          <div className="w-full h-3 bg-gray-300 rounded-full animate-pulse"></div>
        </td>
      ))}
      {
      showAction ? <td className="p-2 border-r border-gray-500 border">
        <div className="flex gap-3 w-full items-center justify-center">
          <div className="size-7 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="size-7 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </td> : <></>}
    </tr>
  ));
}