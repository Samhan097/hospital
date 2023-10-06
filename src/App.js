// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonAppBar from "./ButtonAppBar";
import Clients from "./Home/Clients/Clients";
import OurBlogs from "./Home/OurBlogs/OurBlogs";
import SignUp from "./Home/SignUp";
import MainMenu from "./Frame/MainMenu";
import About from "./Home/About";
import ImageSlider from "./Home/Slider/ImageSlider";
import { SliderData } from "./Home/Slider/SliderData";
import Footer from "./Home/Footer/Footer";
import OurServices from "./Home/OurServices/OurServices";
import FAQ from "./Home/FAQ/FAQ";
import Service from "./Service/Service";


function App() {
  return (
    <Router >
      <div className="app">
        {/* Set up routes with Routes */}
        <Routes>
          {/* The root path "/" */}
          <Route
            path="/"
            element={
              // Use 'element' instead of 'component'
              <>
                <ButtonAppBar style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} />
                <ImageSlider slides={SliderData} />
                <About />
                <OurServices />
                <SignUp />
                <Clients />
                <OurBlogs />
                <FAQ />
                <Footer />
              </> 
            }
          />
          <Route path="/MainMenu" element={ <MainMenu />} />
          <Route path="/Services" element={<Service />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
