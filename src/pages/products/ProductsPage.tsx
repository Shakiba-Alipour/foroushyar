import AllProducts from "./components/AllProducts";
import Searchbar from "../../components/Searchbar";
import ServiceButtons from "./components/ServiceButtons";
import Product from "./components/Product";

const ProductsPage = () => {
  return (
    <div className="flex-grow flex-col m-4 w-full lg:w-5/6">
      <h1 className="text-lg text-Text+Icon-01 font-bold">آگهی‌ها</h1>
      <Searchbar />

      <AllProducts />

      <ServiceButtons
        addonLabel="محصولات مرتبط همه"
        chatbotLabel="چت هوشمند همه"
        isGlobal
        isAddonActive
        isChatbotActive={false}
      />

      {/* <Product
        name="محصول جدید"
        id={1}
        price={150000}
        description="توضیحات محصول جدید"
        addon={[]}
        imagePaths="./test.jpg"
      /> */}
    </div>
  );
};

export default ProductsPage;
