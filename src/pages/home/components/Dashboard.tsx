import React, { useState } from "react";
import Summary from "./Summary";
import LineChart from "./LineChart";

// this function component displays each section's data
// info is either an object containing current value and change (for displaying the number of chats and active addons),
// or an array contianing chart's data (number[]) and chart's tyope
const Data: React.FC<{
  title: string;
  // data: { current: number; change: number } | number[];
  data: number;
  type: "line" | "pie" | "number";
}> = ({ title, data, type }) => {
  // // this state stores previous number of chats and active addons to calculate the change
  // const { prevValues, setPrevValues } = useState({ chat: 0, addon: 0 });

  // const calculateTheChange=()=>{

  // }

  // To define classNames for the info container
  const containerStyle =
    "border-Neutral-PrimaryBackground bg-Neutral-SecondaryBackground w-full flex flex-col p-3 mr-2 ml-2 rounded-rounded-6";

  return (
    <>
      {/* to display the number of chats and active addons*/}
      {type === "number" && (
        <Summary title={title} data={data} className={containerStyle} />
      )}
      {/* to display the line chart */}
      {type === "line" && Array.isArray(data) && (
        <>
          <p className="text-sm text-Text+Icon-00 font-semibold">{title}</p>
          <div className={containerStyle}></div>
        </>
      )}
      {/* to display the pie chart */}
      {type === "pie" && Array.isArray(data) && <></>}
    </>
  );
};

// this component displays main info: number of chats, number of active addon, line chart, pie chart
const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-items-center justify-around w-full mt-4 mb-4">
        {/* the number of chats */}
        <Data title="تعداد چت‌ها" data={14} type="number" />

        {/* the number of active addon */}
        <Data title="محصول فعال" data={20} type="number" />
      </div>

      {/* the line chart */}
      <LineChart />
    </div>
  );
};

export default Dashboard;
