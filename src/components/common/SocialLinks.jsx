import React from "react";

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm-8.34 15V9.92H7.98V18Zm-1.34-9.23a1.56 1.56 0 1 0 0-3.11 1.56 1.56 0 0 0 0 3.11M18 18v-4.57c0-2.45-1.31-3.59-3.06-3.59a2.64 2.64 0 0 0-2.38 1.3v-1.22H9.88c.04.81 0 8.08 0 8.08h2.68v-4.51c0-.24.02-.48.09-.65.19-.48.61-.97 1.32-.97.93 0 1.3.73 1.3 1.8V18Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2m0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95Zm8.9 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2M12 6.86A5.14 5.14 0 1 1 6.86 12 5.14 5.14 0 0 1 12 6.86m0 1.8A3.34 3.34 0 1 0 15.34 12 3.34 3.34 0 0 0 12 8.66" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.02H16l.38-2.98H13.5V9.1c0-.86.24-1.45 1.48-1.45H16.5V5a18 18 0 0 0-2.2-.11c-2.18 0-3.67 1.33-3.67 3.79V11H8.2v2.98h2.43V21Z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.58 7.19a2.98 2.98 0 0 0-2.1-2.1C17.62 4.6 12 4.6 12 4.6s-5.62 0-7.48.49a2.98 2.98 0 0 0-2.1 2.1C1.93 9.05 1.93 12 1.93 12s0 2.95.49 4.81a2.98 2.98 0 0 0 2.1 2.1c1.86.49 7.48.49 7.48.49s5.62 0 7.48-.49a2.98 2.98 0 0 0 2.1-2.1c.49-1.86.49-4.81.49-4.81s0-2.95-.49-4.81M10.2 14.68V9.32L14.87 12Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/binazy/",
    icon: LinkedinIcon,
    iconClassName: "bg-[#0a66c2] text-white",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/binazy.in/",
    icon: InstagramIcon,
    iconClassName:
      "bg-[linear-gradient(135deg,#f58529,#feda77,#dd2a7b,#8134af,#515bd4)] text-white",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DsAvtA8bx/?mibextid=wwXIfr",
    icon: FacebookIcon,
    iconClassName: "bg-[#1877f2] text-white",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@binazyofficial?si=DbaXVqgqujqcdnpu",
    icon: YoutubeIcon,
    iconClassName: "bg-[#ff0000] text-white",
  },
];

export default function SocialLinks({ compact = false, title = "Follow Us" }) {
  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          {title}
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Stay connected with Binazy on social platforms.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className={`group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 ${
                compact ? "px-3.5 py-2" : ""
              }`}>
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${item.iconClassName}`}>
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
