import { NavLink, useLocation } from "react-router-dom";
import AI from "../assets/AI_Icon";
import HomeIcon from "../assets/Home_Icon";
import FaqIcon from "../assets/Faq_Icon";
import ProductsIcon from "../assets/Products_Icon";
import MessagingIcon from "../assets/Messaging_Icon";
import { useEffect, useState } from "react";

const Menu = () => {
  //   menu items
  const items = [
    {
      path: "dashboard/commands",
      key: "commands",
      Icon: AI,
      label: "دستورات ربات",
    },
    {
      path: "dashboard/products",
      key: "product",
      Icon: ProductsIcon,
      label: "محصولات",
    },
    { path: "dashboard", key: "home", Icon: HomeIcon, label: "داشبورد" },
    {
      path: "dashboard/bulk-messaging",
      key: "messaging",
      Icon: MessagingIcon,
      label: "پیام گروهی",
    },
    {
      path: "dashboard/settings",
      key: "settings",
      Icon: FaqIcon,
      label: "اطلاعات",
    },
  ];

  // current path
  const location = useLocation();
  // checking active page
  const [activeItem, setActiveItem] = useState("");

  // Update active item when the route changes
  useEffect(() => {
    setActiveItem(location.pathname || "/dashboard");
  }, [location.pathname]);

  return (
    // display menu
    <div className="w-full h-16 fixed bottom-0 bg-Neutral-PrimaryBackground">
      <div className="flex justify-around items-center w-11/12 place-self-center h-14 bg-Neutral-SecondaryBackground rounded-rounded-8">
        {items.map(({ path, key, Icon, label }) => {
          const isActive = location.pathname === `/${path}`;

          return (
            <div key={key} className="flex flex-col relative items-center">
              {/* isActive is added to change the color of the active icon */}
              {/* isActive is added to the parent element of the icon to change the color of whole parts of the icon*/}
              {/* if isActive was added to the Icon itself, just the color of some parts of the icon would change (just when you hold the mouse click on it)*/}
              <NavLink
                to={path}
                end
                className={`flex flex-col align-middle flex-wrap content-center items-center ${
                  isActive ? "activePath" : ""
                }`}
              >
                <Icon />
                <span
                  className={`text-xs ${
                    isActive ? "text-Primary-Hover" : "text-Text+Icon-00"
                  }`}
                >
                  {label}
                </span>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
