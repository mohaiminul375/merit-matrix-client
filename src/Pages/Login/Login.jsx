import { Link } from "react-router-dom";
import GoogleLogIn from "../../component/Shared/GoogleLogIn";

const Login = () => {
  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto bg-[#E8F6FC] rounded-lg shadow-2xl mt-12">
         <h2 className="text-center text-3xl font-bold text-[#1EA9E4]">Login</h2>
      <form className="mt-6">
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
          <button className="w-full text-white px-6 py-2.5 bg-[#1EA9E4] rounded-md font-semibold">
            LogIn
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b border-[#1EA9E4] lg:w-1/5"></span>

        <p href="#" className="text-xs text-center font-bold text-base-content">
          or login with Social Media
        </p>

        <span className="w-1/5 border-b border-[#1EA9E4] lg:w-1/5"></span>
      </div>

      <GoogleLogIn></GoogleLogIn>

      <p className="mt-8 text-base font-semibold  text-center text-base-content">
        {" "}
        Are you new here?{" "}
        <Link to="/register" href="#" className="text-[#1EA9E4] underline">
          Please register
        </Link>
      </p>
    </div>
  );
};

export default Login;
