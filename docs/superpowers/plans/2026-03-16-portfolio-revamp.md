# Portfolio Revamp Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Revamp sahil9001.github.io with dark mode (system + toggle), animated aurora background, responsive fixes, and deployment correction — all on a `revamp` branch.

**Architecture:** Incremental enhancement using `next-themes` for dark mode (class-based, system default + manual toggle), `framer-motion` for a fixed full-screen aurora blob background, and Tailwind `dark:` variants on all components. A `Providers` client component wraps the app in `layout.js` to satisfy next-themes' client boundary requirement.

**Tech Stack:** Next.js 14, Tailwind CSS v3, framer-motion, next-themes, GitHub Actions (deploy on merge to master)

---

## Chunk 1: Setup — Branch, Dependencies, Config

### Task 1: Create revamp branch

**Files:**
- No file changes — git operation only

- [ ] **Step 1: Create and switch to revamp branch**

```bash
git checkout -b revamp
```

Expected: `Switched to a new branch 'revamp'`

- [ ] **Step 2: Verify clean state**

```bash
git status
```

Expected: `nothing to commit, working tree clean`

---

### Task 2: Install dependencies and update package.json

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install runtime dependencies**

```bash
npm install framer-motion next-themes
```

Expected: both packages added to `dependencies` in `package.json`

- [ ] **Step 2: Remove unused dependencies**

```bash
npm uninstall gh-pages @tailwindcss/aspect-ratio
```

Expected: both removed from `package.json`; `package-lock.json` updated

- [ ] **Step 3: Verify package.json dependencies section**

Open `package.json` and confirm:
- `framer-motion` and `next-themes` are in `dependencies`
- `gh-pages` is absent from `devDependencies`
- `@tailwindcss/aspect-ratio` is absent from `dependencies`

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add framer-motion and next-themes, remove gh-pages and aspect-ratio plugin"
```

---

### Task 3: Update Tailwind and Next.js config

**Files:**
- Modify: `tailwind.config.js`
- Modify: `next.config.mjs`

- [ ] **Step 1: Update tailwind.config.js**

Replace the entire file with:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Update next.config.mjs**

Replace the entire file with:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '',
  basePath: '',
};

export default nextConfig;
```

- [ ] **Step 3: Verify build still compiles**

```bash
npm run build
```

Expected: `Export successful` with no errors

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.js next.config.mjs
git commit -m "config: enable Tailwind dark mode class strategy, add trailingSlash for GitHub Pages"
```

---

### Task 4: Rewrite globals.css

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace entire file**

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

This removes: `:root` CSS variable blocks, `@media (prefers-color-scheme: dark)` block, and the old `body` rule that used those variables. `next-themes` controls dark mode exclusively via the `.dark` class.

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "style: rewrite globals.css for next-themes class-based dark mode"
```

---

## Chunk 2: Core Infrastructure — Providers, Aurora, Layout

### Task 5: Create Providers component

**Files:**
- Create: `src/components/providers/index.js`

- [ ] **Step 1: Create file**

```js
"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/providers/index.js
git commit -m "feat: add Providers component with next-themes ThemeProvider"
```

---

### Task 6: Update layout.js

**Files:**
- Modify: `src/app/layout.js`

- [ ] **Step 1: Replace entire file**

```js
import "./globals.css";
import Providers from "@/components/providers";

export const metadata = {
  title: "Sahil's Portfolio",
  description: "A web developer portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

Notes:
- `suppressHydrationWarning` on `<html>` suppresses the React hydration mismatch caused by next-themes injecting the `dark` class server-side vs client-side
- `viewport` export replaces the previously misplaced `<meta name="viewport">` tag
- `Providers` wraps `{children}` inside `<body>`

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: `Export successful` with no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.js
git commit -m "feat: wrap app in ThemeProvider, fix viewport meta, add suppressHydrationWarning"
```

---

### Task 7: Create AuroraBackground component

**Files:**
- Create: `src/components/aurora-background/index.js`

- [ ] **Step 1: Create file**

