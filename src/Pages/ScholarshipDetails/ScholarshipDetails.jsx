import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RingLoader } from "react-spinners";
import ReviewSlider from "../../component/ReviewSlider";
import { Helmet } from "react-helmet-async";

const ScholarshipDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  // console.log(id)
  const { data: details, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/all-scholarship/${id}`);
      return data;
    },
    queryKey: ["details"],
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }
  console.log(details);
  const {
    application_fees,
    deadline,
    degree_name,
    post_date,
    scholarship_category,
    scholarship_name,
    service_charge,
    subject,
    tuition_fees,
    university_city,
    university_country,
    university_logo,
    university_name,
    university_rank,
    _id,
  } = details;
  return (
    <div className="mt-20 md:max-w-5xl mx-auto">
       <Helmet>
        <title>merit-matrix | Details</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-4xl font-bold font-cinzel text-[#1E62D5]">
          Scholarship Details
        </h2>
        <p className="font-bold text-3xl">{scholarship_name}</p>
      </div>
      {/* details */}
      <div className="mt-10  flex flex-col md:flex-row md:p-4 gap-10 bg-[#E8F6FC] text-[#1E62D5] rounded-md">
        <img className="w-56 mx-auto" src={university_logo} alt="" />
        <div className="flex-1">
          <h2 className="font-bold text-lg">
            University Name: {university_name}
          </h2>
          <h3 className="text-base font-bold mb-4">
            Location: {university_city}, {university_country}
          </h3>
          <h3 className="text-base font-bold">
            University Rank:{university_rank}
          </h3>
          <h4 className="text-base font-bold">Subject: {subject}</h4>
          <h4 className="text-base font-bold">Degree: {degree_name}</h4>
          <h4 className="text-base font-bold">
            Scholarship Category:{scholarship_category}
          </h4>
          <h4 className="text-base font-bold">Tuition Fees: ${tuition_fees}</h4>
          <h4 className="text-base font-bold">
            Application Fees: ${application_fees}
          </h4>
          <h4 className="text-base font-bold">
            Service Charge: ${service_charge}
          </h4>
          <h4 className="text-base font-bold">
            Posted Date: {new Date(post_date).toLocaleDateString()}
          </h4>
          <div className="flex justify-between">
            <h4 className="text-base font-bold">
              Application Deadline: {new Date(deadline).toLocaleDateString()}
            </h4>
            <Link
              to={`/checkout/${_id}`}
              className="text-white bg-[#007AFF] px-3 py-1 rounded-full"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-center text-2xl font-bold font-cinzel text-[#1E62D5] underline">
          Review of this Scholarship
        </h2>
        
        <div className="mt-5">
          <ReviewSlider id={id}></ReviewSlider>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
