import React from "react";
import { Chart } from "react-google-charts";

const PieChart: React.FC<{ className: string }> = ({ className }) => {
  const data = [
    ["مجموع", "200"],
    ["بیشترین کلیک", 20],
    ["دومین کلیک", 11],
    ["سومین کلیک", 5],
    ["چهارمین کلیک", 3],
    ["سایر", 2],
  ];

  const options = {
    pieHole: 0.5,
    is3D: false,
    chartArea: { width: "100%", left: 0 },
  };

  return (
    <div className={`flex flex-col items-end ${className}`}>
      <p className="text-lg font-semibold flex items-center gap-1 w-full text-right px-4">
        گزارش محصولات مرتبط
      </p>
      <Chart chartType="PieChart" data={data} options={options} width="100%" />
    </div>
  );
};

export default PieChart;
