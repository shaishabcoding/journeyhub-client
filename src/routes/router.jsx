import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layout/Root";
import Register from "../pages/signInUp/Register";
import AddSpot from "../pages/addSpot/AddSpot";
import UpdateSpot from "../pages/updateSpot/UpdateSpot";
import SpotDetails from "../pages/spotDetails/SpotDetails";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/signInUp/Login";
import Error from "../pages/404/Error";
import AllSpots from "../pages/allSpots/AllSpots";
import MySpot from "../pages/mySpot/MySpot";
import Country from "../pages/spotsCountry/Country";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://journey-hub-server.vercel.app/spots"),
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
        path: "/spot/update/:id",
        loader: ({ params }) =>
          fetch(`https://journey-hub-server.vercel.app/spot/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateSpot></UpdateSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/spots/all",
        element: <AllSpots></AllSpots>,
      },
      {
        path: "/spot/:id",
        loader: ({ params }) =>
          fetch(`https://journey-hub-server.vercel.app/spot/${params.id}`),
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/spots/my",
        element: (
          <PrivateRoute>
            <MySpot></MySpot>
          </PrivateRoute>
        ),
      },
      {
        path: "spots/country/:country",
        element: <Country></Country>,
        loader: ({ params }) =>
          fetch(
            `https://journey-hub-server.vercel.app/spots/country/${params.country}`
          ),
      },
    ],
  },
]);

export default router;
