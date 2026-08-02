"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Search, FileText, Bot, Settings, Zap } from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/analyze", label: "Analyze", icon: Search },
  { href: "/reports", label: "Reports", icon: FileText },
  { href: "/agents", label: "Agents", icon: Bot },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{
      position: "fixed", left: 0, top: 0, height: "100vh", width: "224px",
      background: "#09090f", borderRight: "1px solid #1e1e2e",
      display: "flex", flexDirection: "column", zIndex: 50,
    }}>
      {/* Logo */}
      <div style={{ height: "56px", display: "flex", alignItems: "center", padding: "0 16px", borderBottom: "1px solid #1e1e2e" }}>
        <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "linear-gradient(135deg, #5b6ef0, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap style={{ width: "14px", height: "14px", color: "white" }} />
          </div>
          <span style={{ fontWeight: 600, fontSize: "14px", color: "#fafafa" }}>Atlas</span>
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "12px 8px", overflowY: "auto" }}>
        {nav.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || 
            (item.href === "/analyze" && pathname.startsWith("/report"));

          return (
            <Link key={item.href} href={item.href} style={{
              position: "relative", display: "flex", alignItems: "center", gap: "12px",
              padding: "9px 12px", borderRadius: "8px", fontSize: "13px", fontWeight: 500,
              marginBottom: "2px", transition: "all 0.15s",
              color: isActive ? "#fafafa" : "#71717a",
              background: isActive ? "rgba(91, 110, 240, 0.12)" : "transparent",
            }}>
              {isActive && (
                <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: "3px", height: "18px", background: "#5b6ef0", borderRadius: "0 2px 2px 0" }} />
              )}
              <Icon style={{ width: "15px", height: "15px", color: isActive ? "#5b6ef0" : "#71717a", flexShrink: 0 }} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom user */}
      <div style={{ padding: "12px", borderTop: "1px solid #1e1e2e" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "10px", background: "rgba(91,110,240,0.06)" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg, #5b6ef0, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "white", flexShrink: 0 }}>
            A
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "12px", fontWeight: 500, color: "#fafafa", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Atlas User</div>
            <div style={{ fontSize: "11px", color: "#71717a" }}>Portfolio Demo</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
