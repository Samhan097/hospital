// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonAppBar from "./ButtonAppBar";
import Clients from "./Clients/Clients";
import FAQ from "./FAQ/FAQ";
import OurBlogs from "./OurBlogs/OurBlogs";
import OurServices from "./OurServices/OurServices";
import SignUp from "./SignUp";
import Footer from "./Footer/Footer";
import ImageSlider from "./Slider/ImageSlider";
import { SliderData } from "./Slider/SliderData";
import MainMenu from "./MainMenu";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">

        {/* Set up routes with Routes */}
        <Routes>
          {/* The root path "/" */}
          <Route
            path="/"
            element={
              // Use 'element' instead of 'component'
              <>
        <ButtonAppBar />
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
          <Route path="/MainMenu" element={<MainMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
