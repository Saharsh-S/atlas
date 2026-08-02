"use client";

import { motion } from "framer-motion";
import AppLayout from "@/components/layout/AppLayout";
import { Globe, TrendingUp, Zap, Brain, Check } from "lucide-react";

const AGENTS = [
  {
    name: "Research Agent", icon: Globe, color: "#5b6ef0",
    description: "Analyzes company background, product portfolio, and market positioning to establish foundational intelligence context.",
    tasks: [
      { name: "Company background analysis", avgTime: "1.2s" },
      { name: "Product portfolio mapping", avgTime: "0.8s" },
      { name: "Market positioning evaluation", avgTime: "1.1s" },
    ],
    totalRuns: 24, accuracy: 94,
  },
  {
    name: "Market Agent", icon: TrendingUp, color: "#8b5cf6",
    description: "Scans industry trends, competitive landscape, and market timing signals to contextualize the opportunity.",
    tasks: [
      { name: "Industry trend scanning", avgTime: "1.4s" },
      { name: "Competitive landscape mapping", avgTime: "1.0s" },
      { name: "Market timing evaluation", avgTime: "0.9s" },
    ],
    totalRuns: 22, accuracy: 91,
  },
  {
    name: "Signal Agent", icon: Zap, color: "#10b981",
    description: "Detects hiring surges, product changes, funding events, and expansion signals that indicate active opportunity.",
    tasks: [
      { name: "Hiring signal detection", avgTime: "1.6s" },
      { name: "Product change tracking", avgTime: "1.2s" },
      { name: "Expansion activity monitoring", avgTime: "1.0s" },
    ],
    totalRuns: 21, accuracy: 89,
  },
  {
    name: "Strategy Agent", icon: Brain, color: "#f59e0b",
    description: "Synthesizes all intelligence to generate opportunity scores, strategic recommendations, and conversation playbooks.",
    tasks: [
      { name: "Intelligence synthesis", avgTime: "2.1s" },
      { name: "Opportunity scoring", avgTime: "0.5s" },
      { name: "Strategy generation", avgTime: "1.8s" },
    ],
    totalRuns: 18, accuracy: 87,
  },
];

export default function AgentsPage() {
  return (
    <AppLayout>
      <div style={{ padding: "2rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5b6ef0", marginBottom: "6px" }}>Intelligence Infrastructure</div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.025em" }}>AI Agents</h1>
          <p style={{ fontSize: "13px", color: "#71717a", marginTop: "4px" }}>Four specialized agents work in sequence to build your deal intelligence.</p>
        </div>

        {/* Architecture */}
        <div style={{ marginBottom: "2rem", padding: "1.25rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${agent.color}15`, border: `1px solid ${agent.color}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon style={{ width: "16px", height: "16px", color: agent.color }} />
                  </div>
                  <span style={{ fontSize: "11px", color: "#71717a" }}>{agent.name.split(" ")[0]}</span>
                </div>
                {i < AGENTS.length - 1 && (
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "18px" }}>
                    <div style={{ width: "32px", height: "1px", background: "#1e1e2e" }} />
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#3f3f52" }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Agent cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                style={{ borderRadius: "1rem", overflow: "hidden", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
                {/* Header */}
                <div style={{ padding: "1.25rem", borderBottom: "1px solid #1e1e2e" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${agent.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon style={{ width: "18px", height: "18px", color: agent.color }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                        <h3 style={{ fontWeight: 600, fontSize: "14px" }}>{agent.name}</h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", padding: "3px 10px", borderRadius: "9999px", background: "rgba(16,185,129,0.08)", color: "#10b981" }}>
                          <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981" }} /> Ready
                        </div>
                      </div>
                      <p style={{ fontSize: "12px", lineHeight: 1.6, color: "#71717a" }}>{agent.description}</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderBottom: "1px solid #1e1e2e" }}>
                  {[
                    { label: "Total Runs", value: String(agent.totalRuns) },
                    { label: "Accuracy", value: `${agent.accuracy}%` },
                    { label: "Avg Latency", value: "4.8s" },
                  ].map((stat, si) => (
                    <div key={si} style={{ padding: "12px 16px", textAlign: "center", borderRight: si < 2 ? "1px solid #1e1e2e" : "none" }}>
                      <div style={{ fontSize: "1.25rem", fontWeight: 700, color: agent.color, fontVariantNumeric: "tabular-nums" }}>{stat.value}</div>
                      <div style={{ fontSize: "10px", color: "#3f3f52", marginTop: "2px" }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tasks */}
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3f3f52", marginBottom: "12px" }}>Task Pipeline</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {agent.tasks.map((task, ti) => (
                      <div key={ti} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: `${agent.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Check style={{ width: "10px", height: "10px", color: agent.color }} />
                        </div>
                        <span style={{ flex: 1, fontSize: "12px", color: "#71717a" }}>{task.name}</span>
                        <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#3f3f52" }}>{task.avgTime}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "11px", marginBottom: "6px" }}>
                      <span style={{ color: "#3f3f52" }}>Accuracy</span>
                      <span style={{ color: agent.color }}>{agent.accuracy}%</span>
                    </div>
                    <div style={{ height: "3px", borderRadius: "9999px", background: "#1e1e2e", overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }} animate={{ width: `${agent.accuracy}%` }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                        style={{ height: "100%", borderRadius: "9999px", background: `linear-gradient(90deg, ${agent.color}, ${agent.color}80)` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
