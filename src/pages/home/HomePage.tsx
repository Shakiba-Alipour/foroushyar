import { Select } from "antd";

const HomePage = () => {
  const handleSelectChange = () => {};
  return (
    <div className="flex flex-col m-4">
      <h2 className="text-base font-iranYekan font-bold w-fit ">خانه</h2>

      <div className="flex flex-row justify-items-center justify-around w-full mt-2 mb-2">
        <Select
          defaultValue="روز گذشته 30"
          className="font-iranYekan text-right"
          onChange={handleSelectChange}
          // options={products}
        />
        <Select
          defaultValue="همه آگهی‌ها"
          className="font-iranYekan"
          onChange={handleSelectChange}
          // options={products}
        />
      </div>
    </div>
  );
};

export default HomePage;
