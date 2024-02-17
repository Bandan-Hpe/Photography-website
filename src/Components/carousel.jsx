import React, { Fragment } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const photos = [
  {
    src: "/assets/images/Wedding_Photography/w_4.jpg",
  },
  {
    src: "/assets/images/Birthday_Photoshoot/bday2.jpg",
  },
  {
    src: "/assets/images/Couple_Photography/couple5.jpg",
  },
  {
    src: "/assets/images/Pre_wedding-Shoot/pre-w4.jpg",
  },

  {
    src: "/assets/images/Couple_Photography/couple4.jpg",
  },

];

const Carousel = () => {
  const breakpoint = {
    310: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1030: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  return (
    <Fragment>
      <section className="our-Project mt-5">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={4}
          breakpoints={breakpoint}
          loop={true}
          autoplay={{
            delay: 1000,
          }}
          speed={2000}
        >
          {photos.map((photos, index) => {
            return (
              <SwiperSlide key={index}>
                <div className=" portfolio-card">
                  <div className="portfolio-card-details">
                    <img src={photos.src} alt="" className="port-img" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </Fragment>
  );
};

export default Carousel;
