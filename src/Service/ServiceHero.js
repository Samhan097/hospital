import React from "react";
import {Button, Container, Divider, Grid } from "@mui/material";
import "../Service/Service.css";
import ServiceImageSlider from "./ServiceImageSlider";
import { ArrowOutward } from "@mui/icons-material";
import OurServices from "./OurServices/OurServices";


const ServiceHero = () => {
  return (
    <>
    <div>
      <div className="service-hero-box">
        <Divider
          orientation="horizontal"
          style={{ background: "white", height: 2 }}
          flexItem
        />
        <Container>
          <Grid container spacing={1}>
            <Grid item md={8} xs={12}>
              <h1 className="service-hero-heading">
                Leading Medical
                <br /> Services for Better <br /> Lives.
              </h1>
            </Grid>
            <Grid item md={4} xs={12}>
              <p className="service-hero-paragraph">
                The primary purpose of nhs is to provide essential information
                and resources related to healthcare, medical services, and
                general well-being for the public.
              </p>
            </Grid>
          </Grid>
        </Container>
        <ServiceImageSlider />
        
      </div>
    </div>
    
    </>
  );
};

export default ServiceHero;
