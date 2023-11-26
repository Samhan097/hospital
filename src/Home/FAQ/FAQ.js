import React from 'react';
import Button from '@mui/material/Button';
import "../../App.css";
import { Typography } from '@mui/material';
import Faqs from './Faqs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function FAQ() {
  return (
    <section className="our-faq" style={{marginLeft:30,marginBottom:100}}>
    <div >
    <Button variant="outlined" color="primary" style={{ borderRadius: '50px' }} className="faq-button1">
                faq
              </Button>
        <Typography variant='h5'>
        Constant collaboration is how we roll. Let's see if we are a good fit.
        </Typography>
      </div>
      <Faqs />
      <Button variant="outlined" style={{ borderRadius: '50px', color:'black',border:'1px solid black' ,marginBottom:30}} className="faq-button2" endIcon={<FontAwesomeIcon icon={faChevronRight} style={{fontSize:15}} />}>
view all faq
             </Button>
        <div className="faq-image" ></div>

    </section>
  )
}
