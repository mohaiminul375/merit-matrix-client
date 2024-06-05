import { FaEye } from "react-icons/fa6";

const AppliedScholarshipTable = ({ idx, info }) => {
  console.log(info);
  const { university_name, scholarship_name, scholarship_category, subject ,degree_name,service_charge,status} =
    info;
  return (
    <tr className="even:bg-[#E8F6FC] text-base font-bold">
      <th>{idx + 1}</th>
      <td>{university_name}</td>
      <td>{scholarship_name}</td>
      <td>{scholarship_category}</td>
      <td>{subject}</td>
      <td>{degree_name}</td>
      <td></td>
      <td>{service_charge}</td>
      <td>{status}</td>
      <td>
        <button>Details</button>
        <button>Feed back</button>
        <button>Cancel</button>
        </td>
    </tr>
  );
};

export default AppliedScholarshipTable;
