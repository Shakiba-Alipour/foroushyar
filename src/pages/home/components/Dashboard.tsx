import React, { useState } from "react";
import Summary from "./Summary";

// this function component displays each section's data
// info is either an object containing current value and change (for displaying the number of chats and active addons),
// or an array contianing chart's data (number[]) and chart's tyope
const Data: React.FC<{
  title: string;
  data: { current: number; change: number } | number[];
  type: "line" | "pie" | "number";
}> = ({ title, data, type }) => {
  // // this state stores previous number of chats and active addons to calculate the change
  // const { prevValues, setPrevValues } = useState({ chat: 0, addon: 0 });

  // const calculateTheChange=()=>{

  // }

  // To define classNames for the info container
  const containerStyle =
    "border-Neutral-PrimaryBackground bg-Neutral-SecondaryBackground w-2/5 flex flex-col p-3 rounded-rounded-6";

  return (
    <div className={containerStyle}>
      <p className="text-sm text-Text+Icon-00 font-semibold">{title}</p>
      {/* to display the number of chats and active addons*/}
      {type === "number" && typeof data === "object" && "current" in data && (
        <Summary data={data} />
      )}
      {/* to display the line chart */}:
      {type === "line" && Array.isArray(data) && (
        <div className={containerStyle}></div>
      )}
      {/* to display the pie chart */}:
      {type === "pie" && Array.isArray(data) && <></>}
    </div>
  );
};

// this component displays main info: number of chats, number of active addon, line chart, pie chart
const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-row justify-items-center justify-around w-full mt-4 mb-4">
        {/* the number of chats */}
        <Data
          title="تعداد چت‌ها"
          data={{ current: 14, change: 15 }}
          type="number"
        />
        {/* the number of active addon */}
        <Data
          title="محصول فعال"
          data={{ current: 20, change: -5 }}
          type="number"
        />
      </div>
    </div>
  );
};

export default Dashboard;
