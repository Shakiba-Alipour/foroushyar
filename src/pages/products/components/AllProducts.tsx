import { Button } from "antd";
import AI_Icon from "../../../assets/AI_Icon";
import { ProductProps } from "./Product";
import ServiceButtons from "./ServiceButtons";

const AllProducts = () => {
  // const products=useLoaderData()
  const products: ProductProps[] = [
    {
      name: "محصول اول",
      id: 1,
      price: 54,
      description: "توضیحات اول",
      addon: [],
      imagePaths: "../test.jpg",
    },
    {
      name: "محصول دوم",
      id: 2,
      price: 90,
      description: "توضیحات دوم",
      addon: [],
      imagePaths: "../test.jpg",
    },
  ];

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
            <img src={product.imagePaths} />
          ) : (
            <img src={product.imagePaths[0]} />
          )}
        </div>
      ))}
    </div>
  );
};

// to load the products
export async function loader() {}

export default AllProducts;
