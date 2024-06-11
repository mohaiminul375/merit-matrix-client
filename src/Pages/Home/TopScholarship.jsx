import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { RingLoader } from "react-spinners";
import ScholarshipCard from "../AllScholarship/ScholarshipCard";
import HomePgCard from "./HomePgCard";

const TopScholarship = () => {
  const axiosPublic = useAxiosPublic();
  const { data: scholarship, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-scholarship-home");
      return data;
    },
    queryKey: ["home-scholarship"],
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }
  console.log(scholarship);
  return (
    <div className="mt-32">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-cinzel text-[#247CFF]">
          Top Scholarship
        </h2>
        <h4 className="font-bold mt-2 tex-base">Explore Our top scholarship</h4>
      </div>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scholarship?.map((item) => (
          <HomePgCard item={item} key={item._id}></HomePgCard>
        ))}
      </div>
    </div>
  );
};

export default TopScholarship;
