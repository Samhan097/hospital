// src/components/ImagePage.js
import React, { useState } from 'react';
import { Button, Container } from "@mui/material";
import "../App.css"; // Create a CSS file for custom styling
import { ArrowOutward } from "@mui/icons-material";
import ButtonAppBar from '../ButtonAppBar';

const MainMenu = () => {
  const [showImage, setShowImage] = useState(false);

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };
  return (
    <>
       <ButtonAppBar style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} />
      <div className="image-page">
        <div className="image-overlay"></div>
        <Container
          maxWidth="md"
          className="content-container"
          style={{ textAlign: "center" }}
        >
          <div>
            <Button className='btn-mainmenu' variant="h2" style={{ fontSize: 40, color: "white", }} endIcon=<ArrowOutward className='btn-mainmenu' style={{fontSize:40}} />>
              Online Services
            </Button>
          </div>
          <div>
      <div className="button-container">
        <Button
        className='btn-mainmenu'
          variant="h2"
          style={{ fontSize: 40, color: "green" }}
          endIcon={<ArrowOutward className='btn-mainmenu' style={{ fontSize: 40 }} />}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          New Patients
        </Button>
      </div>
      {showImage && (
        <div className="image-container">
          <img src="frame/New Patients.png" alt="New Patients" className="new-patients" />
        </div>
      )}
    </div>
          <div>
            <Button className='btn-mainmenu' variant="h2" style={{ fontSize: 40, color: "white", }} endIcon=<ArrowOutward className='btn-mainmenu' style={{fontSize:40}} />>
              Apoinments
            </Button>
          </div>
          <div>
            <Button className='btn-mainmenu' variant="h2" style={{ fontSize: 40, color: "white", }} endIcon=<ArrowOutward className='btn-mainmenu' style={{fontSize:40}} />>
              Prescriptions
            </Button>
          </div>
          <div >
            <Button className='btn-mainmenu' style={{ fontSize: 40, color: "white", }} endIcon=<ArrowOutward className='btn-mainmenu' style={{fontSize:40}} />>
              About Us
            </Button>
          </div>

        </Container>
      </div>
    </>
  );
};

export default MainMenu;
