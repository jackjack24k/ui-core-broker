import ProductPage from "@/components/ProductPage";
import { copyTradingData } from "@/data/productData";

const CopyTrading = () => {
  return <ProductPage {...copyTradingData} />;
};

export default CopyTrading;

