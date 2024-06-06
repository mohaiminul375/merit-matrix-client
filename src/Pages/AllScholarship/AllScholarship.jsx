import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { RingLoader } from "react-spinners";
import ScholarshipCard from "./ScholarshipCard";

const AllScholarship = () => {
  const axiosPublic = useAxiosPublic();
  const { data: scholarship, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-scholarship");
      return data;
    },
    queryKey: ["all-scholarship"],
  });
  console.log("scholarship", scholarship);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-cinzel text-[#1E62D5]">
          All Scholarship
        </h2>
      </div>
      <div className="my-10 flex justify-center">
        <div className="join p-3 rounded-md shadow-lg">
          <input
            className="input border-[#1E62D5] join-item"
            placeholder="Email"
          />
          <button className="btn join-item bg-[#1E62D5] text-white rounded-r-md">Search</button>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-6">
        {scholarship?.map((item) => (
          <ScholarshipCard key={item._id} item={item}></ScholarshipCard>
        ))}
      </div>
    </div>
  );
};

export default AllScholarship;
