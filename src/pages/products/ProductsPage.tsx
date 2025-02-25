import GlobalButtons from "./components/GlobalButtons";
import AllProducts from "./components/AllProducts";
import Searchbar from "../../components/Searchbar";
import Product, { ProductProps } from "./components/Product";

const ProductsPage = () => {
  const productOne: ProductProps = {
    name: "محصول اول",
    id: 1,
    price: 54,
    description: "توضیحات اول",
    addon: [],
    imageSrc: "./test.jpg",
  };
  const productTwo: ProductProps = {
    name: "محصول دوم",
    id: 2,
    price: 90,
    description: "توضیحات دوم",
    addon: [],
    imageSrc: "./test.jpg",
  };

  return (
    // <div className="flex-grow flex-col m-4">
    //   <h1 className="text-lg text-Text+Icon-01 font-bold">آگهی‌ها</h1>
    //   <Searchbar />

    //   <AllProducts />

    //   <GlobalButtons
    //     addonTitle="محصولات مرتبط همه"
    //     chatbotTitle="چت هوشمند همه"
    //   />
    // </div>

    <div className="flex-grow flex-col m-4">
      <Product
        name="نام محصول"
        id={1}
        price={57000}
        description="چه توضیحاتی عزیزم؟"
        addon={[productOne, productTwo]}
        imageSrc="./test.jpg"
      />
    </div>
  );
};

export default ProductsPage;
