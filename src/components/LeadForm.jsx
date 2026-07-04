import React from "react";
import { useForm } from "react-hook-form";

const LeadForm = ({ className = "" }) => {
  const whatsappNumber = "919616185503";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const message = [
      "New lead from Binazy website:",
      "",
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    reset();
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="w-full rounded-2xl border border-white/25 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-7">
        <h2 className="mb-2 text-center text-2xl font-bold text-white sm:text-3xl">
          Get a Free Consultation
        </h2>

        <p className="mb-6 text-center text-sm leading-6 text-gray-300 sm:mb-8 sm:text-base">
          Fill out the form and our team will get back to you.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", {
                required: "Full name is required",
              })}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-gray-300 focus:border-blue-400"
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-gray-300 focus:border-blue-400"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-gray-300 focus:border-blue-400"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Services */}
          <div>
            <select
              {...register("service", {
                required: "Please select a service",
              })}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-blue-400">
              <option value="" className="text-black">
                Select Service
              </option>
              <option value="Web App" className="text-black">
                Web App
              </option>
              <option value="Mobile App" className="text-black">
                Mobile App
              </option>
              <option value="Custom" className="text-black">
                Custom
              </option>
              <option value="Custom" className="text-black">
                Other
              </option>
            </select>

            {errors.service && (
              <p className="text-red-400 text-sm mt-1">
                {errors.service.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
