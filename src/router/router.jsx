import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";


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
        path: "/jobs/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
      },
      {
        path: "/myApplications",
        element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
      },
      {
        path: "addJob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: "myPostedJobs",
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path: "viewApplications/:job_id",
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader: ({params}) => fetch( `http://localhost:5000/job-applications/jobs/${params.job_id}`)
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "singIn",
        element: <SignIn></SignIn>
      }
    ]
  },
]);

export default router;