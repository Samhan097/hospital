import React from "react";
import ButtonAppBar from "../ButtonAppBar";
import "../Service/Service.css";
import ServiceHero from "./ServiceHero";
import GetInTouch from "./GetInTouch";

const Service = () => {
  return (
    <div>
      <ButtonAppBar />
      <ServiceHero />
      {/* <GetInTouch /> */}
    </div>
  );
};

export default Service;
