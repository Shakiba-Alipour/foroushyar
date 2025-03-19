import {
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const contactImage = require("../../main/assets/contact-customer-service.png");

// To render social accounts
const SocialAccounts = () => {
  return (
    <div className="flex flex-col lg:w-2/5 md:w-2/5 sm:w-2/3">
      <img src={contactImage} />
      <div className="grid grid-rows-2 grid-cols-2">
        <Account
          name="ایمیل"
          value="info@atenatech.ir"
          icon={<MailOutlined />}
        />
        <Account name="تلفن" value="021-28429237" icon={<PhoneOutlined />} />
        <Account
          name="تلگرام"
          value="@divar_foroush_yar"
          icon={<SendOutlined />}
        />
        <Account
          name="اینستاگرام"
          value="@foroush_yar"
          icon={<InstagramOutlined />}
        />
      </div>
    </div>
  );
};

// To dosplay each account
const Account = ({
  name,
  value,
  icon,
}: {
  name: string;
  value: string;
  icon: any;
}) => {
  return (
    <div className="flex flex-row mt-2 mb-2">
      {icon}
      <div className="flex flex-col text-sm mr-3">
        <p>{name}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default SocialAccounts;
