import ProductPage from "@/components/ProductPage";
import { propFundingData } from "@/data/productData";

const PropFunding = () => {
  return <ProductPage {...propFundingData} />;
};

export default PropFunding;

