import { NavLink } from "react-router";
import type { IProductDetail } from "../../pages/product/AllProductList";

export const SingleProductGridItem = ({detail}: Readonly<{detail: IProductDetail}>) => {
  const afterDiscount = Math.fround(detail.price - (detail.price * detail.discountPercentage) / 100).toFixed(2);
  return (
    <>
      <div className="w-full border border-gray-100 rounded-b-sm shadow flex flex-col">
        <div className="w-full">
          <img src={detail.thumbnail} alt="" className="w-full object-cover" />
        </div>
        <div className="flex flex-col gap-3 p-3">
          <h3
            className="text-2xl font-medium line-clamp-1 hover:line-clamp-none"
            title={detail.title}
          >
            {detail.title}
          </h3>
          <p className="line-clamp-2">{detail.description}</p>
          <p className="text-md font-semibold text-teal-900">
            {Intl.NumberFormat("us", {
              style: "currency",
              currency: "usd",
            }).format(+afterDiscount)}
            

            {
              +afterDiscount < +detail.price ? <span className="text-md ms-1 text-red-800 line-through">
              {Intl.NumberFormat("us", {
                style: "currency",
                currency: "usd",
              }).format(detail.price)}
            </span> : <></>
            }

          </p>
          <NavLink
            to={"/product-list/"+detail.id}
            className={
              "w-full bg-orange-800 text-white flex items-center rounded-md justify-center py-2 transition hover:cursor-pointer hover:scale-103"
            }
          >
            Buy Now
          </NavLink>
        </div>
      </div>
    </>
  );
}