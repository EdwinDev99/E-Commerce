import { FiShoppingBag } from "react-icons/fi";
import { Link, NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-black text-white h-24 flex items-center justify-between px-6">
        <ul className="flex gap-10" role="menubar">
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-gray-500"} cursor-pointer hover:text-gray-300`
              }
              role="menuitem"
            >
              COLECCIÓN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-gray-500"} cursor-pointer hover:text-gray-300`
              }
              role="menuitem"
            >
              CONTACTO
            </NavLink>
          </li>
        </ul>

        <h1 className="text-3xl font-serif tracking-wider">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            ÀTELIER
          </Link>
        </h1>

        <Link
          to="/store"
          aria-label="Ir al carrito"
          className="flex items-center gap-1.5 "
        >
          <FiShoppingBag size={30} />
          <span className="bg-white text-black text-xs rounded-full px-2">
            0
          </span>
        </Link>
      </nav>

      {/* Outlet para rutas hijas */}
      <Outlet />
    </>
  );
}

export default Navbar;
