import React from 'react';
import './Service.css';

const ServiceImageSlider = () => {
  // Sample images, replace with your image data
  const images = [
    '/service/service-1.png', 
    '/service/service-2.png', 
    '/service/service-3.png', 
    '/service/service-4.png',
         
  ];

  return (
    <div className="service-image-slider-container">
      <div className="service-image-slider">
        {images.map((serviceimg, index) => (
          <div className="service-image-item" key={index}>
            <img src={serviceimg} alt={`Service ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceImageSlider;
