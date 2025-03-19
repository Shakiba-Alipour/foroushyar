import {
  FieldTimeOutlined,
  SendOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import Verified_Icon from "../assets/Verified_Icon";
import TextFile_Icon from "../assets/TextFile_Icon";

interface FeatureProps {
  title: string;
  description: String;
  icon: any;
}

const Features = () => {
  return (
    <div className="mt-14 justify-items-center" id="features">
      <h1 className="lg:text-xl">
        فروش‌یار دیوار، دستیار همیشه آماده برای فروش بیشتر و مدیریت بهتر !
      </h1>

      <div className="grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-5 lg:gap-x-40 lg:gap-y-20 mt-10">
        <Feature
          title="24/7"
          description="هیچ پیامی از دست نمی‌رود، حتی در ساعات غیرکاری"
          icon={<FieldTimeOutlined />}
        />
        <Feature
          title="مدیریت چت‌ها در لحظه"
          description="با فروش‌یار، همه چت‌ها به‌صورت خودکار و هوشمندانه پاسخ داده می‌شوند"
          icon={<ThunderboltOutlined />}
        />
        <Feature
          title="رایگان"
          description="می‌توانید به صورت رایگان از محصول ما استفاده کنید"
          icon={<SendOutlined />}
        />
        <Feature
          title="افزایش سرعت و رضایت مشتری"
          description="سریع‌تر از همیشه به مشتری‌هایتان خدمات دهید و اعتمادشان را جلب کنید"
          icon={<Verified_Icon />}
        />
        <Feature title="" description="" icon={null} />
        <Feature
          title="مسلط"
          description="مسلط برروی تمام محصولات شما"
          icon={<TextFile_Icon />}
        />
      </div>
    </div>
  );
};

// each feature's component
const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col justify-center justify-items-center items-center lg:text-xl">
      <span className="text-Primary-Default w-fit">{icon}</span>
      <h2 className="font-bold w-fit text-center">{title}</h2>
      <p className="text-sm w-fit text-center">{description}</p>
    </div>
  );
};

export default Features;
