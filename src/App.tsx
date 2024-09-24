import { useContext, useEffect } from "react";
import { useAxios } from "./hook/useAxios";
import CustomRoutes from "./routes";
import { ThreeDots } from "react-loader-spinner";
import { ProductTypes } from "./types";
import { Context } from "./context/MainContext";

function App() {
  const { products, setProducts, loading, setLoading } = useContext(Context);

  useEffect(() => {
    useAxios()
      .get("/products")
      .then((res) => {
        setProducts(
          res.data.products.map(
            ({
              id,
              brand,
              category,
              title,
              images,
              price,
              rating,
            }: ProductTypes) => {
              return {
                id,
                brand,
                category,
                title,
                images: images[0],
                price,
                rating,
                isLiked: false,
                oldPrice: price + 20,
                discount: price % 20,
              };
            }
          )
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  console.log(products);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen backdrop-blur-md fixed top-0 left-0 w-full">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  } else {
    return (
      <>
        <CustomRoutes />
      </>
    );
  }
}

export default App;
