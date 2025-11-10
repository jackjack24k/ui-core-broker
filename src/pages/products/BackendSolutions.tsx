import ProductPage from "@/components/ProductPage";
import { backendSolutionsData } from "@/data/productData";

const BackendSolutions = () => {
  return <ProductPage {...backendSolutionsData} />;
};

export default BackendSolutions;

