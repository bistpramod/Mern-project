// import { NavLink } from "react-router";
// import { NavLink } from "react-router";
import { H1 } from "../../components/ui/typography/PageTitle";
import { useState } from "react";
import SingleProductGridItem from "../../components/products/SingleProductGridItem";
// import { LuFullscreen } from "react-icons/lu";


export interface IProductDetail {
    id: number,
    name: string
}



export default function ProductLayout() {

    const [allProducts, setAllProducts] = useState<Array<IProductDetail>>()
    return <>
        <section className="flex max-w-7xl mx-auto  flex-col ">
            <H1>Product List</H1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"  >
                {
                    allProducts && allProducts.map((product: IProductDetail, index: number) => {
                        return <SingleProductGridItem detail={product} key={index} />
                    })
                }
            </div> 

        </section>

    </>
}