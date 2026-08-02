"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import AppLayout from "@/components/layout/AppLayout";
import ScoreRing from "@/components/report/ScoreRing";
import SignalCard from "@/components/report/SignalCard";
import { AtlasReport } from "@/lib/types";
import { Check, AlertTriangle, Users, MessageSquare, ArrowLeft, Zap, ChevronRight, Shield } from "lucide-react";
import { generateMockReport } from "@/lib/mock-data";

function Section({ title, delay = 0, children }: { title: string; delay?: number; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.4 }}>
      <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3f3f52", marginBottom: "12px" }}>{title}</div>
      {children}
    </motion.div>
  );
}

// Pre-populate demo reports for the reports listed on the dashboard
const DEMO_IDS: Record<string, [string, string]> = {
  "cohere-demo": ["Cohere", "Artificial Intelligence"],
  "notion-demo": ["Notion", "Productivity"],
  "figma-demo": ["Figma", "Design Tools"],
  "stripe-demo": ["Stripe", "Fintech"],
  "vercel-demo": ["Vercel", "Developer Infrastructure"],
  "linear-demo": ["Linear", "Developer Infrastructure"],
};

export default function ReportPage() {
  const params = useParams();
  const router = useRouter();
  const [report, setReport] = useState<AtlasReport | null>(null);

  useEffect(() => {
    const id = params.id as string;
    const stored = localStorage.getItem(`atlas-report-${id}`);
    if (stored) { setReport(JSON.parse(stored)); return; }
    const demo = DEMO_IDS[id];
    if (demo) {
      const r = generateMockReport(demo[0], demo[1], "Developer Infrastructure Platform", "sales");
      r.id = id;
      setReport(r);
      return;
    }
    // Fallback
    const r = generateMockReport("Company", "SaaS", "Developer Infrastructure Platform", "sales");
    r.id = id;
    setReport(r);
  }, [params.id]);

  if (!report) {
    return (
      <AppLayout>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ width: "28px", height: "28px", border: "2px solid #5b6ef0", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 12px" }} />
            <p style={{ fontSize: "13px", color: "#71717a" }}>Loading intelligence report…</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div style={{ minHeight: "100vh" }}>
        {/* Top bar */}
        <div style={{
          position: "sticky", top: 0, zIndex: 40, padding: "0 2rem",
          height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "rgba(6,6,10,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1e1e2e",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button onClick={() => router.back()}
              style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "#71717a", background: "none", border: "none", cursor: "pointer" }}>
              <ArrowLeft style={{ width: "13px", height: "13px" }} /> Back
            </button>
            <div style={{ width: "1px", height: "16px", background: "#1e1e2e" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "5px", background: "rgba(91,110,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#5b6ef0" }}>
                {report.company[0]}
              </div>
              <span style={{ fontWeight: 500, fontSize: "13px" }}>{report.company}</span>
              <ChevronRight style={{ width: "13px", height: "13px", color: "#3f3f52" }} />
              <span style={{ fontSize: "13px", color: "#71717a" }}>Deal Intelligence Report</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "9999px", background: "rgba(16,185,129,0.1)", color: "#10b981", display: "flex", alignItems: "center", gap: "4px" }}>
              <Check style={{ width: "11px", height: "11px" }} /> Analysis Complete
            </span>
          </div>
        </div>

        <div style={{ padding: "1.75rem 2rem" }}>
          {/* Score Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ borderRadius: "1rem", padding: "2rem", marginBottom: "1.5rem", background: "#0e0e16", border: "1px solid #1e1e2e", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at top left, rgba(91,110,240,0.06), transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(91,110,240,0.4), transparent)" }} />
            <div style={{ position: "relative", display: "flex", alignItems: "flex-start", gap: "2.5rem" }}>
              <ScoreRing score={report.score} label={report.scoreLabel} />
              <div style={{ flex: 1, paddingTop: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 500, padding: "3px 10px", borderRadius: "9999px", background: "rgba(91,110,240,0.1)", color: "#a5b0f7" }}>{report.industry}</span>
                  <span style={{ fontSize: "11px", color: "#3f3f52" }}>
                    {new Date(report.generatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <h1 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.025em", marginBottom: "10px" }}>{report.company}</h1>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#71717a", maxWidth: "520px" }}>{report.overview}</p>
                <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {report.whyNow.map((reason, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                      style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px" }}>
                      <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(16,185,129,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                        <Check style={{ width: "10px", height: "10px", color: "#10b981" }} />
                      </div>
                      <span style={{ color: "#d1d1e0", lineHeight: 1.5 }}>{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
            {/* Left */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <Section title="Business Signals" delay={0.15}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                  {report.signals.map((signal, i) => <SignalCard key={i} signal={signal} index={i} />)}
                </div>
              </Section>

              <Section title="Recommended Strategy" delay={0.25}>
                <div style={{ padding: "1.5rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid rgba(91,110,240,0.3)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at top left, rgba(91,110,240,0.08), transparent 70%)", pointerEvents: "none" }} />
                  <div style={{ position: "relative", display: "flex", gap: "1rem" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(91,110,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Zap style={{ width: "16px", height: "16px", color: "#5b6ef0" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 600, color: "#5b6ef0", marginBottom: "8px" }}>Atlas Recommendation</div>
                      <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#d1d1e0" }}>{report.strategy}</p>
                    </div>
                  </div>
                </div>
              </Section>

              <Section title="Meeting Preparation" delay={0.3}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
                  <div style={{ padding: "1.25rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
                      <MessageSquare style={{ width: "14px", height: "14px", color: "#5b6ef0" }} />
                      <span style={{ fontSize: "11px", fontWeight: 600, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em" }}>Questions to Ask</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {report.questions.map((q, i) => (
                        <div key={i} style={{ display: "flex", gap: "10px" }}>
                          <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#3f3f52", flexShrink: 0, marginTop: "2px" }}>{String(i + 1).padStart(2, "0")}</span>
                          <p style={{ fontSize: "12px", lineHeight: 1.6, color: "#d1d1e0" }}>{q}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: "1.25rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
                      <Shield style={{ width: "14px", height: "14px", color: "#f59e0b" }} />
                      <span style={{ fontSize: "11px", fontWeight: 600, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.05em" }}>Avoid These</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {report.avoid.map((a, i) => (
                        <div key={i} style={{ display: "flex", gap: "8px" }}>
                          <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                            <AlertTriangle style={{ width: "9px", height: "9px", color: "#f59e0b" }} />
                          </div>
                          <p style={{ fontSize: "12px", lineHeight: 1.6, color: "#71717a" }}>{a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <Section title="Pain Points" delay={0.2}>
                <div style={{ padding: "1.25rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {report.painPoints.map((pain, i) => (
                      <div key={i} style={{ display: "flex", gap: "10px" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f43f5e", flexShrink: 0, marginTop: "5px" }} />
                        <p style={{ fontSize: "12px", lineHeight: 1.6, color: "#71717a" }}>{pain}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Section>

              <Section title="Decision Makers" delay={0.22}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {report.decisionMakers.map((dm, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
                      style={{ padding: "1rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                        <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(139,92,246,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Users style={{ width: "13px", height: "13px", color: "#8b5cf6" }} />
                        </div>
                        <div style={{ fontWeight: 600, fontSize: "12px" }}>{dm.title}</div>
                      </div>
                      <p style={{ fontSize: "11px", color: "#71717a", marginBottom: "8px", lineHeight: 1.5 }}>{dm.focus}</p>
                      <div style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", display: "inline-block", background: "rgba(139,92,246,0.08)", color: "#a78bfa" }}>
                        Priority: {dm.priority}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              <Section title="Report Details" delay={0.35}>
                <div style={{ padding: "1rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { label: "Target", value: report.company },
                    { label: "Industry", value: report.industry },
                    { label: "Product", value: report.product },
                    { label: "Goal", value: report.goal },
                    { label: "Generated", value: new Date(report.generatedAt).toLocaleTimeString() },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "11px", color: "#3f3f52" }}>{item.label}</span>
                      <span style={{ fontSize: "11px", fontWeight: 500, color: "#71717a", maxWidth: "160px", textAlign: "right", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
