import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const SubmitSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main
        id="main-content"
        className="flex min-h-[calc(100svh-4rem)] items-center justify-center px-5 py-24"
      >
        <section className="w-full max-w-2xl rounded-2xl bg-white px-6 py-12 text-center shadow-lg shadow-slate-200/70 sm:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
            <CheckCircle size={34} aria-hidden="true" />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Form submitted successfully!
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Our team will contact you soon. 
            
          </p>
          <div className="mt-8"></div>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitSuccess;
