import { FaEdit } from "react-icons/fa";
import { FaRegEye, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import UpdateDataModal from "./UpdateDataModal";

const ScholarshipTable = ({ idx, item }) => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  console.log(item);
  const {
    _id,
    scholarship_name,
    university_name,
    subject,
    application_fees,
    tuition_fees,
  } = item;

  const { mutateAsync } = useMutation({
    mutationFn: async ({ id }) => {
      const { data } = await axiosSecure.delete(`/all-scholarship/${id}`);
      console.log("res delete", data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-scholarship"] });
      queryClient.invalidateQueries({ queryKey: ["manage-scholarship"] });
    },
    mutationKey: ["delete-scholarship"],
  });

  // delete
  const handleDelete = (id) => {
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
        console.log("deleted", id);
        mutateAsync({ id });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <tr className="even:bg-[#E8F6FC] text-base font-bold">
        <th>{idx + 1}</th>
        <td>{scholarship_name}</td>
        <td>{university_name}</td>
        <td>{subject}</td>
        <td>{application_fees}</td>
        <td>{tuition_fees}</td>
        <td className="flex items-center gap-3">
          <Link to={`/scholarship-details/${_id}`}>
            {" "}
            <FaRegEye className="text-2xl cursor-pointer  text-black rounded-md" />
          </Link>
          <FaEdit
            onClick={() => document.getElementById(`${_id}`).showModal()}
            className="text-2xl cursor-pointer  text-black rounded-md"
          />
          <FaTrash
            onClick={() => handleDelete(_id)}
            className="text-2xl cursor-pointer  text-red-600 rounded-md"
          />
        </td>
      </tr>
      <dialog id={_id} className="modal">
        <UpdateDataModal item={item}></UpdateDataModal>
      </dialog>
    </>
  );
};

export default ScholarshipTable;
