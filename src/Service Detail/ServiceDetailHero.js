import React from "react";
import { Container, Divider, Grid, Button } from "@mui/material";
import "../Service/Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ServiceDetailHero = () => {
  return (
    <>
      <div>
        <div className="service-hero-box" style={{marginBottom:400}} >
          <Divider
            orientation="horizontal"
            style={{ background: "white", height: 2 }}
            flexItem
          />
          <Container  >
            <Grid container spacing={1}>
              <Grid item md={6} xs={12}>
                <h1 className="service-hero-heading" style={{ marginBottom: 150 }}>
                  Mother and Baby Immunization
                </h1>
                <div style={{ width: 600, marginBottom: 20 ,marginLeft:-100 }}>
                  <img
                    src="/servicedetail/img-1.png" // Replace with your image URL or import the image
                    alt="Medical Services"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Grid>
              <Grid item style={{marginTop:50}} md={6} xs={12}>
                <div>
                  <p className="service-hero-paragraph">
                    Ensuring the health and well-being of both mothers and babies is of utmost importance, and one vital aspect of achieving this is through immunization. Vaccinations play a significant role in protecting both mothers and their precious little ones from a range of preventable diseases.
                  </p>
                 <div style={{marginLeft:50,marginTop:300}}>
                 <h2 className="service-subheading">
                    Get focused with a mother and baby immunization plan
                  </h2>
                  <Button variant="outlined" style={{ borderRadius: '50px', color:'black',border:'1px solid black',marginTop:30 }} endIcon={<FontAwesomeIcon icon={faChevronRight} style={{fontSize:15}} />}>
              Read More
            </Button>
                 </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailHero;
