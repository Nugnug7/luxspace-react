import React from "react"
import Header from "../parts/Header" ;
import Hero from "../parts/Hero"  ;
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import JustArrived from "../parts/HomePage/JustArrived";
import Client from "../parts/Client";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

function HomePage() {
  return (  
    <>
        <Header />
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
 