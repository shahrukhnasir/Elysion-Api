import React, { useEffect } from "react";
import HeroSection from "../HomePage/HeroSection/HeroSection";
import BrowseOurMedicalServices from "../HomePage/BrowseOurMedicalServices/BrowseOurMedicalServices";
import FindLocation from "../HomePage/FindLocation/FindLocation";
import PatientResources from "../HomePage/PatientResources/PatientResources";
import BecomeAmember from "../HomePage/BecomeAMember/BecomeAmember";
import ContactUs from "../HomePage/ContactUs/ContactUs";
import Accordions from "../HomePage/Accordions/Accordion";
import Blogs from "../HomePage/Blogs/Blogs";
import ProvidingBestMedicalServices from "../HomePage/ProvidingBestMedicalServices/ProvidingBestMedicalServices";
import { useDispatch } from "react-redux";
import { getAllServices } from "../../Redux/AllService/allServices";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllServices());
  }, []);
  return (
    <>
      <HeroSection />
      <ProvidingBestMedicalServices />
      <BrowseOurMedicalServices />
      <FindLocation />
      <PatientResources />
      <BecomeAmember />
      <Blogs />
      <Accordions />
      <ContactUs />
    </>
  );
};

export default Home;
