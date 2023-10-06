import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "../../App.css";
import Blog from "./Blog";
import { ArrowOutward } from "@mui/icons-material";

export default function OurBlogs() {
  return (
    <Box className="our-blogs-section" style={{ backgroundColor: "#f0f0f0" }}>
      <Grid container spacing={1} style={{ marginBottom: 100 }}>
        {/*content 1 */}
        <Grid
          item
          xs={12}
          md={3}
          className="blogs-content"
          style={{ marginLeft: 30 }}
        >
          <div className="blogs-content-row">
            <div className="blogs-content-left">
              <Button
                variant="outlined"
                color="primary"
                style={{
                  borderRadius: "50px",
                  marginTop: 100,
                  color: "black",
                  border: "1px solid black",
                }}
                className="blogs-button"
              >
                Our Blogs
              </Button>
            </div>
          </div>
        </Grid>
        {/*content 2 */}
        <Grid item xs={12} md={7}>
          <h2
            className="blogs-text"
            style={{ marginTop: 100 }}
          >
            Sharing is caring so we make time to write about our experience.
          </h2>
        </Grid>
      </Grid>
      {/* Add your blog content here */} 
      <Blog
        imageSrc="home/blog-1.png"
        title="First large U.S. clinical trial of finds the smoking cessation medication"
        date="August 22, 2023"
      />
      <Blog
        imageSrc="home/blog-2.png"
        title="Mass General Researchers Find Targeting Immune"
        date="September 5, 2023"
      />
      <Blog
        imageSrc="home/blog-3.png"
        title="Study Sheds Light on How Breast Cancer Cells Evade Immune"
        date="September 25, 2023"
      />
      <Button
        variant="outlined"
        color="primary"
        style={{
          borderRadius: "50px",
          color: "black",
          border: "1px solid black",
          marginLeft: 660,
          marginTop: 70,
          marginBottom: 100,
        }}
        className="blogs-button"
        endIcon=<ArrowOutward />
      >
        view all posts
      </Button>
    </Box>
  );
}
