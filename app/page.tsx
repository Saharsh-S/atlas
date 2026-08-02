"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Brain, TrendingUp, Target, ChevronRight, Check } from "lucide-react";

const agents = [
  { name: "Research Agent", desc: "Company background & market positioning", color: "#5b6ef0" },
  { name: "Market Agent", desc: "Industry trends & competitive landscape", color: "#8b5cf6" },
  { name: "Signal Agent", desc: "Hiring, product & expansion signals", color: "#10b981" },
  { name: "Strategy Agent", desc: "Recommendations & conversation approach", color: "#f59e0b" },
];

const features = [
  {
    icon: Brain,
    title: "AI Signal Detection",
    desc: "Atlas monitors hiring trends, product launches, and market shifts to surface the signals that matter for each opportunity.",
  },
  {
    icon: Target,
    title: "Opportunity Scoring",
    desc: "Every company gets a precision score based on fit, timing, and strategic alignment - not guesswork.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Playbooks",
    desc: "Turn intelligence into action with AI-generated conversation strategies tailored to each opportunity.",
  },
];

const steps = [
  { n: "01", title: "Enter a company", desc: "Name, industry, and what you're selling." },
  { n: "02", title: "AI agents analyze", desc: "Research, market, signal, and strategy agents work in parallel." },
  { n: "03", title: "Receive your report", desc: "A complete deal intelligence brief with score, signals, and strategy." },
];

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#06060a", color: "#fafafa" }} className="grid-bg">

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2.5rem",
        background: "rgba(6, 6, 10, 0.85)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid #1e1e2e",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "28px", height: "28px", borderRadius: "8px",
            background: "linear-gradient(135deg, #5b6ef0, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Zap style={{ width: "14px", height: "14px", color: "white" }} />
          </div>
          <span style={{ fontWeight: 600, fontSize: "14px" }}>Atlas</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <a href="#how-it-works" style={{ fontSize: "14px", color: "#71717a" }}>How it works</a>
          <a href="#agents" style={{ fontSize: "14px", color: "#71717a" }}>Agents</a>
          <Link href="/dashboard" style={{
            display: "flex", alignItems: "center", gap: "6px",
            fontSize: "14px", fontWeight: 500, padding: "6px 16px", borderRadius: "10px",
            background: "rgba(91, 110, 240, 0.15)", color: "#a5b0f7",
            border: "1px solid rgba(91, 110, 240, 0.25)",
          }}>
            Open App <ChevronRight style={{ width: "14px", height: "14px" }} />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: "9rem", paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 14px", borderRadius: "9999px", marginBottom: "2rem",
              background: "rgba(91, 110, 240, 0.1)", border: "1px solid rgba(91, 110, 240, 0.2)",
              color: "#a5b0f7", fontSize: "12px", fontWeight: 500,
            }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#5b6ef0", animation: "pulse 2s infinite" }} />
              AI-Powered Deal Intelligence
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "1.5rem" }}>
              Know which opportunities<br />
              <span style={{ background: "linear-gradient(135deg, #5b6ef0, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                are worth pursuing.
              </span>
            </h1>

            <p style={{ fontSize: "1.125rem", color: "#71717a", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
              Atlas uses AI to analyze companies, uncover business signals, and generate deal strategies before your first conversation.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/analyze" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 24px", borderRadius: "12px", fontWeight: 600, fontSize: "14px",
                background: "linear-gradient(135deg, #5b6ef0, #8b5cf6)", color: "white",
              }}>
                Analyze a Company <ArrowRight style={{ width: "16px", height: "16px" }} />
              </Link>
              <Link href="/dashboard" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 24px", borderRadius: "12px", fontWeight: 500, fontSize: "14px",
                background: "rgba(255,255,255,0.05)", color: "#fafafa", border: "1px solid #1e1e2e",
              }}>
                View Dashboard
              </Link>
            </div>
          </motion.div>

          {/* Product mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ marginTop: "4rem", borderRadius: "16px", overflow: "hidden", border: "1px solid #1e1e2e", background: "#0e0e16" }}
          >
            <div style={{ height: "36px", display: "flex", alignItems: "center", padding: "0 16px", gap: "8px", background: "#0a0a14", borderBottom: "1px solid #1e1e2e" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                {["#f43f5e", "#f59e0b", "#10b981"].map((c, i) => (
                  <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.6 }} />
                ))}
              </div>
              <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <div style={{ height: "16px", width: "200px", borderRadius: "4px", background: "#1e1e2e" }} />
              </div>
            </div>
            <div style={{ padding: "1.5rem", display: "flex", gap: "1.5rem" }}>
              <div style={{ width: "120px", flexShrink: 0 }}>
                {["Overview", "Analyze", "Reports", "Agents"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "8px", marginBottom: "4px", background: i === 1 ? "rgba(91,110,240,0.12)" : "transparent" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "4px", background: i === 1 ? "#5b6ef0" : "#1e1e2e" }} />
                    <span style={{ fontSize: "11px", color: i === 1 ? "#fafafa" : "#3f3f52" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <div>
                    <div style={{ height: "14px", width: "140px", borderRadius: "4px", background: "#1e1e2e", marginBottom: "8px" }} />
                    <div style={{ height: "11px", width: "200px", borderRadius: "4px", background: "#14141e" }} />
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "2rem", fontWeight: 700, color: "#10b981", fontVariantNumeric: "tabular-nums" }}>87</div>
                    <div style={{ fontSize: "11px", color: "#71717a" }}>Deal Score</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
                  {["Hiring Signal", "Market Signal", "Product Signal"].map((s, i) => (
                    <div key={i} style={{ borderRadius: "12px", padding: "12px", background: "#12121c", border: "1px solid #1e1e2e" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: ["#5b6ef0","#8b5cf6","#10b981"][i] }} />
                        <div style={{ height: "10px", borderRadius: "3px", flex: 1, background: "#1e1e2e" }} />
                      </div>
                      <div style={{ height: "8px", borderRadius: "3px", background: "#14141e", marginBottom: "4px" }} />
                      <div style={{ height: "8px", borderRadius: "3px", width: "75%", background: "#14141e" }} />
                      <div style={{ marginTop: "8px", fontSize: "11px", fontFamily: "monospace", color: ["#5b6ef0","#8b5cf6","#10b981"][i] }}>
                        {[89, 84, 91][i]}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "6rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5b6ef0", marginBottom: "12px" }}>
              What Atlas does
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.025em" }}>Intelligence before action.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ padding: "1.5rem", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e", position: "relative" }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(91,110,240,0.4), transparent)", borderRadius: "1rem 1rem 0 0" }} />
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(91,110,240,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <Icon style={{ width: "18px", height: "18px", color: "#5b6ef0" }} />
                  </div>
                  <h3 style={{ fontWeight: 600, fontSize: "14px", marginBottom: "8px" }}>{f.title}</h3>
                  <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#71717a" }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" style={{ padding: "6rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5b6ef0", marginBottom: "12px" }}>
              How it works
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.025em" }}>From company to strategy in minutes.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
            {steps.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              >
                <div style={{ fontSize: "3.5rem", fontWeight: 700, fontFamily: "monospace", color: "rgba(91,110,240,0.18)", marginBottom: "1.25rem" }}>{s.n}</div>
                <h3 style={{ fontWeight: 600, fontSize: "15px", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#71717a" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section id="agents" style={{ padding: "6rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5b6ef0", marginBottom: "12px" }}>
              AI Agents
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.025em", marginBottom: "12px" }}>Four agents. One strategy.</h2>
            <p style={{ fontSize: "14px", color: "#71717a", maxWidth: "480px", margin: "0 auto" }}>
              Each agent handles a distinct layer of intelligence before combining into a unified report.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
            {agents.map((a, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px", borderRadius: "1rem", background: "#0e0e16", border: "1px solid #1e1e2e" }}
              >
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${a.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: a.color, animation: "pulse 2s infinite" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 500, fontSize: "14px", marginBottom: "3px" }}>{a.name}</div>
                  <div style={{ fontSize: "12px", color: "#71717a" }}>{a.desc}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", padding: "4px 10px", borderRadius: "9999px", background: "rgba(16,185,129,0.1)", color: "#10b981", flexShrink: 0 }}>
                  <Check style={{ width: "12px", height: "12px" }} /> Ready
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "7rem 0", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto", padding: "0 2rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.025em", marginBottom: "1rem" }}>
            Ready to see the intelligence?
          </h2>
          <p style={{ fontSize: "14px", color: "#71717a", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Enter any company and watch Atlas analyze the opportunity in real time.
          </p>
          <Link href="/analyze" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "14px 32px", borderRadius: "12px", fontWeight: 600, fontSize: "14px",
            background: "linear-gradient(135deg, #5b6ef0, #8b5cf6)", color: "white",
          }}>
            Analyze Your First Company <ArrowRight style={{ width: "16px", height: "16px" }} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem", borderTop: "1px solid #1e1e2e", textAlign: "center", fontSize: "12px", color: "#3f3f52" }}>
        Atlas · AI Deal Intelligence · Portfolio Project
      </footer>
    </div>
  );
}
