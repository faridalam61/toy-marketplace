import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllToy from "../Pages/AllToy";
import AddToy from "../Pages/AddToy";
import Blog from "../Pages/Blog";
import NotFound from "../Pages/NotFound";
import UpdateToy from "../Pages/UpdateToy";
import MyToys from "../Pages/MyToys";



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
        element: <MyToys />,
      },
      {
        path: "/add-a-toy",
        element: <AddToy />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path:'/update/:id',
        element:<UpdateToy/>
      }
    ],
  },
]);

export default routers;
