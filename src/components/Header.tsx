import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import Wallet from "./Wallet";
import Navbar from "./Navbar";

const Header = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <header className="flex justify-between h-14 w-full pt-4 pb-4 pl-10 pr-10 sticky top-0 z-30 bg-Neutral-PrimaryBackground border border-b-Text+Icon-05">
      <Link className="w-fit" to="/dashboard">
        <Logo />
      </Link>

      {isAuthenticated && <Wallet />}
      {!isAuthenticated && <Navbar />}
    </header>
  );
};

export default Header;
