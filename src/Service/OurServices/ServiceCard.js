import React from 'react';
import "../Service.css"
import {  Typography, Button, Box, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ number, title, description }) => {
  return (
    <Box className="service-card">
    <hr className='service-card-divider'  />
        <Grid container spacing={2} alignItems="center">
          <Grid item md={7} xs={3}>
            <div className="service-number">{number}</div>
            <Typography style={{ textTransform: 'uppercase' }} variant="h2" dangerouslySetInnerHTML={{ __html: title }}></Typography>

          </Grid>
          <Grid item md={5} xs={9}>
            <Typography variant="body1" style={{marginTop:'5%',marginBottom:'10%'}}>{description}</Typography>
            <Button variant="outlined" style={{ borderRadius: '50px', color:'black',border:'1px solid black',marginBottom:'10%' }} endIcon={<FontAwesomeIcon icon={faChevronRight} style={{fontSize:15}} />}>
              Read More
            </Button>
          </Grid>
        </Grid>
    </Box>
  );
};

export default ServiceCard;
