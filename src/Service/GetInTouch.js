import React from "react";
import { Button, Container, Grid } from "@mui/material";
import "../Service/Service.css";
import { ArrowOutward } from "@mui/icons-material";

function GetInTouch() {
  return (
    <>
    <div><Container>
    <Grid container spacing={1}>
      <Grid item md={6} xs={12}>
        <h2 className="service-hero-heading-1">Personalized<br/> Healthcare only <br/>extraordinary<br/> Solutions.</h2>
      </Grid>
      <Grid item md={6} xs={12}>
        <p className="service-hero-paragraph-1">We strive to provide the best medical care for our patients. Our team of experienced professionals   use the latest technology and techniques to ensure that you receive the highest quality of care. 
<br/>
<br/>
We understand that every patient is unique and offer personalized healthcare solutions tailored to your individual needs. </p>
<Button variant="outlined" style={{ borderRadius: '50px', color:'black',border:'1px solid black' }} className="service-hero-button" endIcon={<ArrowOutward />}> 
get in              </Button>
      </Grid>
    </Grid>
  </Container>
  </div>
  <hr className="getintouch-divider" /> 
  <h2>fefe</h2>
</>
  )
}

export default GetInTouch