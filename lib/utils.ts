import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scoreColor(score: number): string {
  if (score >= 80) return "#10b981";
  if (score >= 60) return "#f59e0b";
  return "#f43f5e";
}

export function scoreLabel(score: number): string {
  if (score >= 85) return "High Potential";
  if (score >= 70) return "Strong Opportunity";
  if (score >= 55) return "Moderate Fit";
  return "Low Priority";
}

export function signalTypeColor(type: string): string {
  const colors: Record<string, string> = {
    hiring: "#5b6ef0",
    market: "#8b5cf6",
    product: "#10b981",
    financial: "#f59e0b",
    partnership: "#ec4899",
  };
  return colors[type] || "#5b6ef0";
}

export function signalTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    hiring: "Hiring Signal",
    market: "Market Signal",
    product: "Product Signal",
    financial: "Financial Signal",
    partnership: "Partnership Signal",
  };
  return labels[type] || "Signal";
}
