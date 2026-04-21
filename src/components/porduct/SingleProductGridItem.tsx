import { NavLink } from "react-router";
import type { IProductDetail } from "../../pages/product/AllProductList";
export default function SingleProductGridItem({detail}: Readonly<{ detail: IProductDetail }>) {
    return (
        <>
            <div className="w-full border border-gray-100 rounded-b-sm shadow flex flex-col object-cover">
                <div className="w-full">
                    <img src="https://placehold.co/400x500" alt="" />
                </div>
                <div className="flex flex-col p-3 gap-3">
                    <h3 className="line-clamp-2 font-medium font-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sint aut quibusdam illum inventore cum numquam sed consequatur quo tenetur aspernatur pariatur voluptatum excepturi nulla est, maiores, corporis architecto. Nulla.</h3>
                    <p className="text-lg font-semibold text-teal-600 gap-2 flex">
                        Npr . 100,000
                        <span className="text-md  text-red-400 ms-0.1 line-through">
                            Npr 120,000
                        </span>
                    </p>
                    {/* <NavLink to=/{'product-list/slug>'}
                        BuyNow
                        <NavLink /> */}
                    <NavLink to="product-list/slug" className={'w-full bg-orange-500  text-white p-2 flex items-center justify-center rounded-md hover:cursor-pointer hover:scale-105 '}>
                        BuyNow
                    </NavLink>
                </div>
            </div>
        </>
    )
} 