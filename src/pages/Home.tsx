import { useNavigate } from "react-router-dom";
import hero from "../assets/hero-fashion.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="relative">
      <div>
        <img src={hero} alt="hero" className="w-full max-h-screen" />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-black text-8xl font-serif ">Nueva Colección</h1>
        <p className="text-gray-900 text-3xl">Primavera — Verano 2026</p>
        <button
          onClick={() => navigate("/products")}
          className="py-6 px-12 border rounded-2xl m-10 hover:bg-black hover:text-white hover:border-black cursor-pointer  "
        >
          Explorer
        </button>
      </div>
    </section>
  );
}

export default Home;
