import { useEffect, useState } from "react";
import LeadForm from "./LeadForm";

export default function LeadFormPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={(e) => e.target === e.currentTarget && setShow(false)}>
      <div className="relative w-full max-w-md">
        <button
          onClick={() => setShow(false)}
          className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-white hover:bg-slate-600">
          ✕
        </button>
        <LeadForm />
      </div>
    </div>
  );
}
