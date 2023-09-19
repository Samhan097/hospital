import React from 'react';
import Button from '@mui/material/Button';
import "../App.css";
import { Typography } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import Faqs from './Faqs';

export default function FAQ() {
  return (
    <section className="our-services" style={{marginLeft:30}}>
    <div >
    <Button variant="outlined" color="primary" style={{ borderRadius: '50px' }} className="service-button1">
                faq
              </Button>
        <Typography variant='h5'>
        Constant collaboration is how we roll. Let's see if we are a good fit.
        </Typography>
      </div>
      <Faqs />
      <Button variant="outlined" style={{ borderRadius: '50px', color:'black',border:'1px solid black' }} className="service-button2" endIcon={<ChevronRight />}>
view all faq
             </Button>
        <div className="service-image" ></div>

    </section>
  )
}
