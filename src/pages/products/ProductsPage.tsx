import AllProducts from "./components/AllProducts";
import Searchbar from "../../components/Searchbar";
import ServiceButtons from "./components/ServiceButtons";

const ProductsPage = () => {
  return (
    <div className="flex-grow flex-col m-4">
      <h1 className="text-lg text-Text+Icon-01 font-bold">آگهی‌ها</h1>
      <Searchbar />

      <AllProducts />

      <ServiceButtons
        addonLabel="محصولات مرتبط همه"
        chatbotLabel="چت هوشمند همه"
      />
    </div>
  );
};

export default ProductsPage;
