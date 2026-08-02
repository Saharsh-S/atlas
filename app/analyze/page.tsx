"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import AppLayout from "@/components/layout/AppLayout";
import { Search, ChevronDown, ArrowRight, Check, Loader2, Globe, TrendingUp, Zap, Brain } from "lucide-react";

const industries = [
  "Artificial Intelligence", "Developer Infrastructure", "Fintech", "Healthcare Tech",
  "E-commerce", "Cybersecurity", "SaaS", "Data Analytics", "Marketing Tech",
  "HR Tech", "Legal Tech", "Climate Tech", "EdTech", "Productivity",
];

const goals = [
  { value: "sales", label: "Sales Opportunity" },
  { value: "partnership", label: "Partnership" },
  { value: "investment", label: "Investment Research" },
  { value: "competitive", label: "Competitive Analysis" },
];

const AGENTS = [
  { id: "research", name: "Research Agent", icon: Globe, color: "#5b6ef0", tasks: ["Analyzing company background", "Mapping product portfolio", "Evaluating market positioning"] },
  { id: "market", name: "Market Agent", icon: TrendingUp, color: "#8b5cf6", tasks: ["Scanning industry trends", "Mapping competitive landscape", "Evaluating market timing"] },
  { id: "signal", name: "Signal Agent", icon: Zap, color: "#10b981", tasks: ["Detecting hiring signals", "Tracking product changes", "Monitoring expansion activity"] },
  { id: "strategy", name: "Strategy Agent", icon: Brain, color: "#f59e0b", tasks: ["Synthesizing intelligence", "Generating opportunity score", "Crafting recommended strategy"] },
];

type Phase = "input" | "processing" | "done";

