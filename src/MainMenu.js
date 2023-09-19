// src/components/ImagePage.js
import React from "react";
import { Button, Container } from "@mui/material";
import "./App.css"; // Create a CSS file for custom styling
import ButtonAppBar from "./ButtonAppBar";
import { ArrowOutward } from "@mui/icons-material";

const MainMenu = () => {
  return (
    <>
      <ButtonAppBar />
      <div className="image-page">
        <div className="image-overlay"></div>
        <Container
          maxWidth="md"
          className="content-container"
          style={{ textAlign: "center" }}
        >
          <div>
            <Button variant="h2" style={{ fontSize: 40, color: "white", }} endIcon=<ArrowOutward style={{fontSize:40}} />>
              Online Services
            </Button>
          </div>
          <div>
            <Button variant="h2" style={{ fontSize: 40, color: "green", }} endIcon=<ArrowOutward style={{fontSize:40}} />>
              New Patients
            </Button>
          </div>
          <div>
            <Button variant="h2" style={{ fontSize: 40, color: "white", }} endIcon=<ArrowOutward style={{fontSize:40}} />>
              Apoinments
            </Button>
          </div>
          <div>
            <Button variant="h2" style={{ fontSize: 40, color: "white", }} endIcon=<ArrowOutward style={{fontSize:40}} />>
              Prescriptions
            </Button>
          </div>
          <div>
            <Button variant="h2" style={{ fontSize: 40, color: "white", }} endIcon=<ArrowOutward style={{fontSize:40}} />>
              About Us
            </Button>
          </div>
        <img src="/New Patients.png" alt="New Patients" className="new-patients"/>

        </Container>
      </div>
    </>
  );
};

export default MainMenu;
