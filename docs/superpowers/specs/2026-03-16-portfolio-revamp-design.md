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
5. All work on a new `revamp` branch, merged to `master` to deploy

## Non-Goals

- No new sections (Experience, Work, Contact remain nav-only links for now)
- No redesign of layout structure or font choices
- No backend, CMS, or data layer

---

## Architecture

### Branch Strategy
All changes land on a new `revamp` branch cut from `master`. Deployment happens when `revamp` is merged into `master` — the existing `deploy.yml` triggers on `master` pushes and does not need to be changed.

### New Dependencies (all in `dependencies`, not `devDependencies`)
- `framer-motion` — aurora background animation (runtime, used during build)
- `next-themes` — dark mode with system preference + user override (runtime, used during build)

### Remove Dependency
- Remove `gh-pages` from `devDependencies` — deployment now uses GitHub Actions exclusively

### Tailwind Dark Mode
Set `darkMode: 'class'` in `tailwind.config.js`. `next-themes` injects the `dark` class on `<html>` automatically.

### Remove `@tailwindcss/aspect-ratio` Plugin
The project has `@tailwindcss/aspect-ratio` listed under `dependencies` (not `devDependencies`) in `package.json`, which conflicts with Tailwind v3's built-in `aspect-ratio` utilities (including `aspect-video`). Remove it from `dependencies` in `package.json` and remove it from the `plugins` array in `tailwind.config.js`. Use Tailwind's built-in `aspect-video` class directly.

### Theme Provider
Extract a `Providers` client component (`src/components/providers/index.js`) that wraps children in `ThemeProvider`. Import and render it in `layout.js` to keep `layout.js` as a server component. The `<html>` tag gets `suppressHydrationWarning` (required by next-themes to suppress the class mismatch warning on first render).

---

## Components

### New: `AuroraBackground` (`src/components/aurora-background/index.js`)
- `"use client"` — uses framer-motion
- `position: fixed`, full-screen (`inset-0`), `z-index: 0`, `pointer-events: none`, `overflow: hidden`
- 3 `motion.div` blobs, each absolutely positioned, with large border-radius, using `animate` to cycle between two sets of translate/scale values
- `transition: { duration: 8–10s per blob, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }`
- Blob colors: purple (`rgba(120,80,255,...)`), blue (`rgba(0,180,255,...)`), pink (`rgba(255,80,180,...)`)
- Light mode opacity: `0.12–0.18` (subtle). Dark mode opacity: `0.3–0.4` (vivid). Use `useTheme()` to read resolved theme and set opacity conditionally, or apply Tailwind's `opacity-20 dark:opacity-40` classes on wrapper divs.
- Blur: each blob uses `filter: blur(80px)` or Tailwind `blur-3xl`

### Modified: `page.js`
- Render `<AuroraBackground />` as the first child of the root fragment `<>`, before `<main>`. **Keep the `<>` fragment wrapper — do not replace it with a `<div>`.** Adding a wrapping `<div>` without `position: relative` would break z-index stacking.
- Add `relative z-10` to `<main>` so all page content stacks above the fixed aurora layer (`z-index: 0`)

### Modified: `layout.js`
- Add `suppressHydrationWarning` to `<html>` (required by next-themes to prevent hydration mismatch when the theme class is injected)
- Fix misplaced `<meta name="viewport">`: currently it sits as a direct child of `<html>` outside `<head>`, which is invalid HTML. Move it into the `metadata` export as `export const viewport = { width: 'device-width', initialScale: 1 }` — Next.js 14 supports this natively and removes the need for a manual `<meta>` tag.
- Import and render `<Providers>` wrapping `{children}` inside `<body>`

### New: `src/components/providers/index.js`
- `"use client"`
- `ThemeProvider` from `next-themes` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`

### Modified: `NavBar`
- Import `useTheme` from `next-themes`
- Add a sun/moon toggle button (two SVG icons, swap based on `resolvedTheme`) to the right of desktop nav links
- Also add the toggle button inside the mobile full-screen drawer
- **Desktop nav dark mode classes:** `dark:bg-black/80`, `dark:text-white`, `dark:border-white/10` on the nav bar
- **Mobile drawer dark mode classes:** replace hardcoded `bg-white/95` with `bg-white/95 dark:bg-black/95`; replace `text-black` links with `text-black dark:text-white`; close button: `dark:text-white`

### Modified: `AboutSection`
- Remove hardcoded `bg-white` from `<section>` — background transparent so aurora shows through
- Text: `dark:text-white` on `<h1>`, `dark:text-gray-300` on `<p>`
- "Download Resume" button (filled, currently `bg-black text-white`): add `dark:bg-white dark:text-black dark:hover:bg-gray-200`. The `<ArrowIcon currentColor="#fff" />` inside this button keeps its hardcoded white `#fff` in light mode. In dark mode the button becomes white background, so change the icon color to `#000` in dark mode — pass `currentColor={resolvedTheme === 'dark' ? '#000' : '#fff'}` using `useTheme()`.
- "Get in touch" button (outlined, currently `bg-white border-black text-black`): add `dark:border-white/40 dark:text-white dark:bg-transparent dark:hover:bg-white/10`. The `<ArrowIcon currentColor="#000" />` inside keeps `#000` in light mode; in dark mode pass `currentColor={resolvedTheme === 'dark' ? '#fff' : '#000'}`.
- Since `AboutSection` already has `"use client"`, adding `useTheme()` requires no additional changes to the component type.

