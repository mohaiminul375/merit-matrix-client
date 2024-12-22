import logo from "../../assets/logo.jpg";
import playStore from "../../assets/playstore.png";
import appStore from "../../assets/appstore.png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLocationPin,
  FaXTwitter,
} from "react-icons/fa6";
import stripe from "../../assets/stripe.png";
const Footer = () => {
  return (
    <footer className="bg-primary mt-36 font-inter">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div className="flex items-center gap-3">
                <img className="w-10" src={logo} alt="" />
                <h2 className="font-dancing-Script font-bold text-2xl text-white">
                  Merit-Matrix
                </h2>
              </div>

              <p className="max-w-sm mt-2 text-white">
                Funding Futures, Inspiring Success.
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="text-white">
                <h3 className=" uppercase font-bold">Contact</h3>

                <span className="mt-2 text-sm hover:underline flex items-center">
                  <FaLocationPin /> Tejgaon, Dhaka
                </span>
                <span className="block mt-2 text-sm hover:underline">
                  +8809638-427423
                </span>
                <span className="block mt-2 text-sm  hover:underline">
                  merit-matrix@gmail.com
                </span>
              </div>

              <div className="text-white ">
                <h3 className="uppercase font-bold">Find us on</h3>
                <Link to="https://play.google.com">
                  <img className="w-32" src={playStore} alt="" />
                </Link>
                <Link to="https://www.apple.com/app-store">
                  <img className="w-32 mt-1" src={appStore} alt="" />
                </Link>
              </div>

              <div className="text-white">
                <h3 className="uppercase font-bold mb-5">Follow us on</h3>
                <div className="text-xl flex gap-5">
                  <Link target="_blank" to="https://www.facebook.com">
                    <FaFacebook />
                  </Link>
                  <Link target="_blank" to="https://x.com">
                    <FaXTwitter />
                  </Link>
                  <Link target="_blank" to="https://www.instagram.com">
                    <FaInstagram />
                  </Link>
                </div>
              </div>

              <div className="text-white">
                <h3 className="uppercase font-bold">Payment</h3>

                <img className="w-32" src={stripe} alt="" />
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-white" />

        <div>
          <p className="text-center text-white">
            © 2024 - All rights reserved by merit-matrix
          </p>
        </div>
        <div className="flex flex-col items-end text-white space-y-2 text-sm md:text-sm">
          <p>
            Design & Developed by:{" "}
            <Link to="https://mohaiminul-dev.web.app" className="underline hover:text-gray-300">
              Mohaiminul Islam
            </Link>
          </p>
          {/* <p>Version: V2 | Last Update: 22-Dec-2024</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
