import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="sm:drawer md:flex">
 
      <aside className="flex flex-col  md:max-w-64 px-4 py-8 overflow-y-auto bg-[#E8F6FC] border-r rtl:border-r-0 rtl:border-l">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col items-center mt-6 -mx-2">
       
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
            John Doe
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            john@example.com
          </p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="flex flex-col space-y-5">
            {/* admin home */}
            <NavLink
              to="admin-Home"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                  : ""
              }
            >
              {" "}
              <span className="mx-4 font-medium">Admin Home</span>
            </NavLink>
            <NavLink
              to="add-scholarship"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                  : ""
              }
            >
              <span className="mx-4 font-medium">Add Scholarship</span>
            </NavLink>
            <NavLink
              to="manage-scholarship"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                  : ""
              }
            >
              <span className="mx-4 font-medium">Manage Scholarship</span>
            </NavLink>
            <NavLink
              to="manage-applications"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                  : ""
              }
            >
              <span className="mx-4 font-medium">
                Manage Applied Scholarship
              </span>
            </NavLink>
            <NavLink
              to="all-scholarship"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                  : ""
              }
            >
              <span className="mx-4 font-medium">All User</span>
            </NavLink>
            <NavLink
              to="all-review"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold w-full flex items-center px-4 py-1 rounded-full bg-[#0089F7] text-white"
                  : ""
              }
            >
              <span className="mx-4 font-medium">Manage Review</span>
            </NavLink>
            <hr className="border-[#0089F7] border-b-2 w-full mt-5"></hr>
            {/* All User */}
            <NavLink
              to="/"
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 mt-5"
            >
              <span className="mx-4 font-medium">Home</span>
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
