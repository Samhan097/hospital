import React from 'react';
import './BlogsListing.css';
import { Container, Divider, Grid } from '@mui/material';

const BlogsListingHero = () => {
  return (
    <div>
      <div className="blogs-listing-hero-box" style={{marginBottom:100}}>
        <Divider orientation="horizontal" style={{ background: 'white', height: 2 }} flexItem />
        <Container>
          <Grid container spacing={1} className='blogs-listing-content'>
            <Grid item md={8} xs={12}>
              <h1 className="blogs-listing-hero-heading">
                Caring is all about<br /> sharing, hence we<br /> take the time to<br/> our experiences.
              </h1>
            </Grid>
            <Grid item md={4} xs={12} className='blogs-listing-hero-circle'>
              <p className="blogs-listing-hero-paragraph">
                All Blogs <span className="number-of-blogs">152</span>
              </p>
              
              <p className="blogs-listing-hero-paragraph-light">
              Heart Health <span className="number-of-blogs-light">35</span>
              </p>
              <p className="blogs-listing-hero-paragraph-light">
              Immunotherapy Hope <span className="number-of-blogs-light">57</span>
              </p>
              <p className="blogs-listing-hero-paragraph-light">
              Vaccine Boosters <span className="number-of-blogs-light">48</span>
              </p>
              <p className="blogs-listing-hero-paragraph-light">
              Alzheimer's Biomarker <span className="number-of-blogs-light">36</span>
              </p>
              <p className="blogs-listing-hero-paragraph-light">
              Brain Interface<span className="number-of-blogs-light">21</span>
              </p>
              <p className="blogs-listing-hero-paragraph-light">
              Other <span className="number-of-blogs-light">19</span>
              </p>
            </Grid>
          </Grid>
        </Container> 
        {/* Additional content specific to BlogsListingHero */}
      </div>
    </div>
  );  
};

export default BlogsListingHero;
