import { LaptopOutlined, StarOutlined, TeamOutlined } from "@ant-design/icons";
import Verified_Icon from "../assets/Verified_Icon";

const Statistics = () => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row mt-28 mb-28 w-full justify-items-center justify-between">
      <Section
        statistics="+1K"
        label="محصولات فعال فروش‌یار"
        icon={<LaptopOutlined className="text-red-800" />}
        borderColor="border-red-800"
      />
      <Section
        statistics="+600"
        label="افرادی که از فروش‌یار استفاده می‌کنند"
        icon={<TeamOutlined className="text-green-800" />}
        borderColor="border-green-800"
      />
      <Section
        statistics="0"
        label="تعداد ثانیه‌های غیرفعال‌بودن فروش‌یار"
        icon={<StarOutlined className="text-blue-600" />}
        borderColor="border-blue-600"
      />
      <Section
        statistics="+300"
        label="تعداد چت روزانه فروش‌یار"
        icon={<Verified_Icon color="orange" />}
        borderColor="border-orange-600"
      />
    </div>
  );
};

// Each section component
const Section = ({
  statistics,
  label,
  icon,
  borderColor,
}: {
  statistics: string;
  label: string;
  icon: any;
  borderColor: string;
}) => {
  return (
    <div
      className={`flex flex-col w-1/5 p-4 gap-y-3 justify-center text-center items-center border-2 ${borderColor}`}
    >
      {icon}
      <h3 className="font-semibold">{statistics}</h3>
      <p className="text-sm">{label}</p>
    </div>
  );
};

export default Statistics;
