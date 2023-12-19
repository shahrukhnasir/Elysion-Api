import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomePage = dynamic(() => import("../AllPages/Home/Home.js"));

const index = () => {
  
useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
  AOS.init();

}, []);
  return (
    <>
      <HomePage />
    </>
  );
};

export default index;
