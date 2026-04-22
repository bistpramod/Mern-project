import { H2 } from "../../components/ui/typography/PageTitle";
// import { SingleProductGridItem } from "../../components/products/SingleProductGridItem";

export default function ProductDetail() {
  // slug id 
  return (
    <>
      Product Detail Related Products
      <section className="flex max-w-7xl mx-auto p-5 flex-col g-5">
        <H2>Related Product</H2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* <SingleProductGridItem />
          <SingleProductGridItem />
          <SingleProductGridItem />
          <SingleProductGridItem />
          <SingleProductGridItem />
          <SingleProductGridItem />
          <SingleProductGridItem />
          <SingleProductGridItem /> */}
        </div>
      </section>
    </>
  );
}