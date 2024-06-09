import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";


const UsersTable = ({ idx, user }) => {
  const axiosSecure = useAxiosSecure();
  const { _id, email, name, role } = user;
  //   const [selectedRole,setRole]=useState()
  const queryClient = useQueryClient();

  // update user role
  const { mutateAsync: updateFunc } = useMutation({
    mutationFn: async ({ _id, updatedRole }) => {
      const { data } = await axiosSecure.patch(
        `/user/role/${_id}`,
        updatedRole
      );
      console.log("update res", data);
      return data;
    },
    onSuccess: (data) => {
      if (data.modifiedCount > 0)
        Swal.fire({
          title: "Updated!",
          text: "User role update successfully",
          icon: "success",
        });
      queryClient.invalidateQueries({ queryKey: ["all-user"] });
    },
  });

  const handleUpdateRole = (e) => {
    const updatedRole = { role: e.target.value };
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure to make ${updatedRole.role} ${email}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(updatedRole, _id);
        updateFunc({ _id, updatedRole });
      }
    });
  };

  //   delete
  const { mutateAsync: deleteFunc } = useMutation({
    mutationFn: async ({ id }) => {
      const { data } = await axiosSecure.delete(`/users/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        queryClient.invalidateQueries({ queryKey: ["all-user"] });
      } else {
        Swal.fire({
          icon: "error",
          title: "Delete request failed",
          text: "Something went wrong!",
        });
      }
    },
  });
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        deleteFunc({ id });
      }
    });
  };
  return (
    <tr className="even:bg-[#E8F6FC] text-base">
      <th>{idx + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <select
          defaultValue={role}
          onChange={handleUpdateRole}
          className="border rounded-md border-[#1E62D5]"
        >
          <option>User</option>
          <option>Moderator</option>
          <option>Admin</option>
        </select>
      </td>
      <td>
        <FaTrash
          onClick={() => handleDelete(_id)}
          title="delete user"
          className="bg-red-600 p-1 rounded-md text-2xl cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default UsersTable;
