# Atlas — AI Deal Intelligence Platform

A portfolio project demonstrating AI product thinking, frontend engineering, and GTM workflow design.

## What is Atlas?

Atlas is an AI-powered Deal Intelligence platform that helps GTM teams understand opportunities **before** they pursue them.

> "Should we pursue this opportunity, why now, and how should we approach it?"

Atlas is an AI strategist, not an executor. It lives before GTM execution — helping teams decide *which* opportunities are worth pursuing and *how* to approach them.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **AI**: Ollama (local) with smart fallback

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — product positioning |
| `/dashboard` | Overview with stats, recent reports, signal feed |
| `/analyze` | Company input + AI agent processing animation |
| `/report/[id]` | Full Deal Intelligence Report |
| `/reports` | Report archive |
| `/agents` | Agent status and metrics |
| `/settings` | Ollama configuration |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## AI Integration

Atlas uses [Ollama](https://ollama.ai) for local AI inference.

**Setup Ollama (optional):**
```bash
# Install Ollama
brew install ollama

# Pull the model
ollama pull llama3.1:8b

# Start the server
ollama serve
```

**No Ollama?** No problem. Atlas automatically falls back to a smart demo mode that generates realistic, company-specific Deal Intelligence Reports. The demo works without any AI setup.

## Demo Flow

1. Open Atlas at `localhost:3000`
2. Click **Analyze a Company** 
3. Enter a company name (try `Cohere`) and your product
4. Watch 4 AI agents analyze the opportunity in real time
5. Receive a full Deal Intelligence Report with score, signals, strategy, and meeting prep

## Design Philosophy

- **Dark mode first**: Deep navy-black base with electric indigo accent
- **Data hierarchy**: Opportunity score as the hero metric
- **Purposeful animation**: Orchestrated agent sequence over scattered effects
- **Information density**: Premium but not cluttered

## Architecture

```
Atlas (Intelligence Layer)
    ↓
  Understanding + Strategy
    ↓
Execution Layer (e.g., Clover)
```

Atlas owns the intelligence layer. What to pursue and why — before you act.

---

Built as a portfolio project by a CS student exploring AI products and GTM intelligence.
