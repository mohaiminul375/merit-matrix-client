import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const { user } = useAuth();
  const { isAdminOrMod } = useAdmin();
  console.log(isAdminOrMod);
  return (
    <div className="sm:drawer md:flex">
      <aside className="min-h-screen flex flex-col  md:max-w-64 px-4 py-8 overflow-y-auto bg-[#E8F6FC] border-r rtl:border-r-0 rtl:border-l">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src={user?.photoURL}
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium text-black">
            {user?.displayName}
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-black">
            {user?.email}
          </p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="flex flex-col space-y-5">
            {/* admin home */}
            {isAdminOrMod == "Admin" && (
              <>
                <NavLink
                  to="admin-Home"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg w-full font-medium flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                      : ""
                  }
                >
                  {" "}
                  <span className="mx-4">Admin Home</span>
                </NavLink>
                <NavLink
                  to="add-scholarship"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-bold w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                      : ""
                  }
                >
                  <span className="mx-4">Add Scholarship</span>
                </NavLink>
                <NavLink
                  to="manage-scholarship"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg w-full font-medium flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                      : ""
                  }
                >
                  <span className="mx-4">Manage Scholarship</span>
                </NavLink>
                <NavLink
                  to="manage-applications"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-medium w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                      : ""
                  }
                >
                  <span className="mx-4">Manage Applied Scholarship</span>
                </NavLink>
                <NavLink
                  to="all-user"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-medium w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                      : ""
                  }
                >
                  <span className="mx-4">All User</span>
                </NavLink>
                <NavLink
                  to="all-review"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-medium w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                      : ""
                  }
                >
                  <span className="mx-4">Manage Review</span>
                </NavLink>
                <hr className="border-[#0089F7] border-b-2 w-full mt-5"></hr>
              </>
            )}
            {/* moderator */}
            {isAdminOrMod == "Moderator" && (
              <>
                <NavLink
                  to="moderator-Home"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg w-full font-medium flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                      : ""
                  }
                >
                  {" "}
                  <span className="mx-4">Moderator Home</span>
                </NavLink>
                <NavLink
                  to="add-scholarship"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-bold w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                      : ""
                  }
                >
                  <span className="mx-4">Add Scholarship</span>
                </NavLink>
                <NavLink
                  to="manage-scholarship"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg w-full font-medium flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                      : ""
                  }
                >
                  <span className="mx-4">Manage Scholarship</span>
                </NavLink>
                <NavLink
                  to="manage-applications"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-medium w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                      : ""
                  }
                >
                  <span className="mx-4">Manage Applied Scholarship</span>
                </NavLink>
                <NavLink
                  to="all-review"
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-medium w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                      : ""
                  }
                >
                  <span className="mx-4">Manage Review</span>
                </NavLink>
                <hr className="border-[#0089F7] border-b-2 w-full mt-5"></hr>
              </>
            )}
            {/* All User */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-medium w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                  : ""
              }
            >
              <span className="mx-4">Home</span>
            </NavLink>
            <NavLink
              to="my-application"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-medium w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                  : ""
              }
            >
              <span className="mx-4">My Application</span>
            </NavLink>
          </nav>
        </div>
      </aside>
      {/* <input id="my-drawer" type="checkbox" className="drawer-toggle" /> */}
      <div className="p-6 sm:drawer-content flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
