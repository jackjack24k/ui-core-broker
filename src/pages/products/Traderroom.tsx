import ProductPage from "@/components/ProductPage";
import { traderroomData } from "@/data/productData";

const Traderroom = () => {
  return <ProductPage {...traderroomData} />;
};

export default Traderroom;

