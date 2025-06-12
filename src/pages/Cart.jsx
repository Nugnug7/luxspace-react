import React from "react"
import Header from "../parts/Header" ;
import Breadcrumb from "../components/Breadcrumb"; 

import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetail from "../parts/Cart/ShippingDetail";

import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";


function Details() {
  return (    
    <>
        <Header theme="black"/>
        <Breadcrumb List={[
            {url: "/", name: "Home"},
            {url: "/cart", name: "Shopping Cart"},
        ]} 
        />

        <section className="md:py-16">
            <div className="container mx-auto px-4">
                <div className="flex -mx-4 flex-wrap">
                    <ShoppingCart />
                    <ShippingDetail />
                </div>
             </div>
        </section>


        <Sitemap />
        <Footer />     

    </>
    );
}

export default Details;
 