```js
"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AuroraBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const opacity = mounted && resolvedTheme === "dark" ? 0.4 : 0.15;

  const blobs = [
    {
      color: "rgba(120,80,255,1)",
      size: 600,
      initial: { x: -100, y: -150 },
      animate: { x: [-100, -60, -100], y: [-150, -110, -150] },
      duration: 9,
    },
    {
      color: "rgba(0,180,255,1)",
      size: 500,
      initial: { x: "60vw", y: "50vh" },
      animate: { x: ["60vw", "55vw", "60vw"], y: ["50vh", "40vh", "50vh"] },
      duration: 11,
    },
    {
      color: "rgba(255,80,180,1)",
      size: 400,
      initial: { x: "30vw", y: "20vh" },
      animate: { x: ["30vw", "35vw", "30vw"], y: ["20vh", "30vh", "20vh"] },
      duration: 8,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          initial={blob.initial}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: blob.size,
            height: blob.size,
            borderRadius: "50%",
            background: blob.color,
            filter: "blur(80px)",
            opacity: opacity,
          }}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/aurora-background/index.js
git commit -m "feat: add AuroraBackground component with framer-motion animated blobs"
```

---

### Task 8: Update page.js to mount AuroraBackground

**Files:**
- Modify: `src/app/page.js`

- [ ] **Step 1: Replace entire file**

```js
import AboutSection from "@/components/about-section/page";
import NavBar from "@/components/navbar/page";
import ImageSection from "@/components/image-section/page";
import IntroductionSection from "@/components/introduction-section/page";
import Footer from "@/components/footer/page";
import AuroraBackground from "@/components/aurora-background";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <main className="container mx-auto relative z-10">
        <NavBar />
        <section id="about">
          <AboutSection />
          <ImageSection />
        </section>
        <IntroductionSection />
        <Footer />
      </main>
    </>
  );
}
```

Notes:
- `<AuroraBackground />` is before `<main>` inside the `<>` fragment — **do not wrap in a `<div>`**
- `relative z-10` on `<main>` ensures all page content stacks above the `z-0` aurora layer

- [ ] **Step 2: Verify dev server renders without errors**

```bash
npm run dev
```

Open http://localhost:3000 and confirm: page loads, no console errors, aurora blobs visible in background

- [ ] **Step 3: Commit**

```bash
git add src/app/page.js
git commit -m "feat: mount AuroraBackground in page.js, add relative z-10 to main"
```

---

## Chunk 3: Component Dark Mode Updates

### Task 9: Update NavBar — dark mode toggle + dark variants

**Files:**
- Modify: `src/components/navbar/page.js`

- [ ] **Step 1: Replace entire file**

