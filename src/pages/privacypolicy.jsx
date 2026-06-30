import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SEO from "@/components/common/SEO";

const PolicyList = ({ items }) => (
  <ul className="mt-3 grid gap-2 pl-5 text-slate-600 sm:grid-cols-2">
    {items.map((item) => (
      <li key={item} className="list-disc leading-7">
        {item}
      </li>
    ))}
  </ul>
);

const personalInformation = [
  "Full Name",
  "Email Address",
  "Phone Number",
  "Company Name",
  "Business Website",
  "Project Requirements",
  "Any additional information you choose to provide",
];

const automaticallyCollectedInformation = [
  "IP Address",
  "Browser Type",
  "Device Information",
  "Operating System",
  "Pages Visited",
  "Time Spent on Pages",
  "Referring Website",
  "Date and Time of Visit",
];

const policySections = [
  {
    title: "Information We Collect",
    content: (
      <>
        <p>We may collect the following categories of information:</p>
        <h3 className="mt-6 text-lg font-semibold text-slate-900">
          Personal Information
        </h3>
        <p>When you voluntarily contact us or submit a form, we may collect:</p>
        <PolicyList items={personalInformation} />
        <h3 className="mt-6 text-lg font-semibold text-slate-900">
          Automatically Collected Information
        </h3>
        <p>When you visit our website, we may automatically collect:</p>
        <PolicyList items={automaticallyCollectedInformation} />
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use your information to:</p>
        <PolicyList
          items={[
            "Respond to inquiries",
            "Provide website development and digital services",
            "Prepare quotations and proposals",
            "Improve our website and services",
            "Send service-related communications",
            "Analyze website performance",
            "Prevent fraud and unauthorized activity",
            "Comply with legal obligations",
          ]}
        />
        <p>We do not sell your personal information.</p>
      </>
    ),
  },
  {
    title: "Google Analytics",
    content: (
      <>
        <p>
          Our website may use Google Analytics to understand visitor behavior
          and improve website performance.
        </p>
        <p>Google Analytics may collect information such as:</p>
        <PolicyList
          items={[
            "Device type",
            "Browser",
            "Geographic region",
            "Pages viewed",
            "Session duration",
          ]}
        />
        <p>
          You can learn more about Google&apos;s privacy practices here:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand-600 underline-offset-4 hover:underline">
            https://policies.google.com/privacy
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Google Ads & Advertising",
    content: (
      <>
        <p>We may use Google Ads and related advertising services.</p>
        <p>These services may use cookies or similar technologies to:</p>
        <PolicyList
          items={[
            "Measure campaign performance",
            "Understand website traffic",
            "Improve advertising relevance",
            "Enable remarketing where applicable",
          ]}
        />
        <p>
          You can manage your advertising preferences through your Google
          Account.
        </p>
      </>
    ),
  },
  {
    title: "Cookies",
    content: (
      <>
        <p>We use cookies to:</p>
        <PolicyList
          items={[
            "Improve website functionality",
            "Remember user preferences",
            "Analyze website traffic",
            "Measure marketing performance",
          ]}
        />
        <p>
          You may disable cookies through your browser settings, although some
          website features may not function properly.
        </p>
      </>
    ),
  },
  {
    title: "Information Sharing",
    content: (
      <>
        <p>We do not sell or trade your personal information.</p>
        <p>We may share information with:</p>
        <PolicyList
          items={[
            "Trusted technology providers",
            "Website hosting providers",
            "Analytics providers",
            "Payment processors if applicable",
            "Government authorities when required by law",
          ]}
        />
        <p>All third parties are expected to protect your information.</p>
      </>
    ),
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable administrative, technical, and organizational measures to protect your information. However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Data Retention",
    content: (
      <>
        <p>We retain personal information only as long as necessary:</p>
        <PolicyList
          items={[
            "To provide requested services",
            "To comply with legal obligations",
            "To resolve disputes",
            "To enforce agreements",
          ]}
        />
        <p>When information is no longer required, it is securely deleted.</p>
      </>
    ),
  },
  {
    title: "Third-Party Websites",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites. Users should review the privacy policies of those websites before providing personal information.",
  },
  {
    title: "Your Rights",
    content: (
      <>
        <p>Depending on applicable laws, you may have the right to:</p>
        <PolicyList
          items={[
            "Access your personal information",
            "Request correction of inaccurate information",
            "Request deletion of your information",
            "Withdraw consent where applicable",
            "Request information regarding how your data is processed",
          ]}
        />
        <p>To exercise these rights, contact us using the information below.</p>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    content:
      "Our services are not directed toward individuals under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted personal information, please contact us so we can remove it promptly.",
  },
  {
    title: "International Data Transfers",
    content:
      "If you access our website from outside India, your information may be transferred to and processed in India or other countries where our service providers operate.",
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated Effective Date. Continued use of the website after changes constitutes acceptance of the updated Privacy Policy.",
  },
  {
    title: "Contact Information",
    content: (
      <div className="space-y-2">
        <p>
          If you have any questions regarding this Privacy Policy, please
          contact us.
        </p>
        <p className="font-semibold text-slate-900">Binazy</p>
        <p>
          Website:{" "}
          <a
            href="https://www.binazy.org"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand-600 underline-offset-4 hover:underline">
            binazy.org
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:work@binazy.org"
            className="font-medium text-brand-600 underline-offset-4 hover:underline">
            work@binazy.org
          </a>
        </p>
      </div>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy | Binazy"
        description="Read Binazy's Privacy Policy to learn how we collect, use, disclose, and safeguard personal information."
        path="/privacy-policy"
      />

      <Navbar />

      <main id="main-content" className="pt-16">
        <section className="bg-[#0f2070] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 text-white sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
              Welcome to Binazy We value your privacy and are committed to
              protecting your personal information.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 space-y-5 rounded-lg border border-slate-200 bg-slate-50 p-5 text-base leading-7 text-slate-700 sm:p-7">
              <p>
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website{" "}
                <a
                  href="https://www.binazy.org"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-brand-600 underline-offset-4 hover:underline">
                  binazy.org
                </a>{" "}
                or use our services.
              </p>
              <p>
                By accessing our website, you agree to the practices described
                in this Privacy Policy.
              </p>
            </div>

            <div className="space-y-8">
              {policySections.map((section, index) => (
                <section
                  key={section.title}
                  className="border-b border-slate-200 pb-8 last:border-b-0 last:pb-0">
                  <h2 className="mb-4 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                    {index + 1}. {section.title}
                  </h2>
                  <div className="space-y-4 text-base leading-7 text-slate-600">
                    {typeof section.content === "string" ? (
                      <p>{section.content}</p>
                    ) : (
                      section.content
                    )}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-lg bg-slate-900 p-6 text-white sm:p-8">
              <h2 className="text-2xl font-bold">Have a privacy question?</h2>
              <p className="mt-3 max-w-2xl text-slate-200">
                Contact Binazy for privacy-related questions, data requests, or
                concerns about how your information is handled.
              </p>
              <Link
                to="/contact-us"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
