import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RingLoader } from "react-spinners";
import ReviewCard from "../../component/ReviewCard";

const ManageReview = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reviews, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get("/all-reviews");
      return data;
    },
    queryKey: ["all-reviews"],
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }
  console.log(reviews);
  return (
    <div>
      <div className="text-center">
        <h4 className="font-bold text-lg">Manage Review</h4>
        <h2 className="font-bold text-3xl text-[#1E62D5]">
          Manage All Review Data
        </h2>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {
            reviews?.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
        }
        
      </div>
    </div>
  );
};

export default ManageReview;
