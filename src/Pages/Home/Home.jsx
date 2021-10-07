import React from "react";
import Navbar from "../../Shared/Header/navbar";
import Categories from "./categories";
import Deals from "./deals";


function Home() {
  
  return (
    <>
      <Navbar />

      <Categories />
     
      
        <Deals category={"Fashion"} />
        <Deals category={"Gadgets"} />
        <Deals category={"Footwear"} />
        <Deals category={"Beauty&Makeup"} />
        <Deals category={"Accessories"} />
        <Deals category={"Handbags&Bags"} />
 
 </>
  );
}

export default Home;
