import React from "react";

const ManageAppliedModal = ({ info }) => {
  const {
    _id,
    applicant_name,
    applicant_email,
    district_name,
    country_name,
    village_name,
    applicant_photo,
    university_name,
    scholarship_name,
    scholarship_category,
    subject,
    degree_name,
    service_charge,
    application_fees,
    status,
  } = info;
  return (
    <div className="modal-box  md:max-w-3xl">
      <div className="flex justify-end">
        <form method="dialog">
        
          <button className="btn">Close</button>
        </form>
      </div>
      <div className="mt-5">
        <h2 className="font-bold text-3xl text-center text-[#247CFF]">
          Applicant Info
        </h2>
      </div>
      <div className="mt-5">
        <img className="w-36 mx-auto" src={applicant_photo} alt="" />
        <p className="text-center text-[#247CFF]">Applicant Photo</p>
        <div className="mt-2">
          <h1 className="text-xl font-bold underline text-[#247CFF]">
            Applicant Info
          </h1>
          <h2 className="text-base font-bold text-[#247CFF]">Applicant Name: <span className={`${applicant_name || 'text-red-600'}`}>{applicant_name || "missing"}</span></h2>
          <h4 className="text-sm font-semibold text-[#247CFF]">
            Address:<span className={`${village_name || 'text-red-600'}`}>{village_name || "missing"}</span>, <span className={`${district_name || 'text-red-600'}`}>{district_name || "missing"}</span>, <span className={`${country_name || 'text-red-600'}`}>{country_name || "missing"}</span>
          </h4>

          <div className="mt-5">
            <h1 className="text-xl font-bold underline text-[#247CFF]">
              Institution Info
            </h1>
            <h2 className="text-base font-bold text-[#247CFF]">
              University Name: <span className={`${university_name || 'text-red-600'}`}>{university_name || "missing"}</span>
            </h2>
            <h2 className="text-base font-bold text-[#247CFF]">
              {" "}
              Scholarship Name: <span className={`${scholarship_name || 'text-red-600'}`}>{scholarship_name || "missing"}</span>
            </h2>
            <p className="text-sm font-semibold text-[#247CFF]">
              {" "}
              Subject Category: <span className={`${subject || 'text-red-600'}`}>{subject || "missing"}</span>
            </p>
            <p className="text-sm font-semibold text-[#247CFF]">
              {" "}
              Applied Degree:{" "}
              <span className={`${degree_name|| "text-red-600"}`}>
                {degree_name || "missing"}
              </span>
            </p>
            <p className="text-sm font-semibold text-[#247CFF]">
              Scholarship Category:
              <span className={`${scholarship_category || "text-red-600"}`}>
                {scholarship_category || "missing"}
              </span>
            </p>
            <p className="text-sm font-semibold text-[#247CFF]">
              Application Fees:
              <span className={`${application_fees || "text-red-600"}`}>
                {application_fees || "missing"}
              </span>
            </p>
            <p className="text-sm font-semibold text-[#247CFF]">
              Service Charge:
              <span className={`${service_charge || "text-red-600"}`}>
                {service_charge || "missing"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAppliedModal;
