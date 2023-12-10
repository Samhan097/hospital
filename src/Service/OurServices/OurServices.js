import React from 'react';
import Button from '@mui/material/Button';
import "../Service.css";
import { Box, Grid } from '@mui/material';
import ServiceList from './ServiceList';
import { Link } from 'react-router-dom';

export default function OurServices() {
  return (
<Box className="our-services" marginBottom={'100px'}>
      <Grid container spacing={1} style={{ marginBottom: 100 }}>
        {/*content 1 */}
        <Grid
          item
          xs={12}
          md={4}
          className="service-content"
          style={{ marginLeft: 50 }}
        >
          <div className="service-content-row">
            <div className="service-content-left">
            <Link to="/Servicedetail">
      <Button
        variant="outlined"
        color="primary"
        style={{ borderRadius: '50px' }}
        className="service-button1"
      >
        Our Services
      </Button>
    </Link>
            </div>
          </div>
        </Grid> 
        {/*content 2 */}
        <Grid item xs={12} md={7}>
        <h2
            className="blogs-text"
            style={{ marginTop: 10 }}
          >
We offer a wide range of healthcare services          </h2> 
        </Grid>
      </Grid>
      <ServiceList />
      </Box>
  );
};

