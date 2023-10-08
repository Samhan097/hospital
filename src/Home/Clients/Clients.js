import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Avatar, CardHeader } from "@mui/material";
import LogoSlider1 from "./LogoSlider1";
import LogoSlider2 from "./LogoSlider2";

const clientAppreciations = [
  {
    name: "Michael Rodriguez",
    message:
      "They made me feel comfortable and reassured throughout my treatment, and I felt like I was in capable hands. I highly recommend NHS to anyone in need of medical care.",
      avatarUrl:'home/Michael Rodriguez.png'
  },
  {
    name: "John Smith",
    message:
      "The level of care and attention to detail provided by NHS is exceptional. I am grateful for their dedication to patient well-being.",
      avatarUrl:'home/John Smith.png'
  },
  {
    name: "Sarah Johnson",
    message:
      "I have been a patient at NHS for many years, and I have always received top-notch care. The staff is friendly, and the facilities are state-of-the-art.",
      avatarUrl:'home/Sarah Johnson.png'

  },
];

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === clientAppreciations.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? clientAppreciations.length - 1 : prevIndex - 1));
  };

  const currentAppreciation = clientAppreciations[currentIndex];

  return (
    <Box className="clients-section" style={{ marginTop: 150, marginBottom: 100 }}>
      <Grid container spacing={1}>
        {/* Content 1 */}
        <Grid item xs={12} md={3} className="clients-content" style={{ marginLeft: 20 }}>
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
        <Grid item xs={12} md={1}>
          <div style={{ marginLeft: "50px" }}>
            <FontAwesomeIcon className="clients-quote" icon={faQuoteLeft} style={{ color: "#c2c2c2", fontSize: 70 }} />
          </div>
        </Grid>
        {/* Content 3 */}
        <Grid item xs={12} md={7}>
          <h3 paragraph className="clients-text">
            {currentAppreciation.message}
          </h3>
          <div>
            <CardHeader
              className="avatar-content"
              avatar={
                <Avatar aria-label="client">
                  <img src={currentAppreciation.avatarUrl} alt={currentAppreciation.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Avatar>
              }
              action={
                <>
                  <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: 20, marginRight: 10 }} onClick={handlePrev} />
                  <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 20 }} onClick={handleNext} />
                </>
              }
              title={currentAppreciation.name}
              subheader="Head of Corporate"
            />
          </div>
        </Grid>
      </Grid>
      <Typography variant="h5" style={{ textAlign: 'center', marginTop: 100, marginBottom: 50 }}>Trusted by 150+ Hospitals</Typography>
      <LogoSlider1 />
      <LogoSlider2 />
    </Box>
  );
}
