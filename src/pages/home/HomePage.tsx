import { Select, Space } from "antd";

const HomePage = () => {
  const handleSelectChange = () => {};
  return (
    <div className="flex flex-col">
      <h2 className="text-base font-bold w-fit">خانه</h2>

      <div>
        <Space wrap className="w-fit flex flex-row justify-self-center">
          <Select
            defaultValue="همه آگهی‌ها"
            onChange={handleSelectChange}
            // options={products}
          />
          <Select
            defaultValue="30 روز گذشته"
            onChange={handleSelectChange}
            // options={products}
          />
        </Space>
      </div>
    </div>
  );
};

export default HomePage;
