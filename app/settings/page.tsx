"use client";

import { motion } from "framer-motion";
import AppLayout from "@/components/layout/AppLayout";
import { Server, Sliders, Zap } from "lucide-react";

const sections = [
  {
    icon: Server, title: "Ollama Connection", color: "#5b6ef0",
    desc: "Connect to a local Ollama instance to power AI analysis with a real language model.",
    fields: [
      { label: "Endpoint URL", value: "http://localhost:11434", placeholder: "http://localhost:11434" },
      { label: "Model", value: "llama3.1:8b", placeholder: "llama3.1:8b" },
    ],
  },
  {
    icon: Sliders, title: "Generation Settings", color: "#8b5cf6",
    desc: "Control how Atlas generates analysis reports and recommendations.",
    fields: [
      { label: "Temperature", value: "0.7", placeholder: "0.7" },
      { label: "Max Tokens", value: "1500", placeholder: "1500" },
    ],
  },
];

export default function SettingsPage() {
  return (
    <AppLayout>
      <div style={{ padding: "2rem", maxWidth: "560px" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5b6ef0", marginBottom: "6px" }}>Configuration</div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.025em" }}>Settings</h1>
          <p style={{ fontSize: "13px", color: "#71717a", marginTop: "4px" }}>Configure Atlas and its AI model connection.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                style={{ borderRadius: "1rem", overflow: "hidden", background: "#0e0e16", border: "1px solid #1e1e2e" }}>
                <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #1e1e2e", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `${section.color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon style={{ width: "15px", height: "15px", color: section.color }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "13px" }}>{section.title}</div>
                    <div style={{ fontSize: "11px", color: "#71717a", marginTop: "2px" }}>{section.desc}</div>
                  </div>
                </div>
                <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {section.fields.map((field, fi) => (
                    <div key={fi}>
                      <label style={{ fontSize: "11px", fontWeight: 500, color: "#71717a", display: "block", marginBottom: "6px" }}>{field.label}</label>
                      <input type="text" defaultValue={field.value} placeholder={field.placeholder}
                        style={{ width: "100%", borderRadius: "10px", padding: "10px 14px", fontSize: "13px", background: "#12121c", border: "1px solid #1e1e2e", color: "#fafafa", outline: "none" }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          <div style={{ padding: "1rem 1.25rem", borderRadius: "1rem", background: "rgba(91,110,240,0.05)", border: "1px solid rgba(91,110,240,0.15)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <Zap style={{ width: "14px", height: "14px", color: "#5b6ef0", marginTop: "1px", flexShrink: 0 }} />
              <p style={{ fontSize: "12px", lineHeight: 1.65, color: "#71717a" }}>
                <strong style={{ color: "#a5b0f7" }}>No Ollama?</strong> Atlas automatically falls back to smart demo mode - generating realistic, company-specific Deal Intelligence Reports without a local model. Great for portfolio demos.
              </p>
            </div>
          </div>

          <button style={{ padding: "11px", borderRadius: "10px", fontSize: "13px", fontWeight: 600, background: "linear-gradient(135deg, #5b6ef0, #8b5cf6)", color: "white", border: "none", cursor: "pointer", width: "100%" }}>
            Save Settings
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
