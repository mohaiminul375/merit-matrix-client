import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto rounded-lg shadow-2xl mt-12 bg-[#E8F6FC] ">
        <h2 className="text-center text-3xl font-bold text-[#1EA9E4]">Register</h2>
      <form className="mt-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#1EA9E4]">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="input your name"
            className="input input-bordered text-[#1EA9E4]"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#1EA9E4]">Photo</span>
          </label>
          <input
            type="file"
            placeholder="input email"
          className="w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#1EA9E4]">Email</span>
          </label>
          <input
            type="email"
            placeholder="input email"
            className="input input-bordered text-[#1EA9E4]"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#1EA9E4]">Password</span>
          </label>
          <input
            type="password"
            placeholder="input password"
            className="input input-bordered text-[#1EA9E4]"
            required
          />
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

      <div className="flex items-center mt-6 -mx-2">
        <button
          type="button"
          className="flex items-center justify-center  w-full px-6 py-2.5 bg-[#1EA9E4] text-white rounded-md font-semibold"
        >
          <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
          </svg>

          <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
      </div>

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
