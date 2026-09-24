# BudgetBasics

**Money, Made Human** — Small, friendly financial lessons and tools for students and beginners. Built with zero jargon, zero judgment, and complete local privacy.

---

## Project Overview

**BudgetBasics** is a React-based Single Page Application (SPA) designed to make personal finance accessible, practical, and anxiety-free. Developed as part of curriculum requirements, the application focuses on clean design fidelity, interactive client-side calculators, robust input validation, and responsive layouts.

---

## Tech Stack & Libraries

* **Frontend Framework:** React (Vite)
* **Routing:** `wouter` (lightweight client-side routing)
* **Styling:** Tailwind CSS
* **Icons:** `lucide-react`
* **Package Manager:** `pnpm` / `npm`

---

## Core Features & Modules

1. **Home Dashboard**: Features the welcome hero banner, "Tiny Win" tracker, and the "Worth Knowing" core habit cards.
2. **Budgeting Basics (Lesson 01)**: Introduces the core pillars (*Notice, Choose, Adjust*) accompanied by an interactive knowledge check quiz.
3. **Needs vs. Wants (Lesson 02)**: An interactive quick-sort module where users classify everyday expenses with instant correct/incorrect feedback counters.
4. **50 / 30 / 20 Rule Calculator**: A dynamic income split tool providing real-time calculations for Needs, Wants, and Future savings.
5. **Savings Goals Tool**: Allows users to set target amounts, track current progress percentages, and estimate timelines with strict input validation rejecting negative values.
6. **Expense Planner**: A client-side weekly tracker with custom category selectors, total spending summaries, and live balance updates.
7. **Money Mistakes**: Collapsible accordion cards revealing gentle mindset resets.
8. **Learning Cards**: Filterable visual cards with live search capabilities across themes (Basics, Habits, Planning, Goals, Choices, Reset).
9. **Ask Penny**: A rule-based conversational assistant providing supportive financial guidance with prompt action chips.
10. **About & Sitemap**: Project background, design philosophy, and a complete directory map.

---

##  Installation & Running Locally

Follow these steps to set up and run the project on your local machine:

1. **Clone or Extract the Project Archive**:
   Ensure you have unzipped your project folder and opened it in your code editor (e.g., VS Code).

2. **Install Dependencies**:
   Open your terminal in the project root directory and run:
   ```powershell
   pnpm install
(or npm install if using npm)

Start the Development Server:

PowerShell
pnpm run dev
(or npm run dev)

View in Browser:
Open your web browser and navigate to http://localhost:5173.

Building for Production / Submission
To generate the optimized production build for your project demonstration and video walkthrough:

PowerShell
pnpm run build
Privacy & Scope Note
All calculators, trackers, and interactive states operate entirely within the client's browser session. There are no external database connections or third-party banking integrations required.