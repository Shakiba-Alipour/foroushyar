import Summary from "./Summary";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

// To define classNames for the info container
const containerStyle =
  "bg-Neutral-PrimaryBackground border-Neutral-SecondaryBackground w-full flex flex-col p-3 mx-2 my-4 rounded-rounded-6 border-2";

// this component displays main info: number of chats, number of active addon, line chart, pie chart
const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-items-center justify-around w-full mt-4 mb-4">
        {/* the number of chats */}
        <Summary title={"تعداد چت‌ها"} data={14} className={containerStyle} />

        {/* the number of active addon */}
        <Summary title={"محصول فعال"} data={20} className={containerStyle} />
      </div>

      {/* the line chart */}
      <LineChart className={containerStyle} />

      {/* the pie cart */}
      <PieChart className={containerStyle} />
    </div>
  );
};

export default Dashboard;
