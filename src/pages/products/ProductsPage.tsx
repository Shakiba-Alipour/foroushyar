import GlobalButtons from "./components/GlobalButtons";
import AllProducts from "./components/AllProducts";
import SearchArea from "../../components/SearchArea";

const ProductsPage = () => {
  return (
    <div className="flex-grow flex-col m-4">
      <h1 className="text-Text+Icon-01 font-bold">آگهی‌ها</h1>
      <SearchArea />

      <AllProducts />

      <GlobalButtons
        addonTitle="محصولات مرتبط همه"
        chatbotTitle="چت هوشمند همه"
      />
    </div>
  );
};

export default ProductsPage;
