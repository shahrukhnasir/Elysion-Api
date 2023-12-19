import React from "react";
import HeroSection from "../HomePage/HeroSection/HeroSection";
import BrowseOurMedicalServices from "../HomePage/BrowseOurMedicalServices/BrowseOurMedicalServices";
import FindLocation from "../HomePage/FindLocation/FindLocation";
import PatientResources from "../HomePage/PatientResources/PatientResources";
import BecomeAmember from "../HomePage/BecomeAMember/BecomeAmember";
import ContactUs from "../HomePage/ContactUs/ContactUs";
import Accordions from "../HomePage/Accordions/Accordion";
import Blogs from "../HomePage/Blogs/Blogs";
import ProvidingBestMedicalServices from "../HomePage/ProvidingBestMedicalServices/ProvidingBestMedicalServices";

const Home = () => {
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
