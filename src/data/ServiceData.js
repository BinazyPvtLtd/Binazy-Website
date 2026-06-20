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

import unsplash1434030216411 from "@/assets/services/unsplash-1434030216411.jpg";
import unsplash1441986300917 from "@/assets/services/unsplash-1441986300917.jpg";
import unsplash1450101499163 from "@/assets/services/unsplash-1450101499163.jpg";
import unsplash1460925895917 from "@/assets/services/unsplash-1460925895917.jpg";
import business1 from "@/assets/business1.png";
import business2 from "@/assets/business2.png";
import ecommerce1 from "@/assets/ecommerce1.png";
import ecommerce2 from "@/assets/ecommerce2.png";
import ott1 from "@/assets/ott1.png";
import ott2 from "@/assets/ott2.png";
import collaby from "@/assets/collaby.png";
import app22 from "@/assets/app22.png";
import booking1 from "@/assets/booking1.png";
import booking2 from "@/assets/booking2.png";
import unsplash1497366811353 from "@/assets/services/unsplash-1497366811353.jpg";
import unsplash1501504905252 from "@/assets/services/unsplash-1501504905252.jpg";
import unsplash1504384308090 from "@/assets/services/unsplash-1504384308090.jpg";
import unsplash1509062522246 from "@/assets/services/unsplash-1509062522246.jpg";
import unsplash1522202176988 from "@/assets/services/unsplash-1522202176988.jpg";
import unsplash1524178232363 from "@/assets/services/unsplash-1524178232363.jpg";
import unsplash1531403009284 from "@/assets/services/unsplash-1531403009284.jpg";
import unsplash1531746790731 from "@/assets/services/unsplash-1531746790731.jpg";
import unsplash1533750516457 from "@/assets/services/unsplash-1533750516457.jpg";
import unsplash1542744173 from "@/assets/services/unsplash-1542744173.jpg";
import unsplash1543286386 from "@/assets/services/unsplash-1543286386.jpg";
import unsplash1551288049 from "@/assets/services/unsplash-1551288049.jpg";
import unsplash1552664730 from "@/assets/services/unsplash-1552664730.jpg";
import unsplash1553413077 from "@/assets/services/unsplash-1553413077.jpg";
import unsplash1553877522 from "@/assets/services/unsplash-1553877522.jpg";
import unsplash1557804506 from "@/assets/services/unsplash-1557804506.jpg";
import unsplash1558494949 from "@/assets/services/unsplash-1558494949.jpg";
import unsplash1562774053 from "@/assets/services/unsplash-1562774053.jpg";
import unsplash1568667256549 from "@/assets/services/unsplash-1568667256549.jpg";
import unsplash1581291518857 from "@/assets/services/unsplash-1581291518857.jpg";
import unsplash1586528116311 from "@/assets/services/unsplash-1586528116311.jpg";
import unsplash1588196749597 from "@/assets/services/unsplash-1588196749597.jpg";
import unsplash1596524430615 from "@/assets/services/unsplash-1596524430615.jpg";
import unsplash1600880292203 from "@/assets/services/unsplash-1600880292203.jpg";
import unsplash1611926653458 from "@/assets/services/unsplash-1611926653458.jpg";
import unsplash1677442135703 from "@/assets/services/unsplash-1677442135703.jpg";
import solutionSoftwareApp from "@/assets/solutions-software-app.jpg";
import solutionItSupport from "@/assets/solutions-it-support.jpg";
import solutionCloud from "@/assets/solutions-cloud.jpg";
import solutionAnalyticsAi from "@/assets/solutions-analytics-ai.jpg";
import softwareDev from "@/assets/softwareDev.jpg";
import digital from "@/assets/digital.jpg";
import web from "@/assets/web.jpg";
import app from "@/assets/app.jpg";
import ecom from "@/assets/ecom.jpg";
import test from "@/assets/test.jpg";
import blog1 from "@/assets/blog1.jpg";

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

