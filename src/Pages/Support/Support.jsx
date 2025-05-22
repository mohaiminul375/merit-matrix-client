import { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import support_img from "../../assets/support.jpg";
import { Helmet } from "react-helmet-async";
const Support = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;
    console.log(form.current);
    emailjs
      .sendForm("service_6a0pewc", "template_vzw1nxk", form.current, {
        publicKey: "Z0yHKQ7VzH6QrBIbN",
      })
      .then(
        () => {
          Swal.fire("Message send successfully", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire(error.text);
        }
      );
  };
  return (
    <section>
      <Helmet>
        <title>merit-matrix | Support</title>
      </Helmet>
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold font-cinzel text-primaryBg">
          Have any Query
        </h2>
        <p className="text-base">Please fell free to reach us.</p>
      </div>
      <div className="flex flex-col md:flex-row p-4 md:p-8 gap-6">
        {/* Whats app */}
        <WhatsAppWidget
          // CompanyIcon={logo}
          companyName="Merit-Matrix"
          className="z-50"
          phoneNumber="+8801533057483"
          message={`Hi, How can I help you?`}
        />

        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full  mb-4 md:mb-0">
          <img
            className="w-full h-full  rounded-lg"
            src={support_img}
            alt="support_icon"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full bg-white dark:bg-darkCard p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                name="user_name"
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary "
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="user_email"
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                name="user_phone"
                type="tel"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+8801xxxxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded"
            >
              Submit
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm mb-2">Or message us on WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
