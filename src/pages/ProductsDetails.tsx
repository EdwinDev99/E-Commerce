import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { useState } from "react";

function ProductsDetails() {
  const [amountProduct, setAmountProduct] = useState(0);

  const { id } = useParams();
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <h2>Cargando...</h2>;
  if (error instanceof Error) return <h2>{error.message}</h2>;

  const product = data?.find((p) => String(p.id) === id);

  if (!product) return <h2>Producto no encontrado</h2>;

  const sumProduct = () => {
    setAmountProduct(amountProduct + 1);
  };

  const resProduct = () => {
    setAmountProduct((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-10">
      <div className="max-w-6xl w-full flex gap-16">
        <div className="flex-1 flex justify-center">
          <img
            className="w-125 h-125 object-cover rounded-2xl"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center py-6">
          <h2 className="text-5xl font-serif text-white">{product.name}</h2>

          <p className="text-3xl text-gray-300 py-6">${product.priceCents}</p>

          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={() => resProduct()}
              className="bg-gray-700 text-white text-2xl px-6 py-3 rounded-xl hover:bg-gray-600 transition"
            >
              -
            </button>
            <span className="text-white text-3xl">{amountProduct}</span>

            <button
              onClick={() => sumProduct()}
              className="bg-gray-700 text-white text-2xl px-6 py-3 rounded-xl hover:bg-gray-600 transition"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsDetails;
