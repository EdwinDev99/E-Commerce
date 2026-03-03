import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Collection from "../pages/Collection";
import ProductsDetails from "../pages/ProductsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Collection />,
      },
      {
        path: "store",
        element: <>Store</>,
      },
      {
        path: "products/:id",
        element: <ProductsDetails />,
      },
    ],
  },
]);

export default router;
