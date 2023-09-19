import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './App.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function About() {
  return (
    <Box className="about-section" >
      <Grid container spacing={3}>
        {/* Left side content */}
        <Grid item xs={12} md={6} className="about-content">
          <div className="about-content-row">
            <div className="about-content-left">
              <Button variant="outlined" color="primary" style={{ borderRadius: '50px' }} className="about-button1">
                About us
              </Button>
              <Typography variant="h3" gutterBottom className='about-heading'>
              Empowering health through <br></br> innovation. Experts in medical <br></br> care, research, and patient <br></br> well-being.
              </Typography>
              <Typography variant="body1" paragraph className='about-text'>
              Our Clinic has grown to provide a world class facility for the treatment of tooth loss, bore advanced restorative dentistry. We are among the most qualified implant providers in the USA with over 35 years of quality training and experience.
              </Typography>
              <Button variant="outlined" style={{ borderRadius: '50px', color:'black',border:'1px solid black'  }} endIcon={<ChevronRightIcon />} className='about-button2'>
                Learn More
              </Button>
            </div>
          </div>
        </Grid>
        {/* Right side image */}
        <Grid item xs={12} md={6}>
          <img
            src="about.png" // Replace with the path to your image
            alt="About Us"
            className="about-image"
          />
        </Grid>
      </Grid>
      
      <hr class="divider"></hr>
    </Box>
  );
}
