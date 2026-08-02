"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AppLayout from "@/components/layout/AppLayout";
import { ArrowUpRight, Plus } from "lucide-react";

const REPORTS = [
  { id: "cohere-demo", company: "Cohere", industry: "Artificial Intelligence", product: "Dev Infrastructure", score: 87, label: "High Potential", date: "Aug 1, 2026", signals: 4 },
  { id: "notion-demo", company: "Notion", industry: "Productivity", product: "Dev Infrastructure", score: 76, label: "Strong Opportunity", date: "Jul 31, 2026", signals: 3 },
  { id: "figma-demo", company: "Figma", industry: "Design Tools", product: "Dev Infrastructure", score: 88, label: "High Potential", date: "Jul 29, 2026", signals: 4 },
  { id: "stripe-demo", company: "Stripe", industry: "Fintech", product: "Dev Infrastructure", score: 83, label: "High Potential", date: "Jul 28, 2026", signals: 4 },
  { id: "vercel-demo", company: "Vercel", industry: "Developer Infrastructure", product: "Dev Infrastructure", score: 81, label: "High Potential", date: "Jul 26, 2026", signals: 3 },
  { id: "linear-demo", company: "Linear", industry: "Developer Infrastructure", product: "Dev Infrastructure", score: 74, label: "Strong Opportunity", date: "Jul 24, 2026", signals: 3 },
];

function scoreColor(s: number) {
  if (s >= 80) return "#10b981";
  if (s >= 65) return "#f59e0b";
  return "#f43f5e";
}

export default function ReportsPage() {
  return (
    <AppLayout>
      <div style={{ padding: "2rem" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "2rem" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5b6ef0", marginBottom: "6px" }}>Intelligence Archive</div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.025em" }}>Reports</h1>
            <p style={{ fontSize: "13px", color: "#71717a", marginTop: "4px" }}>{REPORTS.length} reports generated</p>
          </div>
          <Link href="/analyze" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "10px 18px", borderRadius: "10px", fontSize: "13px", fontWeight: 600, background: "linear-gradient(135deg, #5b6ef0, #8b5cf6)", color: "white" }}>
            <Plus style={{ width: "14px", height: "14px" }} /> New Analysis
          </Link>
        </div>

        <div style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid #1e1e2e" }}>
          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 160px 70px 140px 90px 100px 28px", gap: "0", padding: "10px 20px", background: "#0a0a14", borderBottom: "1px solid #1e1e2e", fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3f3f52", alignItems: "center" }}>
            <div>Company</div><div>Industry</div><div>Score</div><div>Classification</div><div>Signals</div><div>Date</div><div />
          </div>

          {REPORTS.map((r, i) => (
            <motion.div key={r.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <Link href={`/report/${r.id}`}
                style={{ display: "grid", gridTemplateColumns: "1fr 160px 70px 140px 90px 100px 28px", gap: "0", padding: "14px 20px", borderBottom: "1px solid #1e1e2e", background: "#0e0e16", alignItems: "center", transition: "background 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                onMouseLeave={e => (e.currentTarget.style.background = "#0e0e16")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, background: "rgba(91,110,240,0.12)", color: "#5b6ef0", flexShrink: 0 }}>
                    {r.company[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: "13px" }}>{r.company}</div>
                    <div style={{ fontSize: "11px", color: "#3f3f52" }}>{r.product}</div>
                  </div>
                </div>
                <div style={{ fontSize: "13px", color: "#71717a" }}>{r.industry}</div>
                <div style={{ fontSize: "1.25rem", fontWeight: 700, color: scoreColor(r.score), fontVariantNumeric: "tabular-nums" }}>{r.score}</div>
                <div>
                  <span style={{ fontSize: "11px", padding: "3px 10px", borderRadius: "9999px", background: `${scoreColor(r.score)}15`, color: scoreColor(r.score) }}>{r.label}</span>
                </div>
                <div style={{ fontSize: "13px", color: "#71717a" }}>{r.signals} signals</div>
                <div style={{ fontSize: "12px", color: "#3f3f52" }}>{r.date}</div>
                <ArrowUpRight style={{ width: "13px", height: "13px", color: "#3f3f52" }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