```js
"use client";
import { abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // Render nothing until mounted to avoid SSR/hydration icon flash
  if (!mounted) return <div className="w-5 h-5" />;
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors focus:outline-none"
      aria-label="Toggle dark mode"
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-6 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-md fixed top-0 left-0 z-50 border-b border-gray-100 dark:border-white/10">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
        {/* Logo/Name */}
        <p className={`text-black dark:text-white text-2xl md:text-3xl font-extrabold tracking-tight ${abhyaLibre.className}`}>Sahil Silare</p>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-row gap-12 items-center">
          <li>
            <a href="#about" className={`text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-black dark:hover:text-white transition-colors ${plusJakartaSans.className}`}>About</a>
          </li>
          <li>
            <a href="#experience" className={`text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-black dark:hover:text-white transition-colors ${plusJakartaSans.className}`}>Experience</a>
          </li>
          <li>
            <a href="#work" className={`text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-black dark:hover:text-white transition-colors ${plusJakartaSans.className}`}>Work</a>
          </li>
          <li>
            <a href="#contact" className={`text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-black dark:hover:text-white transition-colors ${plusJakartaSans.className}`}>Contact</a>
          </li>
          <li><ThemeToggle /></li>
        </ul>
        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 dark:bg-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-all md:hidden">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-black dark:text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="flex flex-col items-center gap-6 mt-12">
            <li>
              <a href="#about" className={`text-black dark:text-white text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#experience" className={`text-black dark:text-white text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>Experience</a>
            </li>
            <li>
              <a href="#work" className={`text-black dark:text-white text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>Work</a>
            </li>
            <li>
              <a href="#contact" className={`text-black dark:text-white text-2xl font-semibold ${plusJakartaSans.className}`} onClick={() => setIsOpen(false)}>Contact</a>
            </li>
            <li><ThemeToggle /></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Verify in browser**

```bash
npm run dev
```

Open http://localhost:3000. Verify:
- Toggle button appears in navbar (desktop and mobile)
- Clicking toggle switches theme
- Navbar correctly adapts colors in both modes

- [ ] **Step 3: Commit**

```bash
git add src/components/navbar/page.js
git commit -m "feat: add dark mode toggle and dark: variants to NavBar"
```

---

### Task 10: Update AboutSection — dark mode variants

**Files:**
- Modify: `src/components/about-section/page.js`

- [ ] **Step 1: Replace entire file**

```js
'use client';
import { abhyaLibre, plusJakartaSans } from "@/fonts/page";
import ArrowIcon from "@/assets/arrow-icon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleGetInTouch = () => {
    const email = 'sahilsilare@gmail.com';
    const subject = encodeURIComponent('Get in Touch');
    const body = encodeURIComponent('Hello, I would like to get in touch with you.');
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-32 px-4 md:px-0">
      <div className="flex flex-col gap-8 text-center w-full max-w-2xl">
        <h1 className={`text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight ${abhyaLibre.className}`}>Sahil Silare</h1>
        <p className={`text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-normal ${plusJakartaSans.className}`}>24-year-old software engineer, JavaScript developer and entrepreneur of sorts based in Bengaluru, India.</p>
      </div>
      <div className="flex flex-row items-center gap-6 mt-10">
        <a href="/resume.pdf" download="resume.pdf">
          <button className="flex flex-row items-center gap-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-lg shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-150">
            <ArrowIcon currentColor={isDark ? "#000" : "#fff"} width="18" height="18" />
            Download Resume
          </button>
        </a>
        <a href={handleGetInTouch()}>
          <button className="flex flex-row items-center gap-2 px-6 py-3 rounded-full border-2 border-black dark:border-white/40 text-black dark:text-white font-semibold text-lg bg-white dark:bg-transparent shadow-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-150">
            <ArrowIcon currentColor={isDark ? "#fff" : "#000"} width="18" height="18" />
            Get in touch
          </button>
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/about-section/page.js
git commit -m "feat: add dark mode variants to AboutSection, dynamic ArrowIcon colors"
```

---

### Task 11: Update ImageSection — responsive fix + dark mode

**Files:**
- Modify: `src/components/image-section/page.js`

- [ ] **Step 1: Replace entire file**

```js
import Image from "next/image";
import { plusJakartaSans } from "@/fonts/page";
import imageSahil from '../../assets/IMG_0278.jpeg';

export default function ImageSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-transparent px-4">
      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-white/10 bg-white dark:bg-gray-900 flex items-center justify-center">
        <Image
          src={imageSahil}
          className="object-cover w-full h-full"
          width={1920}
          height={1080}
          alt="Sahil Silare"
          priority
        />
      </div>
      <div className="flex flex-col w-full max-w-md text-center gap-4 mt-8">
        <p className={`text-gray-700 dark:text-gray-400 font-light text-lg md:text-xl ${plusJakartaSans.className}`}>
          I love to code & build awesome stuff, check out my <a href="/resume.pdf" download="resume.pdf"><span className="underline decoration-dotted">resume</span></a>
        </p>
      </div>
    </section>
  );
}
```

Key change: `w-[960px] h-[540px]` → `w-full max-w-4xl aspect-video`

- [ ] **Step 2: Verify responsiveness**

```bash
npm run dev
```

Open http://localhost:3000. Resize browser to mobile width (375px). Verify image scales correctly and does not overflow.

- [ ] **Step 3: Commit**

```bash
git add src/components/image-section/page.js
git commit -m "fix: make ImageSection responsive (w-full max-w-4xl aspect-video)"
```

---

### Task 12: Update IntroductionSection — dark mode card

**Files:**
- Modify: `src/components/introduction-section/page.js`

- [ ] **Step 1: Replace entire file**

```js
import { plusJakartaSans } from "@/fonts/page";

