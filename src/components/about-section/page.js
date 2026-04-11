"use client";
import { motion } from "framer-motion";
import { cormorant, dmMono } from "@/fonts/page";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const clipReveal = {
  hidden: { y: "100%", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-36 pb-24 px-8 md:px-14 relative overflow-hidden">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto w-full">

        <motion.div variants={fadeUp} className={`${dmMono.className} flex items-center gap-3 mb-10`} style={{ color: "var(--accent)" }}>
          <span className="inline-block h-px w-8" style={{ background: "var(--accent)" }} />
          <span className="text-xs tracking-[0.32em] uppercase">Portfolio · 2024</span>
        </motion.div>

        <div>
          <div className="overflow-hidden">
            <motion.h1
              variants={clipReveal}
              className={`${cormorant.className} font-light leading-[0.88] tracking-[-0.02em]`}
              style={{ fontSize: "clamp(4.5rem, 13vw, 11rem)", color: "var(--text-primary)" }}
            >
              Sahil
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={clipReveal}
              className={`${cormorant.className} font-light leading-[0.88] tracking-[-0.02em] italic`}
              style={{ fontSize: "clamp(4.5rem, 13vw, 11rem)", color: "var(--accent)" }}
            >
              Silare.
            </motion.h1>
          </div>
        </div>

        <motion.div
          variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
          className="mt-10 mb-7 h-px w-full origin-left"
          style={{ background: "var(--border)" }}
        />

        <motion.div
          variants={fadeUp}
          className={`${dmMono.className} flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-xs tracking-[0.2em] uppercase`}
          style={{ color: "var(--text-secondary)" }}
        >
          <span>Software Developer · Adobe</span>
          <span>Raipur, India</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className={`${dmMono.className} absolute bottom-10 left-8 md:left-14 flex items-center gap-3 text-xs tracking-[0.22em] uppercase`}
        style={{ color: "var(--text-secondary)" }}
      >
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>↓</motion.span>
        <span>Scroll</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className={`${dmMono.className} absolute bottom-10 right-8 md:right-14 text-xs tracking-[0.22em] uppercase`}
        style={{ color: "var(--border)" }}
      >
        01 / 01
      </motion.div>
    </section>
  );
}
