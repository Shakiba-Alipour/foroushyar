import { NavLink, useLocation } from "react-router-dom";
import AI from "../assets/AI_Icon";
import HomeIcon from "../assets/Home_Icon";
import FaqIcon from "../assets/Faq_Icon";
import ProductsIcon from "../assets/Products_Icon";
import MessagingIcon from "../assets/Messaging_Icon";

const Menu = () => {
  //   menu items
  const items = [
    { path: "/", key: "", icon: <AI /> },
    { path: "/product", key: "product", icon: <ProductsIcon /> },
    { path: "/", key: "home", icon: <HomeIcon /> },
    { path: "/bulk-messaging", key: "messaging", icon: <MessagingIcon /> },
    { path: "/faq", key: "faq", icon: <FaqIcon /> },
  ];

  // current path
  const location = useLocation();

  return (
    // display menu
    <div className="w-full h-14 bottom-0">
      <div className="flex justify-around items-center w-11/12 place-self-center h-12 bg-NeutralPrimaryBackground border-NeutralSecondaryBackgroundDark">
        {items.map(({ path, key, icon }) => (
          <div key={key} className="flex flex-col relative items-center">
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "text-PrimaryDefault" : ""
              }
              end
            >
              {icon}
            </NavLink>
            {/* the red dot is only appeared when the page is active */}
            {location.pathname === path && (
              <span className="absolute bg-red-800 w-1 h-1 rounded-full bottom-[-10px]"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
