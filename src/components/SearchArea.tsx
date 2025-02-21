// Search compentn one of the most-frequently used components of the website
// It is implemented in this folder to be availabl globally

import { GetProps, Input } from "antd";
import Search from "antd/es/input/Search";

const SearchArea = () => {
  type SearchProps = GetProps<typeof Input.Search>;

  // to handle search
  const handleSearchClick: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <Search
      placeholder="جستجوی آگهی"
      allowClear
      size="large"
      onSearch={handleSearchClick}
      className="p-4"
    />
  );
};

export default SearchArea;
