import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { RingLoader } from "react-spinners";
import ScholarshipCard from "./ScholarshipCard";
import { useState } from "react";

const AllScholarship = () => {
  const [itemPerPg, setItemPerPg] = useState(6);
  const [count, setCount] = useState(0);
  const [currentPg, setCurrentPg] = useState(1);
  const axiosPublic = useAxiosPublic();
  const { data: scholarship, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/all-scholarship?page=${currentPg}&size=${itemPerPg}`);

      return data;
    },
    queryKey: ["all-scholarship",currentPg],
  });
  // count
  const { data: counts, isLoading: isPending } = useQuery({
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-scholarship-count");
      setCount(data.count);
      return data;
    },
    queryKey: ["counts"],
  });
  console.log("scholarship", scholarship);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }

  const numberOfPages = Math.ceil(count / itemPerPg);
  const pages = [...Array(numberOfPages).keys()].map((e) => e + 1);

  const handlePaginationBtn = (currentBtn) => {
    setCurrentPg(currentBtn);
  };

  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-cinzel text-[#1E62D5]">
          All Scholarship
        </h2>
      </div>
      <div className="my-10 flex justify-center">
        <form action="">
          <div className="join p-3 rounded-md shadow-lg">
            <input
              className="input border-[#1E62D5] join-item"
              placeholder="Email"
            />
            <button className="btn join-item bg-[#1E62D5] text-white rounded-r-md">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {scholarship?.map((item) => (
          <ScholarshipCard key={item._id} item={item}></ScholarshipCard>
        ))}
      </div>
      {/* pagination */}
      <div className="flex justify-center mt-10">
        {/* previous */}
        <button className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white">
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationBtn(btnNum)}
            key={btnNum}
            className={`hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* next */}
        <button className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllScholarship;
