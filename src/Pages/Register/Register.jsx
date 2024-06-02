import { Link } from "react-router-dom";
import GoogleLogIn from "../../component/Shared/GoogleLogIn";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const image_hosting_key = import.meta.env.VITE_IMG_HOST;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    setError("");
    // password validation
    if (userData.password.length < 6) {
      console.log("password error");
      return setError("Password must be 6 characters or more");
    } else if (/^[^A-Z]*$/.test(userData.password)) {
      return setError("password must have one uppercase");
    } else if (/^[^!@#$%^&*()]*$/.test(userData.password)) {
      return setError("Password must have one special character");
    }

    // generate img url
    const img = { image: userData.userPhoto[0] };
    console.log(userData);
    const { data } = await axios.post(image_hosting_api, img, {
      headers: { "content-type": "multipart/form-data" },
    });
    // console.log("axios", data.data.display_url);
    // set url
    const img_url = data.data.display_url;

    // create user
    createUser(userData.email, userData.password)
      .then((result) => {
        // update user info
        updateUserProfile(userData.userName, img_url);
        setUser({ ...result?.user, img_url, displayName: userData.userName });
        console.log(result.user);
        Swal.fire("Register Successfully");
      })
      .catch((error) => {
        if (error?.message == "Firebase: Error (auth/email-already-in-use).") {
          setError("Already have an account on this user");
        } else {
          setError(error?.message);
        }
      });
  };
  // remove error
  const handleRemoverError = () => {
    setError("");
  };
  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto rounded-lg shadow-2xl mt-12 bg-[#E8F6FC]">
      <h2 className="text-center text-3xl font-bold text-[#1EA9E4]">
        Register
      </h2>
      {error && (
        <p className="text-center my-3 text-base font-semibold text-red-600 flex items-center gap-2 justify-center">
          {error}
          <FaRegCircleXmark
            className="text-base cursor-pointer"
            onClick={handleRemoverError}
          />
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#1EA9E4]">
              Your Name
            </span>
          </label>
          <input
            type="text"
            placeholder="input your name"
            className="input input-bordered text-[#1EA9E4]"
            required
            {...register("userName")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#1EA9E4]">
              Photo
            </span>
          </label>
          <input
            type="file"
            placeholder="input email"
            className="w-full"
            required
            {...register("userPhoto")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#1EA9E4]">
              Email
            </span>
          </label>
          <input
            type="email"
            placeholder="input email"
            className="input input-bordered text-[#1EA9E4]"
            required
            {...register("email")}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#1EA9E4]">
              Password
            </span>
          </label>
          <input
            type="password"
            placeholder="input password"
            className="input input-bordered text-[#1EA9E4]"
            required
            {...register("password")}
          />
          <span className="text-[#1EA9E4] text-xs mt-1">
            <span className="font-semibold">*Note: </span>Password must be 6
            character or more and must have one uppercase and one special
            character
          </span>
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-2.5 bg-[#1EA9E4] text-white rounded-md font-semibold">
            Register
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b border-[#1EA9E4] lg:w-1/5"></span>

        <p href="#" className="text-xs text-center font-bold text-base-content">
          or Register with Social Media
        </p>

        <span className="w-1/5 border-b border-[#1EA9E4] lg:w-1/5"></span>
      </div>

      <GoogleLogIn></GoogleLogIn>

      <p className="mt-8 text-base font-semibold  text-center text-base-content">
        {" "}
        Already have an account?{" "}
        <Link to="/login" href="#" className="text-[#1EA9E4] underline">
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
