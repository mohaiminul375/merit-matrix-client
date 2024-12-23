import React from "react";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="mt-3">
      <div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4 rounded-md">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Empower Your Dreams with Global Scholarships
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Find the perfect scholarship for your education journey. Explore
            opportunities, unlock your potential, and achieve academic
            excellence with ease.
          </p>
          <Link
            to="/all-scholarship"
            className="mt-6 px-6 py-3 bg-primary rounded-md text-white font-bold hover:rounded-2xl transition-all duration-300"
          >
            Start Your Search Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
