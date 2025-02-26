import { NavLink, useLocation } from "react-router-dom";
// import AI from "../assets/AI_Icon";
import HomeIcon from "../assets/Home_Icon";
import FaqIcon from "../assets/Faq_Icon";
import ProductsIcon from "../assets/Products_Icon";
import MessagingIcon from "../assets/Messaging_Icon";
import { useEffect, useState } from "react";

const Menu = () => {
  //   menu items
  const items = [
    // { path: "/", key: "", icon: <AI /> },
    { path: "products", key: "product", Icon: ProductsIcon },
    { path: "/", key: "home", Icon: HomeIcon },
    { path: "bulk-messaging", key: "messaging", Icon: MessagingIcon },
    { path: "faq", key: "faq", Icon: FaqIcon },
  ];

  // current path
  const location = useLocation();
  // checking active page
  const [activeItem, setActiveItem] = useState("");

  // Update active item when the route changes
  useEffect(() => {
    setActiveItem(location.pathname.split("/")[1] || "/");
  }, [location.pathname]);

  return (
    // display menu
    <div className="w-full h-14 sticky bottom-0 bg-Neutral-PrimaryBackground">
      <div className="flex justify-around items-center w-11/12 place-self-center h-12 bg-Neutral-SecondaryBackground rounded-rounded-8">
        {items.map(({ path, key, Icon }) => {
          const isActive =
            activeItem === path || (path === "/" && location.pathname === "/");

          return (
            <div key={key} className="flex flex-col relative items-center">
              {/* isActive is added to change the color of the active icon */}
              {/* isActive is added to the parent element of the icon to change the color of whole parts of the icon*/}
              {/* if isActive was added to the Icon itself, just the color of some parts of the icon would change (just when you hold the mouse click on it)*/}
              <NavLink to={path} end className={isActive ? "active" : ""}>
                <Icon />
              </NavLink>

              {/* the red dot is only appeared when the page is active */}
              {isActive && (
                <span className="absolute bg-Primary-Hover w-1 h-1 rounded-full bottom-[-10px]"></span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
