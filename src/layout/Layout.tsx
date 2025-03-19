import { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";
import { RootState } from "../store/store";
import Credential from "../components/Credential";
import { useDispatch, useSelector } from "react-redux";

// a layout that contains header, menu, and page content
// menu is sticked to the bottom of the screen in mobile devices
const Layout = () => {
  // To check the screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 680);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  // to access the redux store
  // const token = useAppSelector((state) => state.auth.token);

  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      setIsUserAuthenticated(true);
    } else {
      setIsUserAuthenticated(false);
    }
  }, [token]);

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
      <Header isAuthenticated={isUserAuthenticated} />
      <div className="container lg:w-3/5 self-center justify-items-center mb-16">
        <Outlet />
      </div>
      {/* to show the menu only if the user is authenticated */}
      {isUserAuthenticated && <Menu />}
      {!isUserAuthenticated && <Credential />}
    </div>
  );
};

export default Layout;
