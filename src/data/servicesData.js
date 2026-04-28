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
import unsplash1488646953014 from "../assets/services/unsplash-1488646953014.jpg";
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
import unsplash1556742049 from "../assets/services/unsplash-1556742049.jpg";
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
        name: "MCR Holidays Corporate Site",
        // Travel/tourism corporate website — people at a scenic destination with laptop planning
        image: unsplash1488646953014,
        alt: "MCR Holidays business website",
        description:
          "A service-driven travel website built to showcase packages, capture inquiries, and convert organic traffic into qualified leads.",
      },
      {
        name: "Event Horizon Brand Launch",
        // Modern marketing / branding office environment with screens and brand materials
        image: unsplash1497366216548,
        alt: "Event Horizon business website",
        description:
          "A modern marketing website with campaign landing pages, strong content hierarchy, and a flexible design system for rapid updates.",
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
        name: "MarketPulse Commerce Platform",
        // Full ecommerce dashboard with analytics graphs on desktop
        image: unsplash1556742049,
        alt: "MarketPulse online store",
        description:
          "A full-featured ecommerce platform with product discovery, order workflows, payment integrations, and admin reporting.",
      },
      {
        name: "QuickCart Mobile Commerce",
        // Person shopping on mobile phone in a bright, clean setting
        image: unsplash1512428559087,
        alt: "QuickCart online shopping experience",
        description:
          "A mobile-first store experience built for fast browsing, quick checkout, and repeat purchase convenience.",
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
        name: "StreamNest Video Platform",
        // Large screen TV streaming interface in a dark living room — Netflix-style
        image: unsplash1522869635100,
        alt: "StreamNest OTT admin dashboard",
        description:
          "A subscription-led streaming platform with content sections, viewer profiles, billing flows, and operator analytics.",
      },
      {
        name: "PlayPrime Media Hub",
        // Person watching video content on laptop in dark room — cinematic atmosphere
        image: unsplash1611162617474,
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
        name: "FitTrack Companion App",
        // Fitness app on phone — person holding phone showing workout/health dashboard
        image: unsplash1576678927484,
        alt: "FitTrack mobile app",
        description:
          "A wellness mobile app with personalized dashboards, reminders, progress tracking, and a smooth daily-use experience.",
      },
      {
        name: "QuickCart Delivery App",
        // Delivery rider with phone showing delivery app map/order status
        image: unsplash1558618666,
        alt: "QuickCart delivery app dashboard",
        description:
          "A logistics-enabled commerce app with order status, account management, and streamlined repeat checkout flows.",
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
        name: "BookEase Operations Suite",
        // Clean calendar / scheduling interface on desktop screen in a professional setting
        image: unsplash1506784983877,
        alt: "BookEase booking system",
        description:
          "A centralized booking platform combining customer scheduling, operations dashboards, and automated reminders for service teams.",
      },
      {
        name: "ConsultPro Demo Scheduler",
        // Sales/consultation call — professional on headset with computer showing calendar
        image: unsplash1521791136064,
        alt: "ConsultPro appointment scheduling platform",
        description:
          "An appointment management product that helps sales teams qualify prospects, schedule demos, and coordinate follow-up.",
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
        name: "FinanceCore ERP",
        // Finance dashboard with charts and graphs on multiple monitors in corporate setting
        image: unsplash1551288049,
        alt: "FinanceCore ERP dashboard",
        description:
          "A configurable ERP workspace for finance, approvals, reporting, and multi-role operational control.",
      },
      {
        name: "OpsPilot ERP Dashboard",
        // Warehouse / operations management — person with tablet managing inventory
        image: unsplash1586528116311,
        alt: "OpsPilot ERP dashboard",
        description:
          "An ERP solution tying together procurement, inventory, process visibility, and executive reporting.",
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
        name: "Binazy HRMS Suite",
        // HR software — professional viewing employee management dashboard on screen
        image: unsplash1542744173,
        alt: "Binazy HRMS dashboard",
        description:
          "A tailored HR and payroll product with approvals, employee records, attendance, and admin controls built around internal processes.",
      },
      {
        name: "OfficeFlow Operations Portal",
        // Modern open office with team members using custom portal on multiple screens
        image: unsplash1497366811353,
        alt: "OfficeFlow custom business portal",
        description:
          "A custom operations portal that unifies process tracking, records, dashboards, and team coordination.",
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
        name: "Binazy HRMS Suite",
        // HR manager reviewing employee records on a laptop — professional office setting
        image: unsplash1581291518857,
        alt: "HR and payroll system dashboard",
        description:
          "An HRMS platform for employee records, leave approvals, attendance, payroll, and role-based administration.",
      },
      {
        name: "TeamFlow People Ops Portal",
        // Diverse team in a bright office — collaborative people operations environment
        image: unsplash1522202176988,
        alt: "People operations portal",
        description:
          "A people operations workspace built to simplify onboarding, policy workflows, and payroll coordination.",
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
        name: "SupportDesk 24/7 Command Center",
        // Customer support center — agents at workstations with multiple monitors, headsets
        image: unsplash1553877522,
        alt: "24/7 helpdesk support dashboard",
        description:
          "A helpdesk platform built for continuous support, ticket routing, escalations, and SLA visibility.",
      },
      {
        name: "ResolveOne Service Hub",
        // Support agent on headset working at desktop with ticketing software visible
        image: unsplash1596524430615,
        alt: "Customer service ticketing workspace",
        description:
          "A support operations workspace combining ticket management, knowledge resources, and team coordination.",
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
        name: "InfraWatch Monitoring Console",
        // Server room / data center with monitoring screens showing network health
        image: unsplash1558494949,
        alt: "Remote monitoring console",
        description:
          "A monitoring dashboard that surfaces asset health, live alerts, and trend data for technical teams.",
      },
      {
        name: "OpsSignal Response Board",
        // NOC-style operations center with large display boards showing system status
        image: unsplash1504384308090,
        alt: "Remote monitoring incident response portal",
        description:
          "A response-focused monitoring portal built to coordinate issue triage, ownership, and resolution progress.",
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
        name: "BrandWave Social Calendar",
        // Marketing team around a table planning social content with sticky notes and calendar
        image: unsplash1611926653458,
        alt: "Social media campaign calendar",
        description:
          "A structured social media delivery setup combining monthly planning, content rollouts, and engagement reporting.",
      },
      {
        name: "CommunityPulse Reporting Desk",
        // Social media analytics dashboard on screen showing engagement graphs and metrics
        image: unsplash1460925895917,
        alt: "Social media performance dashboard",
        description:
          "A reporting workspace built to track social reach, engagement trends, and campaign outcomes across channels.",
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
        name: "LearnSphere LMS",
        // Student on laptop taking an online course — e-learning dashboard visible on screen
        image: unsplash1501504905252,
        alt: "LearnSphere online learning platform",
        description:
          "A learning platform with course catalogs, dashboards, quizzes, certificates, and admin visibility for training programs.",
      },
      {
        name: "SkillBridge Learning Hub",
        // Group of professionals in a bright room with laptops doing online collaborative learning
        image: unsplash1524178232363,
        alt: "SkillBridge e-learning portal",
        description:
          "A structured learning product that supports enrollments, modular content, and progress tracking for distributed learners.",
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
        name: "ClassLive Training Portal",
        // Virtual classroom — instructor on video call with students, training session in progress
        image: unsplash1588196749597,
        alt: "Student and staff training portal",
        description:
          "A role-based training portal with live sessions, assignments, attendance views, and recorded content access.",
      },
      {
        name: "CampusFlow Learning Workspace",
        // University campus computer lab — students working on training modules on desktop computers
        image: unsplash1562774053,
        alt: "Campus learning and training workspace",
        description:
          "A multi-audience learning environment designed for internal staff training and student learning programs.",
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
        name: "EduSpark Product Suite",
        // EdTech product team working on a whiteboard with product roadmap in a startup office
        image: unsplash1509062522246,
        alt: "EdTech product platform",
        description:
          "A scalable EdTech product with course delivery, instructor workflows, learner dashboards, and engagement features.",
      },
      {
        name: "MentorLoop Learning App",
        // Student using mobile app to learn — phone screen showing course interface in hand
        image: unsplash1434030216411,
        alt: "EdTech mobile learning application",
        description:
          "A mobile-first learning product designed for lesson access, assessments, and progress visibility.",
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
        name: "InsightBoard Executive Console",
        // Executive looking at a large business analytics dashboard on an ultrawide monitor
        image: unsplash1543286386,
        alt: "Business dashboard interface",
        description:
          "A dashboard product that combines KPI monitoring, drilldowns, and leadership-ready visibility across operations.",
      },
      {
        name: "OpsView Daily Control Room",
        // Operations manager in open office reviewing daily metrics dashboard on screen
        image: unsplash1531403009284,
        alt: "Operations dashboard project",
        description:
          "A daily-use dashboard built to help managers track activity, exceptions, and performance at a glance.",
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
        name: "StockSense Reporting Hub",
        // Warehouse worker with barcode scanner checking inventory against a tablet dashboard
        image: unsplash1553413077,
        alt: "Sales and inventory reporting dashboard",
        description:
          "A reporting workspace built to track stock movement, sales trends, and replenishment priorities across operations.",
      },
      {
        name: "RetailFlow Branch Insights",
        // Retail store manager reviewing sales performance reports on laptop behind counter
        image: unsplash1441986300917,
        alt: "Retail sales and inventory analytics project",
        description:
          "A branch-level reporting setup that helped leadership compare sales efficiency, product turnover, and stock risk.",
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
        name: "CampaignSight Reporting Suite",
        // Marketing analyst reviewing multi-channel attribution dashboard on large screen
        image: unsplash1533750516457,
        alt: "Marketing performance dashboard",
        description:
          "A multi-channel reporting setup used to track attribution, funnel metrics, and channel efficiency in one place.",
      },
      {
        name: "GrowthOps Weekly Scorecard",
        // Growth team in a meeting room reviewing a weekly scorecard on a projected screen
        image: unsplash1552664730,
        alt: "Marketing scorecard reporting project",
        description:
          "A decision-focused scorecard system that helps teams review campaign performance and optimize faster.",
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
        name: "AssistNow AI Helpdesk",
        // Chat interface on laptop showing AI bot conversation with a customer — clean UI
        image: unsplash1677442135703,
        alt: "AI customer support agent dashboard",
        description:
          "A conversational support agent with knowledge grounding, escalation rules, and reporting for 24/7 customer assistance.",
      },
      {
        name: "SupportBot Resolution Flow",
        // AI chatbot widget open on a website on a desktop screen — modern dark UI
        image: unsplash1531746790731,
        alt: "AI support handoff portal",
        description:
          "An AI-assisted service workflow that handles common requests and passes complex cases to support teams with context.",
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
        name: "DocFlow Processing Engine",
        // Business person scanning documents with a scanner connected to document processing software
        image: unsplash1568667256549,
        alt: "Smart document processing portal",
        description:
          "A document workflow platform that extracts information, validates records, and routes items into operational queues.",
      },
      {
        name: "PaperlessOps Review Desk",
        // Clean office desk with tablet showing digital document review queue — paperless workflow
        image: unsplash1450101499163,
        alt: "Document review and automation dashboard",
        description:
          "A document operations setup for faster review, searchable retrieval, and exception management.",
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
        name: "RevenuePilot AI Assistant",
        // Sales rep at desk with CRM pipeline dashboard on screen — AI suggestions panel visible
        image: unsplash1600880292203,
        alt: "AI sales assistant dashboard",
        description:
          "A sales support workflow combining lead qualification, CRM automation, and team-ready pipeline insights.",
      },
      {
        name: "DealFlow Meeting Prep Hub",
        // Sales team in a meeting room reviewing deal pipeline and prep notes on laptop before a call
        image: unsplash1557804506,
        alt: "AI sales prep workspace",
        description:
          "An AI-assisted sales operations workspace built to prepare reps faster and improve follow-through.",
      },
    ],
  }),
};

export const servicesData = {
  ...pages,

  // Backward-compatible aliases for older internal links.
  "software-and-app-development": pages["custom-software-development"],
  "it-support-and-managed-services": pages["24-7-helpdesk-support"],
  "digital-marketing-and-growth-services": pages["marketing-performance-tracking"],
  "cloud-and-infrastructure-services": pages["remote-monitoring"],
  "data-and-analytics-solutions": pages["business-dashboard"],
  "web-development": pages["business-website-development"],
  "app-development": pages["mobile-app-development"],
  "custom-software": pages["custom-software-development"],
};