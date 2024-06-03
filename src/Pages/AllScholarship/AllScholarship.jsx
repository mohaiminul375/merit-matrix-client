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
        <div>
            <div className="text-center mt-20">
              <h2 className="text-4xl font-bold text-[#1E62D5]">All Scholarship</h2>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
          {
            scholarship?.map(item=><ScholarshipCard
            key={item._id}
            item={item}
            ></ScholarshipCard>)
          }
            </div>
        </div>
    );
};

export default AllScholarship;