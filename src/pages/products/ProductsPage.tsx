import GlobalButtons from "./components/GlobalButtons";
import AllProducts from "./components/AllProducts";
import Searchbar from "../../components/Searchbar";

const ProductsPage = () => {
  return (
    <div className="flex-grow flex-col m-4">
      <h1 className="text-lg text-Text+Icon-01 font-bold">آگهی‌ها</h1>
      <Searchbar />

      <AllProducts />

      <GlobalButtons
        addonTitle="محصولات مرتبط همه"
        chatbotTitle="چت هوشمند همه"
      />
    </div>
  );
};

export default ProductsPage;
