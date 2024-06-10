import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { format } from "date-fns";
const UpdateDataModal = ({ item }) => {
  const axiosSecure = useAxiosSecure();
  //    const { user } = useAuth();
  const queryClient=useQueryClient();
  const image_hosting_key = import.meta.env.VITE_IMG_HOST;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const {
    _id,
    scholarship_name,
    university_name,
    university_logo,
    subject,
    university_city,
    university_country,
    university_rank,
    application_fees,
    scholarship_category,
    degree_name,
    service_charge,
    tuition_fees,
    deadline,
  } = item;
  const [startDate, setStartDate] = useState(deadline);

  const { register, handleSubmit } = useForm();
  // tan stack query
  const { mutateAsync } = useMutation({
    mutationFn: async ({ _id,data: update_data }) => {
      const { data } = await axiosSecure.patch(
        `/all-scholarship/${_id}`,
        update_data
      );
      console.log(data);
      return data;
    },
    onSuccess:()=>{
        Swal.fire('data update successfully')
        queryClient.invalidateQueries({ queryKey: ["manage-scholarship"] })
    },
  });
  const onSubmit = async (data) => {
    let img_url = university_logo;
    const img = { image: data.university_logo[0] };
    console.log(img.image);
    if (img.image) {
      const { data: res } = await axios.post(image_hosting_api, img, {
        headers: { "content-type": "multipart/form-data" },
      });
      img_url = res.data.display_url;
    }

    // generate img

    data.university_logo = img_url;
    // date
    data.deadline = format(new Date(startDate), "yyyy-MM-dd");
    console.log("update", data);
    await mutateAsync({ _id,data });
  };
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <div className="flex justify-end">
          <button className="">Close</button>
        </div>
      </form>
      <div>
        <h2 className="text-center font-bold text-3xl text-[#007AFF]">
          Update Scholarship Information
        </h2>
        <div className="mt-10 bg-[#E8F6FC] rounded-md">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* row 1 */}
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Scholarship Name</span>
                </label>
                <input
                  defaultValue={scholarship_name}
                  type="text"
                  placeholder="input scholarship name"
                  className="input input-bordered"
                  required
                  {...register("scholarship_name")}
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">University Name</span>
                </label>
                <input
                  type="text"
                  placeholder="input university name"
                  className="input input-bordered"
                  defaultValue={university_name}
                  required
                  {...register("university_name")}
                />
              </div>
            </div>
            {/* row 2 */}
            <div className="md:flex gap-6">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">University Logo</span>
                </label>
                <input
                  type="file"
                  placeholder="input scholarship name"
                  className=""
                  //   required
                  //    defaultValue={university_logo}
                  {...register("university_logo")}
                />
              </div>
              <div className="form-control full md:w-1/2">
                <label className="label">
                  <span className="label-text">University Country</span>
                </label>
                <input
                  type="text"
                  placeholder="input university country"
                  className="input input-bordered"
                  required
                  defaultValue={university_country}
                  {...register("university_country")}
                />
              </div>
            </div>
            <div className="md:flex gap-6">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">University City</span>
                </label>
                <input
                  type="text"
                  placeholder="input university city"
                  className="input input-bordered"
                  required
                  defaultValue={university_city}
                  {...register("university_city")}
                />
              </div>
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">University Rank</span>
                </label>
                <input
                  type="number"
                  placeholder="input university rank number"
                  className="input input-bordered"
                  required
                  defaultValue={university_rank}
                  {...register("university_rank")}
                />
              </div>
            </div>
            {/* row 3 */}
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Subject Category</span>
                </label>
                <select
                  {...register("subject")}
                  defaultValue={subject}
                  className="select w-full"
                >
                  <option disabled selected>
                    Select Your Subject
                  </option>

                  <option value="Agriculture">Agriculture</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Scholarship Category</span>
                </label>
                <select
                  defaultValue={scholarship_category}
                  {...register("scholarship_category")}
                  className="select w-full"
                >
                  <option disabled selected>
                    Pick Your Scholarship Category
                  </option>
                  <option value="Full-fund">Full-fund</option>
                  <option value="Partial-fund">Partial-fund</option>
                  <option value="Self-fund"> Self-fund</option>
                </select>
              </div>
            </div>
            {/* row 4 */}
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Degree Name</span>
                </label>
                <select
                  {...register("degree_name")}
                  defaultValue={degree_name}
                  className="select w-full"
                >
                  <option disabled selected>
                    Pick Your Degree Name
                  </option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Maters">Masters</option>
                </select>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Tuition Fess</span>
                </label>
                <input
                  {...register("tuition_fees")}
                  defaultValue={tuition_fees}
                  type="number"
                  placeholder="input university name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* row 5 */}
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Application Fees</span>
                </label>
                <input
                  type="number"
                  placeholder="input scholarship name"
                  className="input input-bordered"
                  required
                  defaultValue={application_fees}
                  {...register("application_fees")}
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Service Charge</span>
                </label>
                <input
                  type="number"
                  placeholder="input university name"
                  className="input input-bordered"
                  required
                  defaultValue={service_charge}
                  {...register("service_charge")}
                />
              </div>
            </div>
            {/* row 7 */}
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Application Deadline</span>
                </label>
                <DatePicker
                  className="input input-bordered w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="mt-3">
              <button className="w-full bg-[#1EA9E4] text-white py-2 text-lg rounded-md">
                Update Scholarship
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateDataModal;
