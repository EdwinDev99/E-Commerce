import Card from "../components/Card";

function Collection() {
  return (
    <div className=" flex flex-col bg-black pt-50 ">
      <header className="text-white text-center">
        <h2 className="text-6xl font-serif pb-5">Colección</h2>
        <p className="font-serif text-gray-500 text-2xl pb-20 ">
          Piezas esenciales para cada momento
        </p>
      </header>
      <section className="grid grid-cols-1 gap-6 mx-auto max-w-7xl">
        <Card />
      </section>
    </div>
  );
}

export default Collection;
