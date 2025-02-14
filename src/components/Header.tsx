import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import WalletIcon from "../assets/Wallet_Icon";

const Header = () => {
  return (
    <header className="flex justify-around h-14 w-full p-4">
      <div className="flex flex-row">
        <WalletIcon />
        <p>2400</p>
      </div>
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
