import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import '../App.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Blog({ imageSrc, title, date }) {

  return (
    <Box className="about-section" style={{ backgroundColor: "#f0f0f0" }}>
      <hr className="blog-divider" style={{ marginBottom: 50 }}></hr>

      <Grid container spacing={3}>
        {/* Right side image */}
        <Grid item xs={12} md={5}>
          <img
            src={imageSrc} // Use the image source from props
            alt={title}
            className="blog-1"
          />
        </Grid>

        {/* Left side content */}
        <Grid item xs={12} md={6} className="about-content">
          <div className="about-content-row">
            <div className="about-content-left">
              <Typography variant="h3" gutterBottom className='about-heading'>
                {title} {/* Use the title from props */}
              </Typography>

              <Grid container spacing={2}>
                {/* Button column */}
                <Grid item xs={12} sm={6}>
                  <Button variant="outlined" style={{ borderRadius: '50px', color: 'black', border: '1px solid black' }}>
                    patient
                  </Button>
                </Grid>
                {/* Date column */}
                <Grid item xs={12} sm={6}>
                  {/* Display the date from props */}
                  <Typography variant="subtitle2" className='about-date'>
                    {date}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={1}>
          <ChevronRightIcon style={{ fontSize: 40, marginTop: 150 }} />
        </Grid>
      </Grid>
    </Box>
  )
}
