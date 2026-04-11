"use client";
import { motion } from "framer-motion";
import { cormorant, dmMono } from "@/fonts/page";
import GithubIcon from "@/assets/github";
import InstagramIcon from "@/assets/instagram";
import LinkedInIcon from "@/assets/linkedin";
import TwitterIcon from "@/assets/twitter";

const SOCIALS = [
  { label: "Twitter", href: "https://x.com/sahilsilare", Icon: TwitterIcon },
  { label: "Instagram", href: "https://instagram.com/sahilsilare", Icon: InstagramIcon },
  { label: "GitHub", href: "https://github.com/sahil9001", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/sahil-silare", Icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="px-8 md:px-14 pt-20 pb-10 mt-8" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`${cormorant.className} font-light leading-tight mb-4`}
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--text-primary)" }}
            >
              Let&apos;s build
              <br />
              <em style={{ color: "var(--accent)" }}>something great.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${dmMono.className} text-xs tracking-[0.2em] uppercase`}
              style={{ color: "var(--text-secondary)" }}
            >
              Open to collaborations &amp; conversations
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 md:items-end justify-end"
          >
            <a
              href="mailto:sahilsilare@gmail.com"
              className={`${cormorant.className} text-xl italic transition-opacity duration-300 hover:opacity-60`}
              style={{ color: "var(--accent)" }}
            >
              sahilsilare@gmail.com
            </a>
            <div className="flex items-center gap-6">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors duration-300"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
                >
                  <Icon width="18" height="18" currentColor="currentColor" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div
          className={`${dmMono.className} flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6 text-xs tracking-[0.18em] uppercase`}
          style={{ borderTop: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }}
        >
          <span>© Sahil Silare 2026 — All rights reserved</span>
          <span style={{ color: "var(--border)" }}>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
