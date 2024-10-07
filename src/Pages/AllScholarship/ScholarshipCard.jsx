import { Link } from "react-router-dom";

const ScholarshipCard = ({ item }) => {
  const {
    _id,
    university_logo,
    university_name,
    university_country,
    university_city,
    scholarship_category,
    application_fees,
    subject,
  } = item;
  console.log(item);
  return (
    <div className="card card-compact md:w-96 bg-[#EEFAFC] shadow-xl text-[#247CFF] p-3">
      <figure>
        <img src={university_logo} alt="" />
      </figure>
      <div className="flex flex-col flex-grow space-y-3">
        <h2 className="font-bold text-lg">
          University Name: {university_name}
        </h2>
        <p className="font-bold">
          {university_city},{university_country}
        </p>
        <p className="font-semibold">Subject: {subject}</p>
        <p className="font-semibold">
          Scholarship Category: {scholarship_category}
        </p>
        <p className="font-semibold">Application Fess: {application_fees}</p>
      </div>
      <div className="flex justify-center">
        <Link
          className="w-full btn bg-[#247CFF] text-white"
          to={`/scholarship-details/${_id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ScholarshipCard;
