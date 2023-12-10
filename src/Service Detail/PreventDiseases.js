import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PreventDiseases() {
  return (
    <>
      <div>
        <Container className="prevent-diseases" maxWidth="xl" style={{ marginLeft:80, marginBottom:200 }}>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <h2 className="prevent-heading" style={{ fontSize: '50px', textAlign: 'left' }}>
                Build your preventing <br />vertical transmission of <br />diseases
              </h2>
            </Grid>
            <Grid item md={4} xs={12}>
              <p className="prevent-paragraph" style={{marginBottom:50}}>
                Overall, immunization during pregnancy not only protects the mother's health but also provides early protection for the baby, laying the foundation for a healthier start to life.
              </p>
              <Button
                variant="outlined"
                style={{ borderRadius: '50px', color: 'black', border: '1px solid black' }}
                className="prevent-button"
               endIcon={<FontAwesomeIcon icon={faChevronRight} style={{fontSize:15}} />}
               
              >
                CONTACT US NOW
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default PreventDiseases;
