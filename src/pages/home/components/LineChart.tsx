import Chart from "react-google-charts";

const LineChart: React.FC<{ className: string }> = ({ className }) => {
  const data = [
    ["Year", "پاسخ چت ربات", "پاسخ چت خودم"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];

  let options = {
    legend: {
      position: "top",
      alignment: "center",
      textStyle: { bold: true },
    },
    colors: ["#4ECB73", "#0086FA"],
    areaOpacity: 0.5,
    chartArea: { width: "80%", height: "70%", top: 50, bottom: 40 },
  };

  return (
    <div className={`flex flex-col items-end ${className}`}>
      <p className="text-lg font-semibold flex items-center gap-1 w-full text-right px-4">
        فعالیت چت
      </p>
      <Chart chartType="AreaChart" data={data} options={options} width="100%" />
    </div>
  );
};

export default LineChart;
