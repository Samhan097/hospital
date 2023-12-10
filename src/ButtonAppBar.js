// ButtonAppBar.js
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css"; // Import the CSS file
import { Divider, Hidden } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from React Router
import "bootstrap/dist/css/bootstrap.css";

export default function ButtonAppBar() {
  return (
    <div className="appbar" >
      <Toolbar className="toolbar">
          {/* Logo and Logo Text on the left */}
      <Hidden mdUp>
        <div className="logo" style={{ marginLeft: 30 ,marginRight:'auto'}}>
          <img src="home/logo.png" alt="Logo" width="40" height="40" />
          <Typography variant="h6" component="div" className="logo-text">
            HOSPITAL
          </Typography>
        </div>
        </Hidden>
         {/* Menu Icon on the right */}
    <Hidden mdUp>
    <Link to="/MainMenu" style={{ textDecoration: "none", color: "white" }}>
          {/* Link to the "/mainmenu" page */}
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            className="menu-icon"
          >
            <MenuIcon fontSize="large" style={{ color: "white" }} />
          </IconButton>
        </Link>
    </Hidden>
    <Hidden smDown>
        <div className="logo" style={{ marginLeft: 30 ,marginRight:'auto'}}>
          <img src="/home/logo.png" alt="Logo" width="40" height="40" />
          <Typography variant="h6" component="div" className="logo-text">
            HOSPITAL 
          </Typography> 
        </div>
        </Hidden>
    <Hidden smDown>

        <Typography
          variant="body1"
          className="phone-number"
          style={{  color: "white" }}
        >
          Ph: 123-456-789
        </Typography>  
        </Hidden>
    <Hidden smDown>
        <Button
          variant="outlined"
          color="primary"
          style={{
            borderRadius: "50px",
            color: "white",
            border: "1px solid white",
            marginLeft: 30,
            marginRight: 30,
          }}
          className="contact-button"
        >
          Contact Us
        </Button>
        </Hidden>
    <Hidden smDown>
        <Divider
          orientation="vertical"
          style={{ background: "white" }}
          flexItem
        />
        </Hidden>
    <Hidden smDown>
        <Link to="/MainMenu" style={{ textDecoration: "none", color: "white" }}>
          {/* Link to the "/mainmenu" page */}
          <IconButton
            size="large"
            edge="end"
            aria-label="menu"
            className="menu-icon"
          >
            <MenuIcon fontSize="large" style={{ color: "white" }} />
          </IconButton>
        </Link>
        </Hidden>
      </Toolbar>
    </div>
  );
}
