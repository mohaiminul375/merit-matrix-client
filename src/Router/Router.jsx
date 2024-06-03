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
        element: <ScholarshipDetails></ScholarshipDetails>,
        
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
    ],
  },
]);
