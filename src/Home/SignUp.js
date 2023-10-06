import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../App.css";
import { ArrowOutward } from "@mui/icons-material"; 

export default function SignUp() {
  return (
    <Box
      className="signup-section"
      style={{ backgroundColor: "#f0f0f0", marginTop: 150 }}
    >
      <Grid container spacing={1}>
        {/* Left side content */}
        <Grid item xs={12} md={6} className="signup-content">
          <div className="signup-content-row">
            <div className="signup-content-left">
              <Button
                variant="outlined"
                color="primary"
                style={{ borderRadius: "50px" }}
                className="signup-button1"
              >
                triage form
              </Button>
              <Typography variant="h2" gutterBottom style={{fontFamily:'sans'}} className="signup-heading">
                Signup for a <br></br>
                Patient Triage<br></br>
                free trial
              </Typography>

              <Button
                variant="outlined"
                style={{
                  borderRadius: "50px",
                  color: "black",
                  border: "1px solid black",
                }}
                endIcon={<ArrowOutward />}
                className="signup-button2"
              >
lets sign up              </Button>
            </div>
          </div>
        </Grid>
        {/* Right side content */}
        <Grid item xs={12} md={6}>
          <img src="home/dental.png" alt="dental" className="signup-image" />
          <Typography variant="h6" style={{fontFamily:'sans'}} className="signup-text">
          Triage helps healthcare providers efficiently allocate resources and focus on treating patients based on the severity of their medical needs, improving overall patient outcomes in emergency situations and crowded medical settings.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
