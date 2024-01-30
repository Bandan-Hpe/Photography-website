import React, { Fragment,useState } from 'react';
import { images } from "../data";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../Styles/Portfolio.css"

const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

const Portfolio = () => {

    const [index, setIndex] = useState(-1);

    const handleClick = (index, item) => setIndex(index);
  return <Fragment>

<section className="gallery-area section-gap mt-5 py-5" id="gallery">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 pb-30 header-text">
                <h1 className="text-black text-center">My Recent Photos</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut <br /> labore et dolore magna
                  aliqua.
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





  </Fragment>
    
}

export default Portfolio