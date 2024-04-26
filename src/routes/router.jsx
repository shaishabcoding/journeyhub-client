import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layout/Root";
import Register from "../pages/signInUp/Register";
import AddSpot from "../pages/addSpot/AddSpot";
import SpotDetails from "../pages/spotDetails/SpotDetails";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/signInUp/Login";
import Error from "../pages/404/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/spots"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/spots/new",
        element: (
          <PrivateRoute>
            <AddSpot></AddSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/spot/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/spot/${params.id}`),
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
