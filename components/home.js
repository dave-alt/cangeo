import React from "react";
import {useEffect} from "react"
export default function home() {
  useEffect(() => {
    
  
    
  }, [])
  
  return (
    <>
      <div id="heroSection" className="hero">
      <video id="#video" muted
  autoPlay={"autoplay"}
 
  loop src="./video.webm"/>
        <div className="getQuote">
          <h1>Its hard to find things that won't sell online!</h1>
          <a href="#contact">
            <button className="btn"> Get Quote</button>
          </a>
        </div>
      </div>

      <div id="about" className="about">
        <h1 className="about_heading">About Us</h1>
        <div className="aboutContent">
          <img src="./about.svg" alt="about image" className="about_image" />
          <p>
            <b>Cangeo</b> is a Tech firm located in Canada.
            <br />
            <br />
            We specialize in providing digital marketing solutions to your
            business needs.
            <br />
            <br />
            Its crucial to add status-quo marketing technologies in your
            toolbelt. Cangeo takes care of it.
          </p>
        </div>
      </div>

      <div id="services" className="services">
        <h1>Our services</h1>
        <div className="cardsContainer">
          <div className="card-container">
            <div className="assetContainer">
              <img src="./digital.svg" alt="" />
            </div>
            <div className="tsf">Digital Marketing</div>
          </div>
         
         
          <div className="card-container">
            <div className="assetContainer">
              <img src="./ux.svg" alt="" />
            </div>
            <div className="tsf">UX/UI/Graphic Design</div>
          </div>
          <div className="card-container">
            <div className="assetContainer">
              <img src="./video.svg" alt="" />
            </div>
            <div className="tsf">Videography</div>
          </div>
          <div className="card-container">
            <div className="assetContainer">
              <img src="./web.svg" alt="" />
            </div>
            <div className="tsf">Web/App Development</div>
          </div>
          <div className="card-container">
            <div className="assetContainer">
              <img src="./data.svg" alt="" />
            </div>
            <div className="tsf">Data Entry/Bill generation</div>
          </div>
          <div className="card-container">
            <div className="assetContainer">
              <img src="./medical.svg" alt="" />
            </div>
            <div className="tsf">Medical Coding</div>
          </div>
          
         
        </div>
      </div>
    </>
  );
}
