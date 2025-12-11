# Quizsite04

**One-line:** A pixel-accurate quiz web app (desktop only) built with React + Tailwind, deployed on Netlify.  
**Live Demo:** https://quizsite04.netlify.app/
**Repo:** https://github.com/aasthha0421/frontend-intern

---

## ✅ Project Summary
A desktop-first quiz application that presents 4 questions and calculates the final score as a percentage. The app emphasizes pixel-perfect design matching the Figma spec, smooth transitions, and accessibility (WCAG 2.1) for keyboard users.

---

## Tech Stack
- React (TypeScript)
- Tailwind CSS
- Vite App 
- Netlify (deployed)
- Optional: Framer Motion (for animations)

---

## Key Features
- Pixel-perfect UI matching Figma (desktop)
- Smooth hover states and transitions
- Keyboard accessible (tab navigation, visible focus states)
- Semantic HTML & ARIA attributes where appropriate
- Results shown as percentage with a short summary
- Clean, modular component structure

)


⭐ Key Features Implemented

\4 Multiple-Choice Questions
Each question displays one at a time with selectable options.

\Percentage Calculation
Automatically calculates the score based on the number of correct answers.

\Clean & Simple UI
Desktop-focused layout with smooth transitions and hover states.

\Reusable Components
Built with modular Question, Options, and Result components.

\Quiz Flow Handling
Tracked using React states:
-current question index
-selected answers
-correct count
-final score

\Deployed on Netlify
Fast, reliable hosting with instant builds.

🧱 Folder Structure
src/
├── components/
│   ├── QuestionCard.jsx
│   ├── OptionButton.jsx
│   ├── Result.jsx
│
│
├── App.jsx
├── main.jsx
├── index.css


📝 Assumptions Made
-The assignment did not provide a specific Figma file, so I created a clean, desktop-first quiz interface following modern UI patterns.
-Only 4 questions were included (as a lightweight demo and clear % calculation).
-Quiz questions are locally stored as an array (no backend/API used).
-Mobile responsiveness was not required, so this version is desktop-only.
-The goal was to demonstrate frontend skills, UI quality, and interactivity.

⏱️ Time Spent on the Assignment
Approximately 6hours

🚀 Live Deployment
The project is deployed using Netlify:

🔗 Live Demo: https://quizsite04.netlify.app/

🧪 Future Improvements (Optional Enhancements)

-Add TypeScript for better type safety.
-Add animations using Framer Motion.
-Add a progress bar or timer.
-Make UI responsive for mobile.
-Add more questions + backend API.
-Add unit tests (React Testing Library + Jest).

---

## How to run locally
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
npm install
npm run dev   # or npm start
