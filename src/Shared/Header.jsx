import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Header.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [mobile, setMobile] = useState(true);

  const toggleMenu = () => {
    setMobile(!mobile);
  };
  return (
    <Fragment>
      <header className="default-header">
        <div className="">
          <div className="header-wrap">
            <div className="header-top d-flex justify-content-around align-items-center ">
              <div className="logo">
                <NavLink to="/">
                  <img
                    src="assets/images/logo.png"
                    alt="logo"
                    className="logo"
                  />
                </NavLink>
              </div>
              <div className="main-menubar d-flex align-items-center">
                <nav className={`nav-list  ${mobile ? "" : "close"}`}>
                  <NavLink to="/" onClick={toggleMenu}>
                    Home
                  </NavLink>
                  <NavLink to="/about" onClick={toggleMenu}>
                    About Me
                  </NavLink>
                  <NavLink to="/gallery" onClick={toggleMenu}>
                    Gallery
                  </NavLink>
                  <NavLink to="/contact" onClick={toggleMenu}>
                    Contact
                  </NavLink>
                </nav>
                <div className="menu-bar" onClick={toggleMenu}>
                  <FaBars />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
