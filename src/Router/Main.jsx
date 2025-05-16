import { Outlet } from "react-router-dom";
import Navbar from "../component/Shared/Navbar";
import Footer from "../component/Shared/Footer";

const Main = () => {
  return (
    <div className="font-inter">
      <Navbar></Navbar>
      <div className="bg-secondary pt-28 ">
        <div className="md:max-w-screen-xl mx-auto min-h-screen pb-20">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
