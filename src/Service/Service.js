import React from "react";
import ButtonAppBar from "../ButtonAppBar";
import "../Service/Service.css";
import ServiceHero from "./ServiceHero";
import GetInTouch from "./GetInTouch";
import OurServices from "./OurServices/OurServices";
import NHSServices from "./NonNHSServices/NHSServices";
import Footer from "../Footer/Footer";

const Service = () => {
  return (
    <div>
      <ButtonAppBar />
      <ServiceHero />
      <GetInTouch />
      <OurServices />
      <NHSServices />
      <Footer />
    </div>
  );
};

export default Service;
