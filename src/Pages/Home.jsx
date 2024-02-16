import React, { Fragment, useState } from "react";
import "../Styles/Home.css";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "@mui/material/Rating";

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
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              position: "ralative",
            }}
          >
            <source src="/assets/images/video_1.mp4" type="video/mp4" />
          </video>

          <div className="position-absolute top-50 my-auto text-center mx-5">
            <h3 className="text-white  fw-bold rounded lh-base video-text">
              "Every moment is a masterpiece waiting to be captured. <br/> Let us
              frame your memories with love and artistry.<br/> Book your session
              today and treasure the magic forever."
            </h3>
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
                  We Believe that <br />
                  Interior beautifies the
                </h1>
                <p>
                  Welcome to Your Memories, where we craft timeless moments that
                  last a lifetime. Capturing the essence of every occasion since
                  2020, our team led by Ramakrishna has delighted over 200
                  clients with our passion for photography. From intimate couple
                  sessions to grand wedding affairs, exquisite birthday
                  celebrations to adorable baby shoots, we specialize in
                  preserving your most cherished memories. Book your session
                  today and let us weave magic through our lenses. Call us
                  now at 8121119996.
                </p>
                <button className="submit-btn primary-btn mt-20 text-uppercase ">
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
                <h1 className="text-black text-center">My Recent Photos</h1>
                <p className="text-center text-black">
                  Step into our captivating gallery and witness the artistry
                  behind Your Memories. Each frame tells a unique story, a
                  snapshot of joy, love, and celebration. From enchanting
                  pre-wedding shoots to heartwarming baby portraits, our
                  portfolio showcases the diverse tapestry of life's beautiful
                  moments. Immerse yourself in our world of creativity and let
                  our photographs speak volumes.
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
            <h1 className="text-center">Testmonials</h1>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              laborum architecto reprehenderit accusantium laboriosam temporibus
              voluptas aut quis sapiente alias.
            </p>
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores voluptatibus ratione labore eaque fuga dolorem neque
                    est iusto hic, ut eius nihil, exercitationem repellat ipsa
                    magni officiis natus. Veniam vitae quaerat dolore accusamus
                    dignissimos obcaecati sed quidem eius qui? Quidem.
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end">- Bandan Pradhan</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testmonial-items ">
                <div className="testmonial-content">
                  <blockquote>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores voluptatibus ratione labore eaque fuga dolorem neque
                    est iusto hic, ut eius nihil, exercitationem repellat ipsa
                    magni officiis natus. Veniam vitae quaerat dolore accusamus
                    dignissimos obcaecati sed quidem eius qui? Quidem.
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end">- Bandan Pradhan</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testmonial-items ">
                <div className="testmonial-content">
                  <blockquote>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores voluptatibus ratione labore eaque fuga dolorem neque
                    est iusto hic, ut eius nihil, exercitationem repellat ipsa
                    magni officiis natus. Veniam vitae quaerat dolore accusamus
                    dignissimos obcaecati sed quidem eius qui? Quidem.
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end">- Bandan Pradhan</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testmonial-items ">
                <div className="testmonial-content">
                  <blockquote>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores voluptatibus ratione labore eaque fuga dolorem neque
                    est iusto hic, ut eius nihil, exercitationem repellat ipsa
                    magni officiis natus. Veniam vitae quaerat dolore accusamus
                    dignissimos obcaecati sed quidem eius qui? Quidem.
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end">- Bandan Pradhan</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testmonial-items ">
                <div className="testmonial-content">
                  <blockquote>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores voluptatibus ratione labore eaque fuga dolorem neque
                    est iusto hic, ut eius nihil, exercitationem repellat ipsa
                    magni officiis natus. Veniam vitae quaerat dolore accusamus
                    dignissimos obcaecati sed quidem eius qui? Quidem.
                  </blockquote>
                  <Rating name="read-only" value={5} readOnly />
                </div>

                <div className="testmonial-header   ">
                  <div className="test-monial-title">
                    <p className="name mb-0 text-end"> - Bandan Pradhan</p>
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
