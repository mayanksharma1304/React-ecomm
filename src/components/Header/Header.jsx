import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Search, User, ShoppingBag } from "lucide-react";
import Logo from "../../assets/ABCPerfume_logo.svg?react";
import { useCartContext } from "../../context/CartContext";
import { useCallback, useState } from "react";
import Modal from "../Modal/Modal";
import LoginForm from "../../Pages/login/LoginForm";

export default function Header() {
  let { cart } = useCartContext();
  let [isModalOpen, setIsModalOpen] = useState(false);
  let handleProfileClick = () => setIsModalOpen(true);
  let handleModalClose = useCallback(() => setIsModalOpen(false), []);
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
          <span id="profile" onClick={handleProfileClick}>
            <User color="#BF9840" size={25} className="profile-icon" />
          </span>
          <span id="shopping-bag">
            <ShoppingBag color="#BF9840" size={25} className="bag-icon" />
            {cart > 0 && <span id="shopping-bag__items-count">{cart}</span>}
          </span>
        </div>
      </div>
      <Navigation />

      <Modal isOpen={isModalOpen} handleModalClose={handleModalClose}>
        <LoginForm />
      </Modal>
    </header>
  );
}
