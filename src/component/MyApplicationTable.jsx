import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyApplicationTable = ({ idx, application }) => {
  const { _id, university_name, subject, degree_name, service_charge, status } =
    application;

  const handleStatus=()=>{
    if(status == 'Processing' || status=== 'Completed'){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${status== 'Processing' && 'You are unable to delete when application is processing'} ${status== 'Completed' && 'You are unable to delete when application is processing'}`,
       
      });
      return;
    }
  }


  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{university_name}</td>
      <td></td>
      <td>{subject}</td>
      <td>{degree_name}</td>
      <td></td>
      <td>{service_charge}</td>
      <td>{status}</td>
      <td></td>
      <td>Add review</td>
      <td className="flex justify-center items-center flex-col  gap-1">
        <Link to={`/scholarship-details/${_id}`}>
          <button className="bg-[#247CFF] text-white rounded-md px-2">
            Details
          </button>
        </Link>
        <button
          onClick={handleStatus}
          
          className="bg-[#247CFF] text-white rounded-md px-2"
        >
          Edit
        </button>
        <button className="bg-[#247CFF] text-white rounded-md px-2">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default MyApplicationTable;
