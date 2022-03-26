import React from 'react'

export default function home() {
  return (
    <>  
    <div className="navContainer">
        <div className="logoContainer" >
           <a className="logoLink" href="#heroSection">
               <img style={{height:'30px'}} src="cangeo.svg" alt="cangeo" />
           </a>
        </div>
        <nav className="navLinksContainer">
            <a href="#about">About       </a>
            <a href="#services">Services </a>
            <a href="#contact">Contact   </a>
        </nav>
    </div>
   
    
    <div id="heroSection" className="hero">
        <div className="getQuote">
            <h1>Its hard to find things that won't sell online!</h1>
            <a href="#contact"><button className="btn"> Get Quote</button></a>
            
        </div>
        <img className="heroImage" src="hero_image.svg" alt="" />
    </div>
   
    <div id="about" className="about">
    <h1 className="about_heading">About Us</h1>
        <div className="aboutContent">
            <img src="./about.svg" alt="about image" className="about_image"/>
            <p><b>Cangeo</b> is a Tech firm located in Canada.
            <br/><br/>We specialize in providing digital marketing solutions to your business needs.
                <br/><br/>Its crucial to add status-quo marketing technologies in your toolbelt. Cangeo takes care of it. 
        </p>
        </div>
    </div>
   

    <div id="services" className="services">
        <h1>Our services</h1>
        <div className="cardsContainer">
            <div className="card-container">
                <div className="assetContainer">
                <img src="./seo.svg" alt="" />
                </div>
                <div className="tsf">Search Engine Optimization</div>
            </div>
            <div className="card-container">
                <div className="assetContainer">
                  <img src="./email.svg" alt="" />
                </div>
                <div className="tsf">E-Mail Campaigning</div>
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
                <div className="tsf">Data Entry</div>
            </div>
            <div className="card-container">
                <div className="assetContainer">
                    <img src="./medical.svg" alt="" />
                </div>
                <div className="tsf">Medical Coding</div>
            </div>
            <div className="card-container">
                <div className="assetContainer">
                    <img src="./bill.svg" alt="" />
                </div>
                <div className="tsf">Bill Generation</div>
            </div>
            <div className="card-container">
                <div className="assetContainer">
                    <img src="./content.svg" alt="" />
                </div>
                <div className="tsf">Content Creation</div>
            </div>
        </div>
    </div>
  

    
    
    </>
  )
}
