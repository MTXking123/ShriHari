import React from 'react';

const ChooseUs = () => {
  return (
    <section className=" py-12 px-6 my-15">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why <span className="text-blue-800 font-bold">ShriHari</span> Eye Care Center Is A Better Choice
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src="/whyshriharisection.webp" // <- Replace with your actual image path
              alt="Eye Checkup at ShriHari"
              className="rounded-md shadow-lg w-full object-cover h-100"
            />
          </div>

          {/* Right Text Content */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-blue-900">TEAM OF OVER 19 HIGHLY EXPERIENCED DOCTORS</h4>
              <p className="text-sm mt-2">
                When you visit any of our hospitals, you have the collective experience of over 100+ doctors backing your treatments.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-900">ADVANCED TECHNOLOGY AND EQUIPMENT</h4>
              <p className="text-sm mt-2">
                Regularly updates and maintains equipment to ensure it meets the latest standards and can provide the best possible outcomes.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-900">COMPREHENSIVE RANGE OF SERVICES</h4>
              <p className="text-sm mt-2">
                At ShriHari Eye Care & Laser Centre we provide a vast range of eye treatments and surgical procedures.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-900">PATIENT CENTRIC APPROACH</h4>
              <p className="text-sm mt-2">
                Enhance the patient experience by focusing on customer service. Train staff to be empathetic, responsive, and efficient in handling patient inquiries and concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
