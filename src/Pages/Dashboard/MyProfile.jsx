import React from "react";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const MyProfile = () => {
  const { isAdminOrMod } = useAdmin();
  const { user } = useAuth();
  return (
    <div className="md:max-w-xl mx-auto bg-[#E8F6FC] rounded-md  p-10 text-[#1E62D5]">
      <div className="text-center font-bold text-3xl text-[#1E62D5] ">
        <h2>My Profile</h2>
      </div>
      <div className="">
        <div className="flex flex-col items-center mt-8 space-y-8">
          <div>
            <h2 className="font-bold text-xl underline">Profile Photo</h2>
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src={user?.photoURL}
              alt="avatar"
            />
          </div>
          <div className="space-y-3 flex-col justify-center items-center text-center">
            <div>
              <h2 className="font-bold text-xl underline">Name</h2>
              <p className="text-lg">{user?.displayName}</p>
            </div>
            <div>
              <h2 className="font-bold text-xl underline">Email</h2>
              <p className="text-lg">{user?.email}</p>
            </div>
            <div>
              <h2 className="font-bold text-xl underline">Role</h2>
              <p className="text-lg font-extrabold">{isAdminOrMod}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