### Modified: `ImageSection`
- Replace `w-[960px] h-[540px]` with `w-full max-w-4xl aspect-video` — fully responsive
- Add `dark:border-white/10` to image container border

### Modified: `IntroductionSection`
- Card: add `dark:bg-white/5 dark:border dark:border-white/10` (glass effect)
- Text: `dark:text-gray-300`
- Links: `dark:text-blue-400`

### Modified: `Footer`
- Replace `bg-white` with `bg-transparent` (aurora visible through footer)
- Add `dark:border-gray-800` to the border
- **SVG icon `currentColor` fix:** The icon components (e.g. `GithubIcon`) accept a prop named `currentColor` and pass it directly to `fill={currentColor}` inside the SVG. Change all icon invocations in `footer/page.js` to pass `currentColor="currentColor"` (the CSS keyword, not a hex value) — this makes the SVG `fill` inherit the CSS `color` property from the DOM. Then add `text-gray-700 dark:text-gray-400` on each wrapping `<a>` tag so CSS `color` is set and the SVG fill inherits it correctly in both modes.
- Copyright text: add `dark:text-gray-500`

### Modified: `globals.css`
Replace the file contents entirely with the following (do not patch — rewrite):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```
Remove: the `:root` CSS variable blocks, the `@media (prefers-color-scheme: dark)` block, and the old `body` rule. The `@media` block must be removed because `next-themes` controls dark mode via the `.dark` class on `<html>` — if the media query remains, OS-level dark preference will override the user's manual toggle.

---

## Deployment Fix

### `next.config.mjs`
Add `trailingSlash: true`. GitHub Pages requires trailing slashes for static exports — without it, direct URL navigation (e.g. `/about`) returns 404.

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
- Add `framer-motion` and `next-themes` to `dependencies`
- Remove `gh-pages` from `devDependencies`
- Remove `@tailwindcss/aspect-ratio` from `dependencies` (it is currently listed under `dependencies`, not `devDependencies`)

### `.github/workflows/deploy.yml`
No changes needed. Deployment triggers on merge to `master`.

---

## Responsiveness Fixes

| Component | Issue | Fix |
|---|---|---|
| `ImageSection` | Fixed `w-[960px]` overflows on mobile | `w-full max-w-4xl aspect-video` |
| `NavBar` | Mobile drawer already implemented | Add dark mode styles to drawer |

---

## File Changelist

| File | Change |
|---|---|
| `package.json` | Add `framer-motion`, `next-themes` to deps; remove `gh-pages`, `@tailwindcss/aspect-ratio` from devDeps |
| `tailwind.config.js` | Add `darkMode: 'class'`; remove `@tailwindcss/aspect-ratio` plugin |
| `next.config.mjs` | Add `trailingSlash: true` |
| `src/app/globals.css` | Replace body/root rules with Tailwind dark mode base styles |
| `src/app/layout.js` | Add Providers wrapper, `suppressHydrationWarning` on `<html>` |
| `src/app/page.js` | Add `<AuroraBackground />`, add `relative z-10` to `<main>` |
| `src/components/providers/index.js` | New — ThemeProvider client component |
| `src/components/aurora-background/index.js` | New — framer-motion aurora blobs |
| `src/components/navbar/page.js` | Dark mode toggle (desktop + mobile drawer) + dark: variants on both nav and drawer |
| `src/components/about-section/page.js` | Remove bg-white, dark: variants on text and both buttons |
| `src/components/image-section/page.js` | Responsive image container (`w-full max-w-4xl aspect-video`) |
| `src/components/introduction-section/page.js` | Dark mode card + text + link colors |
| `src/components/footer/page.js` | bg-transparent, dark: variants, `currentColor="currentColor"` on all icons |
