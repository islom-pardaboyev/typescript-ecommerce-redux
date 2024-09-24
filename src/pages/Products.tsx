import { useContext } from "react";
import { Context } from "../context/MainContext";
import { ProductTypes } from "../types";
import ProductCart from "../components/ProductCart";

function Products() {
  const { products } = useContext(Context);
  console.log(products);
  return (
    <section>
      <div className="container py-10">
        <div className="grid grid-cols-12 gap-7">
          {products.map((item: ProductTypes) => (
            <ProductCart key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
