import React from "react";
import BlogsListingHero from "./BlogsListingHero";
import ButtonAppBar from "../ButtonAppBar";
import Blogs from "./Blogs";
import Footer from "../Footer/Footer";

export default function BlogsListing() {
  return (
    <>
      <ButtonAppBar />
      <BlogsListingHero />
      <Blogs />
      <Footer />
    </>
  );
}
