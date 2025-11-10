import ProductPage from "@/components/ProductPage";
import { consultingData } from "@/data/productData";

const Consulting = () => {
  return <ProductPage {...consultingData} />;
};

export default Consulting;

