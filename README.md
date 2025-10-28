# iP2C Frontend (React + Vite)

This is a React 19 + Vite 7 application styled with Tailwind v4, using React Router and lucide-react icons.

## Prerequisites
- Node.js (LTS): https://nodejs.org
- npm (bundled with Node) or pnpm/yarn
- VS Code (recommended) with React and Tailwind CSS extensions

Verify installation:
```bash
node -v
npm -v
```

## Getting Started
- Install dependencies
```bash
npm install
# or
pnpm install
```

- Start development server
```bash
npm run dev
```
Vite will print a local URL (e.g. http://localhost:5173).

- Build for production
```bash
npm run build
```

- Preview local production build
```bash
npm run preview
```

- Lint
```bash
npm run lint
```

## Install Packages Manually
- **React + React DOM**
```bash
npm install react react-dom
# or
yarn add react react-dom
# or
pnpm add react react-dom
```

- **Tailwind CSS (with Vite plugin)**
```bash
npm install -D tailwindcss @tailwindcss/vite
# or
yarn add -D tailwindcss @tailwindcss/vite
# or
pnpm add -D tailwindcss @tailwindcss/vite
```

- **lucide-react (icons)**
```bash
npm install lucide-react
# or
yarn add lucide-react
# or
pnpm add lucide-react
```

## Tech Stack
- React: ^19.x
- Vite: ^7.x
- Tailwind CSS: ^4.x
- React Router: ^7.x
- lucide-react: ^0.545.0
- ESLint: ^9.x

## Project Structure
```
/ (project root)
├─ public/
│  └─ (static assets)
├─ src/
│  ├─ assets/
│  │  └─ icons/
│  ├─ components/
│  │  └─ proposal/
│  │     └─ upload_document/
│  │        ├─ Sidebar.jsx
│  │        ├─ FileUploadZone.jsx
│  │        ├─ UploadProposalDocument.jsx
│  │        └─ opportunity_summery/
│  │           ├─ opportunity_summert.jsx
│  │           ├─ CompletionModal.jsx
│  │           ├─ ProgressBarItem.jsx
│  │           └─ Blank_Opportunity_Summery.jsx
│  ├─ main.jsx
│  └─ index.css
├─ package.json
├─ vite.config.*
└─ README.md
```

## Required Packages (already in package.json)
- runtime: react, react-dom, react-router-dom, tailwindcss, @tailwindcss/vite, lucide-react
- dev: vite, @vitejs/plugin-react, eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh, @eslint/js, globals, typescript

Install/update all packages:
```bash
npm install
```

## Common Commands
- Start dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run lint`

## Notes
- Tailwind v4 uses a zero-config Vite plugin `@tailwindcss/vite`.
- Icons: import from `lucide-react` and pass `size`, `color`, `strokeWidth`.
