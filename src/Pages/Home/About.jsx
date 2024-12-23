import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:max-w-6xl mx-auto my-16 px-4 mt-32">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={about}
          alt="About Merit Matrix"
          className="rounded-md shadow-md w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          About Us
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-4">
          Welcome to <strong>Merit Matrix Global Scholarship Service</strong>,
          where we are dedicated to{" "}
          <strong>Funding Futures, Inspiring Success</strong>. Since 2024, we
          have been your trusted partner in navigating global educational
          opportunities, providing students with access to scholarships that
          transform their dreams into reality.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-4">
          Our mission is simple — to empower students worldwide by simplifying
          the scholarship application process and offering personalized
          recommendations. We believe in making education accessible to
          everyone, regardless of background or location.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-4">
          With <strong>Merit Matrix</strong>, you’re not just exploring
          scholarships; you’re taking the first step toward achieving academic
          and professional excellence.
        </p>
        <button className="px-6 py-2 bg-primary text-white font-bold rounded-md hover:rounded-2xl transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
