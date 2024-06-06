import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RingLoader } from "react-spinners";
import MyApplicationTable from "../../component/MyApplicationTable";

const MyApplication = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: applications, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/my-application?email=${user.email}`
      );
      console.log("data insite axios", data);
      return data;
    },
    queryKey: ["my-application"],
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }
//   console.log(data);
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
                <th> University Name</th>
                <th>University Address</th>
                <th>Subject Category</th>
                <th>Degree</th>
                <th>Application Fees</th>
                <th>Service Charge</th>
                <th>Application Status</th>
                <th>Action</th>
                <th>Add Review</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {applications?.map((application, idx) => (
               <MyApplicationTable
               key={application._id}
               idx={idx}
               application={application}
               ></MyApplicationTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApplication;
