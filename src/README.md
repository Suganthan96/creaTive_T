# Suganth Creative - Source Code

This directory contains the main source code for the Suganth Creative React web application. The project is built with React, TypeScript, and Tailwind CSS, and features a modern, responsive design with interactive UI components.

## Project Structure

- **components/**: Reusable UI components (Hero, Navbar, Footer, Features, Projects, etc.)
- **components/ui/**: Shared UI primitives (Button, Card, Tooltip, etc.)
- **pages/**: Top-level pages for routing (Index, About, Blog, Contact, Samples, etc.)
- **data/**: Static data (e.g., blog posts)
- **hooks/**: Custom React hooks
- **lib/**: Utility functions
- **public/uploads/**: Image assets used throughout the site

## Key Features

- **Hero Section**: Full-screen background image slider with navigation arrows and smooth transitions. Content overlays the slider.
- **Samples Page**: Responsive grid of 6 square cards, each displaying an image. On hover, cards show a glowing gradient border and shadow effect.
- **Custom Navigation**: Navbar with links to all main pages, including dynamic routing for blog posts.
- **Modern UI**: Uses Tailwind CSS for styling and Framer Motion for animations.
- **Contact Page**: Includes a styled contact form and company info.
- **404 Handling**: NotFound page for unmatched routes.

## Adding Pages or Components

- To add a new page, create a `.tsx` file in `src/pages/` and add a corresponding route in `src/App.tsx`.
- To add a new component, place it in `src/components/` or `src/components/ui/` for shared UI elements.

## Styling

- Most styles use Tailwind CSS utility classes.
- Some components use inline styles or global `<style>` blocks for custom effects (e.g., card hover glows).

## Assets

- Images are stored in `public/uploads/` and referenced with `/uploads/filename.png` paths in the code.

## Development

- Start the dev server with `npm run dev`, `pnpm dev`, or `yarn dev`.
- The main entry point is `src/main.tsx`.
- Routing is handled in `src/App.tsx` using React Router v6.

---

