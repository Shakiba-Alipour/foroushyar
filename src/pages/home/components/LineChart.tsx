import Chart from "react-google-charts";

// interface Props {
//   colors: string[];
// }

const LineChart: React.FC = () => {
  let options = {
    title: "فعالیت چت",
    isStacked: true,
    colors: "#000000",
    areaOpacity: 0.8,
    chartArea: { width: "100%", height: "70%" },
  };

  return <Chart chartType="AreaChart" />;
};

export default LineChart;
