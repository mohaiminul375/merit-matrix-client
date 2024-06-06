import { FaEye } from "react-icons/fa6";
import ManageAppliedModal from "../Pages/Dashboard/ManageAppliedModal";
import ManageFeedback from "../Pages/Dashboard/ManageFeedback";

const AppliedScholarshipTable = ({ idx, info }) => {
  console.log(info);
  const {
    _id,


    university_name,
    scholarship_name,
    scholarship_category,
    subject,
    degree_name,
    service_charge,
    status,
  } = info;
  return (
    <>
      <tr className="even:bg-[#E8F6FC] text-base font-bold">
        <th>{idx + 1}</th>
        <td>{university_name}</td>
        <td>{scholarship_name}</td>
        <td>{scholarship_category}</td>
        <td>{subject}</td>
        <td>{degree_name}</td>
        <td></td>
        <td>{service_charge}</td>
        <td> <select
          defaultValue={status}
          // onChange={handleUpdateRole}
          className="border rounded-md border-[#1E62D5]"
        >
          <option>Pending</option>
          <option>Processing</option>
          <option>Completed</option>
        </select></td>
        <td className="flex justify-center items-center flex-col  gap-1">
          <button onClick={()=>document.getElementById(`${_id}`).showModal()} className="bg-[#247CFF] text-white rounded-md px-2">
            Details
          </button>
          <button onClick={()=>document.getElementById(`feedback_${_id}`).showModal()} className="bg-[#247CFF] text-white rounded-md px-2">
            Feed back
          </button>
          <button className="bg-[#247CFF] text-white rounded-md px-2">
            Cancel
          </button>
        </td>
      </tr>
      <dialog id={_id} className="modal">
        <ManageAppliedModal info={info}></ManageAppliedModal>
      </dialog>
      <dialog id={`feedback_${_id}`} className="modal">
        <ManageFeedback id={_id}></ManageFeedback>
      </dialog>
    </>
  );
};

export default AppliedScholarshipTable;
