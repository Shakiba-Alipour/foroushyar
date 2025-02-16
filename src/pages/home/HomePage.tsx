import { Select } from "antd";

const HomePage = () => {
  const handleSelectChange = () => {};
  return (
    // flex-grow pushes the menu to the bottom if there's not enough content
    <div className="flex-grow flex-col m-4">
      <h2 className="text-base font-iranyekanxfanum font-bold w-fit text-Text+Icon-01">
        خانه
      </h2>

      <div className="flex flex-row justify-items-center justify-around w-full mt-2 mb-2">
        <Select
          defaultValue="30 روز گذشته"
          className="font-iranyekanxfanum text-right"
          onChange={handleSelectChange}
          // options={products}
        />
        <Select
          defaultValue="همه آگهی‌ها"
          className="font-iranyekanxfanum"
          onChange={handleSelectChange}
          // options={products}
        />
      </div>
    </div>
  );
};

export default HomePage;
