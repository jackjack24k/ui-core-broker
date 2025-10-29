import ProductPage from "@/components/ProductPage";
import { tradingAppData } from "@/data/productData";

const TradingApp = () => {
  return <ProductPage {...tradingAppData} />;
};

export default TradingApp;

