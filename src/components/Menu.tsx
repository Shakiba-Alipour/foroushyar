import { Link } from "react-router-dom";
import AI from "../assets/AI_Icon";
import HomeIcon from "../assets/Home_Icon";
import FaqIcon from "../assets/Faq_Icon";
import ProductsIcon from "../assets/Products_Icon";
import MessagingIcon from "../assets/Messaging_Icon";

const Menu = () => {
  //   menu items
  const items = [
    { path: "/faq", key: "faq", icon: <FaqIcon /> },
    { path: "/bulk-messaging", key: "messaging", icon: <MessagingIcon /> },
    { path: "/", key: "home", icon: <HomeIcon /> },
    { path: "/product", key: "product", icon: <ProductsIcon /> },
    { path: "/", key: "", icon: <AI /> },
  ];

  return (
    // display menu
    <div className="w-full h-14 bottom-0">
      <div className="flex justify-around items-center w-11/12 place-self-center h-12 bg-NeutralPrimaryBackground border-NeutralSecondaryBackgroundDark">
        {items.map(({ path, key, icon }) => (
          <Link to={path} key={key}>
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
