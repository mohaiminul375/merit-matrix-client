import { Outlet } from "react-router-dom";
import Navbar from "../component/Shared/Navbar";
import Footer from "../component/Shared/Footer";

const Main = () => {
  return (
    <div className="font-inter">
      <Navbar></Navbar>
      <div className=" pt-28">
        <div className="md:max-w-screen-xl mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
