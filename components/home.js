import React from "react";
import { useEffect } from "react";
import Technologies from "../components/technologies";
import Skyline from "../components/skyline";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <>
      <div id="heroSection" className="hero">
        {/* <video
          id="#video"
          muted
          autoPlay={"autoplay"}
          loop
          src="./video.webm"
        /> */}
        <div className="backgroundfiller">
        <Skyline />
        </div>
        <div className="getQuote">
          <h1>Its hard to find things that won't sell online!</h1>
          <a href="#contact">
            <button className="btn"> Get Quote</button>
          </a>
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
      <div  className="technologies">
        <h1 className="about_heading">Technologies We Use</h1>
        <Technologies/>
      </div>
     
      <div id="about" className="about">
        <div className="aboutContent">
          <h1 className="about_heading">About Us</h1>
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
            <br />
            <br />
            We are committed to build best products by following an{" "}
            <b>User Centered Design</b> approach. We start right from
            wireframing, and then finalise the product design by various
            iterations which involves improvements. A modern product should be{" "}
            <b>Accessible, Reliable , Usable and Enjoyable</b>.
            <br />
            <br />
            We are equipped with server-side rendering technologies so that we
            can assure that all your products are <b> Search-engine ready</b>.
            We provide valuable customer support and would love to embark in a
            long-term relationships.
          </p>
        </div>
      </div>
    </>
  );
}
