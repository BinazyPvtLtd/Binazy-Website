import {
  Activity,
  BarChart3,
  BookOpen,
  Building2,
  CalendarDays,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Truck,
  Users,
  Video,
  Wallet,
} from "lucide-react";

import realestateHero from "@/assets/realestate.jpg";
import educationHero from "@/assets/education.jpg";
import ecommerceHero from "@/assets/ecommerce.jpg";
import healthcareHero from "@/assets/healthcare.jpg";
import fintechHero from "@/assets/fintech.jpg";
import travelHero from "@/assets/travel.jpg";
import manufacturingHero from "@/assets/manufacturing.jpg";
import hrmsProjectImage from "@/assets/HRMS.jpg";
import eventProjectImage from "@/assets/PRoject2.jpg";
import operationsProjectImage from "@/assets/project1.jpg";
import dashboardProjectImage from "@/assets/dashboard-project.jpg";
import officePortalImage from "@/assets/office4.jpg";
import officeOpsImage from "@/assets/office2.jpg";
import office3Image from "@/assets/office 3.jpg";

export const industriesData = {
  "real-estate": {
    label: "Real Estate Technology That Moves Deals Faster",
    title: "We Build Real Estate",
    titleHighlight: "Platforms That Convert",
    subtitle:
      "Binazy creates property platforms, broker tools, and operational systems that help real estate businesses manage listings, capture leads, and streamline transactions.",
    heroImage: realestateHero,

    spotlightHeading: "Real Estate Project Spotlights",
    projects: [
      {
        name: "EstateFlow Broker CRM",
        image: realestateHero,
        alt: "EstateFlow broker CRM platform",
        description:
          "A lead and listing management platform for brokers with property inventory, inquiry tracking, follow-up workflows, and performance views.",
      },
      {
        name: "PrimeStay Property Operations Hub",
        image: officePortalImage,
        alt: "PrimeStay property operations dashboard",
        description:
          "A property operations workspace for managing tenants, maintenance requests, documents, payment records, and team activity in one system.",
      },
    ],

    solutionsHeading: "Software Solutions for Modern Real Estate Teams",
    solutionsTagline: "Listings. Leads. Operations.",
    solutionsDescription:
      "We design software for developers, brokers, property managers, and real estate startups that need stronger workflows and better customer experiences.",
    solutions: [
      {
        icon: Building2,
        iconBg: "bg-blue-100 text-blue-500",
        title: "Property Management Platforms",
        description:
          "Manage rentals, tenant records, maintenance workflows, and payment histories from one central dashboard.",
      },
      {
        icon: Users,
        iconBg: "bg-green-100 text-green-500",
        title: "Real Estate CRM Systems",
        description:
          "Track leads, broker interactions, site visits, follow-ups, and closing pipelines with role-based team views.",
      },
      {
        icon: Smartphone,
        iconBg: "bg-purple-100 text-purple-500",
        title: "Buyer & Agent Mobile Apps",
        description:
          "Launch mobile-first apps for property discovery, appointment booking, saved listings, and location-aware browsing.",
      },
      {
        icon: BarChart3,
        iconBg: "bg-amber-100 text-amber-500",
        title: "Sales Analytics Dashboards",
        description:
          "Monitor campaign performance, lead quality, inventory movement, occupancy trends, and team productivity with live reporting.",
      },
      {
        icon: CalendarDays,
        iconBg: "bg-pink-100 text-pink-500",
        title: "Booking & Visit Scheduling",
        description:
          "Coordinate site visits, meeting slots, reminders, and sales follow-ups with automated booking workflows.",
      },
      {
        icon: ShieldCheck,
        iconBg: "bg-indigo-100 text-indigo-500",
        title: "Secure Documentation Systems",
        description:
          "Digitize agreements, KYC records, contracts, and approval chains with structured access and audit-friendly workflows.",
      },
    ],
  },
  education: {
    label: "Education Platforms Built for Better Learning",
    title: "We Build Education",
    titleHighlight: "Products That Engage",
    subtitle:
      "Binazy develops digital learning products for institutions, edtech startups, and training businesses that want stronger learner engagement and smoother operations.",
    heroImage: educationHero,

    spotlightHeading: "Education Project Spotlights",
    projects: [
      {
        name: "LearnSphere LMS",
        image: educationHero,
        alt: "LearnSphere learning management system",
        description:
          "A learning platform with course catalogs, learner progress, quizzes, certificates, and content management for modern training teams.",
      },
      {
        name: "ClassLive Student Portal",
        image: operationsProjectImage,
        alt: "ClassLive education portal dashboard",
        description:
          "A student portal for live sessions, assignment tracking, attendance views, discussion features, and academic communication.",
      },
    ],

    solutionsHeading: "Digital Solutions for Institutions and EdTech Teams",
    solutionsTagline: "Learning. Delivery. Measurement.",
    solutionsDescription:
      "We help schools, universities, coaching brands, and edtech products deliver better online learning experiences from enrollment to completion.",
    solutions: [
      {
        icon: BookOpen,
        iconBg: "bg-blue-100 text-blue-500",
        title: "Learning Management Systems",
        description:
          "Custom LMS platforms for course delivery, learner tracking, assignments, and structured content experiences.",
      },
      {
        icon: Video,
        iconBg: "bg-green-100 text-green-500",
        title: "Virtual Classroom Products",
        description:
          "Live classroom environments with instructor tools, whiteboards, session recordings, and interactive participation features.",
      },
      {
        icon: GraduationCap,
        iconBg: "bg-purple-100 text-purple-500",
        title: "Student Information Systems",
        description:
          "Manage admissions, records, attendance, grades, and academic workflows with centralized data access.",
      },
      {
        icon: Smartphone,
        iconBg: "bg-amber-100 text-amber-500",
        title: "Mobile Learning Apps",
        description:
          "Create mobile-first learning experiences with offline support, reminders, content access, and microlearning journeys.",
      },
      {
        icon: Activity,
        iconBg: "bg-pink-100 text-pink-500",
        title: "Assessment Platforms",
        description:
          "Deliver tests, quizzes, grading workflows, and result dashboards with scalable and structured exam management.",
      },
      {
        icon: BarChart3,
        iconBg: "bg-indigo-100 text-indigo-500",
        title: "Performance Analytics",
        description:
          "Track learner completion, course engagement, cohort performance, and educator outcomes with clear reporting.",
      },
    ],
  },
  ecommerce: {
    label: "Commerce Platforms Designed for Growth",
    title: "We Build eCommerce",
    titleHighlight: "Systems That Sell",
    subtitle:
      "Binazy helps brands and marketplaces launch storefronts, transaction flows, and operational tools that improve conversion and retention.",
    heroImage: ecommerceHero,

    spotlightHeading: "eCommerce Project Spotlights",
    projects: [
      {
        name: "MarketPulse Commerce Platform",
        image: ecommerceHero,
        alt: "MarketPulse ecommerce storefront",
        description:
          "A full-featured commerce platform with storefront UX, checkout, order workflows, promotions, and admin reporting.",
      },
      {
        name: "CartPilot Merchant Console",
        image: dashboardProjectImage,
        alt: "CartPilot merchant dashboard",
        description:
          "A merchant operations console for catalog updates, order management, campaign tracking, and customer support visibility.",
      },
    ],

    solutionsHeading: "Commerce Infrastructure for Brands and Marketplaces",
    solutionsTagline: "Conversion. Fulfillment. Loyalty.",
    solutionsDescription:
      "From D2C storefronts to multi-vendor systems, we build commerce software that supports revenue growth and smoother internal operations.",
    solutions: [
      {
        icon: ShoppingCart,
        iconBg: "bg-blue-100 text-blue-500",
        title: "Storefront Development",
        description:
          "Launch responsive storefronts built for product discovery, conversion optimization, and seamless customer journeys.",
      },
      {
        icon: Store,
        iconBg: "bg-green-100 text-green-500",
        title: "Marketplace Platforms",
        description:
          "Build multi-vendor ecosystems with seller onboarding, catalog controls, order processing, and marketplace administration.",
      },
      {
        icon: Wallet,
        iconBg: "bg-purple-100 text-purple-500",
        title: "Payment & Checkout Systems",
        description:
          "Create secure, friction-light checkout experiences with promotions, multiple payment methods, and transaction tracking.",
      },
      {
        icon: Truck,
        iconBg: "bg-amber-100 text-amber-500",
        title: "Inventory & Fulfillment Tools",
        description:
          "Track stock, shipping updates, returns, warehouse flows, and delivery coordination from one operations layer.",
      },
      {
        icon: Users,
        iconBg: "bg-pink-100 text-pink-500",
        title: "Customer Loyalty Programs",
        description:
          "Improve repeat purchase behavior with points, referrals, offers, and personalized engagement journeys.",
      },
      {
        icon: BarChart3,
        iconBg: "bg-indigo-100 text-indigo-500",
        title: "Commerce Analytics Dashboards",
        description:
          "Measure revenue, order trends, channel performance, inventory health, and customer behavior in real time.",
      },
    ],
  },
  healthcare: {
    label: "Healthcare Software Built for Better Care",
    title: "We Build Healthcare",
    titleHighlight: "Systems That Scale",
    subtitle:
      "Binazy creates secure healthcare software for providers, hospitals, and health startups focused on patient outcomes, compliance, and operational efficiency.",
    heroImage: healthcareHero,

    spotlightHeading: "Healthcare Project Spotlights",
    projects: [
      {
        name: "CareConnect Telehealth Suite",
        image: healthcareHero,
        alt: "CareConnect telehealth platform",
        description:
          "A telehealth platform supporting online consultations, prescription workflows, appointment scheduling, and secure patient messaging.",
      },
      {
        name: "MedFlow Hospital Desk",
        image: hrmsProjectImage,
        alt: "MedFlow hospital operations dashboard",
        description:
          "A hospital system for patient registration, internal coordination, billing workflows, and structured clinical operations.",
      },
    ],

    solutionsHeading: "Digital Health Products for Providers and Patients",
    solutionsTagline: "Care Delivery. Coordination. Compliance.",
    solutionsDescription:
      "We design healthcare software that helps organizations improve access, reduce friction, and manage critical workflows with confidence.",
    solutions: [
      {
        icon: HeartPulse,
        iconBg: "bg-blue-100 text-blue-500",
        title: "Telemedicine Platforms",
        description:
          "Offer video consultations, follow-up communication, booking workflows, and digital care delivery in one environment.",
      },
      {
        icon: Building2,
        iconBg: "bg-green-100 text-green-500",
        title: "Hospital Management Systems",
        description:
          "Support administration, departments, appointments, billing, and staff coordination with structured hospital software.",
      },
      {
        icon: ShieldCheck,
        iconBg: "bg-purple-100 text-purple-500",
        title: "Patient Records & Compliance",
        description:
          "Manage digital records and data access with privacy-first workflows and strong system governance.",
      },
      {
        icon: Smartphone,
        iconBg: "bg-amber-100 text-amber-500",
        title: "Healthcare Mobile Apps",
        description:
          "Build patient-facing and provider-facing mobile products for access, communication, reminders, and engagement.",
      },
      {
        icon: CalendarDays,
        iconBg: "bg-pink-100 text-pink-500",
        title: "Appointment Scheduling Systems",
        description:
          "Coordinate availability, reminders, no-show reduction, and calendar workflows for clinics and providers.",
      },
      {
        icon: Activity,
        iconBg: "bg-indigo-100 text-indigo-500",
        title: "Health Analytics Dashboards",
        description:
          "Track patient trends, operational KPIs, utilization, and service performance with clear operational visibility.",
      },
    ],
  },
  fintech: {
    label: "Fintech Products Built for Trust and Speed",
    title: "We Build Fintech",
    titleHighlight: "Platforms That Perform",
    subtitle:
      "Binazy delivers secure digital finance experiences for fintech teams that need stronger user flows, clearer operations, and dependable architecture.",
    heroImage: fintechHero,

    spotlightHeading: "Fintech Project Spotlights",
    projects: [
      {
        name: "FinanceCore Wallet Experience",
        image: fintechHero,
        alt: "FinanceCore digital finance platform",
        description:
          "A digital wallet and payments product with transaction histories, account controls, onboarding flows, and user-facing finance dashboards.",
      },
      {
        name: "RiskLedger Compliance Console",
        image: officeOpsImage,
        alt: "RiskLedger compliance operations dashboard",
        description:
          "A compliance and review console for transaction visibility, risk flags, workflow approvals, and operational audit support.",
      },
    ],

    solutionsHeading: "Financial Technology Systems for Modern Teams",
    solutionsTagline: "Payments. Trust. Control.",
    solutionsDescription:
      "We help fintech products and digital finance teams build software that balances conversion, compliance, and clear user trust signals.",
    solutions: [
      {
        icon: Wallet,
        iconBg: "bg-blue-100 text-blue-500",
        title: "Digital Wallet Products",
        description:
          "Create wallet experiences for balances, transactions, transfers, controls, and modern customer account access.",
      },
      {
        icon: Landmark,
        iconBg: "bg-green-100 text-green-500",
        title: "Banking & Finance Portals",
        description:
          "Build customer portals for statements, account management, support workflows, and finance product interactions.",
      },
      {
        icon: ShieldCheck,
        iconBg: "bg-purple-100 text-purple-500",
        title: "KYC & Compliance Workflows",
        description:
          "Digitize onboarding, verification, approval chains, and review systems for regulated finance operations.",
      },
      {
        icon: BarChart3,
        iconBg: "bg-amber-100 text-amber-500",
        title: "Trading & Investment Dashboards",
        description:
          "Present portfolio data, market views, activity insights, and performance dashboards in structured, fast interfaces.",
      },
      {
        icon: Activity,
        iconBg: "bg-pink-100 text-pink-500",
        title: "Risk Monitoring Systems",
        description:
          "Track anomalies, transaction patterns, and operational alerts through internal risk and governance tools.",
      },
      {
        icon: Smartphone,
        iconBg: "bg-indigo-100 text-indigo-500",
        title: "Fintech Mobile Experiences",
        description:
          "Launch mobile-first finance experiences with account access, alerts, onboarding journeys, and secure interactions.",
      },
    ],
  },
  travel: {
    label: "Travel Platforms That Simplify Every Journey",
    title: "We Build Travel",
    titleHighlight: "Systems That Book Better",
    subtitle:
      "Binazy develops travel technology for agencies, booking brands, and tourism businesses that want smoother customer journeys and stronger operations.",
    heroImage: travelHero,

    spotlightHeading: "Travel Project Spotlights",
    projects: [
      {
        name: "VoyagePro Booking Engine",
        image: travelHero,
        alt: "VoyagePro travel booking platform",
        description:
          "A travel booking experience with destination discovery, package pages, inquiry capture, and smooth itinerary exploration.",
      },
      {
        name: "TripDesk Operator Console",
        image: eventProjectImage,
        alt: "TripDesk travel operations console",
        description:
          "A tour operations system for booking management, itinerary updates, traveler coordination, and internal workflow visibility.",
      },
    ],

    solutionsHeading: "Travel Software for Booking and Operations Teams",
    solutionsTagline: "Discovery. Reservation. Delivery.",
    solutionsDescription:
      "We build software for travel businesses that need stronger booking flows, better operational control, and more personalized traveler experiences.",
    solutions: [
      {
        icon: CalendarDays,
        iconBg: "bg-blue-100 text-blue-500",
        title: "Booking Engines",
        description:
          "Power reservations, package selections, availability workflows, and booking funnels for travel and hospitality products.",
      },
      {
        icon: Building2,
        iconBg: "bg-green-100 text-green-500",
        title: "Travel Management Portals",
        description:
          "Run itineraries, customer requests, supplier coordination, and internal travel operations from one system.",
      },
      {
        icon: Smartphone,
        iconBg: "bg-purple-100 text-purple-500",
        title: "Traveler Mobile Apps",
        description:
          "Provide bookings, documents, alerts, recommendations, and support access through mobile-first companion experiences.",
      },
      {
        icon: Users,
        iconBg: "bg-amber-100 text-amber-500",
        title: "Customer Support Workflows",
        description:
          "Organize traveler communication, rebooking scenarios, issue handling, and post-booking service flows.",
      },
      {
        icon: BarChart3,
        iconBg: "bg-pink-100 text-pink-500",
        title: "Revenue & Booking Analytics",
        description:
          "Track destination demand, package performance, sales channels, customer behavior, and business growth trends.",
      },
      {
        icon: Truck,
        iconBg: "bg-indigo-100 text-indigo-500",
        title: "Vendor Coordination Systems",
        description:
          "Manage hotel, transport, and supplier coordination with clearer workflows and structured operational views.",
      },
    ],
  },
  manufacturing: {
    label: "Manufacturing Systems Built for Operational Clarity",
    title: "We Build Manufacturing",
    titleHighlight: "Platforms That Optimize",
    subtitle:
      "Binazy creates industrial software for production, logistics, and supply chain teams that need better visibility and stronger process control.",
    heroImage: manufacturingHero,

    spotlightHeading: "Manufacturing Project Spotlights",
    projects: [
      {
        name: "PlantOps Command Center",
        image: manufacturingHero,
        alt: "PlantOps manufacturing operations platform",
        description:
          "A production operations platform for process oversight, status tracking, maintenance workflows, and team coordination across lines.",
      },
      {
        name: "SupplyGrid ERP Workspace",
        image: office3Image,
        alt: "SupplyGrid manufacturing ERP workspace",
        description:
          "An ERP workspace for procurement, inventory movement, supplier coordination, and manufacturing operations reporting.",
      },
    ],

    solutionsHeading: "Industry 4.0 Software for Production and Supply Chains",
    solutionsTagline: "Control. Throughput. Visibility.",
    solutionsDescription:
      "We help manufacturing teams digitize planning, operations, logistics, and performance reporting through dependable internal software.",
    solutions: [
      {
        icon: Factory,
        iconBg: "bg-blue-100 text-blue-500",
        title: "Production Operations Systems",
        description:
          "Monitor production activity, line status, task ownership, and operational bottlenecks through structured digital workflows.",
      },
      {
        icon: Truck,
        iconBg: "bg-green-100 text-green-500",
        title: "Warehouse & Logistics Tools",
        description:
          "Track stock movement, dispatch, warehouse coordination, shipping states, and operational handoffs across teams.",
      },
      {
        icon: ShieldCheck,
        iconBg: "bg-purple-100 text-purple-500",
        title: "Quality Control Systems",
        description:
          "Support inspection workflows, issue logging, process traceability, and quality reporting for operational confidence.",
      },
      {
        icon: Activity,
        iconBg: "bg-amber-100 text-amber-500",
        title: "Maintenance & Monitoring Dashboards",
        description:
          "Keep teams informed with machine status, planned maintenance, downtime visibility, and alert-driven action flows.",
      },
      {
        icon: Store,
        iconBg: "bg-pink-100 text-pink-500",
        title: "Supplier Management Platforms",
        description:
          "Coordinate procurement, vendor updates, sourcing processes, and supplier performance data through shared workflows.",
      },
      {
        icon: BarChart3,
        iconBg: "bg-indigo-100 text-indigo-500",
        title: "Operations Analytics",
        description:
          "Measure throughput, quality, utilization, delays, and inventory health with manufacturing-focused dashboards.",
      },
    ],
  },
};
