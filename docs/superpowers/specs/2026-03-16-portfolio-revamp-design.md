# Portfolio Revamp Design Spec
**Date:** 2026-03-16
**Branch:** `revamp`

## Overview

Revamp `sahil9001.github.io` — a Next.js 14 static portfolio — to add dark mode, animated aurora background, responsive fixes, and a deployment correction. The existing fonts (Abhaya Libre, Plus Jakarta Sans, Inter), layout structure, and minimal aesthetic are preserved.

---

## Goals

1. Dark mode — system preference default + manual toggle button
2. Animated aurora background — framer-motion blobs (purple, blue, pink)
3. Responsive layout fixes — image section currently uses fixed `w-[960px]`
4. Deployment fix — add `trailingSlash: true` to `next.config.mjs`
5. All work on a new `revamp` branch

## Non-Goals

- No new sections (Experience, Work, Contact remain nav-only links for now)
- No redesign of layout structure or font choices
- No backend, CMS, or data layer

---

## Architecture

### Branch
All changes land on a new `revamp` branch cut from `master`.

### New Dependencies
- `framer-motion` — aurora background animation
- `next-themes` — dark mode with system preference + user override

### Tailwind Dark Mode
Set `darkMode: 'class'` in `tailwind.config.js`. `next-themes` injects the `dark` class on `<html>` automatically.

### Theme Provider
Wrap `<body>` in `<ThemeProvider attribute="class" defaultTheme="system" enableSystem>` inside `layout.js`. This is a client component requirement — extract a `Providers` client component to keep `layout.js` as a server component.

---

## Components

### New: `AuroraBackground` (`src/components/aurora-background/index.js`)
- `"use client"` — uses framer-motion
- Fixed, full-screen, `z-index: 0`, `pointer-events: none`
- 3 `motion.div` blobs with `animate` cycling through position offsets
- `transition: { duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }`
- Blob colors: purple (`rgba(120,80,255,...)`), blue (`rgba(0,180,255,...)`), pink (`rgba(255,80,180,...)`)
- Light mode: very low opacity (~0.1–0.15). Dark mode: higher opacity (~0.3–0.4) via `dark:` Tailwind class or inline conditional
- Rendered once in `page.js` outside `<main>`, behind all content

### Modified: `layout.js`
- Import and render `<Providers>` wrapping `{children}`
- `<html>` gets `suppressHydrationWarning` (required by next-themes)

### New: `src/components/providers/index.js`
- `"use client"`
- Wraps children in `ThemeProvider` from `next-themes`

### Modified: `NavBar`
- Import `useTheme` from `next-themes`
- Add sun/moon toggle button (SVG icons) to the right of desktop nav links and in mobile drawer
- Apply `dark:` variants: `dark:bg-black/80`, `dark:text-white`, `dark:border-white/10`

### Modified: `AboutSection`
- Remove hardcoded `bg-white` — background is transparent so aurora shows through
- Apply `dark:` text variants: `dark:text-white`, `dark:text-gray-300`
- Dark mode button styles: filled button inverts (`dark:bg-white dark:text-black`), outlined button inverts border/text

### Modified: `ImageSection`
- Replace `w-[960px] h-[540px]` with `w-full max-w-4xl aspect-video` — fully responsive
- Add `dark:border-white/10` to image border

### Modified: `IntroductionSection`
- Card: `dark:bg-white/5 dark:border dark:border-white/10` (glass effect in dark mode)
- Text: `dark:text-gray-300`
- Links: `dark:text-blue-400`

### Modified: `Footer`
- `dark:border-gray-800`
- Icon color adapts: `dark:text-gray-400`
- Copyright text: `dark:text-gray-500`

### Modified: `globals.css`
- Remove broken CSS variable definitions (`--background-start-rgb` etc.) — replaced by Tailwind dark mode
- Keep `scroll-behavior: smooth`
- Add `body { @apply bg-white dark:bg-gray-950; }` base styles

---

## Deployment Fix

### `next.config.mjs`
Add `trailingSlash: true`. GitHub Pages serves static exports correctly with trailing slashes — without it, direct URL navigation (e.g. `/about`) returns 404.

```js
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: '',
  basePath: '',
};
```

### `package.json`
Remove `gh-pages` from devDependencies — deployment now uses GitHub Actions exclusively.

### `.github/workflows/deploy.yml`
No changes needed — the workflow is correctly configured for GitHub Pages with `actions/deploy-pages@v4`.

---

## Responsiveness Fixes

| Component | Issue | Fix |
|---|---|---|
| `ImageSection` | Fixed `w-[960px]` overflows on mobile | `w-full max-w-4xl aspect-video` |
| `AboutSection` | `px-4 md:px-0` fine, no change | — |
| `NavBar` | Already has mobile hamburger menu | Verify dark mode styling works in drawer |
| `IntroductionSection` | `px-8 md:px-16` fine | Verify card padding on small screens |

---

## File Changelist

| File | Change |
|---|---|
| `package.json` | Add `framer-motion`, `next-themes`; remove `gh-pages` |
| `tailwind.config.js` | Add `darkMode: 'class'` |
| `next.config.mjs` | Add `trailingSlash: true` |
| `src/app/globals.css` | Clean up variables, add dark body bg |
| `src/app/layout.js` | Add Providers wrapper, suppressHydrationWarning |
| `src/app/page.js` | Add AuroraBackground, remove bg from main |
| `src/components/providers/index.js` | New — ThemeProvider client component |
| `src/components/aurora-background/index.js` | New — framer-motion aurora blobs |
| `src/components/navbar/page.js` | Dark mode toggle + dark: variants |
| `src/components/about-section/page.js` | Remove bg-white, dark: variants |
| `src/components/image-section/page.js` | Responsive image container |
| `src/components/introduction-section/page.js` | Dark mode card + text |
| `src/components/footer/page.js` | Dark mode colors |
