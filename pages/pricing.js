import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Skyline from "../components/skyline";
import Footer from "../components/footer";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";
import { useRouter } from "next/router";
export default function Pricing() {
  const router = useRouter();
  let basicComponents = [];
  let intermediateComponents = [];
  let advancedComponents = [];
  let digitalmarketingComponents = [];

  const basic = [
    "Free Domain",
    "6 Pages Hosting",
    "Business Email Id",
    "SEO Ready Website",
    "Mobile Friendly Website",
    "Unlimited Images and Videos",
    "Unlimited Bandwidth/Space",
    "24/7 Support",
  ];
  const intermediate = [
    "All from basic",
    "12 Pages",
    "Professional Logo",
    "UI/UX Design",
    "Fast/Server Side Rendering",
    "Additional Database Services",
  ];
  const digitalMarketing = [
    "Banner",
    "Logo/Mascot",
    "Graphic Design/Animation",
   
    "SEO/SMO",
    "Social Media Marketing",
    "Email Marketing",
    "Video Advertising",
    "Content Marketing",
    "Google Analytics/Adwords",
    "Facebook ads",
  ];
  const advanced = [
    "Digital Marketing/Web Development",
    "25 Pages",
    "All from INTERMEDIATE",
    "All from DIGITAL MARKETING",
  ];

  basic.forEach((detail) => {
    basicComponents.push(<PricingDetail>{detail}</PricingDetail>);
  });
  intermediate.forEach((detail) => {
    intermediateComponents.push(<PricingDetail>{detail}</PricingDetail>);
  });
  advanced.forEach((detail) => {
    advancedComponents.push(<PricingDetail>{detail}</PricingDetail>);
  });
  digitalMarketing.forEach((detail) => {
    digitalmarketingComponents.push(<PricingDetail>{detail}</PricingDetail>);
  });

  return (
    <>
      <Navbar />
      <div className="pricing">
        <PricingTable highlightColor="#ef233c">
          <PricingSlot
            highlighted
            buttonText="SIGN UP"
            onClick={() => router.push("/#contact")}
            title="BASIC"
            priceText="$300 + $100 Annual"
          >
            {basicComponents}
          </PricingSlot>
          <PricingSlot
            buttonText="SIGN UP"
            onClick={() => router.push("/#contact")}
            title="INTERMEDIATE"
            priceText="$500 + $150 Annual"
          >
          {intermediateComponents}
          </PricingSlot>
          <PricingSlot
            buttonText="SIGN UP"
            onClick={() => router.push("/#contact")}
            title="DIGITAL MARKETING"
            priceText="$600 + $100 Annual"
          >
           {digitalmarketingComponents}
          </PricingSlot>
          <PricingSlot
            buttonText="SIGN UP"
            onClick={() => router.push("/#contact")}
            title="E-COMMERCE"
            priceText="$1500 + $100 Annual"
          >
           
          </PricingSlot>
          
          <PricingSlot
            buttonText="SIGN UP"
            onClick={() => router.push("/#contact")}
            title="ADVANCED"
            priceText="$1500 + $150 Annual"
          >
           {advancedComponents}
          </PricingSlot>
        </PricingTable>
      </div>
      
      <Footer/>
    </>
  );
}
