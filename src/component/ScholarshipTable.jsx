import { FaEdit } from "react-icons/fa";
import { FaRegEye, FaTrash } from "react-icons/fa6";

const ScholarshipTable = ({ idx, item }) => {
  console.log(item);
  const {
    scholarship_name,
    university_name,
    subject,
    application_fees,
    tuition_fees,
  } = item;
  return (
    <tr className="even:bg-[#E8F6FC]">
      <th>{idx + 1}</th>
      <td>{scholarship_name}</td>
      <td>{university_name}</td>
      <td>{subject}</td>
      <td>{application_fees}</td>
      <td>{tuition_fees}</td>
      <td className="flex items-center gap-3">
        <FaRegEye className="text-2xl cursor-pointer bg-red-600 text-black p-2 rounded-md" />
        <FaEdit className="text-2xl cursor-pointer bg-red-600 text-black p-2 rounded-md"/>
        <FaTrash className="text-2xl cursor-pointer bg-red-600 text-black p-2 rounded-md"/>
      </td>
    </tr>
  );
};

export default ScholarshipTable;
