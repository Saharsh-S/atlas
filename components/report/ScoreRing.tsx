"use client";

import { motion } from "framer-motion";

interface ScoreRingProps {
  score: number;
  label: string;
}

function scoreColor(score: number) {
  if (score >= 80) return "#10b981";
  if (score >= 60) return "#f59e0b";
  return "#f43f5e";
}

export default function ScoreRing({ score, label }: ScoreRingProps) {
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = scoreColor(score);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative", width: "168px", height: "168px" }}>
        <svg width="168" height="168" viewBox="0 0 168 168" style={{ display: "block" }}>
          <circle cx="84" cy="84" r={radius} fill="none" stroke="#1e1e2e" strokeWidth="6" />
          <motion.circle
            cx="84" cy="84" r={radius} fill="none"
            stroke={color} strokeWidth="6" strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            transform="rotate(-90 84 84)"
            style={{ filter: `drop-shadow(0 0 10px ${color}60)` }}
          />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.4 }}
            style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.75rem", fontWeight: 700, letterSpacing: "-0.025em", color, fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>{score}</div>
            <div style={{ fontSize: "11px", color: "#71717a", marginTop: "2px" }}>/100</div>
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
        style={{ textAlign: "center", marginTop: "10px" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color }}>{label}</div>
        <div style={{ fontSize: "11px", color: "#71717a", marginTop: "2px" }}>Opportunity Score</div>
      </motion.div>
    </div>
  );
}
