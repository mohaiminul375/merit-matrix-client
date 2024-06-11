import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { IoLogOutOutline } from "react-icons/io5";
import useAdmin from "../../hooks/useAdmin";
const Navbar = () => {
  const { isAdminOrMod } = useAdmin();
  console.log(isAdminOrMod)
  // const {user}=useContext(AuthContext);
  const { user, logOut } = useAuth();
  console.log(user);
  const navLins = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg font-bold underline text-[#0089F7]" : "text-lg"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-lg font-bold underline text-[#0089F7]" : "text-lg"
        }
        to="/all-scholarship"
      >
        All Scholarship
      </NavLink>
      {isAdminOrMod === "Admin" && (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-lg font-bold underline text-[#0089F7]" : "text-lg"
          }
          to="/dashboard/admin-Home"
        >
          Dashboard
        </NavLink>
      )}
      {isAdminOrMod === "Moderator" && (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-lg font-bold underline text-[#0089F7]" : "text-lg"
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      )}
      {isAdminOrMod === 'User'&& (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-lg font-bold underline text-[#0089F7]" : "text-lg"
          }
          to="/dashboard/my-application"
        >
          Dashboard
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 justify-between md:px-5 shadow-xl z-10">
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
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLins}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-10 md:w-16" src={logo} alt="" />
          <h2 className="font-dancing-Script font-bold text-sm md:text-3xl">
            MeritMatrix
          </h2>
        </div>
      </div>
      {/* right */}
      {
        <div className="gap-8">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5 items-center">
              {navLins}
            </ul>
          </div>
          {/* login register conditon */}
          {user ? (
            <div className="dropdown dropdown-end z-10">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle border-2 border-[#0089F7] avatar "
              >
                <div title={user?.displayName} className="w-10 rounded-full ">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#E8F6FC] text-[#1EA9E4]  rounded-box w-52"
              >
                <li className="text-center font-bold">
                  <h3 className="flex justify-center text-base mb-3">
                    {user?.displayName}
                  </h3>
                </li>

                <li className="border-b-2 border-[#1EA9E4] hover:border-2 border-1 hover:rounded-md"></li>

                <li className="mt-2">
                  <button
                    onClick={logOut}
                    className="bg-[#1EA9E4] text-white text-center hover:border-2 flex items-center gap-2 justify-center"
                  >
                    Logout <IoLogOutOutline />
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-bold underline text-[#0089F7]"
                    : "text-lg"
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg text-[#0089F7] border-2 rounded-full p-2 border-[#E8F6FC] bg-[#E8F6FC] ml-6"
                    : "text-lg border-2 rounded-full p-2 border-[#E8F6FC] bg-[#E8F6FC] ml-6"
                }
                to="/register"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default Navbar;
