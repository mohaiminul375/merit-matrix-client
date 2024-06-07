import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyApplicationTable = ({ idx, application }) => {
  const {
    _id,
    university_name,
    university_city,
    university_country,
    subject,
    degree_name,
    service_charge,
    application_fees,
    status,
    feedback,
    scholarship_id
  } = application;

  const handleStatus = () => {
    if (status == "Processing" || status === "Completed") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${
          status == "Processing" ?
          "You are unable to delete when application is processing":""
        } ${
          status == "Completed" ?
          "You are unable to delete when application is processing":''
        }`,
      });
      return;
    }
  };

  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{university_name}</td>
      <td className="text-center">
        {university_city}
        <br />
        {university_country}
      </td>
      <td>{subject}</td>
      <td>{degree_name}</td>
      <td>{application_fees}</td>
      <td>{service_charge}</td>
      <td>{status}</td>
      <td>
        <button
        onClick={()=>document.getElementById(`feedback_${_id}`).showModal()}
        className="bg-[#247CFF] text-white rounded-md px-2">
          See feedback
        </button>
      </td>
      <td>Add review</td>
      <td className="flex justify-center items-center flex-col  gap-1">
        <Link to={`/scholarship-details/${scholarship_id}`}>
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
      <dialog id={`feedback_${_id}`}className="modal">
        <div className="modal-box">
          <div className="flex justify-end">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
          <div className="mt-5">
            <h2 className="text-center font-bold text-3xl text-[#247CFF]">See feedback</h2>
            <h4 className="mt-6 text-center text-2xl text-[#247CFF]">{feedback? feedback:'No feedback was given.'}</h4>
          </div>
        </div>
      </dialog>
    </tr>
  );
};

export default MyApplicationTable;
