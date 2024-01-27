import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [mobile, setMobile] = useState(false);

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
                <Link to="/">
                  <img
                    src="assets/images/logo.png"
                    alt="logo"
                    className="logo"
                  />
                </Link>
              </div>
              <div className="main-menubar d-flex align-items-center">
                <nav className={`nav-list  ${mobile ? "" : "close"}`}>
                  <Link to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                  <Link to="/about" onClick={toggleMenu}>
                    About Me
                  </Link>
                  <Link to="/gallery" onClick={toggleMenu}>
                    Gallery
                  </Link>
                  <Link to="/contact" onClick={toggleMenu}>
                    Contact
                  </Link>
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
