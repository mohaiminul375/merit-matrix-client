import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { GiSchoolBag } from "react-icons/gi";
import AddScholarship from "../Pages/Dashboard/AddScholarship";
import AdminHome from "../Pages/Dashboard/AdminHome";
import ManageScholarship from "../Pages/Dashboard/ManageScholarship";
import AllScholarship from "../Pages/AllScholarship/AllScholarship";
import ScholarshipDetails from "../Pages/ScholarshipDetails/ScholarshipDetails";
import AllUser from "../Pages/Dashboard/AllUser";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../Pages/Checkout/Checkout";
import AdminAndModeratorRoute from "./AdminAndModeratorRoute";
import ManageAppliedScholarship from "../Pages/Dashboard/ManageAppliedScholarship";
import MyApplication from "../Pages/MyApplication/MyApplication";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-Scholarship",
        element: <AllScholarship></AllScholarship>,
      },
      {
        path: "/scholarship-details/:id",
        element: <PrivateRoute><ScholarshipDetails></ScholarshipDetails></PrivateRoute>,
      },
      {
        path:"/checkout/:id",
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
     
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin
      {
        path: "admin-Home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "add-scholarship",
        element: <AddScholarship></AddScholarship>,
      },
      {
        path: "manage-scholarship",
        element: <ManageScholarship></ManageScholarship>,
      },
      {
        path: "all-user",
        element: <AllUser></AllUser>,
      },
      {
        path:'manage-applications',
        element:<AdminAndModeratorRoute><ManageAppliedScholarship></ManageAppliedScholarship></AdminAndModeratorRoute>
      },
      {
        path:'my-application',
        element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
      }
    ],
  },
]);
