# AI Learning Path

https://valentpartners.github.io/ai-learning-path

A single-page React application that renders interactive, hierarchical learning roadmaps for AI topics including Developer, Business, and Certifications tracks.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (included with Node.js)

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd ai-learning-path

# Install dependencies`
cd new-roadmap
npm install
```

## Development

All commands are run from the `new-roadmap/` directory:

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # TypeScript type-check + Vite production build → dist/
npm run lint       # Run ESLint on all TS/TSX files
npm run preview    # Serve the production build locally
npm run package    # Copy dist/* to repo root for GitHub Pages deployment
```

## Architecture

### Project Structure

```
new-roadmap/
├── src/
│   ├── components/    # Reusable UI components
│   ├── data/
│   │   └── data.ts            # All learning content (DataNode trees)
│   ├── pages/                 # Route-level page components
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces (DataNode, etc.)
│   ├── App.tsx                # Root component with route definitions
│   └── index.css              # Global styles with CSS custom properties
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Data-Driven UI

All learning content is defined as static `DataNode` trees in `src/data/data.ts`. To add or modify roadmap content, edit this file — not the components.

## Deploy to GitHub Pages

1. **Build the project:**

   ```bash
   cd new-roadmap
   npm run build
   ```

2. **Copy the build output to the repo root:**

   ```bash
   npm run package
   ```

   This runs `cp -r dist/* ../` which copies all built files to the repository root so GitHub Pages can serve them directly.

3. **Commit and push:**

   ```bash
   cd ..
   git add -A
   git commit -m "deploy"
   git push
   ```
