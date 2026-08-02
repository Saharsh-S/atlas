"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AppLayout from "@/components/layout/AppLayout";
import { ArrowRight, TrendingUp, Building2, FileText, Zap, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Companies Analyzed", value: "24", change: "+6 this week", icon: Building2, color: "#5b6ef0" },
  { label: "Reports Generated", value: "18", change: "+4 this week", icon: FileText, color: "#8b5cf6" },
  { label: "Signals Discovered", value: "127", change: "+31 this week", icon: Zap, color: "#10b981" },
  { label: "Avg Opportunity Score", value: "79", change: "+3 from last week", icon: TrendingUp, color: "#f59e0b" },
];

const recentReports = [
  { company: "Cohere", industry: "AI", score: 87, label: "High Potential", date: "2 hours ago", color: "#10b981", id: "cohere-demo" },
  { company: "Notion", industry: "Productivity", score: 76, label: "Strong Opportunity", date: "Yesterday", color: "#f59e0b", id: "notion-demo" },
  { company: "Figma", industry: "Design Tools", score: 88, label: "High Potential", date: "2 days ago", color: "#10b981", id: "figma-demo" },
  { company: "Stripe", industry: "Fintech", score: 83, label: "High Potential", date: "3 days ago", color: "#10b981", id: "stripe-demo" },
  { company: "Vercel", industry: "Dev Infrastructure", score: 81, label: "High Potential", date: "4 days ago", color: "#10b981", id: "vercel-demo" },
];

const signals = [
  { company: "Cohere", signal: "MLOps engineering hiring up 42% quarter-over-quarter", type: "Hiring", time: "2h ago", color: "#5b6ef0" },
  { company: "Notion", signal: "Enterprise tier announced new SSO and admin features", type: "Product", time: "5h ago", color: "#10b981" },
  { company: "Figma", signal: "Config AI launched across all enterprise plans", type: "Product", time: "1d ago", color: "#8b5cf6" },
  { company: "Vercel", signal: "Edge Network expansion to 5 new regions announced", type: "Market", time: "2d ago", color: "#f59e0b" },
];

export default function Dashboard() {
  return (
    <AppLayout>
      <div style={{ padding: "2rem" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "2rem" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5b6ef0", marginBottom: "6px" }}>Overview</div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.025em" }}>Deal Intelligence Hub</h1>
            <p style={{ fontSize: "13px", color: "#71717a", marginTop: "4px" }}>Your strategic view of opportunities in progress.</p>
          </div>
          <Link href="/analyze" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "10px 20px", borderRadius: "10px", fontSize: "13px", fontWeight: 600,
            background: "linear-gradient(135deg, #5b6ef0, #8b5cf6)", color: "white",
          }}>
            <Zap style={{ width: "14px", height: "14px" }} />
            New Analysis
          </Link>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{ padding: "1.25rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e", position: "relative" }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(91,110,240,0.3), transparent)", borderRadius: "1rem 1rem 0 0" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${s.color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon style={{ width: "16px", height: "16px", color: s.color }} />
                  </div>
                  <span style={{ fontSize: "11px", color: "#3f3f52" }}>7d</span>
                </div>
                <div style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.025em", fontVariantNumeric: "tabular-nums" }}>{s.value}</div>
                <div style={{ fontSize: "12px", color: "#71717a", marginTop: "2px" }}>{s.label}</div>
                <div style={{ fontSize: "11px", color: s.color, marginTop: "8px" }}>{s.change}</div>
              </motion.div>
            );
          })}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "1.5rem" }}>
          {/* Recent Reports */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ borderRadius: "1rem", overflow: "hidden", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", borderBottom: "1px solid #1e1e2e" }}>
              <h2 style={{ fontWeight: 600, fontSize: "14px" }}>Recent Reports</h2>
              <Link href="/reports" style={{ fontSize: "12px", color: "#71717a", display: "flex", alignItems: "center", gap: "4px" }}>
                View all <ArrowRight style={{ width: "12px", height: "12px" }} />
              </Link>
            </div>
            {recentReports.map((r, i) => (
              <Link key={i} href={`/report/${r.id}`} style={{
                display: "flex", alignItems: "center", gap: "1rem", padding: "0.875rem 1.25rem",
                borderBottom: "1px solid #1e1e2e", transition: "background 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, background: "rgba(91,110,240,0.12)", color: "#5b6ef0", flexShrink: 0 }}>
                  {r.company[0]}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 500, fontSize: "13px" }}>{r.company}</div>
                  <div style={{ fontSize: "11px", color: "#71717a" }}>{r.industry}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: r.color, fontVariantNumeric: "tabular-nums" }}>{r.score}</div>
                  <div style={{ fontSize: "11px", color: "#71717a" }}>{r.label}</div>
                </div>
                <div style={{ fontSize: "11px", color: "#3f3f52", width: "72px", textAlign: "right", flexShrink: 0 }}>{r.date}</div>
                <ArrowUpRight style={{ width: "13px", height: "13px", color: "#3f3f52", flexShrink: 0 }} />
              </Link>
            ))}
          </motion.div>

          {/* Signals Feed */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ borderRadius: "1rem", overflow: "hidden", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
            <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #1e1e2e" }}>
              <h2 style={{ fontWeight: 600, fontSize: "14px" }}>Signal Feed</h2>
              <p style={{ fontSize: "11px", color: "#71717a", marginTop: "3px" }}>Recent intelligence detected</p>
            </div>
            {signals.map((s, i) => (
              <div key={i} style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #1e1e2e" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontWeight: 500, fontSize: "12px" }}>{s.company}</span>
                  <span style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "9999px", background: `${s.color}15`, color: s.color }}>{s.type}</span>
                </div>
                <p style={{ fontSize: "12px", lineHeight: 1.6, color: "#71717a" }}>{s.signal}</p>
                <div style={{ marginTop: "6px", fontSize: "11px", color: "#3f3f52" }}>{s.time}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
}
