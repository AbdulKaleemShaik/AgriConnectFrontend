import React, { useContext, useState } from "react";
import styles from "./Navbarr.module.css";
import { assets } from "../../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../../Context/StoreContext";
import { Avatar } from "@mui/material";
import { useUser } from "../../../Context/UserContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state for dropdown
  const { getTotalCartAmount, token, setToken, setgetTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useUser(); 

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    setToken("");
    setUserDetails(null);
    navigate("/customerlogin");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
  };

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2>AgriConnect</h2>
      </Link>
      <button className={styles.navbarMenuToggle} onClick={toggleDropdown}>
        {isDropdownOpen ? "Close Menu" : "Open Menu"} {/* Toggle button */}
      </button>
      <ul className={`${styles.navbarMenu} ${isDropdownOpen ? styles.show : ''}`}>
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? styles.active : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? styles.active : ""}
        >
          Menu
        </a>
        <a
          href="#food-display"
          onClick={() => setMenu("food-display")}
          className={menu === "food-display" ? styles.active : ""}
        >
          Fresh Goods
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? styles.active : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className={styles.navbarRight}>
        <div className={styles.navbarSearchIcon}>
          <Link to="/customerdashboard/cart">
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          <div className={getTotalCartAmount() !== 0 && userDetails ? styles.dot : ""}></div>
        </div>

        <div className={styles.navbarProfile}>
          {userDetails && userDetails.profileImage ? (
            <>
              <img
                className={styles.profileImage}
                src={
                  userDetails.profileImage
                    ? `${import.meta.env.VITE_API_URL}/img/profile_img/${userDetails.profileImage}`
                    : "/static/images/avatar/1.jpg"
                }
                alt="Profile"
              />
              <ul className={styles.navProfileDropdown}>
                <Link to="/customerdashboard/customer-profilepage">
                  <li>
                    <img src={assets.bag_icon} alt="Edit Profile" /> <p>Edit Profile</p>
                  </li>
                </Link>
                <hr />
                <Link to="/customerdashboard/customerorders">
                  <li>
                    <img src={assets.bag_icon} alt="Orders" /> <p>Orders</p>
                  </li>
                </Link>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="Logout" />
                  <p>Logout</p>
                </li>
              </ul>
            </>
          ) : (
            <div className={styles.loginsignup}>
              <Link to="/customerlogin">Login</Link>
              <Link to="/customerregestration">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
