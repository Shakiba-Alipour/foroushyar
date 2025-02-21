import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import WalletIcon from "../assets/Wallet_Icon";
import Profile_Icon from "../assets/Profille_Icon";

const Header = () => {
  return (
    <header className="flex justify-between h-14 w-full p-4 sticky top-0 bg-Neutral-PrimaryBackground border border-b-Text+Icon-05">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex flex-row w-1/4 justify-around sm:flex-col">
        <div className="flex flex-row">
          <p>2400</p>
          <WalletIcon />
        </div>
        <Profile_Icon />
      </div>
    </header>
  );
};

export default Header;
