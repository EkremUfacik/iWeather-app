import Error from "@/components/Error";
import Details from "@/pages/Details";
import Home from "@/pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/details", element: <Details /> },
  { path: "*", element: <Error message="Page Not Found" /> },
]);

const AllRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AllRoutes;
