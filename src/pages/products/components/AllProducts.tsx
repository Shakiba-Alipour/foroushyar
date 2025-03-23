import { ProductProps } from "./Product";
import ServiceButtons from "./ServiceButtons";
import api from "../../../api/auth";
import { useLoaderData } from "react-router-dom";

const AllProducts = () => {
  const products = useLoaderData();
  // const products: ProductProps[] = [
  //   {
  //     name: "محصول اول",
  //     id: 1,
  //     price: 54,
  //     description: "توضیحات اول",
  //     addon: [],
  //     imagePaths: "../test.jpg",
  //   },
  //   {
  //     name: "محصول دوم",
  //     id: 2,
  //     price: 90,
  //     description: "توضیحات دوم",
  //     addon: [],
  //     imagePaths: "../test.jpg",
  //   },
  // ];

  return (
    <div className="mt-2 mb-2 mr-4 ml-4">
      {products.map((product: ProductProps) => (
        <div
          className="mb-8 border border-Text+bg-Text+Icon-05 rounded-rounded-10 p-3 w-full flex flex-row justify-between"
          key={product.id}
          onClick={() => {}}
        >
          <div className="flex flex-col">
            <p>{product.name}</p>
            <ServiceButtons
              addonLabel="محصول مرتبط"
              chatbotLabel="ربات"
              isAddonActive={false}
              isChatbotActive
            />
          </div>

          {/* To display the image of the product */}
          {typeof product.imagePaths === "string" ? (
            <img src={product.imagePaths} alt="تصویر محصول" />
          ) : (
            <img src={product.imagePaths[0]} alt="تصویر محصول" />
          )}
        </div>
      ))}
    </div>
  );
};

// to load the products
export async function postsLoader() {
  const POSTS_URL = process.env.REACT_APP_API_BASE_URL + "/panel/posts";
  try {
    const response = await api.get(POSTS_URL);
  } catch (error) {
    console.log("خطا در بارگذاری محصولات " + error);
  }
}

export default AllProducts;
