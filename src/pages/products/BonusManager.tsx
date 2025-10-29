import ProductPage from "@/components/ProductPage";
import { bonusManagerData } from "@/data/productData";

const BonusManager = () => {
  return <ProductPage {...bonusManagerData} />;
};

export default BonusManager;