const createPage = ({ title, subtitle, techHeading, services, projects }) => ({
  title,
  subtitle,
  techHeading,
  services: createServices(services),
  projects,
});

export const serviceMenu = [
  {
    id: "software-development",
    title: "Software Development",
    desc: "Custom software built around your workflows, users, integrations, and long-term business needs.",
    img: softwareDev,
    to: "/services/software-development",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    desc: "Campaigns, content, reporting, and conversion journeys that help your brand attract better leads.",
    img: digital,
    to: "/services/digital-marketing",
  },
  {
    id: "website-designing",
    title: "Website Designing",
    desc: "Clean, responsive website designs that present your brand clearly and guide visitors to action.",
    img: web,
    to: "/services/website-designing",
  },
  {
    id: "web-development",
    title: "Web Development",
    desc: "Fast, secure, and maintainable websites with strong performance and lead-focused structure.",
    img: web,
    to: "/services/web-development",
  },

  {
    id: "e-commerce-development",
    title: "E-commerce Development",
    desc: "Online stores with product management, secure checkout, order workflows, and analytics.",
    img: ecom,
    to: "/services/e-commerce-development",
  },
  {
    id: "app-maintenance",
    title: "App Maintenance",
    desc: "Ongoing bug fixes, updates, monitoring, performance improvements, and feature enhancements.",
    img: app,
    to: "/services/app-maintenance",
  },
  {
    id: "software-testing",
    title: "Software Testing",
    desc: "Functional, responsive, API, regression, and performance testing for reliable releases.",
    img: test,
    to: "/services/software-testing",
  },
  {
    id: "web-app-development",
    title: "Web App Development",
    desc: "Secure portals, dashboards, SaaS products, and internal applications for modern teams.",
    img: blog1,
    to: "/services/web-app-development",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    desc: "iOS and Android applications with smooth user flows, backend integration, and launch support.",
    img: app,
    to: "/services/mobile-app-development",
  },
];

