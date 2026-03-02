import { useQuery } from "@tanstack/react-query";
import type { ProductType } from "../types/ProductType";

const queryProducts = (): Promise<ProductType[]> =>
  fetch(
    "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json",
  ).then((response) => {
    if (!response.ok) throw Error(`Error${response.status}`);
    return response.json();
  });

function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: queryProducts,
  });
}
export default useProducts;
