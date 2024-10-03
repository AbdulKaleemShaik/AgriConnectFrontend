import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../../Context/StoreContext";
import { Avatar } from "@mui/material";
import { useUser } from "../../../Context/UserContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const { userDetails } = useUser();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    setToken("");
    navigate("/customerlogin"); 
  };

  return (
    <div className="navbar">
      <Link to="/">
        <h2 style={{ color: "red" , textDecoration:"under-line"}}>AgriConnect</h2>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/customerdashboard"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
          
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/customerdashboard/cart">
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <div className="navbar-profile">
          {/* Check if userDetails exists and has a profileImage */}
          {userDetails && userDetails.profileImage ? (
            <img
              className="profile-image"
              src={`${import.meta.env.VITE_API_URL}/img/profile_img/${userDetails.profileImage}`}
              alt="Profile"
            />
          ) : (
            <Avatar />
          )}
          <ul className="nav-profile-dropdown">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
