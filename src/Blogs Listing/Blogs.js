import React from 'react';
import { Box,  Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Blog from './Blog'; // Assuming the Blog component is imported

export default function Blogs() {
  return (
    <>
        <Box className="our-blogs-section" style={{marginBottom:200}}>

{/* Add your blog content here */}
<Blog
  imageSrc="/blogslisting/img-1.png"
  title="Groundbreaking Genetic Discovery Sparks Medical Optimism"
  button="Vaccine Boosters"
  date="August 22, 2022"
/>
<Blog
  imageSrc="/blogslisting/img-2.png"
  title="Dietary Connection to Heart Health Uncovered"
  button="Brain"
  date="August 21, 2022"
/>
<Blog
  imageSrc="/blogslisting/img-3.png"
  title="Immunotherapy Breakthrough Brings New Cancer Hope"
  button="Brain Interface"
  date="August 20, 2022"
/>
<Blog
  imageSrc="/blogslisting/img-4.png"
  title="COVID-19 Vaccine Boosters Recommended for Protection"
  button="Brain Interface"
  date="August 19, 2022"
/>
<Blog
  imageSrc="/blogslisting/img-5.png"
  title="Surge in Drug-Resistant Infections Raises Concerns"
  button="Brain Interface"
  date="August 18, 2022"
/>
<Blog
  imageSrc="/blogslisting/img-6.png"
  title="Innovative Brain Interface Allows Remarkable Progress"
  button="Brain Interface"
  date="August 17, 2022"
/>
<Blog
  imageSrc="/blogslisting/img-7.png"
  title="Potential Alzheimer's Biomarker Identified in Research"
  button="Brain Interface"
  date="August 16, 2022"
/>
<Blog
  imageSrc="/blogslisting/img-8.png"
  title="Study Sheds Light on How Breast Cancer Cells Evade Immune"
  button="Brain Interface"
  date="August 15, 2022"
/>
<Button variant="outlined" style={{ borderRadius: '50px', color:'black',border:'1px solid black' ,marginBottom:30,marginLeft:80,marginTop:100,paddingLeft:20,paddingRight:20}} className="blog-button" endIcon={<ArrowOutwardIcon />} >
load more             </Button>
</Box>

            
    </>
  );
}
