import { useMemo } from "react";
import { useSelector } from "react-redux";
import { formatDateTime, parseDateTime } from "../../Utils/getFormatTime";

const ProductsTablePage = () => {
  const orders = useSelector((state) => state.orders.items);

  const sortedOrders = useMemo(
    () =>
      [...orders].sort((a, b) => {
        const dateA = parseDateTime(a.dateTime);
        const dateB = parseDateTime(b.dateTime);
        return dateA - dateB;
      }),
    [orders]
  );

  if (orders.length === 0)
    return (
      <div className="text-center font-bold mt-48 text-3xl text-custom-black">
        <span>There are no products yet....</span>
      </div>
    );

  return (
    <main>
      <section className="mx-8 md:mx-32">
        <table className="min-w-full table-auto mb-9">
          <thead className="h-20 border-t-2 font-thin md:font-bold text-custom-black">
            <tr className="font-extrabold">
              <th className="px-4 py-2">#</th>
              <th className="px-4 font-extrabold py-2">Title</th>
              <th className="px-4 py-2">Price, USD</th>
              <th className="px-4 py-2">Date and Time</th>
            </tr>
          </thead>
          <tbody className=" ">
            {sortedOrders.map((product, index) => (
              <tr key={product.id} className="h-20 border-t-2 text-center">
                <td className="px-4 py-2 text-custom-black font-bold">
                  {index + 1}
                </td>
                <td className="px-4 py-2">{product.title}</td>
                <td className="px-4 py-2">
                  {Number(product.price).toFixed(2)}
                </td>
                <td className="px-4 py-2">
                  {formatDateTime(product.dateTime)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ProductsTablePage;
