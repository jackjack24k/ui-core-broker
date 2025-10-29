import ProductPage from "@/components/ProductPage";
import { crmData } from "@/data/productData";

const CRM = () => {
  return <ProductPage {...crmData} />;
};

export default CRM;

