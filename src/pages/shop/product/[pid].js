import dynamic from "next/dynamic";

const DynamicProductDetails = dynamic(() => import("../../../components/ProductDetail/ProductDetail"));

const ProductDetails = () => {
  return <DynamicProductDetails/>;
};

export default ProductDetails;
