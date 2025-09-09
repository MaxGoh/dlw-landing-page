# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.2 landing page project using TypeScript, React 19, Tailwind CSS v4, and Biome for linting/formatting. The project uses the App Router architecture with Turbopack enabled for development and builds.

## Commands

### Development
- `pnpm dev` - Start development server with Turbopack on http://localhost:3000
- `pnpm build` - Build production bundle with Turbopack
- `pnpm start` - Start production server

### Code Quality
- `pnpm lint` - Run Biome linting checks
- `pnpm format` - Auto-format code with Biome

### Testing
No test framework is currently configured. When adding tests, update this section with the appropriate commands.

## Architecture

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global Tailwind CSS styles
- `public/` - Static assets

### Key Configuration
- **TypeScript**: Strict mode enabled with path alias `@/*` mapping to `./src/*`
- **Biome**: Configured for Next.js and React with automatic import organization
- **Tailwind CSS**: Version 4 with PostCSS integration
- **Package Manager**: Uses pnpm (lock file present)

### Development Notes
- The project uses Turbopack for faster builds and HMR
- Biome handles both linting and formatting (replaces ESLint/Prettier)
- Font optimization is handled via `next/font` with Geist fonts