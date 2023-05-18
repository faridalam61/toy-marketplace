import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllToy from "../Pages/AllToy";
import MyToy from "../Pages/MyToy";
import AddToy from "../Pages/AddToy";
import Blog from "../Pages/Blog";
import NotFound from "../Pages/NotFound";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-toy",
        element: <AllToy />,
      },
      {
        path: "/my-toy",
        element: <MyToy />,
      },
      {
        path: "/add-a-toy",
        element: <AddToy />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default routers;
