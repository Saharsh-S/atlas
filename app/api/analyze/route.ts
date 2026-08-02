import { NextRequest, NextResponse } from "next/server";
import { generateMockReport } from "@/lib/mock-data";
import { AtlasReport } from "@/lib/types";

const SYSTEM_PROMPT = `You are Atlas, an expert B2B deal intelligence analyst. 
You analyze companies and generate structured deal intelligence reports for GTM teams.
Always respond with valid JSON only. No markdown, no explanation, just the JSON object.`;

function buildPrompt(company: string, industry: string, product: string, goal: string): string {
  return `Analyze this B2B opportunity and return a deal intelligence report as JSON.

Target Company: ${company}
Industry: ${industry}
Our Product/Service: ${product}
Goal: ${goal}

Return ONLY this exact JSON structure with no extra text:
{
  "score": <integer 0-100 representing opportunity strength>,
  "scoreLabel": "<one of: High Potential | Strong Opportunity | Moderate Fit | Low Priority>",
  "overview": "<2-3 sentences describing the company, what they do and their current stage>",
  "whyNow": [
    "<specific reason this is a good time to reach out>",
    "<another timing signal or business reason>",
    "<growth or market reason>",
    "<budget or investment cycle reason>"
  ],
  "signals": [
    {
      "type": "<one of: hiring | market | product | financial | partnership>",
      "title": "<short signal title>",
      "description": "<1-2 sentences explaining the signal and why it matters>",
      "confidence": <integer 60-95>
    }
  ],
  "painPoints": [
    "<specific pain point this company likely faces>",
    "<another pain point>",
    "<another pain point>",
    "<another pain point>"
  ],
  "decisionMakers": [
    {
      "title": "<job title of key buyer>",
      "focus": "<what this person cares about day to day>",
      "priority": "<their top business priority right now>"
    },
    {
      "title": "<another key stakeholder title>",
      "focus": "<their focus area>",
      "priority": "<their priority>"
    },
    {
      "title": "<third stakeholder>",
      "focus": "<their focus>",
      "priority": "<their priority>"
    }
  ],
  "strategy": "<2-3 sentences on the exact approach to take - what to lead with, what angle to use, what to avoid>",
  "questions": [
    "<specific discovery question to ask in the first meeting>",
    "<another strong discovery question>",
    "<a question about their current infrastructure or process>",
    "<a question about their timeline or priorities>"
  ],
  "avoid": [
    "<specific thing to avoid saying or doing in this engagement>",
    "<another pitfall to avoid>",
    "<another common mistake to avoid with this company>"
  ]
}

Include exactly 3-4 signals. Make everything specific to ${company} and the ${industry} industry. Be direct and actionable.`;
}

async function analyzeWithOpenAI(
  company: string,
  industry: string,
  product: string,
  goal: string
): Promise<AtlasReport | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: buildPrompt(company, industry, product, goal) },
        ],
        response_format: { type: "json_object" },
        temperature: 0.7,
        max_tokens: 1500,
      }),
      signal: AbortSignal.timeout(25000),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenAI error:", err);
      return null;
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) return null;

    const parsed = JSON.parse(content);

    return {
      id: `${company.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      company,
      industry,
      product,
      goal,
      generatedAt: new Date().toISOString(),
      score: parsed.score || 75,
      scoreLabel: parsed.scoreLabel || "Strong Opportunity",
      overview: parsed.overview || "",
      whyNow: parsed.whyNow || [],
      signals: parsed.signals || [],
      painPoints: parsed.painPoints || [],
      decisionMakers: parsed.decisionMakers || [],
      strategy: parsed.strategy || "",
      questions: parsed.questions || [],
      avoid: parsed.avoid || [],
    };
  } catch (err) {
    console.error("OpenAI call failed:", err);
    return null;
  }
}

async function analyzeWithOllama(
  company: string,
  industry: string,
  product: string,
  goal: string
): Promise<AtlasReport | null> {
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3.1:8b",
        prompt: buildPrompt(company, industry, product, goal),
        stream: false,
        options: { temperature: 0.7, num_predict: 1500 },
      }),
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) return null;

    const data = await response.json();
    const text = data.response || "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return null;

    const parsed = JSON.parse(jsonMatch[0]);
    return {
      id: `${company.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      company, industry, product, goal,
      generatedAt: new Date().toISOString(),
      ...parsed,
    };
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { company, industry, product, goal } = await request.json();

    if (!company || !product) {
      return NextResponse.json({ error: "Company and product are required" }, { status: 400 });
    }

    // Small delay so the agent animation has time to play
    await new Promise((r) => setTimeout(r, 1500));

    // Priority: OpenAI -> Ollama -> Smart mock
    let report: AtlasReport | null = null;

    report = await analyzeWithOpenAI(company, industry, product, goal);
    if (!report) report = await analyzeWithOllama(company, industry, product, goal);
    if (!report) report = generateMockReport(company, industry, product, goal);

    return NextResponse.json(report);
  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json({ error: "Analysis failed" }, { status: 500 });
  }
}
