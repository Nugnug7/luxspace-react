import React from "react"
import { Link } from "react-router";
import Header from "../parts/Header" ;
import Breadcrumb from "../components/Breadcrumb"; 

import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetail from "../parts/Cart/ShippingDetail";

import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer"; 


function Congratulation() {
  return (  

    <>     
     <Header theme="black"/>
     <Breadcrumb List={[
        {url: "/", name: "Home"},
        {url: "/congratulation", name: "Success Checkout"},        
     ]} 
    />
    
    <section className="">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center">
            <img
              src="/images/contents/illustration-success.png"
              alt="congrats illustration"
            />
            <h2 className="text-3xl font-semibold mb-6">Ah yes it’s success!</h2>
            <p className="text-lg mb-12">
              Furniture yang anda beli akan kami kirimkan saat ini juga so now
              please sit tight and be ready for it
            </p>
            <Link
              to="/"
              className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
    
    <Sitemap />
    <Footer />
    </>

  )
}

export default Congratulation
