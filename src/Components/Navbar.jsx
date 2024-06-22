import "../css/Navbar.css";
import React from "react";
import Search from "../Images/search.png";
import user from "../Images/user.png";
import trolley from "../Images/trolley.png";
import dots from "../Images/dots.png";
import { useNavigate } from "react-router-dom";
import aisy from "../Images/aisy.png";
import DotDrawer from "./DotDrawer";

const Navbar = () => {
  const navigate = useNavigate();
  const ToggleEvent = () => {
    navigate("/");
  };

  const changeState = () => {
    navigate("/Brands");
  };

  const toggleChange = () => {
    navigate("/Products");
  };

  const toggleClick = () => {
    navigate("/Shop");
  };
  const toggle = () => {
    navigate("/DotDrawer");
  };

  return (
    <>
      <marquee behavior="" direction="">
        We Are Open!!. 🎲Delivery within Lagos (1-3 days). 🎲Delivery Outside
        Lagos (3-7 days).
      </marquee>

      <div className="navbar">
        <nav className="list">
          <li onClick={ToggleEvent}>Home</li>
          <li onClick={changeState}>Brands</li>
          <li onClick={toggleChange}>Products</li>
          <li onClick={toggleClick}>Shop</li>
        </nav>

        <img src={aisy} alt="" className="logo" />

        <div className="icon">
          <img src={Search} alt="search" className="icons" />
          <img src={user} alt="profile-image" className="icons" />
          <img src={trolley} alt="trolley" className="icons" />
          <DotDrawer className="icons"/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
