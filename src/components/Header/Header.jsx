import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Search, User, ShoppingBag } from "lucide-react";
import Logo from "../../assets/ABCPerfume_logo.svg?react";

export default function Header() {
  return (
    <header>
      <div className="top-row">
        <div id="search-container">
          <input id="search-input" type="text" placeholder="search here.." />
          <Search color="#BF9840" size={18} className="search-icon" />
        </div>
        <div className="logo-wrap">
          <Logo className="logo" />
        </div>
        <div className="right-icons">
          <span id="profile">
            <User color="#BF9840" size={25} className="profile-icon" />
          </span>
          <span id="shopping-bag">
            <ShoppingBag color="#BF9840" size={25} className="bag-icon" />
          </span>
        </div>
      </div>
      <Navigation />
    </header>
  );
}
