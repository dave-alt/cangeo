import React from "react";

import Navbar from "../components/navbar";
import Home from "../components/home";
import Form from "../components/form";
import Skyline from "../components/skyline";
import Footer from "../components/footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <Home />
      <Form />
      <Skyline />
      <Footer/>
    </>
  );
}
