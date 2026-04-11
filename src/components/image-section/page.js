"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { cormorant, dmMono } from "@/fonts/page";
import imageSahil from "@/assets/IMG_0278.jpeg";

export default function ImageSection() {
  return (
    <section className="w-full px-8 md:px-14 pb-36">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 relative"
          >
            <div
              className="absolute inset-0 pointer-events-none rounded-sm"
              style={{ border: "1px solid var(--accent)", transform: "translate(10px, 10px)", zIndex: 10 }}
            />
            <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4 / 3" }}>
              <Image
                src={imageSahil}
                className="object-cover object-center"
                fill
                alt="Sahil Silare"
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                style={{ transition: "all 1200ms ease-out", filter: "grayscale(1)" }}
                onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0)"}
                onMouseLeave={e => e.currentTarget.style.filter = "grayscale(1)"}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)", zIndex: 2 }}
              />
            </div>
            <div
              className={`${dmMono.className} absolute bottom-4 left-5 text-xs tracking-[0.18em] uppercase`}
              style={{ color: "rgba(240,236,228,0.55)", zIndex: 3 }}
            >
              Raipur, India
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col gap-8 pb-2"
          >
            <p className={`${cormorant.className} text-2xl italic leading-snug`} style={{ color: "var(--text-secondary)" }}>
              &ldquo;Turning passion into impactful solutions in tech.&rdquo;
            </p>

            <div className={`${dmMono.className} flex flex-col gap-0 text-xs tracking-[0.18em] uppercase`} style={{ color: "var(--text-secondary)" }}>
              {[["Degree", "B.Tech CS"], ["Institute", "NIT Raipur"], ["Graduated", "2023"]].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-2.5" style={{ borderTop: "1px solid var(--border)" }}>
                  <span>{k}</span>
                  <span style={{ color: "var(--text-primary)" }}>{v}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }} />
            </div>

            <a
              href="/resume.pdf"
              download="resume.pdf"
              className={`${dmMono.className} inline-flex items-center justify-center gap-3 text-xs tracking-[0.22em] uppercase py-3.5 px-7 transition-all duration-300 group w-full`}
              style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}
            >
              View Résumé
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
