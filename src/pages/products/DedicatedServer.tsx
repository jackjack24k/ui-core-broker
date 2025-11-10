import ProductPage from "@/components/ProductPage";
import { dedicatedServerData } from "@/data/productData";

const DedicatedServer = () => {
  return <ProductPage {...dedicatedServerData} />;
};

export default DedicatedServer;

