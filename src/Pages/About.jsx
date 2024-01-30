import React, { Fragment } from "react";
import "../Styles/About.css";

const About = () => {
  const data = [
    {
      name: "John ",
      image:
        "https://img.freepik.com/free-photo/portrait-serious-readhead-hipster-photographer-with-camera_171337-7885.jpg",
    },
    {
      name: "John ",
      image:
        "https://img.freepik.com/free-photo/portrait-serious-readhead-hipster-photographer-with-camera_171337-7885.jpg",
    },
    {
      name: "John ",
      image:
        "https://img.freepik.com/free-photo/portrait-serious-readhead-hipster-photographer-with-camera_171337-7885.jpg",
    },
    {
      name: "John ",
      image:
        "https://img.freepik.com/free-photo/portrait-serious-readhead-hipster-photographer-with-camera_171337-7885.jpg",
    },
  ];

  const service = [
    {
      title: "Shooting",
      image: "https://themewagon.github.io/phozogy/img/services/service-1.jpg",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida."
    },
    {
      title: "Video",
      image: "https://themewagon.github.io/phozogy/img/services/service-2.jpg",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida."
    },
    {
      title: "Editing",
      image: "https://themewagon.github.io/phozogy/img/services/service-3.jpg",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida."
    },
  ];
  return (
    <Fragment>
      <section className="About-area section-gap mt-5" id="about">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 about-left d-flex justify-content-center">
              <img
                className="img-fluid"
                src="assets/images/about-img.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6 about-right mt-5">
              <h1>
                We Believe that <br />
                Interior beautifies the
              </h1>
              <p>
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct standards especially in the
                workplace. That’s why it’s crucial that, as women, our behavior
                on the job is beyond reproach. inappropriate behavior is often
                laughed off as “boys will be boys,” women face higher conduct
                standards especially in the workplace. That’s why it’s crucial
                that.
              </p>
              <button className="submit-btn primary-btn mt-20 text-uppercase ">
                Hire me now<span className="lnr lnr-arrow-right"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="services  section-gap">
        <div className="heading d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white">Our Services</h1>

          <div className="container mt-5">
            <div className="row ">
              {
                service.map((item)=>(
                  <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="services-item">
                  <img
                    src={item.image}
                    alt=""
                  />
                  <h3>{item.title}</h3>
                  <p>
                 {item.text}
                  </p>
                </div>
              </div>

                ))
              }
              
            </div>


            <div className="content mt-5">
            <div className="row  justify-content-around">
                <div className="col-lg-5">
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">01</div>
                            <h5>Filming and Editing</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">02</div>
                            <h5>Engagement photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">03</div>
                            <h5>Comercial photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">04</div>
                            <h5>Social media photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">02</div>
                            <h5>Event Photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="so-item">
                        <div className="so-title">
                            <div className="so-number">03</div>
                            <h5>personal photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
            </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className=" container   section-gap">
        <div className="heading d-flex flex-column justify-content-center align-items-center">
          <h1>Our Team</h1>
        </div>

        <div className="team-pic d-flex flex-wrap justify-content-between mt-5 gap-3">
          {data.map((item) => (
            <div className="card">
              <div className="card-info d-flex flex-column">
                <img src={item.image} alt="" className="team-img" />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default About;
