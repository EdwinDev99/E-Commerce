import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Collection from "../pages/Collection";

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
    ],
  },
]);

export default router;
