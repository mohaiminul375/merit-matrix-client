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
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={university_logo} alt="" />
      </figure>
      <div className="card-body">
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
        <p className="font-semibold"> {application_fees}</p>
        <div className="flex justify-center">
          <Link
            className="w-full btn btn-primary"
            to={`/scholarship-details/${_id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
