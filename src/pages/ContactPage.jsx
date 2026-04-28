import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "../components/common/Navbar";
import FAQSection from "@/components/common/FAQSection";
import Footer from "../components/common/Footer";
import SocialLinks from "../components/common/SocialLinks";

const fieldClassName =
  "w-full mt-1 px-4 py-3 border rounded-lg bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500";

// TODO: Replace this temporary contact email with the official company email when it is available.
const contactEmail = "work@binazy.org";
const contactPhone = "+91 9616185503";
const contactPhoneHref = "tel:+919616185503";
const contactEmailSubject = "Inquiry from Binazy website";
const contactEmailBody = `Hello Binazy team,

I would like to discuss my project.

Name:
phone:
Company:
Requirements:

Thanks.`;
const contactEmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  contactEmail,
)}&su=${encodeURIComponent(contactEmailSubject)}&body=${encodeURIComponent(
  contactEmailBody,
)}`;

const ContactPage = () => {
  const [submitMessage, setSubmitMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data) => {
    setSubmitMessage(null);

    try {
      const formData = new FormData();
      formData.append("access_key", "fe464ad2-83b1-442a-b818-30a0c138b6f0");
      formData.append("name", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("message", data.message);
      formData.append("subject", "New inquiry from Binazy website");
      formData.append("from_name", "Binazy Website");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Something went wrong.");
      }

      setSubmitMessage({
        type: "success",
        text: "Message sent successfully.",
      });
      reset();
    } catch (err) {
      setSubmitMessage({
        type: "error",
        text: err.message || "Something went wrong.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main id="main-content">
        <section className="section-padding bg-gray-50 mt-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
              Contact Us
            </p>
            <h2 className="section-heading text-gray-900 mt-2">
              Get in Touch with Our Team
            </h2>
            <p className="section-subheading text-gray-500 mt-3">
              Fill out the form and our team will prepare your inquiry right
              away. You can also connect with us directly using the details
              below.
            </p>
          </div>

          <div className="section-container grid lg:grid-cols-2 section-gap">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md">
              <form
                className="space-y-5"
                onSubmit={handleSubmit(onSubmit)}
                aria-label="Contact form"
                noValidate>
                {submitMessage && (
                  <div
                    role={submitMessage.type === "success" ? "status" : "alert"}
                    aria-live="polite"
                    className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
                      submitMessage.type === "success"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}>
                    {submitMessage.type === "success" ? (
                      <CheckCircle
                        size={18}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                      />
                    ) : (
                      <AlertCircle
                        size={18}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0"
                      />
                    )}
                    <span>{submitMessage.text}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="fullName" className="text-sm text-gray-600">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    aria-invalid={errors.fullName ? "true" : "false"}
                    aria-describedby={
                      errors.fullName ? "fullName-error" : undefined
                    }
                    aria-required="true"
                    className={`${fieldClassName} ${
                      errors.fullName ? "border-red-400" : "border-gray-200"
                    }`}
                    {...register("fullName", {
                      required: "Please enter your full name.",
                      minLength: {
                        value: 3,
                        message: "Name should be at least 3 characters long.",
                      },
                    })}
                  />
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      role="alert"
                      className="mt-2 text-sm text-red-600">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm text-gray-600">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-required="true"
                    className={`${fieldClassName} ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    }`}
                    {...register("email", {
                      required: "Please enter your email address.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="mt-2 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm text-gray-600">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    aria-required="true"
                    className={`${fieldClassName} ${
                      errors.phone ? "border-red-400" : "border-gray-200"
                    }`}
                    {...register("phone", {
                      required: "Please enter your phone number.",
                      minLength: {
                        value: 10,
                        message:
                          "Phone number should be at least 10 digits long.",
                      },
                      pattern: {
                        value: /^[+]?[\d\s()-]{10,20}$/,
                        message: "Please enter a valid phone number.",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      role="alert"
                      className="mt-2 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us about your project, goals, or requirements..."
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    aria-required="true"
                    className={`${fieldClassName} resize-none ${
                      errors.message ? "border-red-400" : "border-gray-200"
                    }`}
                    {...register("message", {
                      required: "Please enter your message.",
                      minLength: {
                        value: 20,
                        message:
                          "Message should be at least 20 characters long.",
                      },
                    })}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className="mt-2 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="consent"
                    className="flex items-start gap-3 text-sm text-gray-600">
                    <input
                      id="consent"
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-300"
                      aria-invalid={errors.consent ? "true" : "false"}
                      aria-describedby={
                        errors.consent ? "consent-error" : undefined
                      }
                      aria-required="true"
                      {...register("consent", {
                        required: "Please accept the terms to continue.",
                      })}
                    />
                    <span>
                      I agree to the terms and conditions and the privacy
                      policy.
                    </span>
                  </label>
                  {errors.consent && (
                    <p
                      id="consent-error"
                      role="alert"
                      className="mt-2 text-sm text-red-600">
                      {errors.consent.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:cursor-not-allowed disabled:opacity-70">
                  {isSubmitting ? "Saving Message..." : "Send Message"}
                </button>
              </form>

              <div className="mt-8 border-t pt-6 space-y-4">
                <p className="text-sm text-gray-600">Or reach us via</p>

                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={18} aria-hidden="true" />
                  <a
                    href={contactEmailHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded text-gray-700 hover:text-brand-600">
                    {contactEmail}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} aria-hidden="true" />
                  <a
                    href={contactPhoneHref}
                    className="rounded text-gray-700 hover:text-brand-600">
                    {contactPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What you get with us
                </h3>

                <ul className="space-y-3">
                  {[
                    "Better user experience for your product",
                    "Improved engagement and retention",
                    "Faster onboarding and growth",
                    "Aligned business and user goals",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="mt-1 text-gray-800" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={18} aria-hidden="true" />
                  <h4 className="font-semibold text-gray-800">
                    Office Address
                  </h4>
                </div>
                <p className="text-sm leading-7 text-gray-500 sm:text-base">
                  Near Engineering College Chauraha, JSV Hyundai Building, 2nd
                  Floor, CP-53, near CNG Petrol Pump, Lucknow, Uttar Pradesh
                  226021
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                <SocialLinks title="Social Media" />
              </div>
            </div>
          </div>
        </section>
        <FAQSection  />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
