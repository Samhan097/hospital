import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../../App.css";
import { ChevronLeft, ChevronRight, FormatQuote } from "@mui/icons-material";
import { Avatar, CardHeader } from "@mui/material";
import LogoSlider1 from "./LogoSlider1";
import LogoSlider2 from "./LogoSlider2";

export default function Clients() {
  return (
    <Box className="clients-section" style={{ marginTop: 150,marginBottom:100 }}>
      <Grid container spacing={1}>
        {/*content 1 */}
        <Grid
          item
          xs={12}
          md={3}
          className="clients-content"
          style={{ marginLeft: 20 }}
        >
          <div className="clients-content-row">
            <div className="clients-content-left">
              <Button
                variant="outlined"
                color="primary"
                style={{ borderRadius: "50px" }}
                className="clients-button1"
              >
                our clients
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={1}  >
          <div style={{ marginLeft: "50px" }}>
            <FormatQuote
            className="clients-quote"
              style={{
                fontSize: 70,
                transform: "rotate(180deg)",
                color: "GrayText",
              }}
            />
          </div>
        </Grid>
        {/*content 3 */}
        <Grid item xs={12} md={7}>
          <h3 paragraph className="clients-text">
            They made me feel comfortable and reassured throughout my treatment,
            and I felt like I was in capable hands. I highly recommend NHS to
            anyone in need of medical care.
          </h3>
          <div>
            <CardHeader 
            className="avatar-content"
              avatar={
                <Avatar aria-label="client" >
                  <img src="home/Michael Rodriguez.png" alt="Michael Rodriguez" style={{width:'100%',height:'100%',objectFit:'cover'}} />
                </Avatar>
              }
              action={
                <>
                  <ChevronLeft style={{ fontSize: 40 }} />
                  <ChevronRight style={{ fontSize: 40 }} />
                </>
              }
              title="Michael Rodriguez"
              subheader="Head of Corporate"
            />
          </div>
        </Grid>
      </Grid>
      <Typography variant="h5" style={{textAlign:'center',marginTop:100}}>Trusted by 150+ Hospitals</Typography>
      <LogoSlider1 />
      <LogoSlider2 />
    </Box>
  );
}
