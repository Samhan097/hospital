import React from "react";
import {Button, Container, Divider, Grid } from "@mui/material";
import "../Service/Service.css";
import ServiceImageSlider from "./ServiceImageSlider";
import { ArrowOutward } from "@mui/icons-material";


const ServiceHero = () => {
  return (
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
        <Container>
    <Grid container spacing={1}>
      <Grid item md={6} xs={12}>
        <h2 className="service-hero-heading-1">Personalized<br/> Healthcare only <br/>extraordinary<br/> Solutions.</h2>
      </Grid>
      <Grid item md={6} xs={12}>
        <p className="service-hero-paragraph-1">We strive to provide the best medical care for our patients. Our team of experienced professionals use the latest technology and techniques to ensure that you receive the highest quality of care. 
<br/>
<br/>
We understand that every patient is unique and offer personalized healthcare solutions tailored to your individual needs. </p>
<Button variant="outlined" style={{ borderRadius: '50px', color:'black',border:'1px solid black' }} className="service-hero-button" endIcon={<ArrowOutward />}> 
get in touch             </Button>
      </Grid>
    </Grid>
  </Container>
  <hr className="getintouch-divider" /> 
      </div>
    </div>
  );
};

export default ServiceHero;