const pages = {
  "business-website-development": createPage({
    title: "If Your Website Is not Bringing Leads It is Costing You Money",
    subtitle:
      "We design and develop websites that actually convert visitors into customers without relying on ads alone.",

    techHeading: "Business Website Development Services",

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

    projects: [
      {
        name: "FreelanceHub",
        image: business1,
        alt: "MCR Holidays business website",
      },
      {
        name: "CityConnect",
        image: business2,
        alt: "Event Horizon business website",
      },
    ],
  }),

  "online-store": createPage({
    title: "Growing Brands Stuck ",
    subtitle:
      "Take Back Control of Your Customers & Margins by Building Your Own E-commerce Website,We offer e-commerce development services that help you move beyond marketplaces so you can own your audience, improve margins, and grow your brand on your terms.",
    techHeading: "Ecommerce Website Development Services",

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
    projects: [
      {
        name: "ShopSphere",
        image: ecommerce1,
        alt: "MarketPulse online store",
      },
      {
        name: "CartNest",
        image: ecommerce2,
        alt: "QuickCart online shopping experience",
      },
    ],
  }),

  "ott-platform-development": createPage({
    title: "We Build OTT Platforms",
    subtitle:
      "Binazy creates streaming products with subscription flows, content management, and user experiences designed for high engagement across devices.",
    techHeading: "OTT Platform Development Services",
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
    projects: [
      {
        name: "StreamFlix",
        image: ott1,
        alt: "StreamNest OTT admin dashboard",
      },
      {
        name: "Livecreen",
        image: ott2,
        alt: "PlayPrime OTT platform interface",
      },
    ],
  }),

  "mobile-app-development": createPage({
    title: "We Build Mobile Apps",
    subtitle:
      "Binazy develops iOS and Android apps with polished experiences, stable backend integrations, and the product thinking needed for growth.",
    techHeading: "Mobile App Development Services",
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
    projects: [
      {
        name: "Collaby",
        image: collaby,
        alt: "FitTrack mobile app",
      },
      {
        name: "Tasklow",
        image: app22,
        alt: "QuickCart delivery app dashboard",
      },
    ],
  }),

  "booking-appointment-system": createPage({
    title: "We Build Booking Systems",
    subtitle:
      "Binazy helps businesses automate appointment scheduling, reminders, and team availability so customers can book faster and teams can manage calendars with ease.",
    techHeading: "Booking & Appointment System Services",
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
    projects: [
      {
        name: "BookEase",
        image: booking1,
        alt: "SlotSync booking and scheduling platform",
      },
      {
        name: "BookNow",
        image: booking2,
        alt: "AppointEase appointment management system",
      },
    ],
  }),

  "erp-system-development": createPage({
    title: "We Build ERP Systems",
    subtitle:
      "Binazy develops ERP platforms tailored to finance, inventory, procurement, operations, and reporting so teams can work from one reliable source of truth.",
    techHeading: "ERP System Development Services",
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
    projects: [
      {
        name: "NexaCore ERP",
        image: unsplash1551288049,
        alt: "NexaCore ERP system dashboard",
      },
      {
        name: "OpsGrid",
        image: unsplash1586528116311,
        alt: "OpsGrid operations and inventory ERP",
      },
    ],
  }),

  "custom-software-development": createPage({
    title: "We Build Custom Software",
    subtitle:
      "Binazy designs and develops tailored software for teams that need specific workflows, deeper integrations, and long-term flexibility beyond off-the-shelf tools.",
    techHeading: "Custom Software Development Services",
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
    projects: [
      {
        name: "PeopleDesk HRMS",
        image: unsplash1542744173,
        alt: "PeopleDesk HR management software",
      },
      {
        name: "WorkFlow360",
        image: unsplash1497366811353,
        alt: "WorkFlow360 operations management portal",
      },
    ],
  }),

  "hr-payroll-system": createPage({
    title: "We Build HR & Payroll Systems",
    subtitle:
      "Binazy develops HR and payroll platforms that simplify employee data, payroll cycles, attendance management, and compliance workflows.",
    techHeading: "HR & Payroll System Services",
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
    projects: [
      {
        name: "StaffSync",
        image: unsplash1581291518857,
        alt: "StaffSync HR and payroll management system",
      },
      {
        name: "PeopleBase",
        image: unsplash1522202176988,
        alt: "PeopleBase people operations portal",
      },
    ],
  }),

  "24-7-helpdesk-support": createPage({
    title: "Support Desks Built for Faster Resolution",
    subtitle:
      "Binazy helps support organizations manage tickets, escalations, communication, and service quality through structured helpdesk platforms.",
    techHeading: "24/7 Helpdesk Support Services",
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
    projects: [
      {
        name: "ResolveDesk",
        image: unsplash1553877522,
        alt: "ResolveDesk 24/7 helpdesk platform",
      },
      {
        name: "ClearLine Support Hub",
        image: unsplash1596524430615,
        alt: "ClearLine customer support operations platform",
      },
    ],
  }),

  "remote-monitoring": createPage({
    title: "Monitoring Systems That Surface Issues Early",
    subtitle:
      "Binazy develops remote monitoring systems that help teams observe assets, detect anomalies, and respond to issues before they grow.",
    techHeading: "Remote Monitoring Services",
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
    projects: [
      {
        name: "WatchGrid",
        image: unsplash1558494949,
        alt: "WatchGrid infrastructure monitoring console",
      },
      {
        name: "PulseOps",
        image: unsplash1504384308090,
        alt: "PulseOps operations monitoring and response platform",
      },
    ],
  }),

  "social-media-management": createPage({
    title: "Social Programs Managed With Consistency",
    subtitle:
      "Binazy supports social growth with content planning, publishing, audience engagement, and reporting that connects activity to business goals.",
    techHeading: "Social Media Management Services",
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
    projects: [
      {
        name: "BrandPulse",
        image: unsplash1611926653458,
        alt: "BrandPulse social media management platform",
      },
      {
        name: "SocialSync",
        image: unsplash1460925895917,
        alt: "SocialSync social performance reporting dashboard",
      },
    ],
  }),

  "online-learning-platform": createPage({
    title: "We Build Online Learning Platforms",
    subtitle:
      "Binazy develops learning products for schools, coaching businesses, and training teams with strong content delivery, progress tracking, and platform control.",
    techHeading: "Online Learning Platform Services",
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
    projects: [
      {
        name: "EduNest",
        image: unsplash1501504905252,
        alt: "EduNest online learning management system",
      },
      {
        name: "LearnPath",
        image: unsplash1524178232363,
        alt: "LearnPath e-learning and course delivery platform",
      },
    ],
  }),

  "student-staff-training-portal": createPage({
    title: "Training Portals Built for Mixed Audiences",
    subtitle:
      "Binazy creates role-based training portals that support onboarding, internal learning, compliance tracking, and course delivery across different user groups.",
    techHeading: "Student & Staff Training Portal Services",
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
    projects: [
      {
        name: "TrainHub",
        image: unsplash1588196749597,
        alt: "TrainHub staff and student training portal",
      },
      {
        name: "CampusReady",
        image: unsplash1562774053,
        alt: "CampusReady student and faculty learning workspace",
      },
    ],
  }),

  "edtech-product": createPage({
    title: "We Build EdTech Products",
    subtitle:
      "Binazy partners with education-focused teams to design and build product-led EdTech experiences for learners, instructors, and administrators.",
    techHeading: "EdTech Product Development Services",
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
    projects: [
      {
        name: "SkillForge",
        image: unsplash1509062522246,
        alt: "SkillForge EdTech product platform",
      },
      {
        name: "MindStep",
        image: unsplash1434030216411,
        alt: "MindStep mobile EdTech learning app",
      },
    ],
  }),

  "business-dashboard": createPage({
    title: "Dashboards Built for Faster Decisions",
    subtitle:
      "Binazy creates dashboards that turn fragmented business data into focused operational and executive visibility for day-to-day decision-making.",
    techHeading: "Business Dashboard Services",
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
    projects: [
      {
        name: "CommandView",
        image: unsplash1543286386,
        alt: "CommandView executive business intelligence dashboard",
      },
      {
        name: "OpsLens",
        image: unsplash1531403009284,
        alt: "OpsLens daily operations performance dashboard",
      },
    ],
  }),

  "sales-inventory-reports": createPage({
    title: "We Build Sales & Inventory Reports",
    subtitle:
      "Binazy develops practical reporting systems for sales movement, stock health, replenishment planning, and branch-level performance analysis.",
    techHeading: "Sales & Inventory Reporting Services",
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
    projects: [
      {
        name: "StockIQ",
        image: unsplash1553413077,
        alt: "StockIQ sales and inventory reporting platform",
      },
      {
        name: "RetailRadar",
        image: unsplash1441986300917,
        alt: "RetailRadar branch-level sales analytics platform",
      },
    ],
  }),

  "marketing-performance-tracking": createPage({
    title: "We Build Marketing Tracking",
    subtitle:
      "Binazy creates reporting systems that help marketing teams understand attribution, conversion performance, and channel effectiveness more clearly.",
    techHeading: "Marketing Performance Tracking Services",
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
    projects: [
      {
        name: "TrackIQ",
        image: unsplash1533750516457,
        alt: "TrackIQ multi-channel marketing attribution dashboard",
      },
      {
        name: "GrowthBoard",
        image: unsplash1552664730,
        alt: "GrowthBoard weekly marketing performance scorecard",
      },
    ],
  }),

  "ai-customer-support-agent": createPage({
    title: "We Build AI Support Agents",
    subtitle:
      "Binazy develops AI-powered support agents that answer common questions, guide users, and route complex issues into the right human workflow.",
    techHeading: "24/7 AI Customer Support Agent Services",
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
    projects: [
      {
        name: "AskNova",
        image: unsplash1677442135703,
        alt: "AskNova AI customer support agent",
      },
      {
        name: "HelpMate AI",
        image: unsplash1531746790731,
        alt: "HelpMate AI support and handoff workflow",
      },
    ],
  }),

  "smart-document-processing": createPage({
    title: "We Build Smart Document Processing",
    subtitle:
      "Binazy helps organizations extract, validate, and route information from documents using structured automation and review workflows.",
    techHeading: "Smart Document Processing Services",
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
    projects: [
      {
        name: "DocParse",
        image: unsplash1568667256549,
        alt: "DocParse intelligent document processing engine",
      },
      {
        name: "ClearDocs",
        image: unsplash1450101499163,
        alt: "ClearDocs document review and automation workflow",
      },
    ],
  }),

  "ai-sales-assistant": createPage({
    title: "We Build AI Sales Assistants",
    subtitle:
      "Binazy creates AI-assisted sales workflows that help qualify leads, support reps, and keep CRM activity moving with less manual effort.",
    techHeading: "AI Sales Assistant Services",
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
    projects: [
      {
        name: "PipelineAI",
        image: unsplash1600880292203,
        alt: "PipelineAI sales qualification and CRM automation assistant",
      },
      {
        name: "DealBrief",
        image: unsplash1557804506,
        alt: "DealBrief AI meeting preparation and sales workflow tool",
      },
    ],
  }),
};

