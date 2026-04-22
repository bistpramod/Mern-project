import { H1 } from "../../components/ui/typography/PageTitle";
import { useEffect, useState } from "react";
import { SingleProductGridItem } from "../../components/products/SingleProductGridItem";
import { ProductGridSkeleton } from "../../components/products/ProductSkeleton";
import axiosInstance from "../../config/ApiClient";

export interface ISingleReview {
    rating: number
    comment: string
    date: string | Date
    reviewerName: string
    reviewerEmail: string
  }

export interface IProductDetail {
  id: number;
  title: string;
  description: string,
  category: string;
  price: number,
  discountPercentage: number
  rating: number
  stock: number
  tags: Array<string>;
  brand: string
  sku: string;
  weight: number
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Array<ISingleReview>
  returnPolicy: string
  minimumOrderQuantity: number
  meta: {
    createdAt: Date | string
    updatedAt: Date | string
    barcode: string
    qrCode:  string
  };
  thumbnail: string
  images: Array<string>
}

export default function AllProductList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [allProducts, setAllProducts] = useState<Array<IProductDetail>>()

  const   getAllProducts = async ({limit=40, skip=0}) => {
    try {
      const response  = await axiosInstance.get('/products', {
        params: {
          limit: limit, skip: skip
        }
      }) as {products: Array<IProductDetail>, skip: number, limit: number, total: number}
      setAllProducts(response.products)
      setLoading(false)
    } catch (exception) {
      console.log(exception);
    }
  };
  // API integration 
  useEffect(() => {
    const handleFunc = async () => {
      await getAllProducts({ limit: 40, skip: 0 });
    }
    return () => {
      handleFunc()  
    }
  }, [])
  return (
    <>
      <section className="flex w-full mx-auto px-25 flex-col g-5">
        <H1>Product List</H1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
          {loading
            ? <ProductGridSkeleton size={12} />
            : allProducts &&
              allProducts.map((product: IProductDetail, index: number) => {
                return <SingleProductGridItem detail={product} key={index} />;
              })}
        </div>
      </section>
    </>
  );
}