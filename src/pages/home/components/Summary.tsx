import { Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const Summary = ({
  title,
  data,
  className,
}: {
  title: string;
  // data: { current: number; change: number };
  data: number;
  className: string;
}) => {
  return (
    <Statistic
      title={
        <span className="text-Text+Icon-00 flex justify-self-start w-fit font-semibold">
          {title}
        </span>
      }
      valueRender={() => (
        <span className="text-xl font-bold text-Text+Icon-00 mr-3">{data}</span>
      )}
      precision={0}
      // suffix={
      //   <span
      //     className={`text-sm h-fit flex flex-row-reverse ${
      //       data.change >= 0 ? "text-Success-Default" : "text-Warning-Default"
      //     }`}
      //   >
      //     {data.change >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
      //     {" %" + Math.abs(data.change)}
      //   </span>
      // }
      className={className}
    />
  );
};

export default Summary;
