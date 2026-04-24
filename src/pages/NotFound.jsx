import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main id="main-content">
        <section className="section-padding bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_46%,#eff6ff_100%)]">
          <div className="section-container">
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white px-6 py-14 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-10 sm:py-18">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
                404 Error
              </p>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Page not found
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                The page you are looking for does not exist, may have moved, or
                the URL may be incorrect. Let&apos;s get you back to the right
                place.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-medium text-white transition hover:bg-blue-700">
                  <Home className="h-4 w-4" />
                  Go To Homepage
                </Link>

                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
