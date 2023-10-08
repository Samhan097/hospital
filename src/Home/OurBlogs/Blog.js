import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import "../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Blog({ imageSrc, title,description, date }) {

  return (
    <Box className="blog-section" style={{ backgroundColor: "#f0f0f0" }}>
      <hr className="blog-divider" style={{ marginBottom: 50,marginTop:40 }}></hr>

      <Grid container spacing={3}>
        {/* Right side image */}
        <Grid item xs={12} md={5}>
          <img
            src={imageSrc} // Use the image source from props
            alt={title}
            className="blog-img"
          />
        </Grid>

        {/* Left side content */}
        <Grid item xs={12} md={6} className="blog-content">
          <div className="blog-content-row">
            <div className="blog-content-left">
              <h2 variant="h3" gutterBottom className='blog-heading'>
                {title} {/* Use the title from props */}
              </h2>
              <p>{description}</p>

              <Grid container spacing={2} style={{marginTop:100}}>
                {/* Button column */}
                <Grid item >
                  <Button variant="outlined" style={{ borderRadius: '50px', color: 'black', border: '1px solid black' }}>
                    patient
                  </Button>
                </Grid>
                {/* Date column */}
                <Grid item>
                  {/* Display the date from props */}
                  <Typography variant="subtitle2" className='blog-date' style={{marginTop:6,marginLeft:2}}>
                    {date}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={1} className="chevron-icon">
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 30, marginTop: 150 }} />
        </Grid>
      </Grid>
    </Box>
  )
}
