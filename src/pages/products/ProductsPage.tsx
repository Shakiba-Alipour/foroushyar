import { Button, GetProps, Input } from "antd";
import { useLoaderData } from "react-router-dom";
import AI_Icon from "../../assets/AI_Icon";
import { Key } from "react";
import GlobalButtons from "./components/GlobalButtons";

const ProductsPage = () => {
  const { Search } = Input;

  type SearchProps = GetProps<typeof Input.Search>;

  // to handle search
  const handleSearchClick: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="flex-grow flex-col m-4">
      <h1 className="text-Text+Icon-01 font-bold">آگهی‌ها</h1>
      <Search
        placeholder="جستجوی آگهی"
        allowClear
        size="large"
        onSearch={handleSearchClick}
        className="p-4"
      />

      <DisplayProducts />

      <GlobalButtons
        addonTitle="محصولات مرتبط همه"
        chatbotTitle="چت هوشمند همه"
      />
    </div>
  );
};

// to display the products
const DisplayProducts = () => {
  // const products=useLoaderData()
  const products = [
    { id: 1, name: "عنوان محصول", image: "" },
    { id: 2, name: "عنوان محصول", image: "" },
  ];
  return (
    <div className="mt-2 mb-2 mr-6 ml-6">
      {products.map((product: { id: number; name: string; image: string }) => (
        <div className="mb-8 border-black" key={product.id}>
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

export default ProductsPage;
