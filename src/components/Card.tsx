import useProducts from "../hooks/useProducts";

type CardProps = {
  limit?: number;
};

function Card({ limit }: CardProps) {
  const { data, error, isLoading } = useProducts();

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

  return (
    <div>
      <ul className="flex flex-wrap justify-around ">
        {visibleProducts?.map((product) => (
          <li className="w-2xl  " key={product.id}>
            <img className="h-90" src={product.image} alt={product.name} />
            <h2 className="text-white py-5">{product.name}</h2>
            <p className="text-white py-5">${product.priceCents}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
