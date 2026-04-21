import SingleProductGridItem from "../../components/porduct/SingleProductGridItem";
import { H2 } from "../../components/ui/typography/PageTitle";

export default function ProductDetail() {
  return (
    <>
      Product details related products
      <section className="flex max-w-7xl mx-auto p-5 flex-col g-5">
        <H2> Related Products</H2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <SingleProductGridItem />
        </div>
      </section>
    </>
  );
}