export default function IntroductionSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-transparent">
      <div className={`bg-white dark:bg-white/5 dark:border dark:border-white/10 w-full max-w-3xl rounded-3xl shadow-2xl flex items-center justify-center px-8 md:px-16 py-16 ${plusJakartaSans.className}`}>
        <div className="flex flex-col font-normal text-gray-800 dark:text-gray-300 text-lg md:text-xl gap-6 w-full items-center text-center">
          <p>
            As a Software Developer at <a href="https://adobe.com" target="_blank" className="underline decoration-dotted text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">Adobe</a>, I&apos;m continuously expanding my skillset while contributing to innovative projects. My childhood fascination with technology has blossomed into a fulfilling career, allowing me to turn my passion into impactful solutions in the tech industry.
          </p>
          <p>
            In 2023, I graduated from the <a href="https://nitrr.ac.in" target="_blank" className="underline decoration-dotted text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">National Institute of Technology, Raipur</a>, with a Bachelors degree in Computer Science. During this time, I worked with various startups/companies to grow their business.
          </p>
          <p>
            In my spare time, I enjoy going to the gym, playing video games, speaking at events, making apps and learning new things.
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/introduction-section/page.js
git commit -m "feat: add dark mode glass card style to IntroductionSection"
```

---

### Task 13: Update Footer — dark mode + icon currentColor fix

**Files:**
- Modify: `src/components/footer/page.js`

- [ ] **Step 1: Replace entire file**

Note on imports: The original `footer/page.js` imports 7 icons (`DribbbleIcon`, `MailIcon`, `SpotifyIcon` + 4 others) but only renders 4 (Twitter, Instagram, Github, LinkedIn). The 3 extras are unused imports — they are intentionally dropped here.

```js
import GithubIcon from "@/assets/github";
import InstagramIcon from "@/assets/instagram";
import LinkedInIcon from "@/assets/linkedin";
import TwitterIcon from "@/assets/twitter";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center border-t border-gray-200 dark:border-gray-800 pt-12 pb-8 bg-transparent mt-24">
      <div className="flex flex-row gap-6 mb-6">
        <a href="https://x.com/sahilsilare" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <TwitterIcon width="22" height="22" currentColor="currentColor" />
        </a>
        <a href="https://instagram.com/sahilsilare" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <InstagramIcon width="22" height="22" currentColor="currentColor" />
        </a>
        <a href="https://github.com/sahil9001" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <GithubIcon width="22" height="22" currentColor="currentColor" />
        </a>
        <a href="https://linkedin.com/in/sahil-silare" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
          <LinkedInIcon width="22" height="22" currentColor="currentColor" />
        </a>
      </div>
      <div className="text-gray-500 dark:text-gray-500 text-sm tracking-wide">© Sahil Silare 2024</div>
    </footer>
  );
}
```

Note: `currentColor="currentColor"` (the string `"currentColor"`) is passed to each icon. Each icon component uses this value as `fill={currentColor}` in the SVG, so it inherits the CSS `color` property set by `text-gray-700 dark:text-gray-400` on the wrapping `<a>` tag.

- [ ] **Step 2: Verify icon colors in both modes**

```bash
npm run dev
```

Toggle between light and dark modes. Verify footer icons change color appropriately.

- [ ] **Step 3: Commit**

```bash
git add src/components/footer/page.js
git commit -m "feat: add dark mode to Footer, fix icon currentColor inheritance"
```

---

## Chunk 4: Final Verification and Build

### Task 14: Full build verification

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: `Export successful`. No TypeScript/ESLint errors.

- [ ] **Step 2: Serve the static export locally and verify**

Stop the dev server if running (`Ctrl+C`), then:

```bash
npx serve -p 4000 out
```

Open http://localhost:4000. Verify:
- Light mode: white background, aurora blobs faintly visible, all text legible
- Dark mode: dark background (`gray-950`), aurora blobs vivid, all text legible
- Toggle works on desktop and mobile
- Image scales correctly at mobile widths (resize to 375px)
- No broken layout or overflow at any viewport width

- [ ] **Step 3: Stop serve, commit any final tweaks**

If any visual issues were discovered and fixed in Step 2, commit them now.

---

### Task 15: Push revamp branch

- [ ] **Step 1: Push branch to origin**

```bash
git push -u origin revamp
```

Expected: branch pushed, tracking set

- [ ] **Step 2: Confirm all commits are on revamp, not master**

```bash
git log master..revamp --oneline
```

Expected: all implementation commits listed (Tasks 1–14)
