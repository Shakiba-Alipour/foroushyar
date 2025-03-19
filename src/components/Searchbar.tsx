// Search compenent is one of the most-frequently used components of the website
// It is implemented in this folder to be available globally

import { GetProps, Input, InputRef } from "antd";
import Search from "antd/es/input/Search";
import { useEffect, useRef, useState } from "react";

const Searchbar: React.FC = () => {
  type SearchProps = GetProps<typeof Input.Search>;

  // A ref is defined to the search bar to check whether the user has intered any input or not to change the search
  // icon to loading icon
  let input = useRef<InputRef>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (input.current?.input && input.current.input.value.trim().length > 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  // to handle search
  const handleSearchClick: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <Input.Search
      placeholder="جستجوی آگهی"
      allowClear
      size="large"
      onSearch={handleSearchClick}
      className="p-4"
      ref={input}
      onClear={() => setIsLoading(false)}
      loading={isLoading}
    />
  );
};

export default Searchbar;
