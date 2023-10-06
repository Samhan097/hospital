import React from 'react';
import '../../App.css'

export default function Footer() {
  return (
    <footer className="footer" style={{marginTop:100}}>
    <div className="footer-logo" style={{marginTop:70,marginBottom:70}}>
            <img src="home/logo.png" alt="Logo" width="40" height="40" />
            <h5  className="footer-logo-text">
              HOSPITAL
            </h5>
          </div>
      <div className="moving-text-container">
      <h3 className='moving-text' style={{marginBottom:60}}>
      Start a Joint Injections . Immunizations . Online Services
      </h3>
        
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
