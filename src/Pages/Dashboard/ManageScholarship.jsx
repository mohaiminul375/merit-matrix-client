import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { RingLoader } from "react-spinners";
import ScholarshipTable from "../../component/ScholarshipTable";

const ManageScholarship = () => {
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
      <div className="text-center">
        <h4 className="font-bold text-lg">Manage Scholarship</h4>
        <h2 className="font-bold text-3xl text-[#1E62D5]">
          Manage All Scholarship Data
        </h2>
      </div>
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="border bg-[#E8F6FC] text-[#1E62D5]">
              <tr>
                <th>Sl No</th>
                <th>Scholarship Name</th>
                <th>University Name</th>
                <th>Subject Category</th>
                <th>Application Fees</th>
                <th>Tuition Fees</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {scholarship?.map((item, idx) => (
                <ScholarshipTable
                  key={item._id}
                  idx={idx}
                  item={item}
                ></ScholarshipTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageScholarship;
