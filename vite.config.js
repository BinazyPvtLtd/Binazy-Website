import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import sitemap from "vite-plugin-sitemap";
import viteImagemin from "vite-plugin-imagemin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 }, // JPGs → 75% quality
      pngquant: { quality: [0.6, 0.8] }, // PNGs → 60-80%
      webp: { quality: 75 }, // Convert to WebP
    }),

    sitemap({
      hostname: "https://binazy.org",
      routes: [
        // Static pages
        "/",
        "/about",
        "/contact-us",
        "/blog",

        // Blog posts
        "/blog/why-growing-businesses-need-better-websites",
        "/blog/ecommerce-development-build-your-own-online-store",
        "/blog/custom-ott-app-development-build-your-streaming-platform",

        // Services
        "/services/business-website-development",
        "/services/online-store",
        "/services/ott-platform-development",
        "/services/mobile-app-development",
        "/services/booking-appointment-system",
        "/services/erp-system-development",
        "/services/custom-software-development",
        "/services/hr-payroll-system",
        "/services/24-7-helpdesk-support",
        "/services/remote-monitoring",
        "/services/social-media-management",
        "/services/online-learning-platform",
        "/services/student-staff-training-portal",
        "/services/edtech-product",
        "/services/business-dashboard",
        "/services/sales-inventory-reports",
        "/services/marketing-performance-tracking",
        "/services/ai-customer-support-agent",
        "/services/smart-document-processing",
        "/services/ai-sales-assistant",

        // Industries
        "/industries/real-estate",
        "/industries/education",
        "/industries/ecommerce",
        "/industries/healthcare",
        "/industries/fintech",
        "/industries/travel",
        "/industries/manufacturing",

        // Locations
        "/locations/australia",
        "/locations/qatar",
        "/locations/uae",
        "/locations/saudi-arabia",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
