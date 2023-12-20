import dynamic from "next/dynamic";

const DynamicService = dynamic(() => import("../../../components/AllServices/AllServices"));

const AllServices = () => {
  return <DynamicService />;
};

export default AllServices;
