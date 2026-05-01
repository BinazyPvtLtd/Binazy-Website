import React from "react";

import {
  ShieldCheck,
  Activity,
  BookOpen,
  Video,
  Trophy,
  BarChart3,
  Building2,
  ShoppingCart,
  Users,
  Smartphone,
  CalendarDays,
  Store,
  Truck,
} from "lucide-react";

import unsplash1434030216411 from "../assets/services/unsplash-1434030216411.jpg";
import unsplash1441986300917 from "../assets/services/unsplash-1441986300917.jpg";
import unsplash1450101499163 from "../assets/services/unsplash-1450101499163.jpg";
import unsplash1460925895917 from "../assets/services/unsplash-1460925895917.jpg";
import business1 from "../assets/business1.png";
import business2 from "../assets/business2.png";
import ecommerce1 from "../assets/ecommerce1.png";
import ecommerce2 from "../assets/ecommerce2.png";
import ott1 from "../assets/ott1.png";
import ott2 from "../assets/ott2.png";
import collaby from "../assets/collaby.png";
import app22 from "../assets/app22.png";
import booking1 from "../assets/booking1.png";
import booking2 from "../assets/booking2.png";
import unsplash1497366216548 from "../assets/services/unsplash-1497366216548.jpg";
import unsplash1497366811353 from "../assets/services/unsplash-1497366811353.jpg";
import unsplash1501504905252 from "../assets/services/unsplash-1501504905252.jpg";
import unsplash1504384308090 from "../assets/services/unsplash-1504384308090.jpg";
import unsplash1506784983877 from "../assets/services/unsplash-1506784983877.jpg";
import unsplash1509062522246 from "../assets/services/unsplash-1509062522246.jpg";
import unsplash1512428559087 from "../assets/services/unsplash-1512428559087.jpg";
import unsplash1521791136064 from "../assets/services/unsplash-1521791136064.jpg";
import unsplash1522202176988 from "../assets/services/unsplash-1522202176988.jpg";
import unsplash1522869635100 from "../assets/services/unsplash-1522869635100.jpg";
import unsplash1524178232363 from "../assets/services/unsplash-1524178232363.jpg";
import unsplash1531403009284 from "../assets/services/unsplash-1531403009284.jpg";
import unsplash1531746790731 from "../assets/services/unsplash-1531746790731.jpg";
import unsplash1533750516457 from "../assets/services/unsplash-1533750516457.jpg";
import unsplash1542744173 from "../assets/services/unsplash-1542744173.jpg";
import unsplash1543286386 from "../assets/services/unsplash-1543286386.jpg";
import unsplash1551288049 from "../assets/services/unsplash-1551288049.jpg";
import unsplash1552664730 from "../assets/services/unsplash-1552664730.jpg";
import unsplash1553413077 from "../assets/services/unsplash-1553413077.jpg";
import unsplash1553877522 from "../assets/services/unsplash-1553877522.jpg";
import unsplash1557804506 from "../assets/services/unsplash-1557804506.jpg";
import unsplash1558494949 from "../assets/services/unsplash-1558494949.jpg";
import unsplash1558618666 from "../assets/services/unsplash-1558618666.jpg";
import unsplash1562774053 from "../assets/services/unsplash-1562774053.jpg";
import unsplash1568667256549 from "../assets/services/unsplash-1568667256549.jpg";
import unsplash1576678927484 from "../assets/services/unsplash-1576678927484.jpg";
import unsplash1581291518857 from "../assets/services/unsplash-1581291518857.jpg";
import unsplash1586528116311 from "../assets/services/unsplash-1586528116311.jpg";
import unsplash1588196749597 from "../assets/services/unsplash-1588196749597.jpg";
import unsplash1596524430615 from "../assets/services/unsplash-1596524430615.jpg";
import unsplash1600880292203 from "../assets/services/unsplash-1600880292203.jpg";
import unsplash1611162617474 from "../assets/services/unsplash-1611162617474.jpg";
import unsplash1611926653458 from "../assets/services/unsplash-1611926653458.jpg";
import unsplash1677442135703 from "../assets/services/unsplash-1677442135703.jpg";

const serviceStyles = [
  { icon: Building2, iconBg: "bg-blue-100 text-blue-600" },
  { icon: Smartphone, iconBg: "bg-indigo-100 text-indigo-600" },
  { icon: Users, iconBg: "bg-green-100 text-green-600" },
  { icon: ShieldCheck, iconBg: "bg-amber-100 text-amber-600" },
  { icon: BarChart3, iconBg: "bg-purple-100 text-purple-600" },
  { icon: CalendarDays, iconBg: "bg-pink-100 text-pink-600" },
  { icon: ShoppingCart, iconBg: "bg-cyan-100 text-cyan-600" },
  { icon: BookOpen, iconBg: "bg-teal-100 text-teal-600" },
  { icon: Activity, iconBg: "bg-orange-100 text-orange-600" },
  { icon: Store, iconBg: "bg-rose-100 text-rose-600" },
  { icon: Truck, iconBg: "bg-lime-100 text-lime-600" },
  { icon: Video, iconBg: "bg-sky-100 text-sky-600" },
  { icon: Trophy, iconBg: "bg-yellow-100 text-yellow-600" },
];

const createServices = (items) =>
  items.map((item, index) => ({
    ...item,
    ...serviceStyles[index % serviceStyles.length],
  }));

const createPage = ({
  label,
  title,
  titleHighlight,
  subtitle,
  techHeading,
  techTagline,
  techDescription,
  services,
  spotlightHeading,
  projects,
}) => ({
  label,
  title,
  titleHighlight,
  subtitle,
  techHeading,
  techTagline,
  techDescription,
  services: createServices(services),
  spotlightHeading,
  projects,
});

