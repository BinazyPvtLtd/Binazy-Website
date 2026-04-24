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

import mobileProjectImage from "../assets/111.png";
import elearningHero from "../assets/education.jpg";
import travelProjectImage from "../assets/travel.jpg";
import ecommerceProjectImage from "../assets/ecommerce.jpg";
import hrmsProjectImage from "../assets/HRMS.jpg";
import eventProjectImage from "../assets/PRoject2.jpg";
import operationsProjectImage from "../assets/project1.jpg";
import dashboardProjectImage from "../assets/dashboard-project.jpg";
import officePortalImage from "../assets/office4.jpg";
import officeOpsImage from "../assets/office2.jpg";
import teamProjectImage from "../assets/Office1.jpg";

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
    ...serviceStyles[index % serviceStyles.length],
    ...item,
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
    title: "We Build Business Websites",
    titleHighlight: "That Turn Visitors Into Leads",
    subtitle:
      "Binazy creates fast, conversion-focused business websites that present your brand clearly, guide users to action, and support long-term growth.",
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
        image: travelProjectImage,
        alt: "MCR Holidays business website",
        description:
          "A service-driven travel website built to showcase packages, capture inquiries, and convert organic traffic into qualified leads.",
      },
      {
        name: "Event Horizon Brand Launch",
        image: eventProjectImage,
        alt: "Event Horizon business website",
        description:
          "A modern marketing website with campaign landing pages, strong content hierarchy, and a flexible design system for rapid updates.",
      },
    ],
  }),

  "online-store": createPage({
    label: "Online Stores Built for Sales",
    title: "We Build Online Stores",
    titleHighlight: "That Make Buying Easy",
    subtitle:
      "Binazy develops ecommerce experiences that simplify product discovery, streamline checkout, and give businesses strong control over catalog and operations.",
    techHeading: "Online Store Development Services",
    techTagline: "Catalog. Checkout. Retention.",
    techDescription:
      "We build scalable online stores with secure payments, clean shopping journeys, and admin tools that support merchandising, fulfillment, and repeat orders.",
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
        image: ecommerceProjectImage,
        alt: "MarketPulse online store",
        description:
          "A full-featured ecommerce platform with product discovery, order workflows, payment integrations, and admin reporting.",
      },
      {
        name: "QuickCart Mobile Commerce",
        image: mobileProjectImage,
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
        image: dashboardProjectImage,
        alt: "StreamNest OTT admin dashboard",
        description:
          "A subscription-led streaming platform with content sections, viewer profiles, billing flows, and operator analytics.",
      },
      {
        name: "PlayPrime Media Hub",
        image: officePortalImage,
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
        image: mobileProjectImage,
        alt: "FitTrack mobile app",
        description:
          "A wellness mobile app with personalized dashboards, reminders, progress tracking, and a smooth daily-use experience.",
      },
      {
        name: "QuickCart Delivery App",
        image: dashboardProjectImage,
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
        image: officeOpsImage,
        alt: "BookEase booking system",
        description:
          "A centralized booking platform combining customer scheduling, operations dashboards, and automated reminders for service teams.",
      },
      {
        name: "ConsultPro Demo Scheduler",
        image: eventProjectImage,
        alt: "ConsultPro appointment scheduling platform",
        description:
          "An appointment management product that helps sales teams qualify prospects, schedule demos, and coordinate follow-up.",
      },
    ],
  }),

  "all-in-one-business-management-system": createPage({
    label: "Unified Systems for Daily Operations",
    title: "We Build Business Management Systems",
    titleHighlight: "That Connect Teams And Workflows",
    subtitle:
      "Binazy creates all-in-one operational platforms that bring sales, finance, service, and reporting into one connected workspace.",
    techHeading: "All-in-One Business Management System Services",
    techTagline: "Operations. Visibility. Efficiency.",
    techDescription:
      "We replace scattered tools with integrated systems that support day-to-day execution, approval flows, and better decision-making across departments.",
    services: [
      {
        title: "Central Operations Dashboard",
        description:
          "Bring team tasks, activity summaries, and business visibility into one command center.",
      },
      {
        title: "CRM & Client Management",
        description:
          "Track leads, customers, follow-ups, and relationships inside the broader operating system.",
      },
      {
        title: "Billing & Invoicing Modules",
        description:
          "Manage estimates, invoices, payments, and collection status alongside operations data.",
      },
      {
        title: "Inventory & Workflow Tracking",
        description:
          "Coordinate stock, task progress, service delivery, and dependencies across teams.",
      },
      {
        title: "Automation & Approvals",
        description:
          "Reduce repetitive admin work with triggered actions and role-based approval chains.",
      },
      {
        title: "Executive Reporting",
        description:
          "Give founders and managers fast access to KPIs, trends, and activity summaries.",
      },
    ],
    spotlightHeading: "Business Management System Project Spotlights",
    projects: [
      {
        name: "OpsPilot Unified Workspace",
        image: operationsProjectImage,
        alt: "OpsPilot business management dashboard",
        description:
          "A cross-functional operating system for workflows, approvals, inventory, and management reporting.",
      },
      {
        name: "OfficeFlow Control Center",
        image: officePortalImage,
        alt: "OfficeFlow business management portal",
        description:
          "A business portal that connects departments, centralizes records, and simplifies day-to-day operations.",
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
        image: dashboardProjectImage,
        alt: "FinanceCore ERP dashboard",
        description:
          "A configurable ERP workspace for finance, approvals, reporting, and multi-role operational control.",
      },
      {
        name: "OpsPilot ERP Dashboard",
        image: operationsProjectImage,
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
        image: hrmsProjectImage,
        alt: "Binazy HRMS dashboard",
        description:
          "A tailored HR and payroll product with approvals, employee records, attendance, and admin controls built around internal processes.",
      },
      {
        name: "OfficeFlow Operations Portal",
        image: officePortalImage,
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
        image: hrmsProjectImage,
        alt: "HR and payroll system dashboard",
        description:
          "An HRMS platform for employee records, leave approvals, attendance, payroll, and role-based administration.",
      },
      {
        name: "TeamFlow People Ops Portal",
        image: teamProjectImage,
        alt: "People operations portal",
        description:
          "A people operations workspace built to simplify onboarding, policy workflows, and payroll coordination.",
      },
    ],
  }),

  "technology-migration": createPage({
    label: "Migration Programs Planned for Low Risk",
    title: "We Deliver Technology Migration",
    titleHighlight: "Without Disrupting The Business",
    subtitle:
      "Binazy helps businesses modernize systems, move data, and transition infrastructure with structured planning, validation, and support.",
    techHeading: "Technology Migration Services",
    techTagline: "Modernization. Transition. Continuity.",
    techDescription:
      "We handle migration projects across applications, databases, infrastructure, and workflows while minimizing downtime and protecting business continuity.",
    services: [
      {
        title: "Application Modernization Planning",
        description:
          "Assess current systems and map a safer path toward updated platforms and architecture.",
      },
      {
        title: "Data Migration Execution",
        description:
          "Move records, documents, and operational data with validation and integrity checks.",
      },
      {
        title: "Infrastructure Transition Support",
        description:
          "Shift workloads across hosting environments with careful rollout planning and visibility.",
      },
      {
        title: "Parallel Run & Testing",
        description:
          "Validate outputs and workflows before full cutover to reduce operational surprises.",
      },
      {
        title: "Downtime & Rollback Planning",
        description:
          "Prepare fallback strategies and cutover plans for high-confidence deployment windows.",
      },
      {
        title: "Team Training & Handover",
        description:
          "Support internal teams with training, documentation, and post-migration stabilization.",
      },
    ],
    spotlightHeading: "Technology Migration Project Spotlights",
    projects: [
      {
        name: "CloudShift Operations Migration",
        image: officeOpsImage,
        alt: "Technology migration operations dashboard",
        description:
          "A staged migration program covering data transfer, application updates, and controlled rollout for operations teams.",
      },
      {
        name: "LegacyFlow Modernization Program",
        image: officePortalImage,
        alt: "Legacy system modernization portal",
        description:
          "A modernization effort that moved a legacy workflow into a more maintainable and scalable digital platform.",
      },
    ],
  }),

  "customer-management-system": createPage({
    label: "Customer Systems Built Around Relationships",
    title: "We Build Customer Management Systems",
    titleHighlight: "That Keep Teams Aligned",
    subtitle:
      "Binazy develops customer management platforms that help sales, support, and operations teams work from one connected customer view.",
    techHeading: "Customer Management System Services",
    techTagline: "Customer Data. Sales Visibility. Better Follow-Up.",
    techDescription:
      "Our solutions combine lead tracking, customer records, communication history, and reporting into a workflow teams can actually use every day.",
    services: [
      {
        title: "Lead & Customer Data Management",
        description:
          "Centralize contact details, account history, notes, and lifecycle stages in one system.",
      },
      {
        title: "Pipeline & Opportunity Tracking",
        description:
          "Track prospects, deals, follow-ups, and conversion progress across the sales cycle.",
      },
      {
        title: "Task & Follow-Up Automation",
        description:
          "Automate reminders, assignments, and outreach triggers to improve response consistency.",
      },
      {
        title: "Support & Communication Views",
        description:
          "Give teams quick access to conversations, requests, and customer context during service delivery.",
      },
      {
        title: "Reporting & Segmentation",
        description:
          "Analyze pipeline movement, team performance, and customer segments for better planning.",
      },
      {
        title: "CRM Integrations",
        description:
          "Connect telephony, forms, messaging, and marketing tools into the wider customer workflow.",
      },
    ],
    spotlightHeading: "Customer Management System Project Spotlights",
    projects: [
      {
        name: "DealerConnect Relationship Hub",
        image: officePortalImage,
        alt: "DealerConnect CRM portal",
        description:
          "A customer management system for account tracking, service requests, internal coordination, and reporting.",
      },
      {
        name: "LeadFlow Sales Workspace",
        image: dashboardProjectImage,
        alt: "LeadFlow CRM dashboard",
        description:
          "A sales-focused management system with pipeline visibility, reminders, and conversion analytics for growing teams.",
      },
    ],
  }),

  "24-7-helpdesk-support": createPage({
    label: "Support Desks Built for Faster Resolution",
    title: "We Build Helpdesk Solutions",
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
        image: officeOpsImage,
        alt: "24/7 helpdesk support dashboard",
        description:
          "A helpdesk platform built for continuous support, ticket routing, escalations, and SLA visibility.",
      },
      {
        name: "ResolveOne Service Hub",
        image: teamProjectImage,
        alt: "Customer service ticketing workspace",
        description:
          "A support operations workspace combining ticket management, knowledge resources, and team coordination.",
      },
    ],
  }),

  "remote-monitoring": createPage({
    label: "Monitoring Systems That Surface Issues Early",
    title: "We Build Remote Monitoring Solutions",
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
        image: dashboardProjectImage,
        alt: "Remote monitoring console",
        description:
          "A monitoring dashboard that surfaces asset health, live alerts, and trend data for technical teams.",
      },
      {
        name: "OpsSignal Response Board",
        image: officePortalImage,
        alt: "Remote monitoring incident response portal",
        description:
          "A response-focused monitoring portal built to coordinate issue triage, ownership, and resolution progress.",
      },
    ],
  }),

  "sla-based-support-contracts": createPage({
    label: "Support Contracts Designed Around Accountability",
    title: "We Structure SLA-Based Support",
    titleHighlight: "With Clear Response Commitments",
    subtitle:
      "Binazy helps organizations define and deliver support contracts with measurable service levels, reporting, and governance.",
    techHeading: "SLA-Based Support Contract Services",
    techTagline: "Commitment. Transparency. Measurable Service.",
    techDescription:
      "We create support delivery models backed by clear expectations, structured reporting, and escalation paths aligned with business priority.",
    services: [
      {
        title: "Support Scope Definition",
        description:
          "Define coverage hours, issue types, priorities, and responsibilities clearly from the start.",
      },
      {
        title: "Response & Resolution Matrix",
        description:
          "Set realistic timelines and service levels based on urgency and operational impact.",
      },
      {
        title: "Preventive Maintenance Planning",
        description:
          "Include scheduled reviews, system upkeep, and recurring technical health checks.",
      },
      {
        title: "Escalation Governance",
        description:
          "Establish escalation paths and stakeholder visibility for service-critical incidents.",
      },
      {
        title: "Monthly Performance Reporting",
        description:
          "Track ticket metrics, SLA adherence, trends, and service quality over time.",
      },
      {
        title: "Quarterly Service Reviews",
        description:
          "Review outcomes, recurring issues, and improvement priorities with the client team.",
      },
    ],
    spotlightHeading: "SLA Support Project Spotlights",
    projects: [
      {
        name: "ServiceGuard Contract Dashboard",
        image: officeOpsImage,
        alt: "SLA support contract dashboard",
        description:
          "A support governance workspace for SLA tracking, issue review, and monthly reporting.",
      },
      {
        name: "ClientCare Review Portal",
        image: teamProjectImage,
        alt: "Client SLA review portal",
        description:
          "A client-facing portal used to monitor support commitments, escalations, and ongoing service improvements.",
      },
    ],
  }),

  "lead-generation": createPage({
    label: "Lead Funnels Built to Convert",
    title: "We Build Lead Generation",
    titleHighlight: "Systems That Create Pipeline Growth",
    subtitle:
      "Binazy helps businesses capture, qualify, and convert more opportunities with focused lead generation journeys and measurable conversion flows.",
    techHeading: "Lead Generation Services",
    techTagline: "Traffic. Capture. Conversion.",
    techDescription:
      "From landing pages to CRM-connected automation, we build lead systems that turn traffic into qualified conversations and booked opportunities.",
    services: [
      {
        title: "Campaign Landing Pages",
        description:
          "Create focused campaign pages designed around offers, trust, and conversion clarity.",
      },
      {
        title: "Lead Capture & Qualification",
        description:
          "Use forms and logic-driven qualification steps to improve lead quality and routing.",
      },
      {
        title: "CRM & Follow-Up Automation",
        description:
          "Connect inquiries with CRM workflows, notifications, and outreach triggers automatically.",
      },
      {
        title: "Appointment Booking Funnels",
        description:
          "Move qualified prospects into demos, discovery calls, and consultations faster.",
      },
      {
        title: "Channel Performance Tracking",
        description:
          "Monitor which campaigns, pages, and sources are driving real sales opportunities.",
      },
      {
        title: "Conversion Rate Optimization",
        description:
          "Improve results through testing, messaging refinements, and funnel improvements.",
      },
    ],
    spotlightHeading: "Lead Generation Project Spotlights",
    projects: [
      {
        name: "GrowthFlow Campaign Funnel",
        image: dashboardProjectImage,
        alt: "Lead generation analytics dashboard",
        description:
          "A campaign funnel with landing pages, smart forms, CRM syncing, and conversion dashboards for sales teams.",
      },
      {
        name: "ConsultPro Booking Journey",
        image: officeOpsImage,
        alt: "Lead capture and booking experience",
        description:
          "A structured lead system that helped streamline inquiries, qualification, and demo scheduling.",
      },
    ],
  }),

  "social-media-management": createPage({
    label: "Social Programs Managed With Consistency",
    title: "We Deliver Social Media Management",
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
        image: eventProjectImage,
        alt: "Social media campaign calendar",
        description:
          "A structured social media delivery setup combining monthly planning, content rollouts, and engagement reporting.",
      },
      {
        name: "CommunityPulse Reporting Desk",
        image: dashboardProjectImage,
        alt: "Social media performance dashboard",
        description:
          "A reporting workspace built to track social reach, engagement trends, and campaign outcomes across channels.",
      },
    ],
  }),

  "search-visibility": createPage({
    label: "Search Visibility Built on Strong Foundations",
    title: "We Improve Search Visibility",
    titleHighlight: "So The Right Audience Can Find You",
    subtitle:
      "Binazy helps businesses increase discoverability through technical SEO, content structure, and ongoing search performance improvement.",
    techHeading: "Search Visibility Services",
    techTagline: "Discoverability. Relevance. Sustainable Growth.",
    techDescription:
      "We focus on search fundamentals that support better rankings, stronger traffic quality, and clearer page alignment with customer intent.",
    services: [
      {
        title: "Technical SEO Review",
        description:
          "Audit crawlability, page structure, metadata, speed, and indexation fundamentals.",
      },
      {
        title: "Keyword & Intent Mapping",
        description:
          "Align search terms with high-value services, pages, and audience questions.",
      },
      {
        title: "On-Page Content Optimization",
        description:
          "Improve titles, headings, content depth, and page hierarchy for better relevance.",
      },
      {
        title: "Local Search Visibility",
        description:
          "Strengthen local presence through optimized listings, service pages, and supporting signals.",
      },
      {
        title: "SEO Content Roadmapping",
        description:
          "Plan supporting content that reinforces authority around priority topics and offers.",
      },
      {
        title: "Ranking & Traffic Reporting",
        description:
          "Monitor keyword movement, organic traffic patterns, and opportunity areas over time.",
      },
    ],
    spotlightHeading: "Search Visibility Project Spotlights",
    projects: [
      {
        name: "SearchLift Service SEO Program",
        image: travelProjectImage,
        alt: "Search visibility improvement project",
        description:
          "A search-focused optimization project that improved page structure, service discoverability, and organic lead quality.",
      },
      {
        name: "LocalReach Performance Dashboard",
        image: dashboardProjectImage,
        alt: "SEO reporting dashboard",
        description:
          "An analytics dashboard used to track rankings, traffic quality, and local search performance improvements.",
      },
    ],
  }),

  "email-whatsapp-campaigns": createPage({
    label: "Outbound Campaigns Built for Timely Follow-Up",
    title: "We Run Email & WhatsApp Campaigns",
    titleHighlight: "That Keep Prospects Engaged",
    subtitle:
      "Binazy helps businesses communicate with leads and customers through structured campaign flows that feel timely, relevant, and measurable.",
    techHeading: "Email & WhatsApp Campaign Services",
    techTagline: "Segmentation. Automation. Better Follow-Up.",
    techDescription:
      "We build lifecycle messaging programs that support promotions, reminders, onboarding, and nurture flows across email and WhatsApp.",
    services: [
      {
        title: "Audience Segmentation",
        description:
          "Group contacts by interest, stage, and behavior so messages feel more relevant.",
      },
      {
        title: "Campaign Flow Design",
        description:
          "Create sequences for onboarding, promotions, reminders, and re-engagement.",
      },
      {
        title: "Template & Copy Setup",
        description:
          "Prepare branded messages that are clear, concise, and action-oriented.",
      },
      {
        title: "WhatsApp Journey Integration",
        description:
          "Support operational and marketing communication using WhatsApp-led touchpoints.",
      },
      {
        title: "A/B Testing & Optimization",
        description:
          "Improve open rates, response rates, and conversions through structured testing.",
      },
      {
        title: "Campaign Performance Tracking",
        description:
          "Measure delivery, opens, clicks, replies, and assisted conversions over time.",
      },
    ],
    spotlightHeading: "Email & WhatsApp Campaign Project Spotlights",
    projects: [
      {
        name: "MessageFlow Nurture Program",
        image: eventProjectImage,
        alt: "Email campaign workflow project",
        description:
          "A nurture workflow combining segmented messaging, follow-up timing, and campaign reporting for lead engagement.",
      },
      {
        name: "ConnectNow WhatsApp Outreach",
        image: officePortalImage,
        alt: "WhatsApp campaign operations dashboard",
        description:
          "A messaging operations setup for reminders, promotions, and customer updates using structured WhatsApp journeys.",
      },
    ],
  }),

  "performance-marketing": createPage({
    label: "Paid Campaigns Managed for Better ROI",
    title: "We Deliver Performance Marketing",
    titleHighlight: "Focused On Measurable Growth",
    subtitle:
      "Binazy manages paid campaigns with careful audience targeting, creative testing, and reporting that connects spend to pipeline and revenue outcomes.",
    techHeading: "Performance Marketing Services",
    techTagline: "Targeting. Testing. Return On Spend.",
    techDescription:
      "We help businesses scale paid acquisition through a disciplined system for campaign setup, optimization, and conversion-focused reporting.",
    services: [
      {
        title: "Ad Account Setup & Structure",
        description:
          "Build campaign foundations that support cleaner management and easier optimization.",
      },
      {
        title: "Audience & Targeting Strategy",
        description:
          "Reach the right users with intent-based targeting, exclusions, and retargeting segments.",
      },
      {
        title: "Creative Testing Framework",
        description:
          "Test copy, visuals, hooks, and offers to find what actually drives response.",
      },
      {
        title: "Landing Page Alignment",
        description:
          "Match campaign intent with post-click journeys that improve conversion performance.",
      },
      {
        title: "Retargeting & Funnel Recovery",
        description:
          "Re-engage visitors and incomplete leads through smart remarketing paths.",
      },
      {
        title: "ROAS & Pipeline Reporting",
        description:
          "Track spend efficiency, lead quality, conversions, and revenue contribution clearly.",
      },
    ],
    spotlightHeading: "Performance Marketing Project Spotlights",
    projects: [
      {
        name: "AdPulse Acquisition Engine",
        image: dashboardProjectImage,
        alt: "Performance marketing dashboard",
        description:
          "A paid acquisition program with campaign testing, landing page alignment, and pipeline reporting across channels.",
      },
      {
        name: "RetainLoop Funnel Recovery",
        image: eventProjectImage,
        alt: "Retargeting campaign project",
        description:
          "A conversion recovery initiative using remarketing, creative iterations, and conversion analytics to improve ROI.",
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
        image: elearningHero,
        alt: "LearnSphere online learning platform",
        description:
          "A learning platform with course catalogs, dashboards, quizzes, certificates, and admin visibility for training programs.",
      },
      {
        name: "SkillBridge Learning Hub",
        image: officePortalImage,
        alt: "SkillBridge e-learning portal",
        description:
          "A structured learning product that supports enrollments, modular content, and progress tracking for distributed learners.",
      },
    ],
  }),

  "student-staff-training-portal": createPage({
    label: "Training Portals Built for Mixed Audiences",
    title: "We Build Training Portals",
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
        image: operationsProjectImage,
        alt: "Student and staff training portal",
        description:
          "A role-based training portal with live sessions, assignments, attendance views, and recorded content access.",
      },
      {
        name: "CampusFlow Learning Workspace",
        image: elearningHero,
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
        image: elearningHero,
        alt: "EdTech product platform",
        description:
          "A scalable EdTech product with course delivery, instructor workflows, learner dashboards, and engagement features.",
      },
      {
        name: "MentorLoop Learning App",
        image: mobileProjectImage,
        alt: "EdTech mobile learning application",
        description:
          "A mobile-first learning product designed for lesson access, assessments, and progress visibility.",
      },
    ],
  }),

  "secure-cloud-setup": createPage({
    label: "Cloud Setups Built With Security First",
    title: "We Deliver Secure Cloud Setup",
    titleHighlight: "For Modern Digital Operations",
    subtitle:
      "Binazy helps organizations plan and implement secure cloud environments with clear access control, monitoring, and operational stability.",
    techHeading: "Secure Cloud Setup Services",
    techTagline: "Architecture. Access. Reliability.",
    techDescription:
      "We design cloud foundations that support growth while improving security posture, operational visibility, and cost awareness.",
    services: [
      {
        title: "Cloud Architecture Planning",
        description:
          "Design hosting, networking, and service layout aligned with performance and growth needs.",
      },
      {
        title: "Identity & Access Controls",
        description:
          "Set up permissions, account structure, and secure access practices across teams.",
      },
      {
        title: "Secure Networking Configuration",
        description:
          "Configure connectivity, isolation, and traffic controls to reduce exposure and risk.",
      },
      {
        title: "Monitoring & Logging Setup",
        description:
          "Create visibility into health, activity, and security events across cloud resources.",
      },
      {
        title: "Cost Governance",
        description:
          "Track usage patterns and put guardrails in place to avoid unnecessary cloud spend.",
      },
      {
        title: "Disaster Recovery Readiness",
        description:
          "Prepare backup, failover, and continuity planning for critical workloads and data.",
      },
    ],
    spotlightHeading: "Secure Cloud Setup Project Spotlights",
    projects: [
      {
        name: "CloudShield Landing Zone",
        image: officePortalImage,
        alt: "Secure cloud setup architecture",
        description:
          "A cloud foundation project covering access controls, observability, environment structure, and operational governance.",
      },
      {
        name: "InfraGuard Operations Stack",
        image: dashboardProjectImage,
        alt: "Cloud monitoring and governance dashboard",
        description:
          "A secure cloud operations setup with monitoring, cost visibility, and stronger deployment discipline.",
      },
    ],
  }),

  "automated-backup-recovery": 
  createPage({
    label: "Backup Systems Planned for Recovery Readiness",
    title: "We Build Backup & Recovery Workflows",
    titleHighlight: "That Protect Critical Business Data",
    subtitle:
      "Binazy helps teams automate backups, validate recovery paths, and strengthen resilience against accidental loss, outages, and security events.",
    techHeading: "Automated Backup & Recovery Services",
    techTagline: "Resilience. Restore Confidence. Business Continuity.",
    techDescription:
      "We put structured backup and recovery processes in place so teams can restore systems and data faster when something goes wrong.",
    services: [
      {
        title: "Automated Backup Scheduling",
        description:
          "Set reliable backup routines for data, workloads, and critical system components.",
      },
      {
        title: "Recovery Point Strategy",
        description:
          "Define backup frequency and restore targets based on business risk and operational need.",
      },
      {
        title: "Restore Testing",
        description:
          "Validate recovery paths through scheduled restore drills and practical scenario checks.",
      },
      {
        title: "Retention & Compliance Controls",
        description:
          "Manage backup retention windows and policy alignment for audit and compliance needs.",
      },
      {
        title: "Cross-Location Protection",
        description:
          "Support offsite or cross-region resilience to reduce single-point failure risk.",
      },
      {
        title: "Incident Recovery Runbooks",
        description:
          "Document response steps clearly so teams can act quickly under pressure.",
      },
    ],
    spotlightHeading: "Backup & Recovery Project Spotlights",
    projects: [
      {
        name: "RestoreSafe Recovery Program",
        image: dashboardProjectImage,
        alt: "Backup and recovery dashboard",
        description:
          "A resilience initiative focused on automated backups, restore validation, and business continuity planning.",
      },
      {
        name: "VaultOps Continuity Setup",
        image: officeOpsImage,
        alt: "Disaster recovery operations workspace",
        description:
          "A recovery-readiness setup that gave teams clearer backup oversight and practical incident runbooks.",
      },
    ],
  }),

  "business-dashboard": createPage({
    label: "Dashboards Built for Faster Decisions",
    title: "We Build Business Dashboards",
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
        image: dashboardProjectImage,
        alt: "Business dashboard interface",
        description:
          "A dashboard product that combines KPI monitoring, drilldowns, and leadership-ready visibility across operations.",
      },
      {
        name: "OpsView Daily Control Room",
        image: officeOpsImage,
        alt: "Operations dashboard project",
        description:
          "A daily-use dashboard built to help managers track activity, exceptions, and performance at a glance.",
      },
    ],
  }),

  "sales-inventory-reports": 
  createPage({
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
        image: dashboardProjectImage,
        alt: "Sales and inventory reporting dashboard",
        description:
          "A reporting workspace built to track stock movement, sales trends, and replenishment priorities across operations.",
      },
      {
        name: "RetailFlow Branch Insights",
        image: ecommerceProjectImage,
        alt: "Retail sales and inventory analytics project",
        description:
          "A branch-level reporting setup that helped leadership compare sales efficiency, product turnover, and stock risk.",
      },
    ],
  }),

  "customer-behaviour-insights":
   createPage({
    label: "Customer Insight Systems Built Around Behavior",
    title: "We Build Customer Behaviour Insights",
    titleHighlight: "That Guide Smarter Decisions",
    subtitle:
      "Binazy helps businesses understand how customers browse, buy, engage, and return so teams can improve journeys and retention strategies.",
    techHeading: "Customer Behaviour Insights Services",
    techTagline: "Behavior. Segments. Better Decisions.",
    techDescription:
      "We convert customer interactions into insights that help marketing, product, and sales teams understand what is driving growth or friction.",
    services: [
      {
        title: "Journey & Funnel Analysis",
        description:
          "Track how customers move through discovery, evaluation, conversion, and retention stages.",
      },
      {
        title: "Cohort & Repeat Purchase Views",
        description:
          "Understand behavior patterns across customer groups and repeat buying segments.",
      },
      {
        title: "Churn & Drop-Off Signals",
        description:
          "Spot where customer interest declines so teams can intervene sooner.",
      },
      {
        title: "Feedback & Sentiment Trends",
        description:
          "Combine customer responses and qualitative signals into actionable insight themes.",
      },
      {
        title: "Audience Segmentation Dashboards",
        description:
          "Group customers by value, activity, or behavior for sharper targeting and planning.",
      },
      {
        title: "Insight Sharing Workflows",
        description:
          "Turn analysis into dashboards and reports stakeholders can use in decision meetings.",
      },
    ],
    spotlightHeading: "Customer Behaviour Insight Project Spotlights",
    projects: [
      {
        name: "CustomerLens Insight Studio",
        image: dashboardProjectImage,
        alt: "Customer behaviour analytics dashboard",
        description:
          "An analytics product used to understand user journeys, repeat behavior, and churn indicators across customer segments.",
      },
      {
        name: "RetentionMap Audience Tracker",
        image: officePortalImage,
        alt: "Audience behavior reporting portal",
        description:
          "A customer insight workspace that helps teams review engagement patterns and improve retention planning.",
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
        image: dashboardProjectImage,
        alt: "Marketing performance dashboard",
        description:
          "A multi-channel reporting setup used to track attribution, funnel metrics, and channel efficiency in one place.",
      },
      {
        name: "GrowthOps Weekly Scorecard",
        image: officeOpsImage,
        alt: "Marketing scorecard reporting project",
        description:
          "A decision-focused scorecard system that helps teams review campaign performance and optimize faster.",
      },
    ],
  }),

  "24-7-ai-customer-support-agent":
   createPage({
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
        image: dashboardProjectImage,
        alt: "AI customer support agent dashboard",
        description:
          "A conversational support agent with knowledge grounding, escalation rules, and reporting for 24/7 customer assistance.",
      },
      {
        name: "SupportBot Resolution Flow",
        image: officePortalImage,
        alt: "AI support handoff portal",
        description:
          "An AI-assisted service workflow that handles common requests and passes complex cases to support teams with context.",
      },
    ],
  }),

  "smart-document-processing": 
  createPage({
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
        image: officePortalImage,
        alt: "Smart document processing portal",
        description:
          "A document workflow platform that extracts information, validates records, and routes items into operational queues.",
      },
      {
        name: "PaperlessOps Review Desk",
        image: dashboardProjectImage,
        alt: "Document review and automation dashboard",
        description:
          "A document operations setup for faster review, searchable retrieval, and exception management.",
      },
    ],
  }),

  "ai-sales-assistant": 
  createPage({
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
        image: dashboardProjectImage,
        alt: "AI sales assistant dashboard",
        description:
          "A sales support workflow combining lead qualification, CRM automation, and team-ready pipeline insights.",
      },
      {
        name: "DealFlow Meeting Prep Hub",
        image: officeOpsImage,
        alt: "AI sales prep workspace",
        description:
          "An AI-assisted sales operations workspace built to prepare reps faster and improve follow-through.",
      },
    ],
  }),

  "process-automation": 
  createPage({
    label: "Automation Programs Built Around Real Operations",
    title: "We Build Process Automation",
    titleHighlight: "That Removes Repetitive Work",
    subtitle:
      "Binazy helps businesses automate recurring workflows, approvals, and system handoffs so teams can focus on higher-value work.",
    techHeading: "Process Automation Services",
    techTagline: "Workflow. Integration. Efficiency.",
    techDescription:
      "We identify repetitive operational steps and turn them into dependable automated flows with the right controls, visibility, and exception handling.",
    services: [
      {
        title: "Workflow Mapping & Audit",
        description:
          "Break down existing processes to identify automation opportunities and pain points clearly.",
      },
      {
        title: "Approval Automation",
        description:
          "Route requests, confirmations, and policy-based actions without manual chasing.",
      },
      {
        title: "System Integration Flows",
        description:
          "Move data between business tools so work can continue without duplicate entry.",
      },
      {
        title: "Event-Based Triggers",
        description:
          "Start actions automatically when forms, updates, or operational events occur.",
      },
      {
        title: "Exception Handling",
        description:
          "Set review queues and fallback steps for cases that need human decisions.",
      },
      {
        title: "Automation Monitoring",
        description:
          "Track workflow status, failures, and efficiency gains through operational dashboards.",
      },
    ],
    spotlightHeading: "Process Automation Project Spotlights",
    projects: [
      {
        name: "FlowOps Automation Suite",
        image: officeOpsImage,
        alt: "Process automation operations suite",
        description:
          "A workflow automation setup covering approvals, task routing, system handoffs, and exception monitoring.",
      },
      {
        name: "TaskBridge Integration Hub",
        image: officePortalImage,
        alt: "Business workflow automation portal",
        description:
          "An operations portal designed to automate repetitive admin work and improve cross-team coordination.",
      },
    ],
  }),

  "predictive-insights":
   createPage({
    label: "Predictive Models Built for Better Planning",
    title: "We Deliver Predictive Insights",
    titleHighlight: "That Help Teams Act Earlier",
    subtitle:
      "Binazy helps businesses apply forecasting and predictive analysis to demand, risk, operations, and growth decisions through practical analytics systems.",
    techHeading: "Predictive Insight Services",
    techTagline: "Forecasting. Risk Signals. Smarter Planning.",
    techDescription:
      "We build predictive reporting and model-driven workflows that help teams anticipate change instead of reacting after the fact.",
    services: [
      {
        title: "Demand & Revenue Forecasting",
        description:
          "Estimate upcoming demand and revenue patterns to support planning and allocation.",
      },
      {
        title: "Risk Scoring Workflows",
        description:
          "Identify accounts, transactions, or operational areas that need earlier attention.",
      },
      {
        title: "Anomaly Detection",
        description:
          "Surface unusual patterns in business activity, performance, or usage behavior.",
      },
      {
        title: "Planning Dashboards",
        description:
          "Present predictive outputs in a format decision-makers can review and act on quickly.",
      },
      {
        title: "Scenario Comparison",
        description:
          "Support planning through alternate-case visibility and what-if style analysis.",
      },
      {
        title: "Model Monitoring & Review",
        description:
          "Track prediction quality and business fit over time so outputs stay trustworthy.",
      },
    ],
    spotlightHeading: "Predictive Insight Project Spotlights",
    projects: [
      {
        name: "ForecastIQ Planning Board",
        image: dashboardProjectImage,
        alt: "Predictive insights dashboard",
        description:
          "A predictive analytics dashboard for demand planning, risk visibility, and decision support across teams.",
      },
      {
        name: "SignalSense Trend Monitor",
        image: officeOpsImage,
        alt: "Predictive trend monitoring workspace",
        description:
          "A planning workspace designed to surface anomalies, forecast movement, and support earlier operational action.",
      },
    ],
  }),
};

export const servicesData = {
  ...pages,

  // Backward-compatible aliases for older internal links.
  "software-and-app-development": pages["custom-software-development"],
  "it-support-and-managed-services": pages["customer-management-system"],
  "digital-marketing-and-growth-services": pages["lead-generation"],
  "cloud-and-infrastructure-services": pages["secure-cloud-setup"],
  "data-and-analytics-solutions": pages["business-dashboard"],
  "ai-and-automation": pages["process-automation"],
  "web-development": pages["business-website-development"],
  "app-development": pages["mobile-app-development"],
  "full-stack-development": pages["all-in-one-business-management-system"],
  "custom-software": pages["custom-software-development"],
};
