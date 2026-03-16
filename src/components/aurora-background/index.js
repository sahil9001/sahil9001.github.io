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