const pages = {
  "business-website-development": createPage({
    label: "Business Websites Built to Win Trust",
    title: "If Your Website Is not Bringing Leads,",
    titleHighlight: "It is Costing You Money",
    subtitle:
      "We design and develop websites that actually convert visitors into customers without relying on ads alone.",
    techHeading: "Business Website Development Services",
    techTagline: "Brand Presence. Better Performance. More Inquiries.",
    techDescription:
      "From company profile sites to service-led lead funnels, we design and build responsive websites that help businesses look credible and generate opportunities.",
    services: [
      {
        title: "Custom Business Website Design",
        description:
          "Create polished websites tailored to your brand, offer, and target audience.",
      },
      {
        title: "Service Page Architecture",
        description:
          "Organize your services into clear page journeys that improve readability and lead capture.",
      },
      {
        title: "Inquiry & Contact Flows",
        description:
          "Add forms, calls to action, and callback journeys that make it easy for prospects to reach you.",
      },
      {
        title: "Speed & Mobile Optimization",
        description:
          "Deliver smooth browsing across phones, tablets, and desktops with performance-first builds.",
      },
      {
        title: "SEO-Ready Content Structure",
        description:
          "Build every page with clean metadata, content hierarchy, and discoverability in mind.",
      },
      {
        title: "CMS & Content Updates",
        description:
          "Support easy content updates so your team can keep offers, pages, and campaigns fresh.",
      },
    ],
    spotlightHeading: "Business Website Project Spotlights",
    projects: [
      {
        name: "FreelanceHub",
        image: business1,
        alt: "MCR Holidays business website",
        description:
          "FreelanceHub is a modern freelancer marketplace that connects skilled professionals with clients to get work done efficiently It enables users to post jobs, hire talent, collaborate in real time, and manage secure payments—all in one platform.",
      },
      {
        name: "CityConnect",
        image: business2,
        alt: "Event Horizon business website",
        description:
          "A Local Business Listing platform connects users with nearby services, helping them discover trusted businesses based on location, ratings, and reviews.It allows businesses to showcase their offerings while enabling customers to search, compare, and contact them in one place.",
      },
    ],
  }),

  "online-store": createPage({
    label: "Online Stores Built for Sales",
    title: "Growing Brands Stuck ",
    titleHighlight: "on Marketplaces",
    subtitle:
      "Take Back Control of Your Customers & Margins by Building Your Own E-commerce Website,We offer e-commerce development services that help you move beyond marketplaces so you can own your audience, improve margins, and grow your brand on your terms.",
    techHeading: "Ecommerce Website Development Services",
    techTagline: "Catalog. Checkout. Retention.",
    techDescription:
      "We don't just build websites. We create e-commerce platforms designed to support your business as it grows.",
    services: [
      {
        title: "Custom Storefront Development",
        description:
          "Design branded storefronts that help shoppers browse, compare, and buy with confidence.",
      },
      {
        title: "Cart & Checkout Flows",
        description:
          "Reduce friction with optimized cart, coupon, and checkout experiences.",
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Connect trusted payment providers for secure transactions and smooth order completion.",
      },
      {
        title: "Inventory & Order Management",
        description:
          "Track stock, order states, returns, and fulfillment through one central workflow.",
      },
      {
        title: "Customer Accounts & Loyalty",
        description:
          "Support wishlists, order history, repeat purchase flows, and promotional retention mechanics.",
      },
      {
        title: "Store Analytics Dashboard",
        description:
          "Monitor revenue, product performance, abandoned carts, and conversion trends in one place.",
      },
    ],
    spotlightHeading: "Online Store Project Spotlights",
    projects: [
      {
        name: "ShopSphere",
        image: ecommerce1,
        alt: "MarketPulse online store",
        description:
          "A modern eCommerce platform that delivers seamless shopping with intuitive design and fast performance. Users can browse products, manage carts, and complete secure purchases effortlessly.",
      },
      {
        name: "CartNest",
        image: ecommerce2,
        alt: "QuickCart online shopping experience",
        description:
          "An intuitive eCommerce platform designed for smooth browsing, quick checkout, and personalized shopping experiences,Built to connect users with quality products through a fast, responsive, and user-friendly interface.",
      },
    ],
  }),

  "ott-platform-development": createPage({
    label: "OTT Platforms Built to Scale",
    title: "We Build OTT Platforms",
    titleHighlight: "For Streaming-Led Growth",
    subtitle:
      "Binazy creates streaming products with subscription flows, content management, and user experiences designed for high engagement across devices.",
    techHeading: "OTT Platform Development Services",
    techTagline: "Streaming. Subscription. Retention.",
    techDescription:
      "From video libraries to account management and analytics, we build OTT solutions that support premium content delivery and recurring revenue models.",
    services: [
      {
        title: "Content Library Experience",
        description:
          "Organize shows, movies, episodes, and categories into intuitive browsing journeys.",
      },
      {
        title: "Subscription & Billing Setup",
        description:
          "Enable plans, renewals, trials, and payment workflows for recurring memberships.",
      },
      {
        title: "Video Delivery Architecture",
        description:
          "Support smooth playback, secure streaming, and multi-device access for viewers.",
      },
      {
        title: "Profiles & Watchlists",
        description:
          "Add personalized account features like profiles, saved lists, and continue-watching flows.",
      },
      {
        title: "Admin & Content Control",
        description:
          "Manage uploads, metadata, release windows, and featured collections from one dashboard.",
      },
      {
        title: "Engagement Analytics",
        description:
          "Track watch time, drop-offs, subscriptions, and content performance to guide growth.",
      },
    ],
    spotlightHeading: "OTT Platform Project Spotlights",
    projects: [
      {
        name: "StreamFlix",
        image: ott1,
        alt: "StreamNest OTT admin dashboard",
        description:
          "A modern OTT streaming platform that delivers personalized entertainment with smart recommendations and seamless user experience.Users can explore movies, web series, and live TV with features like watchlists, multi-profile support, and high-quality streaming across devices.",
      },
      {
        name: "Livecreen",
        image: ott2,
        alt: "PlayPrime OTT platform interface",
        description:
          "A media delivery product with catalog management, featured releases, audience insights, and account controls.",
      },
    ],
  }),

  "mobile-app-development": createPage({
    label: "Mobile Apps Built to Perform",
    title: "We Build Mobile Apps",
    titleHighlight: "That Users Keep Coming Back To",
    subtitle:
      "Binazy develops iOS and Android apps with polished experiences, stable backend integrations, and the product thinking needed for growth.",
    techHeading: "Mobile App Development Services",
    techTagline: "Cross-Platform. Product-Focused. Reliable.",
    techDescription:
      "We build customer-facing and internal mobile apps that combine strong UX, scalable APIs, and a release process designed for real business outcomes.",
    services: [
      {
        title: "iOS & Android App Delivery",
        description:
          "Launch mobile products across major platforms with performance and usability in mind.",
      },
      {
        title: "Cross-Platform Development",
        description:
          "Reduce build complexity with shared app foundations that still feel native to users.",
      },
      {
        title: "Backend & API Integration",
        description:
          "Connect apps with secure authentication, business logic, and third-party services.",
      },
      {
        title: "Push Notifications & Engagement",
        description:
          "Drive retention with messaging, reminders, and event-based user communication.",
      },
      {
        title: "App Store Launch Support",
        description:
          "Prepare assets, review flows, and release support for smoother publishing cycles.",
      },
      {
        title: "Usage Analytics & Improvement",
        description:
          "Track sessions, actions, and adoption trends to guide product refinements over time.",
      },
    ],
    spotlightHeading: "Mobile App Project Spotlights",
    projects: [
      {
        name: "Collaby",
        image: collaby,
        alt: "FitTrack mobile app",
        description:
          "A collaboration platform that connects Instagram creators with businesses for seamless brand partnerships and campaigns.It enables smart matching, in-app communication, and secure deal management to help both creators and brands grow together",
      },
      {
        name: "Tasklow",
        image: app22,
        alt: "QuickCart delivery app dashboard",
        description:
          "A smart productivity mobile app designed to help users manage tasks, set goals, and track daily progress efficiently.Features include reminders, priority tracking, and a clean interface for seamless task organization.",
      },
    ],
  }),

  "booking-appointment-system": createPage({
    label: "Booking Systems That Reduce Manual Work",
    title: "We Build Booking Systems",
    titleHighlight: "That Keep Schedules Running Smoothly",
    subtitle:
      "Binazy helps businesses automate appointment scheduling, reminders, and team availability so customers can book faster and teams can manage calendars with ease.",
    techHeading: "Booking & Appointment System Services",
    techTagline: "Scheduling. Reminders. Control.",
    techDescription:
      "We create booking products for consultations, classes, services, and internal operations with rules that reflect how your business actually works.",
    services: [
      {
        title: "Scheduling Engine Development",
        description:
          "Set up booking logic for time slots, buffers, recurring availability, and service durations.",
      },
      {
        title: "Calendar Sync & Availability",
        description:
          "Sync internal calendars and maintain accurate availability across teams or branches.",
      },
      {
        title: "Automated Reminders",
        description:
          "Reduce missed appointments with email, SMS, or WhatsApp reminders before each session.",
      },
      {
        title: "Payments & Deposits",
        description:
          "Collect advance payments, confirmations, and booking-related invoices in one flow.",
      },
      {
        title: "Admin & Staff Controls",
        description:
          "Manage service settings, staff schedules, cancellations, and exceptions from one dashboard.",
      },
      {
        title: "Booking Analytics",
        description:
          "Track bookings, no-shows, utilization, and service demand to improve planning.",
      },
    ],
    spotlightHeading: "Booking System Project Spotlights",
    projects: [
      {
        name: "BookEase",
        image: booking1,
        alt: "SlotSync booking and scheduling platform",
        description:
          "A user-friendly booking system that simplifies searching, comparing, and reserving hotels or services in real time.It provides secure payments, smart filters, and a smooth experience for quick and hassle-free bookings.",
      },
      {
        name: "BookNow",
        image: booking2,
        alt: "AppointEase appointment management system",
        description:
          "A powerful ticket booking platform that allows users to book movies, events, and travel tickets in just a few clicks.It offers real-time availability, secure payments, and an easy-to-use interface for a smooth and hassle-free booking experience.",
      },
    ],
  }),

  "erp-system-development": createPage({
    label: "ERP Systems Built Around Your Operations",
    title: "We Build ERP Systems",
    titleHighlight: "That Give You Control At Scale",
    subtitle:
      "Binazy develops ERP platforms tailored to finance, inventory, procurement, operations, and reporting so teams can work from one reliable source of truth.",
    techHeading: "ERP System Development Services",
    techTagline: "Integration. Governance. Scale.",
    techDescription:
      "Our ERP solutions connect departments, standardize processes, and provide leadership with stronger visibility across the business.",
    services: [
      {
        title: "Finance & Accounting Modules",
        description:
          "Support ledgers, billing, approvals, receivables, and business-wide financial visibility.",
      },
      {
        title: "Inventory & Procurement",
        description:
          "Track stock, purchasing cycles, vendor activity, and replenishment workflows.",
      },
      {
        title: "Human Resources Integration",
        description:
          "Link attendance, payroll, leave, and employee records with broader ERP operations.",
      },
      {
        title: "Approval Workflows",
        description:
          "Configure policy-based approvals for procurement, expenses, and internal requests.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Secure sensitive modules with granular permissions aligned to department responsibilities.",
      },
      {
        title: "Leadership Dashboards",
        description:
          "Monitor branch-level performance, financial movement, and operational health in real time.",
      },
    ],
    spotlightHeading: "ERP System Project Spotlights",
    projects: [
      {
        name: "NexaCore ERP",
        image: unsplash1551288049,
        alt: "NexaCore ERP system dashboard",
        description:
          "NexaCore is a fully integrated ERP platform built for mid-size businesses managing finance, procurement, and operations across multiple departments. It unifies purchase orders, vendor payments, ledger management, and executive reporting into a single role-based workspace that keeps every team aligned.",
      },
      {
        name: "OpsGrid",
        image: unsplash1586528116311,
        alt: "OpsGrid operations and inventory ERP",
        description:
          "OpsGrid is an operations-focused ERP solution designed for manufacturing and distribution companies. It connects inventory tracking, warehouse management, and procurement workflows with real-time dashboards so operations managers can monitor stock levels, approve purchase requests, and track fulfillment progress without switching between tools.",
      },
    ],
  }),

  "custom-software-development": createPage({
    label: "Custom Software Built Around Your Business",
    title: "We Build Custom Software",
    titleHighlight: "That Matches The Way You Work",
    subtitle:
      "Binazy designs and develops tailored software for teams that need specific workflows, deeper integrations, and long-term flexibility beyond off-the-shelf tools.",
    techHeading: "Custom Software Development Services",
    techTagline: "Tailored Systems. Real Workflow Fit.",
    techDescription:
      "We turn business requirements into scalable products with thoughtful architecture, secure foundations, and room to evolve as your needs grow.",
    services: [
      {
        title: "Discovery & Solution Design",
        description:
          "Translate business challenges into product scope, workflows, and technical requirements.",
      },
      {
        title: "Workflow-Centric Product Builds",
        description:
          "Develop software that reflects your actual operating model instead of forcing compromise.",
      },
      {
        title: "Third-Party Integrations",
        description:
          "Connect CRMs, payments, communications, analytics, and internal systems into one flow.",
      },
      {
        title: "Secure Application Architecture",
        description:
          "Build platforms with strong access controls, maintainable code, and dependable performance.",
      },
      {
        title: "Scalable Data & Reporting Layers",
        description:
          "Support operational visibility with dashboards, exports, and structured data models.",
      },
      {
        title: "Ongoing Support & Iteration",
        description:
          "Improve the product continuously as new business priorities and user feedback emerge.",
      },
    ],
    spotlightHeading: "Custom Software Project Spotlights",
    projects: [
      {
        name: "PeopleDesk HRMS",
        image: unsplash1542744173,
        alt: "PeopleDesk HR management software",
        description:
          "PeopleDesk is a custom HR management system built for a fast-growing services company that outgrew spreadsheet-based people ops. It handles employee onboarding, attendance tracking, leave approvals, payroll processing, and department-level reporting — all within a role-based portal used daily by HR managers and team leads.",
      },
      {
        name: "WorkFlow360",
        image: unsplash1497366811353,
        alt: "WorkFlow360 operations management portal",
        description:
          "WorkFlow360 is a tailored operations portal designed for a logistics firm that needed to replace disconnected tools with one unified system. It manages job assignments, field agent tracking, client communication logs, invoice generation, and real-time performance dashboards — built entirely around how their operations team actually works.",
      },
    ],
  }),

  "hr-payroll-system": createPage({
    label: "HR Systems That Reduce Admin Load",
    title: "We Build HR & Payroll Systems",
    titleHighlight: "That Keep People Operations Organized",
    subtitle:
      "Binazy develops HR and payroll platforms that simplify employee data, payroll cycles, attendance management, and compliance workflows.",
    techHeading: "HR & Payroll System Services",
    techTagline: "Employee Data. Payroll Accuracy. Operational Ease.",
    techDescription:
      "Our HR systems help growing organizations manage people operations consistently while reducing repetitive back-office work.",
    services: [
      {
        title: "Employee Records Management",
        description:
          "Centralize profiles, documents, departments, and lifecycle data in one secure system.",
      },
      {
        title: "Payroll Automation",
        description:
          "Calculate salaries, deductions, benefits, and payouts with fewer manual steps.",
      },
      {
        title: "Attendance & Shift Tracking",
        description:
          "Capture attendance patterns, work hours, holidays, and shift assignments accurately.",
      },
      {
        title: "Leave & Approval Workflows",
        description:
          "Streamline leave requests, approvals, balances, and policy enforcement for teams.",
      },
      {
        title: "Compliance & Reports",
        description:
          "Generate payroll summaries, audit records, and statutory reports with ease.",
      },
      {
        title: "Employee Self-Service Portal",
        description:
          "Enable staff to view payslips, update details, and submit requests independently.",
      },
    ],
    spotlightHeading: "HR & Payroll System Project Spotlights",
    projects: [
      {
        name: "StaffSync",
        image: unsplash1581291518857,
        alt: "StaffSync HR and payroll management system",
        description:
          "StaffSync is an integrated HR and payroll platform built for a retail chain managing 200+ employees across multiple branches. It automates monthly payroll calculations, tracks shift-based attendance, manages leave balances, and gives HR managers a real-time view of workforce data — reducing payroll processing time from days to hours.",
      },
      {
        name: "PeopleBase",
        image: unsplash1522202176988,
        alt: "PeopleBase people operations portal",
        description:
          "PeopleBase is a people operations platform designed for a growing tech company that needed a single source of truth for employee data. It supports digital onboarding, department-wise org charts, performance review cycles, payslip distribution, and an employee self-service portal — giving both HR and staff full visibility into their own records.",
      },
    ],
  }),

  "24-7-helpdesk-support": createPage({
    label: "Support Desks Built for Faster Resolution",
    image: unsplash1497366811353,
    titleHighlight: "For Round-The-Clock Service Teams",
    subtitle:
      "Binazy helps support organizations manage tickets, escalations, communication, and service quality through structured helpdesk platforms.",
    techHeading: "24/7 Helpdesk Support Services",
    techTagline: "Ticketing. Escalation. Visibility.",
    techDescription:
      "We create support systems that unify service requests, internal coordination, and response performance across shifts and channels.",
    services: [
      {
        title: "Omnichannel Ticket Intake",
        description:
          "Capture requests from email, chat, forms, and support channels in one queue.",
      },
      {
        title: "Ticket Routing & Prioritization",
        description:
          "Assign issues intelligently based on urgency, category, and team responsibility.",
      },
      {
        title: "Knowledge Base Integration",
        description:
          "Support agents and customers with searchable answers, playbooks, and troubleshooting guides.",
      },
      {
        title: "Escalation Workflow Setup",
        description:
          "Define handoffs, approvals, and manager visibility for critical or delayed issues.",
      },
      {
        title: "SLA Monitoring Dashboard",
        description:
          "Track response times, pending cases, breached tickets, and team performance live.",
      },
      {
        title: "Service Reporting",
        description:
          "Measure ticket trends, closure rates, customer pain points, and agent workload over time.",
      },
    ],
    spotlightHeading: "Helpdesk Project Spotlights",
    projects: [
      {
        name: "ResolveDesk",
        image: unsplash1553877522,
        alt: "ResolveDesk 24/7 helpdesk platform",
        description:
          "ResolveDesk is a 24/7 helpdesk platform built for a B2B SaaS company that needed to scale its support operations without increasing headcount. It centralizes tickets from email, chat, and web forms into a single queue, auto-routes by issue type and priority, and gives team leads a live SLA dashboard to catch breaches before they escalate.",
      },
      {
        name: "ClearLine Support Hub",
        image: unsplash1596524430615,
        alt: "ClearLine customer support operations platform",
        description:
          "ClearLine is a support operations platform designed for a telecom provider managing high daily ticket volumes across multiple shifts. It features intelligent ticket assignment, a searchable knowledge base for agents, escalation paths for critical issues, and performance reports that help managers identify bottlenecks and improve resolution speed.",
      },
    ],
  }),

  "remote-monitoring": createPage({
    label: "Monitoring Systems That Surface Issues Early",
    image: unsplash1558494949,
    titleHighlight: "For More Reliable Operations",
    subtitle:
      "Binazy develops remote monitoring systems that help teams observe assets, detect anomalies, and respond to issues before they grow.",
    techHeading: "Remote Monitoring Services",
    techTagline: "Alerts. Health Checks. Preventive Action.",
    techDescription:
      "From infrastructure dashboards to operational alerts, our monitoring solutions give technical teams better visibility across distributed systems and devices.",
    services: [
      {
        title: "Asset & Device Visibility",
        description:
          "Track monitored systems, endpoints, and operational assets in one overview.",
      },
      {
        title: "Real-Time Alerting",
        description:
          "Receive fast notifications for downtime, threshold breaches, and unusual behavior.",
      },
      {
        title: "Health & Uptime Dashboards",
        description:
          "Monitor stability, availability, and service health through focused operational views.",
      },
      {
        title: "Patch & Maintenance Oversight",
        description:
          "Track maintenance windows, update readiness, and operational follow-through.",
      },
      {
        title: "Incident Response Workflows",
        description:
          "Coordinate acknowledgements, escalations, and remediation steps when alerts fire.",
      },
      {
        title: "Trend Analysis",
        description:
          "Spot recurring failures, load issues, and asset performance trends before they escalate.",
      },
    ],
    spotlightHeading: "Remote Monitoring Project Spotlights",
    projects: [
      {
        name: "WatchGrid",
        image: unsplash1558494949,
        alt: "WatchGrid infrastructure monitoring console",
        description:
          "WatchGrid is a remote infrastructure monitoring platform built for a managed IT services provider overseeing 500+ client endpoints. It gives technicians a live view of server health, uptime, and network performance across all accounts — with instant alerts for outages and a built-in incident timeline to coordinate faster resolutions.",
      },
      {
        name: "PulseOps",
        image: unsplash1504384308090,
        alt: "PulseOps operations monitoring and response platform",
        description:
          "PulseOps is a centralized operations monitoring platform designed for a facility management company tracking equipment and utility systems across multiple sites. It surfaces anomalies through threshold-based alerts, assigns incidents to field teams, and generates trend reports that help maintenance managers schedule preventive work before failures occur.",
      },
    ],
  }),

  "social-media-management": createPage({
    label: "Social Programs Managed With Consistency",
    image: unsplash1504384308090,
    titleHighlight: "That Keeps Brands Active And Relevant",
    subtitle:
      "Binazy supports social growth with content planning, publishing, audience engagement, and reporting that connects activity to business goals.",
    techHeading: "Social Media Management Services",
    techTagline: "Planning. Publishing. Engagement.",
    techDescription:
      "We help businesses show up consistently across social channels with a practical system for content, communication, and performance review.",
    services: [
      {
        title: "Content Calendar Planning",
        description:
          "Map out content themes, posting cadence, and campaign timing for better consistency.",
      },
      {
        title: "Creative Asset Coordination",
        description:
          "Prepare visuals, copy, and post formats aligned with the brand voice and offer.",
      },
      {
        title: "Publishing & Scheduling",
        description:
          "Manage post rollout across channels with organized scheduling and approvals.",
      },
      {
        title: "Community Response Workflow",
        description:
          "Support timely replies, comment moderation, and message handling with clear processes.",
      },
      {
        title: "Campaign Amplification Support",
        description:
          "Coordinate organic and paid social activity so launches reach the right audience.",
      },
      {
        title: "Social Performance Reporting",
        description:
          "Track reach, engagement, growth, and content themes that are driving momentum.",
      },
    ],
    spotlightHeading: "Social Media Project Spotlights",
    projects: [
      {
        name: "BrandPulse",
        image: unsplash1611926653458,
        alt: "BrandPulse social media management platform",
        description:
          "BrandPulse is a social media management setup built for a D2C lifestyle brand that needed consistent content output across Instagram, Facebook, and LinkedIn. We created a 30-day content calendar system, handled creative coordination, and set up a scheduling workflow — helping the brand grow from 3 posts a week to daily publishing with measurable engagement improvements.",
      },
      {
        name: "SocialSync",
        image: unsplash1460925895917,
        alt: "SocialSync social performance reporting dashboard",
        description:
          "SocialSync is a social performance reporting and community management solution built for a coaching business managing multiple brand handles. It tracks follower growth, post reach, engagement rates, and DM response times across channels — giving the founder a weekly scorecard to review what content is working and where to focus next.",
      },
    ],
  }),

  "online-learning-platform": createPage({
    label: "Learning Platforms Built for Digital Delivery",
    title: "We Build Online Learning Platforms",
    titleHighlight: "That Keep Learners Engaged",
    subtitle:
      "Binazy develops learning products for schools, coaching businesses, and training teams with strong content delivery, progress tracking, and platform control.",
    techHeading: "Online Learning Platform Services",
    techTagline: "Courses. Progress. Engagement.",
    techDescription:
      "We build modern learning experiences that help educators publish content, manage learners, and track outcomes through one scalable platform.",
    services: [
      {
        title: "Course Catalog & Enrollment",
        description:
          "Organize courses, batches, pricing, and enrollment journeys for easier access and management.",
      },
      {
        title: "Learner Dashboard",
        description:
          "Give students a clear view of lessons, progress, schedules, and completed milestones.",
      },
      {
        title: "Assessments & Quizzes",
        description:
          "Support practice, scoring, and knowledge checks throughout the learning journey.",
      },
      {
        title: "Certificates & Completion Tracking",
        description:
          "Recognize milestones and track course completion through structured progress logic.",
      },
      {
        title: "Payments & Access Rules",
        description:
          "Manage paid and restricted content with clean entitlement and access control flows.",
      },
      {
        title: "Instructor & Admin Tools",
        description:
          "Enable content updates, learner oversight, announcements, and program management.",
      },
    ],
    spotlightHeading: "Online Learning Project Spotlights",
    projects: [
      {
        name: "EduNest",
        image: unsplash1501504905252,
        alt: "EduNest online learning management system",
        description:
          "EduNest is an online learning platform built for a professional training institute offering certification courses in digital marketing and data analytics. It supports course catalogs with video lessons, quizzes, and assignments, gives learners a personalized progress dashboard, and lets instructors track completion rates and issue certificates automatically on course completion.",
      },
      {
        name: "LearnPath",
        image: unsplash1524178232363,
        alt: "LearnPath e-learning and course delivery platform",
        description:
          "LearnPath is a structured e-learning platform developed for a coaching business that delivers upskilling programs to corporate teams. It handles batch enrollments, module-wise content delivery, assessment scoring, and generates completion reports for HR teams — making it easy to run multiple cohorts simultaneously without manual tracking.",
      },
    ],
  }),

  "student-staff-training-portal": createPage({
    label: "Training Portals Built for Mixed Audiences",
    image: unsplash1524178232363,
    titleHighlight: "For Students, Staff, And Teams",
    subtitle:
      "Binazy creates role-based training portals that support onboarding, internal learning, compliance tracking, and course delivery across different user groups.",
    techHeading: "Student & Staff Training Portal Services",
    techTagline: "Role-Based Learning. Better Visibility. Easier Delivery.",
    techDescription:
      "We build training portals that help institutions and organizations manage multiple learner groups through one controlled and trackable system.",
    services: [
      {
        title: "Role-Based Portal Access",
        description:
          "Create separate journeys and permissions for students, staff, trainers, and administrators.",
      },
      {
        title: "Learning Path Configuration",
        description:
          "Assign courses and progress steps based on role, batch, department, or location.",
      },
      {
        title: "Assessments & Compliance Checks",
        description:
          "Track completion, scores, and required milestones for training programs.",
      },
      {
        title: "Content Library Management",
        description:
          "Organize videos, resources, documents, and announcements in one searchable place.",
      },
      {
        title: "Attendance & Participation Tracking",
        description:
          "Monitor engagement across sessions, modules, and classroom-linked activity.",
      },
      {
        title: "Admin Reporting",
        description:
          "Measure participation, completion, and program outcomes with simple dashboards.",
      },
    ],
    spotlightHeading: "Training Portal Project Spotlights",
    projects: [
      {
        name: "TrainHub",
        image: unsplash1588196749597,
        alt: "TrainHub staff and student training portal",
        description:
          "TrainHub is a role-based training portal built for a hospital group that needed to manage compliance training across clinical staff, administrative teams, and new joiners simultaneously. It delivers mandatory training modules, tracks completion per department, sends automated reminders for overdue courses, and gives HR managers a real-time compliance dashboard.",
      },
      {
        name: "CampusReady",
        image: unsplash1562774053,
        alt: "CampusReady student and faculty learning workspace",
        description:
          "CampusReady is a multi-audience learning portal built for a vocational education institute managing both full-time students and part-time faculty. It creates separate dashboards for each role, supports live session scheduling, assignment submissions, and attendance tracking — giving academic coordinators a unified view of all batches and learning progress across departments.",
      },
    ],
  }),

  "edtech-product": createPage({
    label: "EdTech Products Built for Scale",
    title: "We Build EdTech Products",
    titleHighlight: "With Strong Product Foundations",
    subtitle:
      "Binazy partners with education-focused teams to design and build product-led EdTech experiences for learners, instructors, and administrators.",
    techHeading: "EdTech Product Development Services",
    techTagline: "Product Thinking. Learner Experience. Scalability.",
    techDescription:
      "We help shape EdTech products from feature strategy to platform delivery, balancing usability, engagement, and operational control.",
    services: [
      {
        title: "Product Discovery & Roadmapping",
        description:
          "Turn education use cases into product priorities, feature sets, and phased rollout plans.",
      },
      {
        title: "Instructor & Admin Workflows",
        description:
          "Build efficient tools for course management, communication, and program administration.",
      },
      {
        title: "Digital Content Delivery",
        description:
          "Support lessons, videos, assignments, and interactive materials across devices.",
      },
      {
        title: "Mobile Learning Experiences",
        description:
          "Create flexible access to content, practice, and learning updates on the go.",
      },
      {
        title: "Gamification & Engagement",
        description:
          "Use milestones, rewards, and progress cues to encourage deeper learner participation.",
      },
      {
        title: "Learning Analytics",
        description:
          "Track outcomes, completion, and platform usage to inform product improvements.",
      },
    ],
    spotlightHeading: "EdTech Product Project Spotlights",
    projects: [
      {
        name: "SkillForge",
        image: unsplash1509062522246,
        alt: "SkillForge EdTech product platform",
        description:
          "SkillForge is a full-stack EdTech product built for a startup offering career-focused skill programs to college students and early professionals. We led the product discovery, defined the feature roadmap, and built the platform — covering course delivery, instructor dashboards, learner progress tracking, badge-based gamification, and a mobile-responsive experience used by thousands of active learners.",
      },
      {
        name: "MindStep",
        image: unsplash1434030216411,
        alt: "MindStep mobile EdTech learning app",
        description:
          "MindStep is a mobile-first EdTech app built for a K-12 tutoring company that wanted to extend learning beyond classroom hours. It delivers bite-sized lessons, daily practice quizzes, and streak-based engagement to keep students motivated — while giving teachers a simple dashboard to assign content, review scores, and send announcements to individual batches.",
      },
    ],
  }),

  "business-dashboard": createPage({
    label: "Dashboards Built for Faster Decisions",
    image: unsplash1434030216411,
    titleHighlight: "That Keep Leadership Informed",
    subtitle:
      "Binazy creates dashboards that turn fragmented business data into focused operational and executive visibility for day-to-day decision-making.",
    techHeading: "Business Dashboard Services",
    techTagline: "Visibility. Clarity. Action.",
    techDescription:
      "We design reporting interfaces that help teams track performance, spot issues early, and act with more confidence across departments.",
    services: [
      {
        title: "KPI Dashboard Design",
        description:
          "Show the right metrics clearly so leaders can focus on performance that matters.",
      },
      {
        title: "Executive Summary Views",
        description:
          "Create clean high-level views for revenue, operations, pipeline, and team activity.",
      },
      {
        title: "Drilldown Reporting",
        description:
          "Move from summary figures into underlying detail when teams need context quickly.",
      },
      {
        title: "Real-Time Data Widgets",
        description:
          "Support live or near-real-time insight for operationally sensitive environments.",
      },
      {
        title: "Alert & Threshold Tracking",
        description:
          "Surface unusual movement, missed targets, or critical trends before they become bigger problems.",
      },
      {
        title: "Multi-Source Data Integration",
        description:
          "Combine metrics from business systems into a single reporting experience.",
      },
    ],
    spotlightHeading: "Business Dashboard Project Spotlights",
    projects: [
      {
        name: "CommandView",
        image: unsplash1543286386,
        alt: "CommandView executive business intelligence dashboard",
        description:
          "CommandView is an executive business intelligence dashboard built for a retail group managing 12 stores across three cities. It pulls data from their POS, inventory, and finance systems into one real-time view — giving leadership daily visibility into revenue by branch, top and bottom performing SKUs, and flagged anomalies so decisions are based on current data, not end-of-month reports.",
      },
      {
        name: "OpsLens",
        image: unsplash1531403009284,
        alt: "OpsLens daily operations performance dashboard",
        description:
          "OpsLens is a daily operations dashboard built for a logistics company that needed better ground-level visibility across dispatch, delivery, and customer feedback. It tracks order completion rates, on-time delivery percentages, and agent performance — with threshold alerts that notify managers when SLAs are at risk and drilldowns that help team leads identify where delays are happening.",
      },
    ],
  }),

  "sales-inventory-reports": createPage({
    label: "Operational Reports Built for Better Control",
    title: "We Build Sales & Inventory Reports",
    titleHighlight: "That Reveal What Needs Attention",
    subtitle:
      "Binazy develops practical reporting systems for sales movement, stock health, replenishment planning, and branch-level performance analysis.",
    techHeading: "Sales & Inventory Reporting Services",
    techTagline: "Movement. Margin. Stock Visibility.",
    techDescription:
      "We turn sales and inventory data into actionable reporting that helps teams manage demand, stock decisions, and operational efficiency.",
    services: [
      {
        title: "Sales Trend Reporting",
        description:
          "Track revenue, order patterns, and product movement across defined time periods.",
      },
      {
        title: "Stock Aging Analysis",
        description:
          "Identify slow-moving items, dead stock risk, and inventory pressure points.",
      },
      {
        title: "Reorder & Availability Alerts",
        description:
          "Surface products nearing shortage so teams can act before demand is missed.",
      },
      {
        title: "SKU & Category Performance",
        description:
          "Compare product lines, margins, and movement to guide merchandising and planning.",
      },
      {
        title: "Branch-Wise Reporting",
        description:
          "Understand performance across stores, branches, or warehouses from one reporting layer.",
      },
      {
        title: "Scheduled Export Automation",
        description:
          "Deliver recurring reports to stakeholders without manual spreadsheet work.",
      },
    ],
    spotlightHeading: "Sales & Inventory Project Spotlights",
    projects: [
      {
        name: "StockIQ",
        image: unsplash1553413077,
        alt: "StockIQ sales and inventory reporting platform",
        description:
          "StockIQ is a sales and inventory reporting platform built for a wholesale distributor managing thousands of SKUs across five warehouses. It tracks daily sales movement, flags products approaching reorder thresholds, surfaces slow-moving stock before it becomes a write-off risk, and delivers automated weekly summaries to procurement and finance teams — replacing hours of manual spreadsheet work.",
      },
      {
        name: "RetailRadar",
        image: unsplash1441986300917,
        alt: "RetailRadar branch-level sales analytics platform",
        description:
          "RetailRadar is a branch performance analytics tool built for a fashion retail chain that needed better visibility across its 20+ outlets. It compares sales efficiency, basket sizes, category turnover, and stock availability by location — giving the merchandising team clear signals on where to push promotions, reallocate inventory, and prioritize replenishment.",
      },
    ],
  }),

  "marketing-performance-tracking": createPage({
    label: "Measurement Systems Built for Marketing Clarity",
    title: "We Build Marketing Tracking",
    titleHighlight: "That Connects Campaigns To Outcomes",
    subtitle:
      "Binazy creates reporting systems that help marketing teams understand attribution, conversion performance, and channel effectiveness more clearly.",
    techHeading: "Marketing Performance Tracking Services",
    techTagline: "Attribution. Funnel Visibility. Better Decisions.",
    techDescription:
      "We bring together campaign metrics, channel data, and funnel performance into reporting that is easier to interpret and act on.",
    services: [
      {
        title: "Campaign Attribution Views",
        description:
          "Understand which sources, campaigns, and touchpoints are influencing outcomes most.",
      },
      {
        title: "CAC & ROAS Dashboards",
        description:
          "Monitor acquisition cost, return on ad spend, and efficiency trends over time.",
      },
      {
        title: "Channel Comparison Reporting",
        description:
          "Compare paid, organic, referral, and lifecycle channels inside one reporting layer.",
      },
      {
        title: "Funnel Drop-Off Analysis",
        description:
          "Spot where leads or users are losing momentum between stages of the marketing funnel.",
      },
      {
        title: "Goal & Event Tracking",
        description:
          "Capture meaningful actions so campaign reporting reflects real business outcomes.",
      },
      {
        title: "Automated Stakeholder Reporting",
        description:
          "Deliver recurring marketing summaries without depending on manual exports and slides.",
      },
    ],
    spotlightHeading: "Marketing Performance Tracking Project Spotlights",
    projects: [
      {
        name: "TrackIQ",
        image: unsplash1533750516457,
        alt: "TrackIQ multi-channel marketing attribution dashboard",
        description:
          "TrackIQ is a multi-channel marketing attribution platform built for a D2C brand spending across Google, Meta, and email. It pulls campaign data into one reporting workspace, maps the full customer acquisition journey, and surfaces ROAS and CAC by channel — giving the marketing team a clear view of which budgets are working and where they were over- or under-investing.",
      },
      {
        name: "GrowthBoard",
        image: unsplash1552664730,
        alt: "GrowthBoard weekly marketing performance scorecard",
        description:
          "GrowthBoard is a weekly marketing performance scorecard tool built for a SaaS company that needed a faster way to review campaign results across paid, organic, and lifecycle channels. It auto-generates a structured weekly summary with funnel metrics, channel comparisons, and highlighted anomalies — replacing a manual slide-building process that was taking the growth team half a day every Friday.",
      },
    ],
  }),

  "ai-customer-support-agent": createPage({
    label: "AI Support Agents Built for Real Conversations",
    title: "We Build AI Support Agents",
    titleHighlight: "That Help Customers Around The Clock",
    subtitle:
      "Binazy develops AI-powered support agents that answer common questions, guide users, and route complex issues into the right human workflow.",
    techHeading: "24/7 AI Customer Support Agent Services",
    techTagline: "Instant Response. Better Routing. Continuous Support.",
    techDescription:
      "We combine conversational AI, knowledge sources, and escalation logic to create support experiences that stay useful and controlled.",
    services: [
      {
        title: "Conversational Support Flows",
        description:
          "Design customer conversations that handle FAQs, triage, and guidance effectively.",
      },
      {
        title: "Knowledge Base Grounding",
        description:
          "Connect the agent with structured business content so answers stay relevant and current.",
      },
      {
        title: "Human Handoff Logic",
        description:
          "Route sensitive or unresolved requests to support teams with context intact.",
      },
      {
        title: "Multi-Channel Deployment",
        description:
          "Deploy support agents across websites, chat widgets, and messaging touchpoints.",
      },
      {
        title: "Conversation Analytics",
        description:
          "Review question trends, handoff reasons, and service gaps through analytics dashboards.",
      },
      {
        title: "Guardrails & Policy Controls",
        description:
          "Set boundaries, approval paths, and response rules to keep the experience safe and reliable.",
      },
    ],
    spotlightHeading: "AI Support Agent Project Spotlights",
    projects: [
      {
        name: "AskNova",
        image: unsplash1677442135703,
        alt: "AskNova AI customer support agent",
        description:
          "AskNova is an AI-powered support agent built for a fintech company that was handling thousands of repetitive customer queries across onboarding, transactions, and account issues. It resolves common questions instantly using grounded knowledge base content, collects issue context before escalating to human agents, and gives the support team a dashboard to review conversation trends and identify gaps in coverage.",
      },
      {
        name: "HelpMate AI",
        image: unsplash1531746790731,
        alt: "HelpMate AI support and handoff workflow",
        description:
          "HelpMate AI is a conversational support solution built for an e-commerce brand receiving high volumes of order, return, and delivery queries on their website. It handles tier-1 support autonomously with policy-grounded responses, routes unresolved issues to the right human queue with full conversation context, and tracks which question types are driving the most handoffs — helping the team improve self-service coverage over time.",
      },
    ],
  }),

  "smart-document-processing": createPage({
    label: "Document Workflows Built for Faster Processing",
    title: "We Build Smart Document Processing",
    titleHighlight: "That Cuts Manual Effort",
    subtitle:
      "Binazy helps organizations extract, validate, and route information from documents using structured automation and review workflows.",
    techHeading: "Smart Document Processing Services",
    techTagline: "Capture. Extract. Route.",
    techDescription:
      "We create document processing systems for forms, invoices, records, and operational paperwork so teams can move faster with fewer errors.",
    services: [
      {
        title: "OCR & Document Ingestion",
        description:
          "Capture structured information from scanned files, uploads, and mixed-format documents.",
      },
      {
        title: "Field Extraction Workflows",
        description:
          "Identify key values, labels, and sections from business documents automatically.",
      },
      {
        title: "Validation Rule Setup",
        description:
          "Check extracted data against defined rules before it enters downstream systems.",
      },
      {
        title: "Approval & Routing Automation",
        description:
          "Move documents into the right business workflow based on type, content, or priority.",
      },
      {
        title: "Searchable Archive Views",
        description:
          "Make processed records easy to search, review, and retrieve when teams need them.",
      },
      {
        title: "Audit Trails & Exception Queues",
        description:
          "Track processing history and surface documents needing manual review or correction.",
      },
    ],
    spotlightHeading: "Smart Document Processing Project Spotlights",
    projects: [
      {
        name: "DocParse",
        image: unsplash1568667256549,
        alt: "DocParse intelligent document processing engine",
        description:
          "DocParse is a smart document processing platform built for an insurance company that receives hundreds of claim forms, medical reports, and supporting documents daily. It uses OCR and structured extraction to pull key fields from mixed-format uploads, validates data against business rules, and routes each claim into the correct review queue — cutting manual data entry by over 70% and reducing processing time from days to hours.",
      },
      {
        name: "ClearDocs",
        image: unsplash1450101499163,
        alt: "ClearDocs document review and automation workflow",
        description:
          "ClearDocs is a document operations platform designed for a legal services firm managing high volumes of client agreements, compliance filings, and onboarding paperwork. It digitizes incoming documents, extracts key clauses and metadata, flags exceptions for manual review, and maintains a searchable archive — giving the operations team instant access to any document without hunting through email threads or shared drives.",
      },
    ],
  }),

  "ai-sales-assistant": createPage({
    label: "AI Sales Workflows Built to Support Revenue Teams",
    title: "We Build AI Sales Assistants",
    titleHighlight: "That Help Teams Sell Smarter",
    subtitle:
      "Binazy creates AI-assisted sales workflows that help qualify leads, support reps, and keep CRM activity moving with less manual effort.",
    techHeading: "AI Sales Assistant Services",
    techTagline: "Qualification. Guidance. Revenue Support.",
    techDescription:
      "We design AI sales assistants that streamline repetitive tasks while keeping sales teams in control of outreach and deal progress.",
    services: [
      {
        title: "Lead Qualification Logic",
        description:
          "Score and prioritize incoming leads using structured questions and signal-based rules.",
      },
      {
        title: "Product & Offer Guidance",
        description:
          "Help prospects or reps identify the right product fit based on needs and context.",
      },
      {
        title: "Follow-Up Assistance",
        description:
          "Support outreach timing, reminders, and next-step prompts across the sales cycle.",
      },
      {
        title: "CRM Update Automation",
        description:
          "Reduce manual CRM work by capturing notes, status changes, and handoff data automatically.",
      },
      {
        title: "Meeting Prep Summaries",
        description:
          "Prepare concise account context and action items ahead of sales conversations.",
      },
      {
        title: "Pipeline Insight Reporting",
        description:
          "Track qualification patterns, response speed, and workflow efficiency for the team.",
      },
    ],
    spotlightHeading: "AI Sales Assistant Project Spotlights",
    projects: [
      {
        name: "PipelineAI",
        image: unsplash1600880292203,
        alt: "PipelineAI sales qualification and CRM automation assistant",
        description:
          "PipelineAI is an AI sales assistant built for a B2B software company that was losing deals to slow follow-up and inconsistent lead qualification. It scores inbound leads using intent signals, guides sales reps through discovery questions, auto-updates the CRM after each interaction, and generates a prioritized daily pipeline view — helping the team focus on the right deals without the admin overhead.",
      },
      {
        name: "DealBrief",
        image: unsplash1557804506,
        alt: "DealBrief AI meeting preparation and sales workflow tool",
        description:
          "DealBrief is an AI-assisted meeting prep and deal management tool built for an enterprise sales team closing long-cycle contracts. Before every client call, it compiles a concise account summary with deal history, stakeholder context, open action items, and suggested talking points — giving reps everything they need in two minutes instead of digging through CRM notes and email threads.",
      },
    ],
  }),
};

export const servicesData = {
  ...pages,

  // Backward-compatible aliases for older internal links.
  "software-and-app-development": pages["custom-software-development"],
  "it-support-and-managed-services": pages["24-7-helpdesk-support"],
  "digital-marketing-and-growth-services":
    pages["marketing-performance-tracking"],
  "cloud-and-infrastructure-services": pages["remote-monitoring"],
  "data-and-analytics-solutions": pages["business-dashboard"],
  "web-development": pages["business-website-development"],
  "app-development": pages["mobile-app-development"],
  "custom-software": pages["custom-software-development"],
};
