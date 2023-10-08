// LogoSlider2.js
import React from 'react';
import "../../App.css";

const LogoSlider2 = () => {
  const logos = [
    '/logo/Image.png',
    '/logo/Image-1.png',
    '/logo/Image-2.png',
    '/logo/Image-3.png',
    '/logo/Image-4.png',
    '/logo/Image-5.png',
    '/logo/Image-6.png',
    '/logo/Image-7.png',
    '/logo/Image-8.png',
    '/logo/Image-9.png',
    '/logo/Image.png',
    '/logo/Image-1.png',
    '/logo/Image-2.png',
    '/logo/Image-3.png',
    '/logo/Image-4.png',
    '/logo/Image-5.png',
    '/logo/Image-6.png',
    '/logo/Image-7.png',
    '/logo/Image-8.png',
    '/logo/Image-9.png',
  ];

  return (
    <div className="logo-slider2-container">
      <div className="logo-slider2">
        {logos.map((logo, index) => (
          <div className="logo-item2" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider2;
