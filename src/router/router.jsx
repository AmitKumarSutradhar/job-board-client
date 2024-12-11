import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Home/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            errorElement: <h2>Route not found.</h2>,
            element: <Home></Home>
        },
        {
            path: "register",
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;