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
      text: "Whether it's a wedding, a family gathering, or a corporate event, our expert photographers will capture every moment with precision and creativity.",
    },
    {
      title: "Video",
      image: "https://themewagon.github.io/phozogy/img/services/service-2.jpg",
      text: "Let us turn your special moments into cinematic masterpieces that you can relive again and again.",
    },
    {
      title: "Editing",
      image: "https://themewagon.github.io/phozogy/img/services/service-3.jpg",
      text: "Our skilled editors will polish your photos and videos to perfection, ensuring that every detail shines.",
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
                Capture Your Memories with <br />
                Timeless Photography 
                <br />
                Experiences
              </h1>
              <p>
                Welcome to Your Memories, where we craft timeless moments that
                last a lifetime. Capturing the essence of every occasion since
                2020, our team led by Ramakrishna has delighted over 200 clients
                with our passion for photography. From intimate couple sessions
                to grand wedding affairs, exquisite birthday celebrations to
                adorable baby shoots, we specialize in preserving your most
                cherished memories. Book your session today and let us weave
                magic through our lenses.
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
              {service.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-sm-6 " key={index}>
                  <div className="services-item">
                    <img src={item.image} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="content mt-5">
              <div className="row  justify-content-around">
                <div className="col-lg-5">
                  <div className="so-item">
                    <div className="so-title">
                      <div className="so-number">01</div>
                      <h5>Couple Photoshoot:</h5>
                    </div>
                    <p>
                      Celebrate your love story with romantic couple photoshoots
                      that capture the magic between you and your partner.
                    </p>
                  </div>
                  <div className="so-item">
                    <div className="so-title">
                      <div className="so-number">02</div>
                      <h5>Birthday Photoshoot:</h5>
                    </div>
                    <p>
                      Commemorate your special day with fun and vibrant birthday
                      photoshoots that capture the joy and excitement of the
                      occasion.
                    </p>
                  </div>
                  <div className="so-item">
                    <div className="so-title">
                      <div className="so-number">03</div>
                      <h5>Wedding Photoshoot:</h5>
                    </div>
                    <p>
                      Treasure the memories of your big day with stunning
                      wedding photoshoots that document every precious moment.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="so-item">
                    <div className="so-title">
                      <div className="so-number">04</div>
                      <h5>Pre-wedding Photoshoot:</h5>
                    </div>
                    <p>
                      Capture the anticipation and excitement leading up to your
                      wedding with beautiful pre-wedding photoshoots in
                      picturesque locations.
                    </p>
                  </div>
                  <div className="so-item">
                    <div className="so-title">
                      <div className="so-number">02</div>
                      <h5> Engagement Photography</h5>
                    </div>
                    <p>
                      Celebrate your love story with stunning engagement photos
                      that reflect your unique bond.
                    </p>
                  </div>
                  <div className="so-item">
                    <div className="so-title">
                      <div className="so-number">03</div>
                      <h5> Commercial Photography:</h5>
                    </div>
                    <p>
                      Highlight your products or services with
                      professional-grade commercial photography that makes an
                      impact.
                    </p>
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
          {data.map((item, index) => (
            <div className="card" key={index}>
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
