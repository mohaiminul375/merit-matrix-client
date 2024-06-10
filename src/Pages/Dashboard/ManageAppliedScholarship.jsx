import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RingLoader } from "react-spinners";
import AppliedScholarshipTable from "../../component/AppliedScholarshipTable";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";
import useAppliedDate from "../../hooks/useAppliedDate";

const ManageAppliedScholarship = () => {
  const [deadline_date] = useAppliedDate();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const [apply, setApply] = useState("");
  const [deadline, setDeadline] = useState("");
  // console.log(deadline);
  console.log(apply,deadline);
  const { data: applied_info, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:3000/applied-scholarship?apply=${apply}&deadline=${deadline}`
      );
      return data;
    },
    queryKey: ["applied-scholarship"],
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }
  console.log(applied_info);
  const uniqueDateApplied = [];
  applied_info?.forEach((date) => {
    const applied_date = date.apply_date;
    if (!uniqueDateApplied.includes(applied_date)) {
      uniqueDateApplied.push(applied_date);
    }
  });
  
  return (
    <div>
      <div className="text-center">
        <h4 className="font-bold text-lg">Manage Applied Scholarship</h4>
        <h2 className="font-bold text-3xl font-cinzel text-[#1E62D5]">
          Manage All Applied Scholarship Data
        </h2>
      </div>
      <div className="my-5 flex justify-center gap-4">
        <select
          onChange={(e) => setApply(e.target.value)}
          defaultValue="applied Date"
          className="select select-bordered w-full max-w-xs"
        >
          <option value="" selected>
            Applied Date
          </option>
          {uniqueDateApplied?.map((date, idx) => (
            <option value={date} key={idx}>
              {new Date(date).toLocaleDateString()}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setDeadline(e.target.value)}
          defaultValue="Deadline Date"
          className="select select-bordered w-full max-w-xs"
        >
          <option value="" selected>
            Deadline Date
          </option>
          {deadline_date?.map((date, idx) => (
            <option value={date} key={idx}>
              {new Date(date).toLocaleDateString()}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="border bg-[#E8F6FC] text-[#1E62D5] font-bold">
              <tr>
                <th>Sl No</th>
                <th>University Name</th>
                <th>Scholarship Name</th>
                <th>Scholarship Category</th>
                <th>Subject Category</th>
                <th>Applied Degree</th>
                <th>Application Fees</th>
                <th>Service Charge</th>
                <th>Application Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {applied_info?.map((info, idx) => (
                <AppliedScholarshipTable
                  key={info._id}
                  idx={idx}
                  info={info}
                ></AppliedScholarshipTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAppliedScholarship;
