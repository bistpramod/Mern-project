import { useEffect, useMemo, useState } from "react";
import { NavLink, useParams } from "react-router";
import axiosClient from "../../config/ApiClient";
import type { IProductDetail } from "./AllProductList";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "../../config/store";
import { setCartItems } from "../../lib/reducers/cart-reducer";

export default function ProductDetail() {
  const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [productDetail, setProductDetail] = useState<IProductDetail | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useDispatch<AppDispatch>();

  const discountedPrice = useMemo(() => {
    if (!productDetail) return 0;
    return +(
      productDetail.price -
      (productDetail.price * productDetail.discountPercentage) / 100
    ).toFixed(2);
  }, [productDetail]);

  useEffect(() => {
    const getSingleProduct = async () => {
      if (!slug) {
        setErrorMessage("Invalid product id.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setErrorMessage("");
        const response = (await axiosClient.get(`/products/${slug}`)) as IProductDetail;
        setProductDetail(response);
        setActiveImage(response.thumbnail);
      } catch (exception) {
        const fallback = "Unable to load product details right now.";
        if (
          typeof exception === "object" &&
          exception !== null &&
          "message" in exception &&
          typeof (exception as { message?: string }).message === "string"
        ) {
          setErrorMessage((exception as { message: string }).message || fallback);
        } else {
          setErrorMessage(fallback);
        }
      } finally {
        setLoading(false);
      }
    };

    getSingleProduct();
  }, [slug]);

  useEffect(() => {
    if (!productDetail?.stock) return;
    setQuantity((prev) => Math.min(prev, productDetail.stock));
  }, [productDetail?.stock]);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="grid gap-8 lg:grid-cols-2 animate-pulse">
          <div className="rounded-xl bg-gray-200 h-[420px]" />
          <div className="space-y-4">
            <div className="h-8 w-3/4 rounded bg-gray-200" />
            <div className="h-6 w-1/3 rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
            <div className="h-11 w-40 rounded bg-gray-200" />
          </div>
        </div>
      </section>
    );
  }

  if (errorMessage || !productDetail) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-14 text-center">
        <p className="text-lg font-medium text-red-700">{errorMessage || "Product not found."}</p>
        <NavLink
          to="/product-list"
          className="inline-flex mt-5 rounded-md bg-teal-800 px-4 py-2 text-white hover:bg-teal-700"
        >
          Back to Products
        </NavLink>
      </section>
    );
  }

  const stockStatus = productDetail.stock < 10 ? "Low Stock" : "In Stock";
  const images = [productDetail.thumbnail, ...productDetail.images];
  const finalImage = activeImage || productDetail.thumbnail;

  return (
    <section className="mx-auto max-w-7xl px-5 py-8 flex flex-col gap-10">
      <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-xl border bg-white">
            <img
              src={finalImage}
              alt={productDetail.title}
              className="h-[420px] w-full object-contain bg-slate-50"
            />
          </div>
          <div className="grid grid-cols-5 gap-3">
            {images.map((image, idx) => (
              <button
                key={`${image}-${idx}`}
                type="button"
                onClick={() => setActiveImage(image)}
                className={`overflow-hidden rounded border bg-white transition ${
                  finalImage === image ? "border-teal-700 ring-1 ring-teal-700" : "border-gray-200"
                }`}
              >
                <img src={image} alt={`${productDetail.title} ${idx + 1}`} className="h-16 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-500">{productDetail.category}</p>
            <h1 className="text-3xl font-bold text-gray-900">{productDetail.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700">
                {`★ ${productDetail.rating.toFixed(1)}`}
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">
                {stockStatus}
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">
                {`${productDetail.stock} left`}
              </span>
            </div>
          </div>

          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-teal-800">
              {Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(discountedPrice)}
            </span>
            <span className="text-lg text-gray-400 line-through">
              {Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(productDetail.price)}
            </span>
            <span className="rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
              {`${productDetail.discountPercentage.toFixed(2)}% OFF`}
            </span>
          </div>

          <p className="text-gray-600 leading-7">{productDetail.description}</p>

          <div className="grid gap-3 rounded-lg border bg-white p-4 sm:grid-cols-2">
            <p><span className="font-semibold">Brand:</span> {productDetail.brand || "N/A"}</p>
            <p><span className="font-semibold">SKU:</span> {productDetail.sku}</p>
            <p><span className="font-semibold">Weight:</span> {`${productDetail.weight} g`}</p>
            <p><span className="font-semibold">Minimum Order:</span> {productDetail.minimumOrderQuantity}</p>
            <p><span className="font-semibold">Warranty:</span> {productDetail.warrantyInformation}</p>
            <p><span className="font-semibold">Shipping:</span> {productDetail.shippingInformation}</p>
            <p><span className="font-semibold">Return Policy:</span> {productDetail.returnPolicy}</p>
            <p><span className="font-semibold">Barcode:</span> {productDetail.meta?.barcode || "N/A"}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-md border">
              <button
                type="button"
                className="px-3 py-2 text-lg"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="min-w-12 border-x px-3 py-2 text-center">{quantity}</span>
              <button
                type="button"
                className="px-3 py-2 text-lg"
                onClick={() => setQuantity((prev) => Math.min(productDetail.stock, prev + 1))}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="rounded-md bg-teal-800 px-6 py-3 font-medium text-white hover:bg-teal-700 disabled:opacity-60"
              disabled={productDetail.stock < 1}
              onClick={() => {
                dispatch(
                  setCartItems({
                    productId: productDetail.id,
                    quantity: quantity,
                    title: productDetail.title,
                    image: productDetail.thumbnail,
                    price: discountedPrice,
                    description: productDetail.description,
                  }),
                );
              }}
            >
              Add to Cart
            </button>
            <button type="button" className="rounded-md border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50">
              Buy Now
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {productDetail.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
        {productDetail.reviews.length === 0 ? (
          <p className="mt-3 rounded border bg-white p-4 text-gray-600">No reviews yet for this product.</p>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {productDetail.reviews.map((review, idx) => (
              <div key={`${review.reviewerEmail}-${idx}`} className="rounded-lg border bg-white p-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="font-semibold text-gray-900">{review.reviewerName}</p>
                  <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                </div>
                <p className="mb-2 text-yellow-500">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </p>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}