import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { GiSchoolBag } from "react-icons/gi";
import AddScholarship from "../Pages/Dashboard/AddScholarship";
import AdminHome from "../Pages/Dashboard/AdminHome";

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
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin
      {
        path:'admin-Home',
        element:<AdminHome></AdminHome>
      },
      {
        path:'add-scholarship',
        element:<AddScholarship></AddScholarship>
      },
    ],
  },
]);
