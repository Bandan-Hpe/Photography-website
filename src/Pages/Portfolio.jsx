import React, { Fragment, useState } from "react";
import { wedding,preWedding,couple,bday,model } from "../data";
import "../Styles/Portfolio.css";
import ImageCarousel from "../Components/gallary";
import { Tabs, Tab } from "@mui/material";

const Portfolio = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <section className="gallery-area section-gap mt-5 py-5" id="gallery">

        <h1 className="text-black text-center mx-5 fw-bold">My Recent Work's</h1>
        <div className="container mt-5">
          <Tabs value={value} onChange={handleChange} className="tabs">
            <Tab label="Birthday Photoshoot" className="tab" />
            <Tab label="Pre-Wedding Photoshoot" className="tab" />
            <Tab label="Wedding Photography" className="tab" />
            <Tab label=" Couples Photography" className="tab" />
            <Tab label="Model & Actress  Photoshoot" className="tab" />
          </Tabs>

          <div hidden={value !== 0}>
            <div className="row col-md-12 portfolio-container py-5">
              <ImageCarousel images={bday} />
            </div>
          </div>
          <div hidden={value !== 1}>
            <div className="row col-md-12 portfolio-container py-5">
              <ImageCarousel images={preWedding} />
            </div>
          </div>
          <div hidden={value !== 2}>
            <div className="row col-md-12 portfolio-container py-5">
              <ImageCarousel images={wedding} />
            </div>
          </div>
          <div hidden={value !== 3}>
            <div className="row col-md-12 portfolio-container py-5">
              <ImageCarousel images={couple} />
            </div>
          </div>
          <div hidden={value !== 4}>
            <div className="row col-md-12 portfolio-container py-5">
              <ImageCarousel images={model} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Portfolio;
