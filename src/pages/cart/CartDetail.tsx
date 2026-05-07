import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../../config/store"
import { H1, H2 } from "../../components/ui/typography/PageTitle";
import { removeFromCart, setCartItems, type ISingleCart } from "../../lib/reducers/cart-reducer";
import { PriceFormat } from "../../components/ui/ui/Price";

export default function CartDetail() {
  const dispatch = useDispatch<AppDispatch>();

  const cartDetail = useSelector((state: RootState) => {
    return state.cart.cartDetail;
  })

  const subTotal = cartDetail?.reduce((acc: number, row: ISingleCart) => {
    acc += +row.price * row.quantity
    return acc;
  },0)

  return (
    <>
      <section className="max-w-7xl flex flex-col gap-5 mx-auto my-10">
        <H1>Cart Detail</H1>

        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-gray-800 text-white p-3 border-r border-r-gray-500">
                Product
              </th>
              <th className="bg-gray-800 text-white p-3 border-r border-r-gray-500">
                Unit Price
              </th>
              <th className="bg-gray-800 text-white p-3 border-r border-r-gray-500">
                Quantity
              </th>
              <th className="bg-gray-800 text-white p-3 border-r border-r-gray-500">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {cartDetail &&
              cartDetail.map((row: ISingleCart, index: number) => (
                <tr key={index}>
                  <td className="border border-gray-900 p-3 w-2/3">
                    <div className="flex flex-row gap-5 items-center">
                      <div>
                        <img src={row.image} alt={row.title} className="w-50" />
                      </div>
                      <div>
                        <H2>{row.title}</H2>
                        <p>{row.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-900 p-3">
                    <PriceFormat price={row.price as string} />
                  </td>
                  <td className="border border-gray-900 p-3">
                    <div className="flex items-center gap-1">
                      <span
                        onClick={() => {
                          dispatch(
                            removeFromCart({ index: index, quantity: 1 }),
                          );
                        }}
                        className="hover:cursor-pointer hover:bg-teal-900 transition hover:scale-103 size-7 rounded-full bg-teal-800 text-white text-lg flex items-center justify-center font-semibold"
                      >
                        -
                      </span>
                      <span className="size-8 border-gray-400 rounded-md border flex items-center justify-center">
                        {row.quantity}
                      </span>
                      <span
                        onClick={() => {
                          dispatch(setCartItems({ ...row, quantity: 1 }));
                        }}
                        className="hover:cursor-pointer hover:bg-teal-900 transition hover:scale-103 size-7 rounded-full bg-teal-800 text-white text-lg flex items-center justify-center font-semibold"
                      >
                        +
                      </span>
                    </div>
                  </td>
                  <td className="border border-gray-900 p-3">
                    <PriceFormat price={row.quantity * +row.price} />
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="border p-3 border-gray-800" colSpan={3}>
                <h3 className="text-end text-lg font-semibold">Sub-Total:</h3>
              </td>
              <td className="border p-3 border-gray-800 text-lg font-semibold">
                <PriceFormat price={subTotal as number} />
              </td>
            </tr>
            <tr>
              <td className="border p-3 border-gray-800" colSpan={3}>
                <h3 className="text-end text-lg font-semibold">Discount:</h3>
              </td>
              <td className="border p-3 border-gray-800 text-lg font-semibold">
                <PriceFormat price={0} />
              </td>
            </tr>
            <tr>
              <td className="border p-3 border-gray-800" colSpan={3}>
                <h3 className="text-end text-lg font-semibold">Tax(13%):</h3>
              </td>
              <td className="border p-3 border-gray-800 text-lg font-semibold">
                <PriceFormat price={(subTotal as number) * 0.13} />
              </td>
            </tr>
            <tr>
              <td className="border p-3 border-gray-800" colSpan={3}>
                <h3 className="text-end text-lg font-semibold">Total:</h3>
              </td>
              <td className="border p-3 border-gray-800 text-lg font-semibold">
                <PriceFormat price={(subTotal as number) - 0 + (subTotal as number * 0.13)} />
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="flex w-full justify-end">
          <button className="text-lg text-white w-1/3 bg-amber-800 p-2 rounded-md">
            Proceed to Pay
          </button>
        </div>
      </section>
    </>
  );
}