import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { format } from "date-fns";

const ReviewModal = ({ application }) => {
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    university_name,
    scholarship_name,
    applicant_name,
    applicant_email,
    scholarship_id,
    subject,
  } = application;
  console.log(application);
  const [error, setError] = useState();
  const { register, handleSubmit, reset } = useForm();
  // post method

  const onSubmit = async (review) => {
    if (review.review_point < 1 || review.review_point > 5) {
      setError("review must be 1-5 number");
      return;
    }
    const current_date =  format(new Date(), "yyyy-MM-dd");
    review.post_date = current_date;
    review.scholarship_name = scholarship_name;
    review.university_name = university_name;
    review.scholarship_id = scholarship_id;
    review.applicant_name = applicant_name;
    review.applicant_email = applicant_email;
    review.subject = subject;

    console.log(review);

    const { data } = await axiosSecure.post("/all-reviews", review);
    console.log(data);
    if (data.insertedId) {
      Swal.fire("Review added successfully");
      reset();
    }
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
