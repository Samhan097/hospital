import React from "react";
import { Container, Divider, Grid } from "@mui/material";
import "../Service/Service.css";

const BabyImmunizationSchedule = () => {
  const circleStyle = {
    width: '40px',
    height: '30px',
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '40px',
    border: '2px solid black',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
    marginBottom: '40px',
    marginTop: '20px',
  };

  return (
    <div className="baby-immunization-container">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/* Left Side */}
          <Grid item md={5} xs={12} style={{marginLeft:50}}>
            <h1 className="baby-immunization-heading">
              Baby Immunization <br />Schedule:
            </h1>
          </Grid>

          {/* Right Side */}
          <Grid item md={5} xs={12} style={{marginLeft:100}}>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={11}>
                <p className="baby-immunization-paragraph">
                  After birth, babies will follow a vaccination schedule recommended by health authorities. This schedule typically includes vaccines for protection against various diseases. Some of the vaccines babies receive include:
                </p>
              </Grid>
            </Grid>
          </Grid>

          {/* Divider */}
          <Grid item xs={12}>
            <Divider className="custom-divider" style={{ background: "#D1CAC7", width: '95%', height: 3,marginLeft:50 ,marginTop:50,marginBottom:50}} />
          </Grid>

          {/* Three Columns */}
          <Grid item md={3} xs={12} style={{marginLeft:50}}>
            <div style={circleStyle}>01</div>
            <h2 className="vaccine-heading" style={{marginBottom:50}}>MMR Vaccine</h2>
            <p className="vaccine-paragraph">
              Given at birth, this vaccine protects against the hepatitis B virus, which can be transmitted from mother to baby during childbirth.
            </p>
          </Grid>
          <Grid item md={3} xs={12} style={{marginLeft:100}}>
            <div style={circleStyle}>02</div>
            <h2 className="vaccine-heading" style={{marginBottom:50}}>DTaP Vaccine</h2>
            <p className="vaccine-paragraph">
              This combination vaccine protects against diphtheria, tetanus, and pertussis (whooping cough). The DTaP vaccine is administered in a series of doses during infancy and childhood.
            </p>
          </Grid>
          <Grid item md={3} xs={12} style={{marginLeft:100}}>
            <div style={circleStyle}>03</div>
            <h2 className="vaccine-heading" style={{marginBottom:50}}>Hib Vaccine</h2>
            <p className="vaccine-paragraph">
              Haemophilus influenzae type b (Hib) can cause severe diseases, such as meningitis and pneumonia. The Hib vaccine helps protect against these infections.
            </p>
          </Grid>
         {/* Image Section */}
<Grid item xs={12} style={{ margin: '100px 50px' }}>
  <div style={{ maxWidth: 'calc(100vw - 100px)', margin: '0 auto' }}>
    <img src={'/servicedetail/img-2.png'} alt="Baby Immunization" style={{ width: '100%', height: 'auto' }} />
  </div>
</Grid>

        </Grid>
      </Container>
    </div>
  );
};

export default BabyImmunizationSchedule;
