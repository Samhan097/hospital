import React from 'react';
import Button from '@mui/material/Button';
import "../App.css";
import Service from './Service';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Typography } from '@mui/material';

export default function OurServices() {
  return (
    <section className="our-services" style={{marginLeft:30}}>
    <div >
    <Button variant="outlined" color="primary" style={{ borderRadius: '50px' }} className="service-button1">
                our services
              </Button>
        
        <Typography variant='h5' style={{marginBottom:100,marginTop:30}}>
        our comprehensive medical services of highly skilled and compassionate medical professionals offers a wide range of services, including preventive care, diagnostics. We are committed to providing cutting-edge medical technologies and evidence-based practices to ensure the best possible outcomes for our patients.
        </Typography>
      </div>
      <Service />
      <Button variant="outlined" style={{ borderRadius: '50px', color:'black',border:'1px solid black' }} className="service-button2" endIcon={<ArrowOutwardIcon />}>
view all service
             </Button>
        <div className="service-image" ></div>

    </section>
  );
};

