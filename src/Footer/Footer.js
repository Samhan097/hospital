import React from 'react';
import '../App.css'
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <footer className="footer" style={{marginTop:100}}>
    <div className="logo" style={{marginLeft:600,marginTop:70,marginBottom:70}}>
            <img src="/logo.png" alt="Logo" width="40" height="40" />
            <Typography variant="h6" component="div" className="logo-text">
              HOSPITAL
            </Typography>
          </div>
      <div className="moving-text-container">
      <Typography variant='h2' className='moving-text' style={{marginBottom:60}}>
      Start a Joint Injections . Immunizations . Online Services
      </Typography>
        
      </div>
      <div className="text-row" >
        <p className="footer-text">Home </p>
        <p className="footer-text">Services</p>
        <p className="footer-text">Online Services</p>
        <p className="footer-text">About</p>
        <p className="footer-text">Blog</p>
      </div>
      <hr class="footer-divider"></hr>
      <div className='copyright-footer'>
      <div className="footer-left">
        <p className="copyright">&copy; 2023 Hospital. All Rights Reserved.</p>
      </div>
      <div className="footer-right">
        <p className="footer-text">Privacy Policy</p>
        <p className="footer-text">Terms and Conditions</p>
        <p className="footer-text">Cookie Policy</p>
      </div>
      </div>
    </footer>
  );
}
