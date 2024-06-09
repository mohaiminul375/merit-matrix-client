
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RingLoader } from "react-spinners";
import UsersTable from "../../component/UsersTable";
import { useState } from "react";

const AllUser = () => {
  const [role,setRole]=useState('');
  console.log(role)
  const axiosSecure = useAxiosSecure();
  const { data: users, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users?role=${role}`);
      return data;
    },
    queryKey: ["all-user",role],
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }
  //   console.log(users);
  return (
    <div>
      <div className="text-center">
        <h4 className="font-bold text-lg">Manage User</h4>
        <h2 className="font-bold text-3xl font-cinzel text-[#1E62D5]">
          Manage All User Data
        </h2>
      </div>
      <div className="mt-5 flex justify-end">
        {/* TODO:add filter */}
        <select
        defaultValue={role}
        onChange={(e)=>setRole(e.target.value)}
        className="select select-bordered w-1/4">
          
          
          <option value=''>
            All User
          </option>
          <option value='Admin'>Admin</option>
          <option value='Moderator'>Moderator</option>
          <option value='User'>User</option>

        </select>
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="border bg-[#E8F6FC] text-[#1E62D5] font-bold">
              <tr>
                <th>Sl No</th>
                <th> Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, idx) => (
                <UsersTable key={user._id} idx={idx} user={user}></UsersTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
