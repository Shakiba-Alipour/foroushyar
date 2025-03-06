import { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

// a layout that contains header, menu, and page content
// menu is sticked to the bottom of the screen in mobile devices
const Layout = () => {
  // To check the screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 680);

  // this hook handles screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 680);
    };

    // listen for screen size changes.
    window.addEventListener("resize", handleResize);

    // To remove the "resize" event listener when the component unmounts
    // and prevent memory leaks and unnecessary event listeners.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <Outlet />
      {isMobile && <Menu />}
    </div>
  );
};

export default Layout;
