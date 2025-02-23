import { Button } from "antd";
import AI_Icon from "../../../assets/AI_Icon";

const iconStyle = {};

const AllProducts = () => {
  // const products=useLoaderData()
  const products = [
    { id: 1, name: "عنوان محصول", image: "" },
    { id: 2, name: "عنوان محصول", image: "" },
  ];
  return (
    <div className="mt-2 mb-2 mr-4 ml-4">
      {products.map((product: { id: number; name: string; image: string }) => (
        <div
          className="mb-8 border border-Text+bg-Text+Icon-05 rounded-rounded-10 p-3 w-full"
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
          <img src={product.image} />
        </div>
      ))}
    </div>
  );
};

// to load the products
export async function loader() {}

export default AllProducts;
