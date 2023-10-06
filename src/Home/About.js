import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import '../App.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function About() {
  return (
    <Box className="about-section">
      <Grid container spacing={2}>
        {/* Left side content */}
        <Grid item xs={12} sm={12} md={6} className="about-content">
          <div className="about-content-left">
            <Button
              variant="outlined"
              color="primary"
              style={{ borderRadius: '50px', fontFamily: 'Chivo' }}
              className="about-button1"
            >
              About us
            </Button>
            <h2 className="about-heading" style={{ fontFamily: 'Chivo' }}>
              Empowering health through innovation. Experts in medical care, research, and patient
              well-being.
            </h2>
            <p className="about-text" style={{ fontFamily: 'Chivo' }}>
              Our Clinic has grown to provide a world-class facility for the treatment of tooth loss,
              bore advanced restorative dentistry. We are among the most qualified implant providers in
              the USA with over 35 years of quality training and experience.
            </p>
            <Button
              variant="outlined"
              style={{
                borderRadius: '50px',
                color: 'black',
                border: '1px solid black',
                fontFamily: 'Chivo',
              }}
              endIcon={<ChevronRightIcon />}
              className="about-button2"
            >
              Learn More
            </Button>
          </div>
        </Grid>
        {/* Right side image */}
        <Grid item xs={12} md={6} sm={12}>
          <img
            src="../home/about.png" // Replace with the path to your image
            alt="About Us"
            className="about-image"
          />
        </Grid>
      </Grid>

      <hr className="divider" />
    </Box>
  );
}
