"use client";

import { motion } from "framer-motion";
import { Signal } from "@/lib/types";

function signalColor(type: string) {
  const map: Record<string, string> = { hiring: "#5b6ef0", market: "#8b5cf6", product: "#10b981", financial: "#f59e0b", partnership: "#ec4899" };
  return map[type] || "#5b6ef0";
}
function signalLabel(type: string) {
  const map: Record<string, string> = { hiring: "Hiring Signal", market: "Market Signal", product: "Product Signal", financial: "Financial Signal", partnership: "Partnership Signal" };
  return map[type] || "Signal";
}

export default function SignalCard({ signal, index }: { signal: Signal; index: number }) {
  const color = signalColor(signal.type);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.08 }}
      style={{ padding: "1rem", borderRadius: "1rem", background: "#12121c", border: "1px solid #1e1e2e", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at top left, ${color}08, transparent 60%)`, pointerEvents: "none" }} />
      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "11px", fontWeight: 500, padding: "2px 8px", borderRadius: "9999px", background: `${color}15`, color }}>{signalLabel(signal.type)}</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, fontFamily: "monospace", color }}>{signal.confidence}%</div>
            <div style={{ fontSize: "10px", color: "#3f3f52" }}>confidence</div>
          </div>
        </div>
        <h4 style={{ fontWeight: 600, fontSize: "13px", marginBottom: "6px" }}>{signal.title}</h4>
        <p style={{ fontSize: "12px", lineHeight: 1.6, color: "#71717a" }}>{signal.description}</p>
        <div style={{ marginTop: "10px", height: "2px", borderRadius: "9999px", background: "#1e1e2e", overflow: "hidden" }}>
          <motion.div
            initial={{ width: 0 }} animate={{ width: `${signal.confidence}%` }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
            style={{ height: "100%", borderRadius: "9999px", background: `linear-gradient(90deg, ${color}, ${color}80)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
