import React from "react";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
const Banner = () => {
  return (
    <section className="mt-3">
      <div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center rounded-md shadow-lg overflow-hidden"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center text-white px-4 rounded-md">
          <Fade triggerOnce={true} direction="up" duration={2000}>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
              Empower Your Dreams with Global Scholarships
            </h1>
          </Fade>
          <Slide triggerOnce={true} direction="up" duration={2000}>
            <p className="mt-4 text-lg md:text-xl drop-shadow-sm">
              Find the perfect scholarship for your education journey. Explore
              opportunities, unlock your potential, and achieve academic
              excellence with ease.
            </p>
          </Slide>
          {/* <Slide triggerOnce={true} direction="up"> */}
          <div className="mt-6">
            <Link
              to="/all-scholarship"
              className="mt-6 px-6 py-3 bg-primary rounded-md text-white font-bold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 ease-in-out shadow-md"
            >
              Start Your Search Today
            </Link>
          </div>
          {/* </Slide> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
