import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
const UpdateMyApplication = ({ application }) => {
  const image_hosting_key = import.meta.env.VITE_IMG_HOST;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const {
    _id,
    degree_name,
    contact_number,
    village_name,
    district_name,
    country_name,
    ssc_result,
    hsc_result,
    gender,
    study_gap,
    applicant_photo,
  } = application;
  const [value, setValue] = useState(contact_number);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (update_info) => {
    const img = { image: update_info.applicant_photo[0] };
    const { data: res } = await axios.post(image_hosting_api, img, {
      headers: { "content-type": "multipart/form-data" },
    });
    const img_url = res.data.display_url;
    update_info.applicant_photo = img_url;
    console.log(update_info);
  };
  return (
    <div className="modal-box w-full md:max-w-5xl">
      <div className="bg-[#E8F6FC] md:max-w-3xl lg:max-w-5xl mx-auto p-5 rounded-md">
        <h2 className="text-center text-3xl font-bold">
          Applicant Information
        </h2>
        <div className="mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* row 1 */}
            <div className="mt-4">
              <img className="w-32 mx-auto" src={applicant_photo} alt="" />
              <div className="md:flex gap-6">
                <div className="form-control w-full md:w-1/2 mx-auto">
                  <label className="label">
                    <span className="label-text">Professional Photo</span>
                  </label>
                  <input
                    type="file"
                    placeholder="input scholarship name"
                    className="input"
                    {...register("applicant_photo")}
                  />
                </div>
              </div>
            </div>
            <div className="md:flex gap-6">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>

                <PhoneInput
                  international
                  defaultCountry="US"
                  className="input input-bordered"
                  placeholder="Enter phone number"
                  value={value}
                  {...register("contact_number")}
                  onChange={setValue}
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Degree Name</span>
                </label>
                <select
                  defaultValue={degree_name}
                  {...register("degree_name")}
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
            </div>

            {/* row 3 */}
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text">Village Name</span>
                </label>
                <input
                  type="text"
                  placeholder="input village name"
                  className="input input-bordered"
                  required
                  defaultValue={village_name}
                  {...register("village_name")}
                />
              </div>
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text">District</span>
                </label>
                <input
                  type="text"
                  placeholder="input District name"
                  className="input input-bordered"
                  required
                  defaultValue={district_name}
                  {...register("district_name")}
                />
              </div>
              <div className="form-control md:w-1/3">
                <label className="label">
                  <span className="label-text">Country</span>
                </label>
                <input
                  type="text"
                  placeholder="input Country name"
                  className="input input-bordered"
                  required
                  defaultValue={country_name}
                  {...register("country_name")}
                />
              </div>
            </div>
            {/* row 4 */}
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">SSC Result</span>
                </label>
                <input
                  {...register("ssc_result", { min: 1, max: 5 })}
                  type="text"
                  placeholder="input university name"
                  className="input SSC result"
                  required
                  defaultValue={ssc_result}
                />
                {errors.ssc_result && (
                  <span className="text-red-600">input correct GPA 1-5</span>
                )}
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">HSC Result</span>
                </label>
                <input
                  {...register("hsc_result", { min: 1, max: 5 })}
                  type="text"
                  placeholder="input SSC result"
                  className="input input-bordered"
                  required
                  defaultValue={hsc_result}
                />
                {errors.hsc_result && (
                  <span className="text-red-600">input correct GPA 1-5</span>
                )}
              </div>
            </div>

            {/* row 7 */}
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select
                  defaultValue={gender}
                  {...register("gender")}
                  className="select w-full"
                >
                  <option disabled selected>
                    Your Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Study Gap *(Optional)</span>
                </label>
                <select
                  defaultValue={study_gap}
                  {...register("study_gap")}
                  className="select w-full"
                >
                  <option selected>No gap</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1 year">1 year</option>
                  <option value="Upto 1 year">Upto 1 year</option>
                </select>
              </div>
            </div>
            <div className="mt-3">
              <button className="w-full bg-[#1EA9E4] text-white py-2 text-lg rounded-md">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyApplication;
