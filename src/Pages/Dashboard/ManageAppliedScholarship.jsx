import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { RingLoader } from 'react-spinners';
import AppliedScholarshipTable from '../../component/AppliedScholarshipTable';

const ManageAppliedScholarship = () => {
    const axiosSecure=useAxiosSecure();
    const{data:applied_info,isLoading}=useQuery({
        queryFn:async()=>{
            const {data}=await axiosSecure.get('/applied-scholarship')
            console.log(data)
            return data;
        },
        queryKey:['applied-scholarship']
    })
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
        <h4 className="font-bold text-lg">Manage Applied Scholarship</h4>
        <h2 className="font-bold text-3xl text-[#1E62D5]">
          Manage All Applied Scholarship Data
        </h2>
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
              {
                applied_info?.map((info,idx)=><AppliedScholarshipTable
                key={info._id}
                idx={idx}
                info={info}
                ></AppliedScholarshipTable>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ManageAppliedScholarship;