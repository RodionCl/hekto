import { useFetch } from "@/hooks/useFetch";
import { Product } from "@/interfaces/Product";
import { fetchSingleProduct } from "@/utils/fetch/fetchProducts";
import { useParams } from "react-router-dom";

export const useProductDetails = () => {
  const { id } = useParams();

  const { fetchedData: product, isFetching } = useFetch<Product | null>(
    () => (id ? fetchSingleProduct(id) : Promise.resolve(null)),
    null,
    [id],
  );

  return { id, product, isFetching };
};
