import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import WalletIcon from "../assets/Wallet_Icon";
import Profile_Icon from "../assets/Profille_Icon";

const Header = () => {
  return (
    <header className="flex justify-between h-14 w-full p-4">
      <div className="flex flex-row w-1/4 justify-around sm:flex-col">
        <Profile_Icon />
        <div className="flex flex-row">
          <WalletIcon />
          <p className="font-iranYekan">2400</p>
        </div>
      </div>
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
