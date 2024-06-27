import "../css/Navbar.css";
import React, { useState } from "react";
import SearchIcon from "../Images/search.png";
import user from "../Images/user.png";
import trolley from "../Images/trolley.png";
// import dots from "../Images/dots.png";
import { useNavigate } from "react-router-dom";
import aisy from "../Images/aisy.png";
import DotDrawer from "./DotDrawer";
import Search from "./Search";
import Account from "../NavPages/Account";

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

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
  // const toggle = () => {
  //   navigate("/DotDrawer");
  // };
  const toggleT = () => {
    navigate("/Trolley");
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
const toggleLogin = () => {
  navigate('/Account')
}


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
          <img
            src={SearchIcon}
            alt="search"
            className="icons"
            onClick={toggleSearch}
          />
          {showSearch && <Search onSearch={onSearch} />}

          <img src={user} alt="profile-image" className="icons" onClick={openModal}/>
          <Account isOpen={modalIsOpen} onRequestClose={closeModal} />
          <img
            src={trolley}
            alt="trolley"
            className="icons"
            onClick={toggleT}
          />
          <DotDrawer className="icons" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
