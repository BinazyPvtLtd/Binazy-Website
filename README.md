# Binazy Official

This repository contains the Binazy marketing website frontend built with React and Vite.

The live application source code is inside [frontend](C:/Users/anant/OneDrive/Desktop/Binazy/Binazy%20Official/frontend).

## Project Overview

Binazy Official is a single-page React website for presenting the company, services, industries, portfolio highlights, FAQs, and contact flow.

Key sections include:

- Home page
- About page
- Contact page
- Dynamic service detail pages
- Dynamic industry detail pages
- Custom 404 page

## Tech Stack

- React 19
- Vite 8
- React Router
- Tailwind CSS 4
- Lucide React
- React Hook Form
- Swiper

## Project Structure

```text
Binazy Official/
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── data/
    │   ├── pages/
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    ├── vite.config.js
    └── jsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 20 or newer recommended
- npm

### Install Dependencies

```powershell
cd "C:\Users\anant\OneDrive\Desktop\Binazy\Binazy Official\frontend"
npm install
```

### Run Locally

```powershell
npm run dev
```

Vite will start a local development server and print the local URL in the terminal.

## Available Scripts

Run these commands from [frontend](C:/Users/anant/OneDrive/Desktop/Binazy/Binazy%20Official/frontend):

- `npm run dev` starts the local development server
- `npm run build` creates the production build in `frontend/dist`
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Routing

This project uses `BrowserRouter`, so the app supports clean URLs such as:

- `/`
- `/about`
- `/contact-us`
- `/services/:serviceId`
- `/industries/:industriesId`

When deploying as a static site, the host must rewrite unknown routes to `index.html`.

## Contact Form

The contact page submits data directly to Web3Forms.

Before production deployment, replace the current values in [frontend/src/pages/ContactPage.jsx](C:/Users/anant/OneDrive/Desktop/Binazy/Binazy%20Official/frontend/src/pages/ContactPage.jsx):

- company email
- phone number
- office address if needed
- Web3Forms access key
- any personal details still left in the file

## Deployment

This project is a static frontend, so the recommended AWS deployment is:

- S3 for hosting build files
- CloudFront for CDN and HTTPS
- ACM for SSL certificate
- Route 53 or your DNS provider for domain mapping

Basic deployment flow:

```powershell
cd "C:\Users\anant\OneDrive\Desktop\Binazy\Binazy Official\frontend"
npm run build
```

Then upload the contents of `frontend/dist` to your hosting target.

For AWS S3 + CloudFront, make sure:

- `index.html` is the default root object
- `403` and `404` are rewritten to `/index.html` with response code `200`

## Pre-Deployment Checklist

- Replace personal contact details with client details
- Replace the Web3Forms access key with the client key
- Run `npm run lint`
- Run `npm run build`
- Test main routes locally
- Verify domain and DNS details before go-live

## Notes

- The project currently builds successfully.
- The production bundle still shows a Vite chunk-size warning, but this does not block deployment.
- If needed later, the bundle can be optimized further with route-level code splitting.
