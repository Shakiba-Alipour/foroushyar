import { GetProps, Input } from "antd";
import { Key } from "react";
import GlobalButtons from "./components/GlobalButtons";
import AllProducts from "./components/AllProducts";

const ProductsPage = () => {
  const { Search } = Input;

  type SearchProps = GetProps<typeof Input.Search>;

  // to handle search
  const handleSearchClick: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <div className="flex-col m-4">
      <h1 className="text-Text+Icon-01 font-bold">آگهی‌ها</h1>
      <Search
        placeholder="جستجوی آگهی"
        allowClear
        size="large"
        onSearch={handleSearchClick}
        className="p-4"
      />

      <AllProducts />

      <GlobalButtons
        addonTitle="محصولات مرتبط همه"
        chatbotTitle="چت هوشمند همه"
      />
    </div>
  );
};

export default ProductsPage;
