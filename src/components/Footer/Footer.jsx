import "./Footer.css";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="footer-wrapper">
      <div id="footer-signup">
        <div className="footer-signup-left">
          <p>
            Sign up to receive the latest news from The ABC Perfume, private
            early access to new launches and an exclusive 10% off your first
            online order.
          </p>
          <button> Sign up</button>
        </div>
        <div className="footer-signup-right">
          <p> Connect with us</p>
          <div id="footer-signup-icons">
            <span>
              <FaInstagram size={30} color="#BF9840" />
            </span>
            <span>
              <FaFacebook size={30} color="#BF9840" />
            </span>
            <span>
              <FaXTwitter size={30} color="#BF9840" />
            </span>
            <span>
              <FaTiktok size={30} color="#BF9840" />
            </span>
          </div>
        </div>
      </div>
      <div id="footer-links-wrap">
        <div className="footer-logo">
          <img className="logo" src="./ABCPerfume_logo.svg" alt="brand logo" />
        </div>
        <div className="footer-right-content">
          <div id="help-info">
            <span>HELP & INFORMATION</span>
            <div className="footer-links">
              <a href="#">Contact Us</a>
              <a href="#">Help Center</a>
              <a href="#">Return Policy</a>
              <a href="#">Delivery Information</a>
              <a href="#">Online Benefits</a>
            </div>
          </div>
          <div id="the-company">
            <span>THE COMPANY</span>
            <div className="footer-links">
              <a href="#">The Art of Perfume</a>
            </div>
          </div>
          <div id="terms-conditions">
            <span>TERMS & CONDITIONS</span>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">User Content terms</a>
              <a href="#">Cookie Policy </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
