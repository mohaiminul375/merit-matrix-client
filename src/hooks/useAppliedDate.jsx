import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { RiseLoader } from "react-spinners";

const useAppliedDate = () => {
  const axiosPublic = useAxiosPublic();
  const { data: scholarship, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-scholarship-admin");
      return data;
    },
    queryKey: ["manage-scholarship-date"],
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <RiseLoader className="" color="#890C25" />
      </div>
    );
  }
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
