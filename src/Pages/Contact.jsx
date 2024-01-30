import React, { Fragment } from "react";
import "../Styles/Portfolio.css";
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { MdTimer } from "react-icons/md";




const Contact = () => {
  return (
    <Fragment>
      <div className="contact-section">
        <div className="map-warp">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522"
            allowFullScreen=""
          ></iframe>
        </div>
        <div className="contact-box">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info">
              <IoLocation />

                <p>
                  60-49 Road 11378
                  <br />
                  New York
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info">
              <IoMdMail />
                <p>
                  <span>Phone:</span> +65 11.188.888
                </p>
                <p>
                  <span>Mail:</span> colorlib@gmail.com
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info">
              <MdTimer />
                <p>
                  <span>Week Days:</span> 10:00 – 22:00
                </p>
                <p>
                  <span>Sunday:</span> Close
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
