// ButtonAppBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css'; // Import the CSS file
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from React Router

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="app-bar"> 
        <Toolbar className="toolbar"> 
          <div className="logo" style={{marginLeft:30}}>
            <img src="/logo.png" alt="Logo" width="40" height="40" />
            <Typography variant="h6" component="div" className="logo-text">
              HOSPITAL
            </Typography>
          </div>
          <Typography variant="body1" className="phone-number" style={{marginLeft:920}}>
            Ph: 123-456-789
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            style={{ borderRadius: "50px",color:'white', border:'1px solid white',marginLeft:30,marginRight:30 }}
            className="contact-button"
          >
            Contact Us
          </Button>
          <Divider orientation="vertical" style={{background:'white'}} flexItem />
          <Link to="/MainMenu" style={{ textDecoration: 'none', color: 'inherit' }}>
            {/* Link to the "/mainmenu" page */}
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              className="menu-icon"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
