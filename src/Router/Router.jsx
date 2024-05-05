import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import BookingServices from "../pages/Booking/BookingServices";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import OrderDetails from "../pages/OrderDetails/OrderDetails";
import SignUp from "../pages/SignUp/SignUp";
import Private from "./Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/checkOut/:id",
        // loader: ({ params }) => {
        //   return fetch(`http://localhost:5000/services/${params.id}`);
        // },
        element: <Checkout></Checkout>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/booking/:id",
        element: (
          <Private>
            <BookingServices></BookingServices>
          </Private>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/services/${params.id}`);
        },
      },
      {
        path: "/order-details",
        element: (
          <Private>
            <OrderDetails></OrderDetails>
          </Private>
        ),
      },
    ],
  },
]);

export default router;