export default function AnalyzePage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("input");
  const [form, setForm] = useState({ company: "", industry: "Artificial Intelligence", product: "", goal: "sales" });
  const [agentProgress, setAgentProgress] = useState<Record<string, "idle" | "running" | "done">>({
    research: "idle", market: "idle", signal: "idle", strategy: "idle",
  });
  const [currentTask, setCurrentTask] = useState<Record<string, number>>({ research: 0, market: 0, signal: 0, strategy: 0 });

  const canSubmit = form.company.trim() && form.product.trim();

  const runAnalysis = async () => {
    if (!canSubmit) return;
    setPhase("processing");

    for (let i = 0; i < AGENTS.length; i++) {
      const agentId = AGENTS[i].id;
      setAgentProgress(p => ({ ...p, [agentId]: "running" }));
      for (let t = 0; t < 3; t++) {
        await new Promise(r => setTimeout(r, 700));
        setCurrentTask(p => ({ ...p, [agentId]: t + 1 }));
      }
      await new Promise(r => setTimeout(r, 300));
      setAgentProgress(p => ({ ...p, [agentId]: "done" }));
      if (i < AGENTS.length - 1) await new Promise(r => setTimeout(r, 150));
    }

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const report = await res.json();
      setPhase("done");
      await new Promise(r => setTimeout(r, 700));
      localStorage.setItem(`atlas-report-${report.id}`, JSON.stringify(report));
      router.push(`/report/${report.id}`);
    } catch {
      setPhase("input");
    }
  };

  return (
    <AppLayout>
      <div style={{ padding: "2rem", maxWidth: "600px" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5b6ef0", marginBottom: "6px" }}>Intelligence Engine</div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.025em" }}>Analyze a Company</h1>
          <p style={{ fontSize: "13px", color: "#71717a", marginTop: "4px" }}>Enter a target company to generate a Deal Intelligence Report.</p>
        </div>

        <AnimatePresence mode="wait">
          {phase === "input" && (
            <motion.div key="input" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

              {/* Company */}
              <div style={{ padding: "1.25rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
                <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#71717a", marginBottom: "12px" }}>Target Company</div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Search style={{ width: "15px", height: "15px", color: "#3f3f52", flexShrink: 0 }} />
                  <input type="text" placeholder="e.g. Cohere, Notion, Stripe, Linear…"
                    value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    onKeyDown={e => e.key === "Enter" && runAnalysis()}
                    style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: "14px", color: "#fafafa" }}
                  />
                </div>
              </div>

              {/* Industry */}
              <div style={{ padding: "1.25rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
                <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#71717a", marginBottom: "12px" }}>Industry</div>
                <div style={{ position: "relative" }}>
                  <select value={form.industry} onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}
                    style={{ width: "100%", background: "transparent", border: "none", outline: "none", appearance: "none", fontSize: "14px", color: "#fafafa", cursor: "pointer", paddingRight: "24px" }}>
                    {industries.map(ind => <option key={ind} value={ind} style={{ background: "#0e0e16" }}>{ind}</option>)}
                  </select>
                  <ChevronDown style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: "15px", height: "15px", color: "#3f3f52", pointerEvents: "none" }} />
                </div>
              </div>

              {/* Product */}
              <div style={{ padding: "1.25rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
                <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#71717a", marginBottom: "12px" }}>Your Product</div>
                <input type="text" placeholder="e.g. Developer Infrastructure Platform, Security Suite…"
                  value={form.product} onChange={e => setForm(f => ({ ...f, product: e.target.value }))}
                  style={{ width: "100%", background: "transparent", border: "none", outline: "none", fontSize: "14px", color: "#fafafa" }}
                />
              </div>

              {/* Goal */}
              <div style={{ padding: "1.25rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
                <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#71717a", marginBottom: "12px" }}>Business Goal</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
                  {goals.map(g => (
                    <button key={g.value} onClick={() => setForm(f => ({ ...f, goal: g.value }))}
                      style={{
                        padding: "10px 16px", borderRadius: "10px", fontSize: "13px", fontWeight: 500,
                        textAlign: "left", cursor: "pointer",
                        background: form.goal === g.value ? "rgba(91,110,240,0.15)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${form.goal === g.value ? "rgba(91,110,240,0.4)" : "#1e1e2e"}`,
                        color: form.goal === g.value ? "#a5b0f7" : "#71717a",
                        transition: "all 0.15s",
                      }}>
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={runAnalysis} disabled={!canSubmit}
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  padding: "14px", borderRadius: "12px", fontSize: "14px", fontWeight: 600,
                  border: "none", cursor: canSubmit ? "pointer" : "not-allowed",
                  background: canSubmit ? "linear-gradient(135deg, #5b6ef0, #8b5cf6)" : "rgba(91,110,240,0.15)",
                  color: canSubmit ? "white" : "#3f3f52",
                  transition: "opacity 0.15s",
                }}>
                <Brain style={{ width: "15px", height: "15px" }} />
                Generate Intelligence Report
                <ArrowRight style={{ width: "15px", height: "15px" }} />
              </button>
            </motion.div>
          )}

          {(phase === "processing" || phase === "done") && (
            <motion.div key="processing" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {/* Company header */}
              <div style={{ padding: "1rem 1.25rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(91,110,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, color: "#5b6ef0", flexShrink: 0 }}>
                  {form.company[0]?.toUpperCase()}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: "14px" }}>{form.company}</div>
                  <div style={{ fontSize: "12px", color: "#71717a" }}>{form.industry}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", padding: "6px 12px", borderRadius: "9999px", background: "rgba(91,110,240,0.1)", color: "#a5b0f7" }}>
                  <Loader2 style={{ width: "12px", height: "12px", animation: "spin 1s linear infinite" }} />
                  Analyzing
                </div>
              </div>

              {/* Agents */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {AGENTS.map((agent) => {
                  const status = agentProgress[agent.id];
                  const taskIdx = currentTask[agent.id];
                  const Icon = agent.icon;
                  return (
                    <motion.div key={agent.id}
                      initial={{ opacity: 0, x: -12 }} animate={{ opacity: status !== "idle" ? 1 : 0.35, x: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        padding: "1rem", borderRadius: "1rem", background: "#0e0e16",
                        border: `1px solid ${status === "running" ? agent.color + "40" : "#1e1e2e"}`,
                        boxShadow: status === "running" ? `0 0 24px ${agent.color}12` : "none",
                        transition: "border-color 0.3s, box-shadow 0.3s",
                      }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                        <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `${agent.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon style={{ width: "15px", height: "15px", color: agent.color }} />
                        </div>
                        <div style={{ fontWeight: 500, fontSize: "13px" }}>{agent.name}</div>
                        <div style={{ marginLeft: "auto" }}>
                          {status === "idle" && <span style={{ fontSize: "12px", color: "#3f3f52" }}>Waiting</span>}
                          {status === "running" && (
                            <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: agent.color }}>
                              <Loader2 style={{ width: "11px", height: "11px", animation: "spin 1s linear infinite" }} /> Running
                            </div>
                          )}
                          {status === "done" && (
                            <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", color: "#10b981" }}>
                              <Check style={{ width: "11px", height: "11px" }} /> Complete
                            </div>
                          )}
                        </div>
                      </div>
                      <div style={{ marginLeft: "42px", display: "flex", flexDirection: "column", gap: "5px" }}>
                        {agent.tasks.map((task, ti) => (
                          <div key={ti} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px",
                            color: status === "done" || (status === "running" && ti < taskIdx) ? "#71717a"
                              : status === "running" && ti === taskIdx ? "#fafafa" : "#3f3f52",
                          }}>
                            <div style={{ width: "5px", height: "5px", borderRadius: "50%", flexShrink: 0,
                              background: status === "done" ? "#10b981" : status === "running" && ti <= taskIdx ? agent.color : "#3f3f52",
                            }} />
                            {task}
                            {status === "running" && ti === taskIdx && (
                              <Loader2 style={{ width: "10px", height: "10px", color: agent.color, animation: "spin 1s linear infinite" }} />
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {phase === "done" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  style={{ marginTop: "1rem", padding: "1rem", borderRadius: "1rem", textAlign: "center", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "13px", color: "#10b981" }}>
                    <Check style={{ width: "14px", height: "14px" }} />
                    Analysis complete - loading your report…
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppLayout>
  );
}
