# RoadReady 🚗🇮🇳

> **Everything you need to be road ready.**
> A comprehensive, interactive web application for all things driving, traffic regulations, and vehicle ownership in India.

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Icons](https://img.shields.io/badge/Icons-Lucide_React-F56565?style=flat-square)](https://lucide.dev/)
[![Privacy](https://img.shields.io/badge/Privacy-100%25_Client--Side-10B981?style=flat-square)](#-privacy--architecture)
[![Region](https://img.shields.io/badge/Region-India_%F0%9F%87%AE%F0%9F%87%B3-FF9933?style=flat-square)](#️-statutory-sources--disclaimer)

---

### Quick Navigation
[✨ Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [🚀 Getting Started](#-getting-started) • [🔒 Privacy & Architecture](#-privacy--architecture) • [📁 Project Structure](#-project-structure) • [⚖️ Statutory Sources & Disclaimer](#️-statutory-sources--disclaimer)

---

> [!TIP]
> **Zero Configuration & 100% Client-Side Privacy:** No database, API keys, or backend server required. All test histories, mistake reviews, and RTO document checklists run locally within your browser using `localStorage`.

---

## ✨ Features

### 📝 Official RTO Mock Test Simulator
- **Timed Exam Mode**: 20 questions in 20 minutes matching the real Sarathi Parivahan computer test format.
- **Quick Practice Mode**: 10 rapid-fire questions for daily revision.
- **Category Drills**: Road Signs, Traffic Rules, Right of Way, Vehicle Knowledge, First Aid, and Documents.
- **Mistake Review Engine**: Automatically saves questions you answered incorrectly to browser `localStorage` for targeted re-testing.
- **Fisher-Yates Shuffling**: Questions and answer options are randomized on each test attempt.
- **Keyboard Shortcuts**: Select answers using `1`–`4` or `A`–`D`, and advance with `Enter`.

### 🛑 Road Signs Encyclopedia
- Over **65 visual road signs** rendered dynamically using pure CSS shapes and SVG vector geometry (Circles, Triangles, Octagons, Rectangles).
- Searchable by sign name, regulatory meaning, hazard description, or speed limit.
- Filterable by **Mandatory**, **Cautionary**, **Informatory**, **Traffic Light Signals**, **Road Markings**, and **Police Hand Signals**.
- Detail modal for each sign with legal implications, where it is installed, and road safety trivia.

### 📋 Step-by-Step Citizen RTO Guide
- Direct citizen walkthroughs without touts or agents: **Learner's License (LL)**, **Permanent Driving License (DL)**, **License Renewal**, **International Driving Permit (IDP)**, **Vehicle Registration (RC)**, and **Duplicate License**.
- **Interactive Checklists**: Check off required original documents and self-attested photocopies with automatic state persistence.
- Official government fee schedules and direct links to Sarathi & Vahan Parivahan portals.

### ⚖️ Traffic Rules & Penalties Directory
- Comprehensive penalty directory under the **Motor Vehicles (Amendment) Act 2019**.
- Filterable and searchable across 30+ offenses (speeding, drunk driving, red light jumping, dangerous driving, documentation violations, helmet/seatbelt compliance, etc.).
- Clearly lists standard fine amounts, compounding vs. court challans, and repeat offense liabilities.

### 🧭 Learn Driving Curriculum
- **14 Masterclass Lessons** taking learners from absolute zero to experienced drivers:
  - Cockpit drill (DSSSM: Doors, Seat, Steering, Seatbelt, Mirrors)
  - Understanding pedals & controls
  - Finding the clutch biting point without stalling
  - Manual gear changing & automatic PRNDL driving
  - 45-degree parallel parking & reverse bay parking
  - Hill starts with handbrake technique
  - Roundabout navigation & highway overtaking etiquette
  - Night driving glare management & monsoon hydroplaning avoidance

### 🔧 Know Your Car (Automotive Anatomy)
- Plain-English breakdown of **10 critical vehicle systems**:
  - Engine & Powertrain, Brakes, Steering, Suspension, Transmissions (MT, AMT, CVT, AT, DCT), Battery & Electrical, Tires, Dashboard Warning Indicators, Safety Systems (ABS, EBD, ESP, Airbags), and Climate Control.
- Warning symptoms, failure modes, and debunked automotive myths.

### 🚙 Car Buying & Financial Calculators
- New vs. used vehicle evaluation guide, gearbox comparison, and body type overview.
- **50-Point Used Car Inspection Checklist** to take along during test drives.
- **True Cost of Ownership (TCO) Calculator**: Estimates 5-year running expenditure including ex-showroom price, state road tax, insurance, fuel expenses, and maintenance.
- **Loan EMI Calculator**: Interactive loan amount, interest rate, and tenure sliders with principal vs. interest visualizer.

### ⛽ Fuel & Commute Calculator
- Commute and long-trip fuel cost estimator across **Petrol**, **Diesel**, **CNG**, and **EV** powertrains.
- Monthly & annual commute expense projections with proven fuel-saving driving habits.

### 🦺 Defensive Driving & Emergency Directory
- Quick-access national emergency helplines: **112** (All Emergencies), **1033** (NHAI Highway Patrol), **108** (Ambulance).
- Good Samaritan legal protection rights in India.
- Space cushioning, 3-second following rule, road rage de-escalation, and accident legal protocol.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 15.1](https://nextjs.org/) (App Router, TypeScript) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) (Custom Deep Navy & Road-Sign Amber palette) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Storage** | Browser `localStorage` (Zero backend required, 100% offline-ready) |
| **Build & Lint** | Turbopack dev, TypeScript strict checking, ESLint 9 |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.17 or later (tested on Node v20 / v24)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/AnayP99/roadready.git
cd roadready
npm install
```

### 3. Development Server
Run the local development server with Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
Verify type integrity and compile the optimized production bundle:
```bash
npm run lint
npm run build
npm run start
```
All routes are **prerendered as static HTML at build time** (Static / SSG via `generateStaticParams`), ensuring sub-second response times with minimal server overhead.

---

## 🔒 Privacy & Architecture

RoadReady is built with an **offline-first, client-side only** architecture:
- **No Analytics / No Tracking**: No third-party trackers, telemetry, or external fonts are injected.
- **Local State Keys**:
  - `roadready_checklist_*`: Saves checked documents across RTO guides and used car inspections.
  - `roadready_mistakes`: Retains wrong mock test answers so you can practice your mistakes later.
  - `roadready_recent_tests`: Stores your recent test score history locally on your device.
- All data stays strictly inside your browser and can be reset at any time by clearing site data.

---

## 📁 Project Structure

```
src/
├── app/                        # Next.js App Router (Static Site Generation)
│   ├── page.tsx                # Home Dashboard & interactive daily facts
│   ├── mock-test/              # Mock Test Hub & [testId] timed quiz runner
│   ├── road-signs/             # Visual Road Signs Encyclopedia
│   ├── rto-guide/              # Citizen RTO Guides & [process] pages
│   ├── traffic-rules/          # MV Act 2019 fines directory & search
│   ├── know-your-car/          # Car Anatomy & [system] deep dives
│   ├── learn-driving/          # Driving curriculum & [slug] lessons
│   ├── car-buying/             # Car Buyer Guide, 50-pt checklist & TCO/EMI
│   ├── maintenance/            # Service schedule & DIY care
│   ├── safety-tips/            # Safety tips & emergency helpline directory
│   ├── fuel-calculator/        # Multi-powertrain fuel calculator
│   ├── layout.tsx              # Root Layout, metadata, SEO & navigation
│   ├── error.tsx               # Error boundary
│   ├── not-found.tsx           # Custom 404 page
│   └── loading.tsx             # Loading spinner
├── components/
│   ├── ui/                     # Primitives (Button, Card, Badge, Modal, Input, etc.)
│   ├── layout/                 # Navbar, Sidebar, Footer, Breadcrumb
│   ├── shared/                 # SectionHero, DataTable, ContentCard, StatCard, etc.
│   ├── interactive/            # SignCard, Checklist, Budget/EMI/Fuel Calculators
│   └── quiz/                   # QuestionCard, QuizTimer, QuizProgress, QuizResults, QuizEngine
├── data/                       # Structured content & static datasets
│   ├── quiz-questions.ts       # 90 official RTO exam questions
│   ├── road-signs.ts           # 65 visual road signs with CSS render specs
│   ├── traffic-fines.ts        # 30+ Motor Vehicles Act penalties
│   ├── rto-processes.ts        # 6 citizen RTO walkthroughs
│   ├── car-systems.ts          # 10 automotive systems & diagnostics
│   ├── driving-tutorials.ts    # 14 step-by-step driving lessons
│   ├── maintenance-data.ts     # Kilometer service schedules & fluid guides
│   ├── safety-tips.ts          # Defensive driving & safety topics
│   ├── car-buying-data.ts      # Buying guides & 50-point checklist
│   ├── did-you-know.ts         # Rotating daily road rule trivia
│   └── navigation.ts           # Navigation items and categories
├── hooks/                      # useLocalStorage, useSearch, useQuiz
├── lib/                        # utils (cn, formatters), constants
└── types/                      # TypeScript definitions (quiz, signs, content, calculators)
```

---

## ⚖️ Statutory Sources & Disclaimer

### Official Portals
- **Sarathi Parivahan**: [sarathi.parivahan.gov.in](https://sarathi.parivahan.gov.in) — Driving licenses & learner permit appointments.
- **Vahan Parivahan**: [vahan.parivahan.gov.in](https://vahan.parivahan.gov.in) — Vehicle registration & tax.
- **e-Challan**: [echallan.parivahan.gov.in](https://echallan.parivahan.gov.in) — Traffic violation verification.
- **Ministry of Road Transport & Highways (MoRTH)**: [morth.nic.in](https://morth.nic.in)

### Legal Disclaimer
Content on this platform is curated for **educational, learning, and self-training purposes only**. While information is regularly verified against the **Motor Vehicles (Amendment) Act 2019** and the **Central Motor Vehicles Rules (CMVR)**, state-specific procedures, fees, and rules may vary across jurisdictional Regional Transport Offices (RTOs). For binding statutory matters, always refer to official notifications in *The Gazette of India* and your local RTO authority.
