import { Button } from "antd";
import AI_Icon from "../../../assets/AI_Icon";
import { ProductProps } from "./Product";

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
            <div className="flex flex-row w-fit mt-4 mb-2">
              <Button className="ml-1 font-semibold text-Primary-Default border-Primary-Background">
                محصول مرتبط
              </Button>
              <Button
                variant="solid"
                className="mr-1 font-semibold bg-Success-Default text-Neutral-White stroke-Neutral-White"
                icon={<AI_Icon />}
                iconPosition="end"
              >
                ربات
              </Button>
            </div>
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
