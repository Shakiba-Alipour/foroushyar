import { Select, Space } from "antd";

const HomePage = () => {
  const handleSelectChange = () => {};
  return (
    <div className="flex flex-col">
      <h2 className="text-base font-iranYekan font-bold w-fit">خانه</h2>

      <div>
        <Space wrap className="w-fit flex flex-row justify-self-center">
          <Select
            defaultValue="همه آگهی‌ها"
            className="font-iranYekan"
            onChange={handleSelectChange}
            // options={products}
          />
          <Select
            defaultValue="روز گذشته 30"
            className="font-iranYekan text-right"
            onChange={handleSelectChange}
            // options={products}
          />
        </Space>
      </div>
    </div>
  );
};

export default HomePage;
