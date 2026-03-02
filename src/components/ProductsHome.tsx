import Card from "./Card";

function ProductsHome() {
  return (
    <section className="flex flex-col justify-center items-center p-5 bg-black">
      <h2 className="text-white text-6xl font-serif p-10">Coleccion</h2>
      <p className="text-2xl text-gray-500 pb-20 font-serif">
        Piezas esenciales para cada momento
      </p>
      <Card limit={4} />
    </section>
  );
}

export default ProductsHome;
