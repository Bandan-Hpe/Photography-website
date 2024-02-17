import React, { Fragment, useState } from "react";
import "../Styles/Home.css";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { images } from "../data";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const Home = () => {
  const navigate=useNavigate()
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    518: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1030: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    <Fragment>
      <section className="home-section">
        <div className="hero-section position-relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              position: "ralative",
            }}
          >
            <source src="/assets/images/video_1.mp4" type="video/mp4" />
          </video>

          <div className="position-absolute top-0  text-center video-bg">
            <h3 className="text-white  fw-bold rounded lh-base video-text">
              "Every moment is a masterpiece waiting to be captured. <br /> Let
              us frame your memories with love and artistry."
            </h3>
            <button className="submit-btn primary-btn mt-20 text-uppercase" onClick={()=>navigate('/contact') }>Contact us</button>
          </div>
        </div>

        <section className="About-area section-gap" id="about">
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
                  2020, our team led by Ramakrishna has delighted over 200
                  clients with our passion for photography. From intimate couple
                  sessions to grand wedding affairs, exquisite birthday
                  celebrations to adorable baby shoots, we specialize in
                  preserving your most cherished memories. Book your session
                  today and let us weave magic through our lenses. 
                </p>
                <button className="submit-btn primary-btn mt-20 text-uppercase " onClick={()=>navigate('/contact')}>
                  Hire me now<span className="lnr lnr-arrow-right"></span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-area section-gap" id="gallery">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 pb-30 header-text">
                <h1 className="text-black text-center">
                  Explore Our Portfolio
                </h1>
                <p className="text-center text-black">
                  A Visual Journey of Your Memories
                </p>
              </div>
            </div>
            <div className="gal">
              <Gallery
                images={images}
                onClick={handleClick}
                enableImageSelection={false}
              />
              <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
              />
            </div>
          </div>
        </section>

        <section className="testmonials section-gap container">
          <div className="testmonial-top">
            <h1 className="text-center">Words From Our Clients</h1>
            <p className="text-center">Testimonials That Speak Volumes</p>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={breakpoints}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            
            <SwiperSlide>
              <div className="testmonial-items ">
                <div className="testmonial-content">
                  <blockquote>
                    "Absolutely stunning couple photoshoot! The photographer
                    captured our love in every frame.
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end">- Aarav Sharma</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testmonial-items ">
                <div className="testmonial-content">
                  <blockquote>
                    "Incredible birthday photoshoot experience! The photos truly
                    captured the joy of the celebration.
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end">- Neha Patel</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testmonial-items ">
                <div className="testmonial-content">
                  <blockquote>
                    "Our wedding photos are breathtaking! Every moment was
                    beautifully documented."
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end">- Rajesh Singh</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testmonial-items ">
                <div className="testmonial-content">
                  <blockquote>
                    "The pre-wedding photoshoot exceeded our expectations. It
                    felt like a fairytale come true."
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end"> - Priya Desai</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testmonial-items ">
                <div className="testmonial-content">
                  <blockquote>
                    "Fantastic engagement photos! They perfectly captured the
                    essence of our relationship."
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end"> - Arjun Reddy</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testmonial-items ">
                <div className="testmonial-content">
                  <blockquote>
                    "Professional and creative commercial photography. Our
                    products have never looked better."
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end"> - Aisha Khan</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testmonial-items ">
                <div className="testmonial-content">
                  <blockquote>
                    "Social media photography that wowed our followers! Engaging
                    and visually captivating."
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end"> - Siddharth Malhotra</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
    </Fragment>
  );
};

export default Home;
