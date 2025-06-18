import React, { use } from "react"
import Header from "../parts/Header";
import Hero from "../parts/HomePage/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import Client from "../parts/Client";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDom from "../helpers/hooks/useModalDOM";

function HomePage() {
  useScrollAnchor();
  useModalDom();
  // This is a workaround to ensure the modal DOM is set up correctly

  return (   
    <>
        <Header theme="white" position="absolute"/>
        <Hero />  
        <BrowseRoom />
        <JustArrived />
        <Client /> 
        <Sitemap />
        <Footer />      
    </>
    );
}

export default HomePage
 