import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { RingLoader } from "react-spinners";

const useAppliedDate = () => {
  const axiosPublic = useAxiosPublic();
  const { data: scholarship, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-scholarship-admin");
      return data;
    },
    queryKey: ["manage-scholarship-date"],
  });

  //   if (isLoading) {
  //     return (
  //       <div className="flex justify-center items-center">
  //         <RingLoader className="" color="#1E62D5" />
  //       </div>
  //     );
  //   }
  console.log("scholarship", scholarship);
 
  const deadline_date = [];
 
  scholarship?.forEach((date) => {
    const check_deadline = date.deadline;
    if (!deadline_date.includes(check_deadline)) {
      deadline_date.push(check_deadline);
    }
  });
  return [deadline_date];
};

export default useAppliedDate;