const menuServicePages = {
  "software-development": createPage({
    title: "Software Development for Growing Businesses",
    subtitle:
      "Binazy builds reliable software that fits your workflow, connects your tools, and helps teams work faster with fewer manual steps.",
    techHeading: "Software Development Services",
    services: [
      {
        title: "Custom Business Software",
        description:
          "Build tools around your exact operations, approvals, reporting needs, and user roles.",
      },
      {
        title: "Workflow Automation",
        description:
          "Replace repetitive manual work with structured processes, alerts, and dashboards.",
      },
      {
        title: "Backend & API Development",
        description:
          "Create secure APIs, data models, and integrations that support your product reliably.",
      },
      {
        title: "Admin Panel Development",
        description:
          "Give teams clean dashboards to manage users, content, orders, tasks, and reports.",
      },
      {
        title: "System Integration",
        description:
          "Connect CRMs, payment tools, analytics, communication platforms, and internal systems.",
      },
      {
        title: "Maintenance & Improvements",
        description:
          "Keep software stable with updates, bug fixes, performance checks, and feature upgrades.",
      },
    ],
    projects: [
      {
        name: "WorkFlow360",
        image: unsplash1497366811353,
        alt: "Custom workflow software dashboard",
      },
      {
        name: "PeopleDesk",
        image: unsplash1542744173,
        alt: "Business software management platform",
      },
    ],
  }),

  "digital-marketing": createPage({
    title: "Digital Marketing That Turns Attention Into Leads",
    subtitle:
      "Binazy helps brands improve visibility, run focused campaigns, and measure growth across organic, paid, and social channels.",
    techHeading: "Digital Marketing Services",
    services: [
      {
        title: "Marketing Strategy",
        description:
          "Plan campaigns around your audience, offer, budget, channels, and conversion goals.",
      },
      {
        title: "Social Media Management",
        description:
          "Create and manage consistent content that supports awareness, trust, and engagement.",
      },
      {
        title: "Paid Campaign Setup",
        description:
          "Launch targeted ads with clear tracking, landing pages, and performance review cycles.",
      },
      {
        title: "Lead Generation Funnels",
        description:
          "Build campaign journeys that move visitors from interest to inquiry or booking.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Track traffic, leads, campaign performance, and channel contribution in one view.",
      },
      {
        title: "Conversion Optimization",
        description:
          "Improve landing pages, calls to action, and follow-up flows to increase results.",
      },
    ],
    projects: [
      {
        name: "GrowthBoard",
        image: unsplash1552664730,
        alt: "Digital marketing performance dashboard",
      },
      {
        name: "TrackIQ",
        image: unsplash1533750516457,
        alt: "Campaign tracking and attribution dashboard",
      },
    ],
  }),

  "website-designing": createPage({
    title: "Website Designing That Builds Trust Quickly",
    subtitle:
      "Binazy designs clean, responsive websites that present your brand clearly and guide visitors toward action.",
    techHeading: "Website Designing Services",
    services: [
      {
        title: "UI/UX Website Design",
        description:
          "Create layouts that are easy to scan, simple to navigate, and aligned with your brand.",
      },
      {
        title: "Responsive Page Design",
        description:
          "Design pages that look polished across mobile, tablet, laptop, and desktop screens.",
      },
      {
        title: "Landing Page Design",
        description:
          "Build focused pages for campaigns, services, offers, and lead generation.",
      },
      {
        title: "Brand Visual Direction",
        description:
          "Define colors, typography, spacing, and visual patterns for a consistent website.",
      },
      {
        title: "Conversion-Focused Sections",
        description:
          "Structure hero areas, service blocks, proof points, and calls to action for clarity.",
      },
      {
        title: "Design Handoff Support",
        description:
          "Prepare clean design specs and assets so development stays accurate and efficient.",
      },
    ],
    projects: [
      {
        name: "FreelanceHub",
        image: business1,
        alt: "Responsive business website design",
      },
      {
        name: "CityConnect",
        image: business2,
        alt: "Modern service website interface",
      },
    ],
  }),

  "web-development": createPage({
    title: "Web Development Built for Speed and Scale",
    subtitle:
      "Binazy develops fast, secure, and maintainable websites that help businesses publish, sell, and grow online.",
    techHeading: "Web Development Services",
    services: [
      {
        title: "Business Website Development",
        description:
          "Develop professional websites with clear pages, forms, service sections, and SEO structure.",
      },
      {
        title: "Frontend Development",
        description:
          "Build responsive interfaces using modern React patterns, clean components, and fast loading.",
      },
      {
        title: "CMS Integration",
        description:
          "Enable easy updates for blogs, pages, services, images, and marketing content.",
      },
      {
        title: "Performance Optimization",
        description:
          "Improve page speed, image loading, Core Web Vitals, and mobile browsing quality.",
      },
      {
        title: "Form & Lead Integration",
        description:
          "Connect inquiries to email, CRM, WhatsApp, or internal lead management flows.",
      },
      {
        title: "Website Support",
        description:
          "Handle updates, fixes, backups, page additions, and technical improvements over time.",
      },
    ],
    projects: [
      {
        name: "MCR Holidays",
        image: business1,
        alt: "Business website development project",
      },
      {
        name: "Event Horizon",
        image: business2,
        alt: "Service website development project",
      },
    ],
  }),

  "app-development": createPage({
    title: "App Development for Real Business Use Cases",
    subtitle:
      "Binazy builds mobile and web apps with practical features, secure integrations, and smooth user experiences.",
    techHeading: "App Development Services",
    services: [
      {
        title: "Product Planning",
        description:
          "Turn your idea into clear screens, features, user roles, and release priorities.",
      },
      {
        title: "Mobile App Development",
        description:
          "Build iOS and Android apps with reliable performance and intuitive user flows.",
      },
      {
        title: "Web App Development",
        description:
          "Create browser-based applications for customers, teams, operations, or vendors.",
      },
      {
        title: "Backend Integration",
        description:
          "Connect authentication, databases, APIs, payments, notifications, and admin controls.",
      },
      {
        title: "Testing & Launch Support",
        description:
          "Validate core flows, fix issues, prepare releases, and support store submission.",
      },
      {
        title: "Post-Launch Iteration",
        description:
          "Improve the app with analytics, user feedback, maintenance, and new features.",
      },
    ],
    projects: [
      {
        name: "Collaby",
        image: collaby,
        alt: "Mobile collaboration app interface",
      },
      {
        name: "Tasklow",
        image: app22,
        alt: "Task management mobile app interface",
      },
    ],
  }),

  "e-commerce-development": createPage({
    title: "E-commerce Development That Helps You Sell Directly",
    subtitle:
      "Binazy builds online stores with strong product journeys, secure checkout, and tools to manage orders, inventory, and customers.",
    techHeading: "E-commerce Development Services",
    services: [
      {
        title: "Custom Store Development",
        description:
          "Create branded online stores designed for your catalog, audience, and sales goals.",
      },
      {
        title: "Product & Category Setup",
        description:
          "Structure products, variants, filters, collections, and search for easier shopping.",
      },
      {
        title: "Cart & Checkout",
        description:
          "Build smooth checkout flows with coupons, shipping rules, taxes, and secure payments.",
      },
      {
        title: "Order Management",
        description:
          "Manage orders, customer details, fulfillment updates, returns, and admin workflows.",
      },
      {
        title: "Payment Integration",
        description:
          "Connect payment gateways that support safe transactions and reliable confirmations.",
      },
      {
        title: "Store Analytics",
        description:
          "Track sales, conversion, abandoned carts, product performance, and customer behavior.",
      },
    ],
    projects: [
      {
        name: "ShopSphere",
        image: ecommerce1,
        alt: "E-commerce storefront project",
      },
      {
        name: "CartNest",
        image: ecommerce2,
        alt: "Online store checkout project",
      },
    ],
  }),

  "app-maintenance": createPage({
    title: "App Maintenance That Keeps Products Stable",
    subtitle:
      "Binazy supports existing apps with bug fixes, updates, monitoring, performance improvements, and feature enhancements.",
    techHeading: "App Maintenance Services",
    services: [
      {
        title: "Bug Fixing",
        description:
          "Resolve crashes, broken flows, UI issues, API errors, and production defects.",
      },
      {
        title: "Version Updates",
        description:
          "Keep frameworks, packages, SDKs, and platform requirements current and secure.",
      },
      {
        title: "Performance Improvements",
        description:
          "Optimize load time, API response handling, database queries, and app responsiveness.",
      },
      {
        title: "Security Checks",
        description:
          "Review authentication, permissions, data handling, dependencies, and common risks.",
      },
      {
        title: "Feature Enhancements",
        description:
          "Add practical improvements without disrupting existing users or business workflows.",
      },
      {
        title: "Monitoring & Support",
        description:
          "Track errors, uptime, user issues, and release health with ongoing support routines.",
      },
    ],
    projects: [
      {
        name: "ResolveDesk",
        image: unsplash1553877522,
        alt: "Application maintenance support dashboard",
      },
      {
        name: "PulseOps",
        image: unsplash1588196749597,
        alt: "App monitoring and issue tracking platform",
      },
    ],
  }),

  "software-testing": createPage({
    title: "Software Testing That Protects User Experience",
    subtitle:
      "Binazy tests websites, apps, and software products to catch defects early and improve reliability before and after launch.",
    techHeading: "Software Testing Services",
    services: [
      {
        title: "Functional Testing",
        description:
          "Verify that features, forms, dashboards, and user flows work as expected.",
      },
      {
        title: "UI & Responsive Testing",
        description:
          "Check layouts, spacing, navigation, and interactions across common screen sizes.",
      },
      {
        title: "API Testing",
        description:
          "Validate endpoints, payloads, error handling, authentication, and integration behavior.",
      },
      {
        title: "Regression Testing",
        description:
          "Retest critical flows after updates so new changes do not break existing behavior.",
      },
      {
        title: "Performance Testing",
        description:
          "Identify slow pages, heavy requests, bottlenecks, and stability issues under load.",
      },
      {
        title: "Bug Reporting",
        description:
          "Provide clear reports with reproduction steps, screenshots, priority, and expected results.",
      },
    ],
    projects: [
      {
        name: "QualityGrid",
        image: unsplash1504384308090,
        alt: "Software testing dashboard",
      },
      {
        name: "ReleaseCheck",
        image: unsplash1460925895917,
        alt: "QA testing and release checklist platform",
      },
    ],
  }),

  "web-app-development": createPage({
    title: "Web App Development for Modern Teams",
    subtitle:
      "Binazy builds secure browser-based applications for portals, dashboards, SaaS products, marketplaces, and internal operations.",
    techHeading: "Web App Development Services",
    services: [
      {
        title: "SaaS Product Development",
        description:
          "Build subscription-ready web apps with user accounts, plans, dashboards, and admin tools.",
      },
      {
        title: "Customer Portals",
        description:
          "Create secure portals for customers to view data, requests, payments, documents, or status.",
      },
      {
        title: "Admin Dashboards",
        description:
          "Give internal teams practical tools to manage workflows, users, reports, and content.",
      },
      {
        title: "Role-Based Access",
        description:
          "Control access by user type, department, permissions, and business responsibility.",
      },
      {
        title: "Database & API Design",
        description:
          "Design scalable data structures and APIs that keep the application maintainable.",
      },
      {
        title: "Deployment & Scaling",
        description:
          "Prepare hosting, environments, monitoring, and release processes for production use.",
      },
    ],
    projects: [
      {
        name: "OpsGrid",
        image: unsplash1586528116311,
        alt: "Web app operations dashboard",
      },
      {
        name: "NexaCore",
        image: unsplash1551288049,
        alt: "Enterprise web application dashboard",
      },
    ],
  }),

  seo: createPage({
    title: "SEO That Helps Customers Find You",
    subtitle:
      "Binazy improves website visibility with technical SEO, keyword-focused content structure, and practical optimization for search performance.",
    techHeading: "SEO Services",
    services: [
      {
        title: "Technical SEO Audit",
        description:
          "Review indexability, metadata, headings, page speed, links, schema, and crawl issues.",
      },
      {
        title: "Keyword Research",
        description:
          "Find search terms that match your services, locations, audience, and buying intent.",
      },
      {
        title: "On-Page Optimization",
        description:
          "Improve titles, descriptions, headings, internal links, content structure, and CTAs.",
      },
      {
        title: "Local SEO",
        description:
          "Optimize service and location pages to support visibility in target markets.",
      },
      {
        title: "Content Planning",
        description:
          "Plan blogs, landing pages, and service content around demand and conversion goals.",
      },
      {
        title: "SEO Reporting",
        description:
          "Track rankings, traffic, impressions, clicks, technical fixes, and growth opportunities.",
      },
    ],
    projects: [
      {
        name: "SearchLift",
        image: unsplash1524178232363,
        alt: "SEO analytics dashboard",
      },
      {
        name: "RankPath",
        image: unsplash1501504905252,
        alt: "Search performance reporting dashboard",
      },
    ],
  }),
};

export const servicesData = {
  ...pages,
  ...menuServicePages,

  // Backward-compatible aliases for older internal links.
  "software-and-app-development": pages["custom-software-development"],
  "it-support-and-managed-services": pages["24-7-helpdesk-support"],
  "digital-marketing-and-growth-services":
    pages["marketing-performance-tracking"],
  "cloud-and-infrastructure-services": pages["remote-monitoring"],
  "data-and-analytics-solutions": pages["business-dashboard"],
  "custom-software": pages["custom-software-development"],
};
