import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
const Navbar = () => {
  const navLins = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-xl font-bold border-b-2 border-[#FC9928]" : "text-xl"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-xl font-bold border-b-2 border-[#FC9928]" : "text-xl"
        }
        to="/all-scholarship"
      >
        All Scholarship
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 justify-between px-5">
      <div className="w">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-16" src={logo} alt="" />
          <h2>MeritMatrix</h2>
        </div>
      </div>
      {/* right */}
      <div className="gap-8">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 items-center">
            {navLins}
          </ul>
        </div>
        <div className="">
          <NavLink
           className={({ isActive }) =>
            isActive ? "text-xl font-bold border-b-2 border-[#FC9928]" : "text-xl"
          }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink 
          
          className={({ isActive }) =>
            isActive
              ? "text-lg border-2 rounded-full p-2 border-black bg-[#FC9928] ml-6"
              : "text-lg border-2 rounded-full p-2 border-[#FC9928] bg-[#FC9928] ml-6"
          } to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
