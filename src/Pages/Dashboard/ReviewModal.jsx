import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const ReviewModal = ({ application }) => {
    const {user}=useAuth();
  const {
    _id,
    university_name,
    scholarship_name,
    applicant_name,
    applicant_email,
    university_city,
    university_country,
    subject,
    degree_name,
    service_charge,
    application_fees,
    status,
    feedback,
    scholarship_id,
  } = application;
  console.log(application);
  const [error, setError] = useState();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (review) => {
    if (review.review_point < 1 || review.review_point > 5) {
      setError("review must be 1-5 number");
      return;
    }
    const current_date = new Date();
    review.post_date = current_date;
    review.scholarship_name = scholarship_name;
    review.university_name = university_name;
    review.scholarship_id = scholarship_id;
    review.applicant_name=applicant_name;
    review.applicant_email=applicant_email;
    review.subject=subject;


    console.log(review);
  };
  //   const handleSubmitReview = () => {

  //
  //     console.log(review_point,review_comment)
  //   };
  return (
    <div className="modal-box">
      <div className="flex justify-end">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
        </form>
      </div>
      <div className="mt-5">
        <h2 className="text-3xl font-bold text-center text-[#247CFF]">
          Submit A Review
        </h2>
      </div>
      <div>
        <p className="text-center text-red-600 my-3">{error}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Review Point</span>
            </label>
            <input
              type="text"
              name="review_point"
              placeholder="input review out of 5.00"
              className="input input-bordered"
              required
              {...register("review_point")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Opinion</span>
            </label>
            <input
              type="text"
              name="review_comment"
              placeholder="input your opinion"
              className="input input-bordered"
              required
              {...register("review_comment")}
            />
          </div>
          <button className="bg-[#247CFF] w-full mt-3 py-1 text-lg rounded-md text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
