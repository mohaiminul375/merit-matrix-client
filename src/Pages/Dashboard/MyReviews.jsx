import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { RingLoader } from "react-spinners";
import MyReviewTable from "../../component/MyReviewTable";

const MyReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: reviews, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/my-reviews?email=${user?.email}`
      );
      return data;
    },
    queryKey: ["my-reviews"],
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }

  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold text-3xl text-[#1E62D5]">My Application</h2>
      </div>

      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="border bg-[#E8F6FC] text-[#1E62D5] font-bold">
              <tr>
                <th>Sl No</th>
                <th>Scholarship Name</th>
                <th> University Name</th>
                <th>Rating Point</th>
                <th>Review Comment</th>
                <th>Review Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {
                reviews?.map((review,idx)=><MyReviewTable
                key={review._id}
                idx={idx}
                review={review}
                ></MyReviewTable>)
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
