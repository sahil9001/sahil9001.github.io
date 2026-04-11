"use client";
import { motion } from "framer-motion";
import { cormorant, lora, dmMono } from "@/fonts/page";

const SKILLS = ["TypeScript", "React", "Node.js", "Next.js", "Python", "AWS", "Adobe Experience Manager", "GraphQL"];

export default function IntroductionSection() {
  return (
    <section className="px-8 md:px-14 py-32" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className={`md:col-span-3 ${dmMono.className}`}
        >
          <div className="flex md:flex-col items-start gap-3 pt-1 md:sticky top-28">
            <span className="text-xs tracking-[0.3em]" style={{ color: "var(--accent)" }}>01</span>
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--text-secondary)" }}>About</span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="md:col-span-9 flex flex-col gap-10">
          {[
            {
              large: true,
              content: (
                <>
                  As a Software Developer at{" "}
                  <a href="https://adobe.com" target="_blank" rel="noopener noreferrer"
                    style={{ color: "var(--accent)", textDecorationColor: "var(--accent-dim)" }}
                    className="underline underline-offset-[5px] hover:opacity-70 transition-opacity duration-200">
                    Adobe
                  </a>
                  , I&apos;m continuously expanding my skillset while contributing to innovative projects. My childhood fascination with technology has blossomed into a fulfilling career — turning passion into impactful solutions.
                </>
              ),
            },
            {
              large: false,
              content: (
                <>
                  In 2023, I graduated from the{" "}
                  <a href="https://nitrr.ac.in" target="_blank" rel="noopener noreferrer"
                    style={{ color: "var(--text-primary)", textDecorationColor: "var(--border)" }}
                    className="underline underline-offset-[5px] hover:opacity-60 transition-opacity duration-200">
                    National Institute of Technology, Raipur
                  </a>{" "}
                  with a Bachelor&apos;s in Computer Science, working with various startups along the way.
                </>
              ),
            },
            {
              large: false,
              content: "Outside of work — gym sessions, video games, speaking at events, building apps, and chasing the next thing worth learning.",
            },
          ].map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${lora.className} leading-[1.8]`}
              style={{
                fontSize: p.large ? "clamp(1.2rem, 2.2vw, 1.45rem)" : "clamp(1rem, 1.6vw, 1.15rem)",
                color: p.large ? "var(--text-primary)" : "var(--text-secondary)",
              }}
            >
              {p.content}
            </motion.p>
          ))}

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`${dmMono.className} mt-4`}
          >
            <div className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--text-secondary)" }}>Technologies</div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(skill => (
                <span
                  key={skill}
                  className="text-xs tracking-[0.12em] uppercase px-3 py-1.5 transition-all duration-300 cursor-default"
                  style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
