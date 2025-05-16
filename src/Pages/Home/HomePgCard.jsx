import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const HomePgCard = ({ item }) => {
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
  return (
    <div className="card card-compact md:w-96 bg-base-100 border border-primary shadow-xl p-3">
      <figure>
        <img
          className="rounded-full"
          src={university_logo}
          alt={university_name}
        />
      </figure>
      <div className="flex flex-col flex-grow space-y-3 mt-2">
        <div>
          <h2 className="font-bold text-lg hover:text-primaryBg">
            University Name: {university_name}
          </h2>
          <p className="font-bold hover:text-primaryBg">
            {university_city},{university_country}
          </p>
        </div>
        <p className="font-semibold hover:text-primaryBg">Subject: {subject}</p>
        <p className="font-semibold hover:text-primaryBg">
          Scholarship Category: {scholarship_category}
        </p>
        <p className="font-semibold hover:text-primaryBg">
          Application Fess: {application_fees}
        </p>
      </div>
      <div className="flex justify-center mt-2">
        <Link
          className="w-full text-center py-2 rounded-md bg-primaryBg text-white hover:rounded-2xl duration-300 transition-all"
          to={`/scholarship-details/${_id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};
HomePgCard.propTypes = {
  item: PropTypes.object,
};
export default HomePgCard;
