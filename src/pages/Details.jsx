import React from "react"
import Header from "../parts/Header" ;
import Breadcrumb from "../components/Breadcrumb/index"; 

// import BrowseRoom from "../parts/HomePage/BrowseRoom";
// import JustArrived from "../parts/HomePage/JustArrived";
import Client from "../parts/Client";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

function Details() {
  return (    
    <>
        <Header theme="black"/>
        <Breadcrumb List={[
            {url: "/", name: "Home"},
            {url: "/categories/91231", name: "Office Room"},
            {url: "/categories/91231/products/7888", name: "Details"},     
        ]} 
        /> 

        <Client /> 
        <Sitemap /> 
        <Footer />     
    </>
    );
}

export default Details;
 