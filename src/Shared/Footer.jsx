import React, { Fragment } from "react";
import "../Styles/Footer.css";

import { FaMapMarkerAlt } from "react-icons/fa";

import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
          <div className="footer-top w-100 d-md-flex justify-content-between  ">
            <div className="col-md-2 footer-col">
              <img
                src="/assets/images/logo.png"
                alt=""
                className="footer-logo"
              />
              <p className="footer-para">
                Welcome to Your Memories, where we craft timeless moments that
                last a lifetime.
              </p>
            </div>
            <div className="col-md-9 col-sm-12 d-md-flex flex-wrap justify-content-between mt-sm-2">
              <div className="col-md-4 col-sm-6">
                <div className="footer-title d-flex flex-column">
                  <h4>Learn More</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <Link to="/">
                      <li>Home</li>
                    </Link>
                    <Link to="/about">
                      <li>About me</li>
                    </Link>

                    <Link to="/portfolio">
                      <li>Gallery</li>
                    </Link>

                    <Link to="/contact">
                      <li> Contact </li>
                    </Link>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="footer-title d-flex flex-column">
                  <h4>Social media</h4>
                  <ul className="footer-list flex-column p-0 mb-0">
                    <Link to="https://www.instagram.com/yourmemories.in/ ">
                      <li>Instagram </li>
                    </Link>
                    <Link to="#">
                      <li>facebook</li>
                    </Link>
                    <Link to="#">
                      <li>Linkedin</li>
                    </Link>
                    <Link to="#">
                      <li>Twitter</li>
                    </Link>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="footer-title d--flex flex-column">
                  <h4>Our Location</h4>
                  <ul className="footer-list flex-column p-0 mb-0 location">
                    <li className=" d-flex align-items-start gap-2">
                      <FaMapMarkerAlt className="location-icons" />
                      <span>Kakinada, Andhra Pradesh</span>
                    </li>
                    <li className=" d-flex align-items-center gap-2">
                      <BiSolidPhoneCall /> <span> +91-8121119996</span>
                    </li>
                    <li className=" d-flex align-items-first gap-2 ">
                      <BiLogoGmail className="mt-1" />
                      <span>support@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom w-100 d-md-flex justify-content-center">
            <p className="mb-0 text-center">
              {" "}
              &#169; 2024 All Rights Reserved | Developed by :{" "}
              <Link to="https://therealtechnologies.com/">
                The Real Technologies ❤{" "}
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
