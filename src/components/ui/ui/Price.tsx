export function PriceFormat({ price }: Readonly<{ price: string | number }>) {
  return Intl.NumberFormat("us", {
    style: "currency",
    currency: "usd",
  }).format(+price);
}
