import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Blog({ imageSrc, title,button, date }) {

  return (
    <Box className="blog-section" style={{marginLeft:40}} >
      <hr className="blog-divider" style={{ marginBottom: 70,marginTop:70 }}></hr>

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
        <Grid item xs={12} md={4} className="blog-content">
          <div className="blog-content-row">
            <div className="blog-content-left">
              <h2 variant="h3" gutterBottom className='blog-heading' style={{fontSize:'48px'}}>
                {title} {/* Use the title from props */}
              </h2>

              <Grid container spacing={2} style={{marginTop:80}}>
                {/* Button column */}
                <Grid item >
                  <Button variant="outlined" style={{ borderRadius: '50px', color: '#898989',background:"#EEEEEE",border:'none' }}>
                    {button}
                  </Button>
                </Grid>
                {/* Date column */}
                <Grid item>
                  {/* Display the date from props */}
                  <Typography variant="subtitle2" className='blog-date' style={{marginTop:6,marginLeft:2,color:'#717171'}}>
                    {date}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={3} className="chevron-icon">
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 32, marginTop: 150,marginLeft:200 }} />
        </Grid>
      </Grid>
      
    </Box>
  )
}
