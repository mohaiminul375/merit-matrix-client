import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

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

  console.log(reviews);
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
              {/* row 1
              {applications?.map((application, idx) => (
                <MyApplicationTable
                  key={application._id}
                  idx={idx}
                  application={application}
                ></MyApplicationTable>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
