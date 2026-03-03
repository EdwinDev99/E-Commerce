import useProducts from "../hooks/useProducts";
import type { ProductType } from "../types/ProductType";
import { useNavigate } from "react-router-dom";

type CardProps = {
  limit?: number;
};

function Card({ limit }: CardProps) {
  const { data, error, isLoading } = useProducts();
  const navigate = useNavigate();

  if (error instanceof Error) {
    return <h2>{error.message} :(</h2>;
  }

  if (isLoading) return <h2>Cargando....</h2>;

  const filteredProducts = data?.filter(
    (product) => product.category === "Fashion & Apparel",
  );

  const visibleProducts = limit
    ? filteredProducts?.slice(0, limit)
    : filteredProducts;

  const goToProductsDetails = (product: ProductType) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="p-8">
      <ul className="flex flex-wrap justify-around gap-6">
        {visibleProducts?.map((product) => (
          <li
            onClick={() => goToProductsDetails(product)}
            className="
            w-72 
            bg-gray-900 
            border border-white 
            rounded-xl 
            overflow-hidden 
            transform transition-transform duration-300 
            hover:scale-105 hover:shadow-2xl
          "
            key={product.id}
          >
            <img
              className="h-64 w-full object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="p-5 text-center">
              <h2 className="text-amber-100 font-semibold text-lg">
                {product.name}
              </h2>
              <p className="text-white font-bold mt-2">${product.priceCents}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
