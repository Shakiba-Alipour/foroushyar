import React, { useState } from "react";

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

  return (
    <div className="bg-NeutralPrimaryBackground border-NeutralSecondaryBackgroundDark border-r-4">
      <p>{title}</p>
      {/* to display the number of chats and active addons*/}
      {type === "number" && typeof data === "object" && "current" in data && (
        <>
          {/* the current value */}
          <p className="text-xl font-bold">{data.current}</p>
          {/* the change */}
          <p
            className={`text-sm ${
              data.change >= 0 ? "text-SuccessDefault" : "text-WarningDefault"
            }`}
          >
            {data.change >= 0 ? "↑" : "↓"}
            {Math.abs(data.change)}
          </p>
        </>
      )}
      {/* to display the line chart */}:
      {type === "line" && Array.isArray(data) && <></>}
      {/* to display the pie chart */}:
      {type === "pie" && Array.isArray(data) && <></>}
    </div>
  );
};

// this component displays main info: number of chats, number of active addon, line chart, pie chart
const Dashboard = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Dashboard;
