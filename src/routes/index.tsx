import { Route, Routes } from "react-router-dom";
import { PagesStructure } from "../enums";
import { About, Ordered, Products } from "../pages";
import Header from "../components/Header/Header";

function CustomRoutes() {
  return (
    <main className="flex flex-col">
      <Header/>
      <div>
        <Routes>
          <Route path={PagesStructure.Products} element={<Products />} />
          <Route path={PagesStructure.About} element={<About />} />
          <Route path={PagesStructure.Ordered} element={<Ordered />} />
        </Routes>
      </div>
    </main>
  );
}

export default CustomRoutes;
