import { Grid } from '@mui/material';
import React from 'react';

const ImmunizationImages = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // To arrange images in a column
    alignItems: 'center', // To center images horizontally
    marginTop: '100px', // Adjust this value to set the distance between image sets
  };

  const imageSetStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: '40px', // Adjust this value to set the distance between image sets
  };

  const rightImageStyle = {
    marginLeft: '120px', // Adjust this value to set the horizontal distance between images
    marginTop: '120px', // Adjust this value to position the right image below the left one
  };

  return (
    <div style={containerStyle}>
      <div style={imageSetStyle}>
        <img
          src="/servicedetail/img-3.png" // Replace with your left image URL
          alt="img-3"
          style={{ width: '600px', height: 'auto' }} // Adjust image dimensions as needed
        />
        <img
          src="/servicedetail/img-4.png" // Replace with your right image URL
          alt="img-4"
          style={{ width: '600px', height: 'auto', ...rightImageStyle }} // Adjust image dimensions and position
        />
      </div>
      <div style={imageSetStyle}>
        <img
          src="/servicedetail/img-5.png" // Replace with your left image URL
          alt="img-5"
          style={{ width: '600px', height: 'auto' }} // Adjust image dimensions as needed
        />
        <img
          src="/servicedetail/img-6.png" // Replace with your right image URL
          alt="img-6"
          style={{ width: '600px', height: 'auto', ...rightImageStyle }} // Adjust image dimensions and position
        />
      </div>
      <Grid item xs={12} style={{ margin: '100px 50px' }}>
        <div style={{ maxWidth: 'calc(100vw - 100px)', margin: '0 auto' }}>
          <img
            src={'/servicedetail/img-7.png'}
            alt="img-7"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Grid>
    </div>
  );
};

export default ImmunizationImages;
