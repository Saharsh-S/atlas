export interface Signal {
  type: "hiring" | "market" | "product" | "financial" | "partnership";
  title: string;
  description: string;
  confidence: number;
  date?: string;
}

export interface DecisionMaker {
  title: string;
  focus: string;
  priority: string;
}

export interface AtlasReport {
  id: string;
  company: string;
  industry: string;
  product: string;
  goal: string;
  generatedAt: string;
  score: number;
  scoreLabel: string;
  overview: string;
  whyNow: string[];
  signals: Signal[];
  painPoints: string[];
  decisionMakers: DecisionMaker[];
  strategy: string;
  questions: string[];
  avoid: string[];
}

export interface AgentStatus {
  id: string;
  name: string;
  description: string;
  tasks: string[];
  status: "idle" | "running" | "complete" | "error";
  completedAt?: number;
}

export interface AnalyzeInput {
  company: string;
  industry: string;
  product: string;
  goal: string;
}
