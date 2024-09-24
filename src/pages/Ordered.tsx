import { useSelector } from "react-redux";
import { ProductTypes } from "../types";
import ProductCart from "../components/ProductCart";
import { RootState } from "../store";

function Ordered() {
  const ordered: ProductTypes[] = useSelector((state: RootState) => state.makeOrdered.products);
  return (
    <section className="py-10">
      <div className="container grid grid-cols-12 gap-8">
        {ordered.map((item: ProductTypes) => (
          <ProductCart key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Ordered;