import { useForm } from "react-hook-form";

const AddScholarship = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="bg-[#E8F6FC] md:max-w-3xl lg:max-w-5xl mx-auto p-5 rounded-md">
        <h2 className="text-center text-3xl font-bold">Add A Scholarship</h2>
        <div className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* row 1 */}
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Scholarship Name</span>
                </label>
                <input
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
                  required
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
                <select {...register("subject")} className="select w-full">
                  <option disabled>Select Your Subject</option>

                  <option value="Agriculture">Agriculture</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Scholarship Category</span>
                </label>
                <select className="select w-full">
                  <option
                    {...register("scholarship_category")}
                    disabled
                    selected
                  >
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
                <select {...register("degree_name")} className="select w-full">
                  <option disabled selected>
                    Pick Your Degree Name
                  </option>
                  <option value="Full-fund">Diploma</option>
                  <option value="">Bachelor</option>
                  <option value="Self-fund">Masters</option>
                </select>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Tuition Fess</span>
                </label>
                <input
                  {...register("tuition_fees")}
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
                  {...register("service_charge")}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddScholarship;
