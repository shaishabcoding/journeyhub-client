import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layout/Root";
import Register from "../pages/signInUp/Register";
import AddSpot from "../pages/addSpot/AddSpot";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/signInUp/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
    ],
  },
]);

export default router;
