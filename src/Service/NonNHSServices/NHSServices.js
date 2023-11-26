import React from 'react';
import Button from '@mui/material/Button';
import "../Service.css";
import { Box, Grid } from '@mui/material';
import CardList from './CardList';
// import ServiceList from './ServiceList';

export default function NHSServices()  {
    return (
  <Box className="our-nhs-services"  >
        <Grid container spacing={1} style={{ background:'#F1F4F5' }}>
          {/*content 1 */}
          <Grid
            item
            xs={12}
            md={4}
            className="nhs-service-content"
            style={{ marginLeft: 50 }}
          >
            <div className="nhs-service-content-row">
              <div className="service-content-left">
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    borderRadius: "50px",
                    border:'1px solid black',
                    color:'black',
                    marginTop: 10,
                  }}
                  className="service-button1"
                >
                  Non NHS services
                </Button>
              </div>
            </div>
          </Grid>
          {/*content 2 */}
          <Grid item xs={12} md={7}>
          <h2
              className="blogs-text"
              style={{ marginTop: 10,marginBottom:50 }}
            >
  Discover other essential services from NHS         </h2> 
          </Grid>
          <CardList />
        </Grid>
        {/* <ServiceList /> */}
        </Box>
    );
  };
  
  