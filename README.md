# Next.js Starter

This project is a minimal Next.js setup that comes preconfigured with Tailwind CSS, ESLint, and Prettier.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

- `npm run dev` – Start the development server with Turbopack.
- `npm run build` – Build the production bundle.
- `npm run start` – Run the production server.
- `npm run lint` – Lint the project with ESLint.
- `npm run format` – Check formatting with Prettier.
- `npm run format:fix` – Format files with Prettier.

## Project Structure

- `app/` – Next.js App Router entrypoints.
- `src/components/` – Shared UI components.

## Linting & Formatting

ESLint is configured via `.eslintrc.json` with the Next.js and Prettier recommended presets. Prettier options are stored in `.prettierrc.json`, and `.prettierignore` defines paths excluded from formatting.
