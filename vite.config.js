import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import sitemap from "vite-plugin-sitemap";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      jpg: { quality: 75 },
      jpeg: { quality: 75 },
      png: { quality: 75 },
      webp: { lossless: false, quality: 75 },
    }),
    sitemap({
      hostname: "https://binazy.org",
      routes: [
        "/", "/about", "/contact-us", "/blog",
        "/blog/why-growing-businesses-need-better-websites",
        "/blog/ecommerce-development-build-your-own-online-store",
        "/blog/custom-ott-app-development-build-your-streaming-platform",
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
        "/industries/real-estate",
        "/industries/education",
        "/industries/ecommerce",
        "/industries/healthcare",
        "/industries/fintech",
        "/industries/travel",
        "/industries/manufacturing",
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
  build: {
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
});