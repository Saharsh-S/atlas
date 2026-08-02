import { AtlasReport, Signal, DecisionMaker } from "./types";

// --- Well-known companies with specific data ---
const KNOWN_COMPANIES: Record<string, Partial<AtlasReport>> = {
  cohere: {
    score: 87,
    overview: "Cohere develops enterprise-grade large language models focused on secure, private, and scalable AI deployment. Positioned as the enterprise alternative to OpenAI - emphasizing data sovereignty, deployment flexibility, and deep customization for regulated industries.",
    whyNow: [
      "Raised $270M Series C; actively deploying capital into infrastructure and GTM",
      "New enterprise deployment partnerships with AWS, GCP, Oracle Cloud",
      "Regulatory pressure around data residency making private AI a board-level priority",
      "Engineering headcount up 42% YoY - infrastructure spend follows talent",
    ],
    signals: [
      { type: "hiring", title: "MLOps Engineering Surge", description: "15+ open MLOps and inference infrastructure roles, indicating active scaling of production AI systems.", confidence: 91 },
      { type: "market", title: "Enterprise AI Adoption Inflection", description: "Fortune 500 companies accelerating private AI deployment, directly expanding Cohere's addressable market.", confidence: 86 },
      { type: "product", title: "Command R+ Enterprise Launch", description: "Recent flagship model release with RAG-native architecture signals deepening enterprise focus.", confidence: 89 },
      { type: "financial", title: "Series C Active Deployment Phase", description: "Post-fundraise activity suggests infrastructure evaluations are actively in progress.", confidence: 79 },
    ],
    painPoints: [
      "Scaling inference infrastructure to match enterprise SLA requirements without runaway GPU costs",
      "Managing multi-cloud deployment complexity for regulated enterprise clients",
      "Developer onboarding friction slowing adoption cycles - SDK quality is a blocker",
      "Maintaining model quality at scale while controlling per-query compute costs",
    ],
    decisionMakers: [
      { title: "VP of Engineering", focus: "Infrastructure reliability and MLOps", priority: "Cost-efficient scaling" },
      { title: "Head of Developer Experience", focus: "SDK quality and onboarding velocity", priority: "Adoption speed" },
      { title: "CTO", focus: "Technical architecture and platform strategy", priority: "Enterprise readiness" },
    ],
    strategy: "Lead with MLOps and inference infrastructure. Cohere's competitive edge is private AI deployment - position your product as the operational layer that makes that promise real. Their engineering leads are measured on uptime, latency, and cost-per-query. Don't sell AI capability; sell operational certainty.",
    questions: [
      "How are you managing inference latency at scale for enterprise clients with strict SLA commitments?",
      "What's your current strategy for multi-cloud deployment in regulated verticals like financial services?",
      "Where does your MLOps pipeline create the most friction for your engineering team today?",
      "How are you thinking about developer tooling investment as you grow the customer base?",
    ],
    avoid: [
      "Don't compare to OpenAI or Anthropic - they've already made that differentiation their core identity",
      "Avoid pricing conversations before establishing technical fit and quantifying the problem",
      "Don't frame this as cost-cutting - they're in growth mode; frame around speed and reliability",
    ],
  },
  openai: {
    score: 92,
    overview: "OpenAI is the most prominent AI research lab and commercial AI company in the world, with over 2M developers and 1M+ enterprise API users. Rapid revenue growth and continued model leadership create both expansion opportunity and new infrastructure pressure.",
    whyNow: [
      "ChatGPT Enterprise surpassed 1M seats - enterprise IT and security spend accelerating",
      "GPT-4o and reasoning models driving unprecedented API usage spikes",
      "Expanding developer ecosystem creating urgent need for production tooling",
      "Infrastructure partners (Azure) under capacity pressure from demand growth",
    ],
    signals: [
      { type: "hiring", title: "Platform Engineering Hiring Wave", description: "30+ open roles in platform, infrastructure, and developer experience - indicating major tooling buildout.", confidence: 94 },
      { type: "product", title: "Assistants API & Custom GPT Scaling", description: "New developer surfaces driving massive adoption - production reliability now a core priority.", confidence: 91 },
      { type: "market", title: "Enterprise AI Budget Explosion", description: "Gartner estimates enterprise AI spend up 300% YoY - OpenAI capturing majority of new deployment budget.", confidence: 88 },
      { type: "partnership", title: "Microsoft Azure Capacity Expansion", description: "Announced $10B+ infrastructure investment signals demand is outpacing supply.", confidence: 85 },
    ],
    painPoints: [
      "API reliability and rate limits frustrating enterprise developers at critical deployment moments",
      "Observability gaps - enterprises can't easily debug or audit model behavior in production",
      "Fine-tuning and customization workflows too complex for non-ML engineering teams",
      "Cost predictability at scale difficult to model, blocking procurement approvals",
    ],
    decisionMakers: [
      { title: "VP of Engineering", focus: "API reliability and platform scalability", priority: "Zero-downtime production" },
      { title: "Head of Developer Platform", focus: "SDK experience and developer success", priority: "Time-to-production" },
      { title: "Enterprise Sales Engineering", focus: "Customer technical onboarding", priority: "Enterprise deal velocity" },
    ],
    strategy: "Focus on the production gap: OpenAI excels at model capability but their tooling around production observability, cost control, and enterprise compliance is underdeveloped. Developers love the models; they struggle with everything around the models. Your entry point is making GPT-4 production-ready for regulated enterprises.",
    questions: [
      "How do enterprise customers currently handle observability and debugging for GPT-4 in production?",
      "What's the biggest friction point between 'API works in demo' and 'deployed at scale'?",
      "How are you helping customers predict and control costs as their usage scales?",
      "What compliance and audit requirements are most commonly blocking enterprise deals?",
    ],
    avoid: [
      "Don't lead with AI capability claims - they're the benchmark, not a follower",
      "Avoid being positioned as a competitor to their core models",
      "Don't open with pricing - establish production value first",
    ],
  },
  notion: {
    score: 76,
    overview: "Notion has evolved from a productivity tool into an enterprise knowledge management platform used by 30M+ users. Their recent enterprise push - Notion AI, wikis, and project management - creates active investment in tooling and integration infrastructure.",
    whyNow: [
      "Notion AI launched across all plans - infrastructure investment cycle just started",
      "Enterprise tier growing 3x YoY - IT governance and admin tooling gaps becoming visible",
      "SAML/SSO and compliance features under active development for regulated industries",
      "API usage up significantly as teams build on top of Notion",
    ],
    signals: [
      { type: "product", title: "Notion AI Expansion", description: "AI features rolling out across all plans signals an active infrastructure and integration buildout cycle.", confidence: 88 },
      { type: "hiring", title: "Enterprise Engineering Growth", description: "Engineering roles focused on enterprise admin, compliance, and API capabilities.", confidence: 82 },
      { type: "market", title: "Knowledge Management Market Shift", description: "Enterprises consolidating from legacy wiki tools (Confluence) - Notion capturing significant share.", confidence: 79 },
    ],
    painPoints: [
      "Enterprise admin controls still immature compared to established enterprise tools",
      "API rate limits and data export options frustrating engineering teams building integrations",
      "Offline access and performance at scale blocking adoption in enterprise IT departments",
      "Compliance audit trails and permission management underdeveloped for regulated industries",
    ],
    decisionMakers: [
      { title: "VP of Engineering", focus: "API capabilities and developer experience", priority: "Integration flexibility" },
      { title: "Head of Enterprise", focus: "IT governance and compliance", priority: "Enterprise deal velocity" },
      { title: "CTO", focus: "Platform extensibility", priority: "Long-term architecture" },
    ],
    strategy: "Position around the enterprise gap. Notion's product is loved by individuals and small teams but their enterprise administration, compliance, and integration story is still maturing. The best angle is helping them close enterprise deals faster by addressing IT buyer objections - not product features.",
    questions: [
      "Where do enterprise IT buyers push back most in your sales process today?",
      "How are customers building integrations with Notion today, and where do they get stuck?",
      "What compliance requirements are most commonly blocking adoption in regulated industries?",
      "How are you thinking about the gap between end-user love and IT buyer approval?",
    ],
    avoid: [
      "Don't position against Confluence directly - Notion has its own clear differentiation",
      "Avoid feature-by-feature comparisons with competitors",
      "Don't lead with consumer use cases - focus on enterprise buyer priorities",
    ],
  },
  stripe: {
    score: 83,
    overview: "Stripe is the dominant developer-first payments infrastructure company processing hundreds of billions annually. Their expansion into financial services (Stripe Treasury, Capital, Issuing) and international markets creates active investment cycles in new infrastructure domains.",
    whyNow: [
      "Stripe Treasury and Issuing expanding into new verticals requiring new compliance and infrastructure",
      "International expansion to 47+ countries creating localized integration complexity",
      "$6.5B fundraise signals active investment phase across multiple new product lines",
      "Fraud and financial crime tooling becoming a board-level priority for platform customers",
    ],
    signals: [
      { type: "product", title: "Financial Services Expansion", description: "Stripe Treasury, Issuing, and Capital create new infrastructure requirements across compliance and risk.", confidence: 90 },
      { type: "market", title: "Global Payments Infrastructure Demand", description: "Cross-border payment volume up 35% - localized infrastructure and compliance demand follows.", confidence: 86 },
      { type: "hiring", title: "Risk & Compliance Engineering", description: "Significant hiring in risk engineering, fraud detection, and compliance automation.", confidence: 84 },
      { type: "financial", title: "IPO Preparation Mode", description: "Pre-IPO infrastructure hardening and financial controls becoming a leadership priority.", confidence: 78 },
    ],
    painPoints: [
      "Compliance complexity growing faster than internal capacity to manage it across 47 markets",
      "Fraud detection needs to scale without proportional headcount growth",
      "Financial reconciliation and reporting complexity as product lines multiply",
      "Data infrastructure for risk modeling under pressure from transaction volume growth",
    ],
    decisionMakers: [
      { title: "VP Risk & Compliance", focus: "Fraud prevention and regulatory compliance", priority: "False positive reduction" },
      { title: "Head of Platform Engineering", focus: "Infrastructure reliability at massive scale", priority: "Zero-downtime processing" },
      { title: "Chief Financial Officer", focus: "Financial reporting and audit readiness", priority: "IPO preparation" },
    ],
    strategy: "Lead with risk and compliance complexity at scale. Stripe's competitive moat is developer experience - but their growth into financial services creates compliance and risk management challenges that their core developer culture isn't optimized to solve. The CFO and risk teams are where the spending is right now.",
    questions: [
      "How are you managing compliance requirements across 47 markets without proportional headcount growth?",
      "Where does your fraud detection infrastructure create the most friction for your risk team today?",
      "How are you thinking about financial reporting and audit readiness as you expand product lines?",
      "What's the biggest operational challenge in running a financial infrastructure company at this scale?",
    ],
    avoid: [
      "Don't position against their core payments product - it's their crown jewel",
      "Avoid talking about developer experience improvements - they're the benchmark",
      "Don't lead with cost savings - they're in investment mode",
    ],
  },
  vercel: {
    score: 81,
    overview: "Vercel is the leading frontend cloud platform, home to Next.js and deployed by millions of developers. Their enterprise tier has grown rapidly and their new infrastructure products (Edge Network, Storage, AI SDK) create active platform expansion.",
    whyNow: [
      "Vercel AI SDK adoption exploding - new infrastructure needs emerging around AI-native apps",
      "Enterprise tier growing rapidly - security, compliance, and admin tooling gaps emerging",
      "Edge Network expansion creating new monitoring and observability requirements",
      "Storage products (KV, Blob, Postgres) maturing - data tooling gaps becoming visible",
    ],
    signals: [
      { type: "product", title: "AI SDK & Edge Runtime Expansion", description: "Rapid AI tooling expansion signals new infrastructure investment cycle with observability gaps.", confidence: 89 },
      { type: "hiring", title: "Enterprise & Security Engineering", description: "Active hiring in enterprise features, security, and compliance - closing gaps for regulated customers.", confidence: 85 },
      { type: "market", title: "Frontend Cloud Market Leadership", description: "Next.js adoption at 60%+ of React deployments creates defensible network effects.", confidence: 91 },
    ],
    painPoints: [
      "Observability and debugging complexity for Edge Functions in production",
      "Enterprise access controls and audit logging still maturing for regulated industries",
      "Cost unpredictability at scale frustrating engineering managers at high-traffic companies",
      "Data tooling (Storage, KV) lacks the operational maturity enterprise buyers expect",
    ],
    decisionMakers: [
      { title: "VP of Engineering", focus: "Platform reliability and cost predictability", priority: "Production observability" },
      { title: "Head of Developer Experience", focus: "Deployment velocity and developer happiness", priority: "Zero-friction deploys" },
      { title: "CISO", focus: "Security compliance and access controls", priority: "Enterprise audit requirements" },
    ],
    strategy: "Position around the observability and enterprise maturity gap. Vercel's DX is unmatched but production observability, cost control, and enterprise compliance tooling are weaker than their deployment experience suggests. Engineering leaders at large Vercel customers are looking for better visibility into what's happening at the edge.",
    questions: [
      "How do your enterprise customers currently handle observability for Edge Function deployments?",
      "Where does cost predictability become a concern as teams scale their Vercel usage?",
      "What compliance requirements are most commonly creating friction in your enterprise deals?",
      "How are teams debugging issues in Edge runtime - what are the biggest visibility gaps?",
    ],
    avoid: [
      "Don't position against Next.js - it's their crown jewel and community asset",
      "Avoid comparing deployment experience with competitors",
      "Don't focus on small team use cases - the enterprise motion is where the investment is",
    ],
  },
  figma: {
    score: 88,
    overview: "Figma is the dominant collaborative design tool used by virtually every major product team globally. Their expansion beyond design (Dev Mode, FigJam, Config AI) and growing enterprise footprint create active infrastructure investment cycles.",
    whyNow: [
      "Config AI and developer handoff features create new integration points with engineering workflows",
      "Enterprise tier accelerating post-Adobe merger block - new independence drives GTM investment",
      "Dev Mode adoption among engineers creating cross-functional workflow tooling opportunities",
      "Plugin ecosystem growing - API and integration infrastructure under active development",
    ],
    signals: [
      { type: "product", title: "AI Design Features Launch", description: "Config AI features rolling out - active machine learning and content pipeline infrastructure buildout.", confidence: 91 },
      { type: "hiring", title: "Developer Platform Engineering", description: "Strong hiring in developer tooling, API infrastructure, and enterprise integrations.", confidence: 87 },
      { type: "market", title: "Design-to-Code Market Expansion", description: "Dev Mode adoption indicates Figma is moving into developer workflow territory - new infrastructure needs.", confidence: 83 },
    ],
    painPoints: [
      "Design system versioning and governance complex at enterprise scale across hundreds of contributors",
      "Handoff workflow between design and engineering still creates friction despite Dev Mode",
      "Performance at scale - large Figma files create latency issues for complex enterprise design systems",
      "Access controls and brand governance for regulated industries still maturing",
    ],
    decisionMakers: [
      { title: "Head of Design Systems", focus: "Consistency and governance at scale", priority: "Design system adoption" },
      { title: "VP of Product", focus: "Product velocity and design-engineering collaboration", priority: "Faster shipping" },
      { title: "VP Engineering", focus: "Developer workflow integration", priority: "Design-to-code efficiency" },
    ],
    strategy: "Lead with design system governance and the design-to-engineering handoff gap. Figma is loved by designers - the opportunity is closing the gap with engineering teams. Dev Mode created the opening, but the workflow around it (handoff, versioning, governance) is where enterprises struggle most.",
    questions: [
      "How are your enterprise customers managing design system governance across hundreds of contributors?",
      "Where does the design-to-engineering handoff create the most friction in your customers' workflows?",
      "What are the most common complaints from engineering teams about the development handoff process?",
      "How are regulated industry customers approaching brand governance and access controls in Figma?",
    ],
    avoid: [
      "Don't lead with design features - Figma owns that space completely",
      "Avoid comparison with Sketch or Adobe XD - irrelevant to enterprise buyers",
      "Don't ignore the engineering workflow angle - Dev Mode opened a huge opportunity",
    ],
  },
  linear: {
    score: 74,
    overview: "Linear is a fast-growing project management tool beloved by software teams for its speed, minimalist design, and keyboard-first workflow. Their recent enterprise push and integrations with GitHub and Figma create active platform expansion.",
    whyNow: [
      "Enterprise tier launch with SSO and advanced permissions signals active GTM investment",
      "GitHub, Figma, and Slack integrations creating new workflow automation opportunities",
      "Customer base expanding from startups to larger engineering orgs with more complex needs",
      "Linear API adoption growing - teams building on top of Linear creating new integration needs",
    ],
    signals: [
      { type: "hiring", title: "Enterprise Engineering Buildout", description: "Roles focused on enterprise features, admin controls, and compliance capabilities.", confidence: 81 },
      { type: "product", title: "Integration Ecosystem Expansion", description: "New native integrations signal platform strategy and API infrastructure investment.", confidence: 85 },
      { type: "market", title: "Project Management Market Disruption", description: "Linear capturing Jira defectors with 10x better UX - enterprise migration wave underway.", confidence: 87 },
    ],
    painPoints: [
      "Enterprise reporting and analytics still basic compared to Jira for engineering managers",
      "Cross-team dependency tracking at scale not yet well-solved",
      "Compliance audit trails limited for regulated industry customers",
      "Time tracking and resource planning absent - blocking some enterprise evaluations",
    ],
    decisionMakers: [
      { title: "VP of Engineering", focus: "Engineering team productivity and process", priority: "Developer experience" },
      { title: "Head of Product", focus: "Roadmap and prioritization workflows", priority: "Alignment at scale" },
      { title: "Engineering Manager", focus: "Team velocity and reporting", priority: "Visibility into progress" },
    ],
    strategy: "Position around the enterprise maturity gap. Linear's core experience is exceptional for small to mid-size engineering teams - the opportunity is helping them close the gap with the compliance, reporting, and cross-team coordination features that enterprise buyers expect when migrating from Jira.",
    questions: [
      "What features are enterprise engineering managers asking for that aren't yet in Linear?",
      "How are larger engineering orgs managing cross-team dependencies today in Linear?",
      "What's the biggest friction in migrating a 500+ person engineering org from Jira?",
      "How are customers handling audit and compliance requirements with Linear today?",
    ],
    avoid: [
      "Don't attack Jira directly - Linear's differentiation speaks for itself",
      "Avoid suggesting they add complexity - their simplicity is the product",
      "Don't ignore the mid-market angle - it's their primary growth motion",
    ],
  },
};

// --- Industry-specific templates ---
type IndustryTemplate = {
  signalTemplates: Omit<Signal, "confidence">[];
  painPoints: string[];
  decisionMakers: DecisionMaker[];
  marketContext: string;
};

const INDUSTRY_TEMPLATES: Record<string, IndustryTemplate> = {
  "Artificial Intelligence": {
    signalTemplates: [
      { type: "hiring", title: "AI Engineering Surge", description: "Active recruitment in ML engineering, MLOps, and AI infrastructure signals production scaling." },
      { type: "market", title: "Enterprise AI Adoption Wave", description: "Enterprise AI deployment accelerating, expanding addressable market for AI-adjacent tools." },
      { type: "product", title: "New Model or Feature Release", description: "Rapid model iteration signals competitive pressure and increasing R&D investment." },
      { type: "financial", title: "Recent Funding Round", description: "Recent capital raise signals active investment phase with infrastructure procurement ahead." },
    ],
    painPoints: [
      "Scaling inference infrastructure to meet enterprise SLA commitments without GPU cost explosion",
      "Managing model versioning and reproducibility across complex production pipelines",
      "Enterprise compliance and data residency requirements slowing deployment cycles",
      "Bridging the gap between research prototypes and production-grade AI systems",
    ],
    decisionMakers: [
      { title: "VP of Engineering", focus: "Infrastructure reliability and production AI systems", priority: "Scalability and uptime" },
      { title: "Head of ML Platform", focus: "ML infrastructure and developer tooling", priority: "Model deployment velocity" },
      { title: "CTO", focus: "Technical strategy and enterprise readiness", priority: "Platform differentiation" },
    ],
    marketContext: "AI infrastructure",
  },
  "Developer Infrastructure": {
    signalTemplates: [
      { type: "hiring", title: "Platform Engineering Growth", description: "New platform and DevOps roles indicate infrastructure investment and scaling challenges." },
      { type: "product", title: "New Developer Tooling Launch", description: "Recent tool or API release signals expanding ecosystem and new integration requirements." },
      { type: "market", title: "Developer Tool Consolidation", description: "Industry trend toward platform consolidation creates evaluation windows for new tools." },
      { type: "partnership", title: "Cloud Provider Integration", description: "New cloud provider partnership signals enterprise market expansion and compliance needs." },
    ],
    painPoints: [
      "Observability gaps in distributed systems creating debugging bottlenecks for engineering teams",
      "Cost predictability at scale difficult to model, blocking infrastructure procurement",
      "On-call burden growing faster than team size as system complexity increases",
      "Developer experience inconsistency slowing onboarding for new engineering hires",
    ],
    decisionMakers: [
      { title: "VP of Engineering", focus: "Platform reliability and developer productivity", priority: "Uptime and velocity" },
      { title: "Head of Infrastructure", focus: "Cost efficiency and operational excellence", priority: "Cost control" },
      { title: "Staff Engineer", focus: "Technical architecture and tooling choices", priority: "Developer experience" },
    ],
    marketContext: "developer infrastructure",
  },
  "Fintech": {
    signalTemplates: [
      { type: "hiring", title: "Compliance & Risk Engineering", description: "Risk and compliance engineering hires signal regulatory expansion or audit preparation." },
      { type: "market", title: "Regulatory Landscape Shift", description: "New financial regulations creating urgent compliance tooling needs across the industry." },
      { type: "product", title: "New Financial Product Launch", description: "Product expansion into new financial verticals creates cross-functional infrastructure requirements." },
      { type: "financial", title: "Transaction Volume Growth", description: "Reported volume growth signals infrastructure scaling needs and reliability pressure." },
    ],
    painPoints: [
      "Compliance automation can't keep pace with regulatory changes across multiple jurisdictions",
      "Fraud detection accuracy creating customer friction while missing sophisticated attacks",
      "Financial reconciliation at scale creating operational debt for accounting teams",
      "Data lineage and audit trails difficult to maintain across complex transaction flows",
    ],
    decisionMakers: [
      { title: "Chief Compliance Officer", focus: "Regulatory compliance and audit readiness", priority: "Zero regulatory failures" },
      { title: "VP of Risk", focus: "Fraud prevention and credit risk", priority: "Loss minimization" },
      { title: "VP of Engineering", focus: "Payment infrastructure reliability", priority: "Zero-downtime processing" },
    ],
    marketContext: "financial technology",
  },
  "Healthcare Tech": {
    signalTemplates: [
      { type: "hiring", title: "Healthcare Compliance Hiring", description: "HIPAA and healthcare compliance roles signal enterprise expansion and regulatory pressure." },
      { type: "market", title: "Healthcare AI Adoption", description: "Clinical AI adoption accelerating - infrastructure and compliance investment following." },
      { type: "product", title: "EHR Integration Expansion", description: "New EHR integration signals enterprise health system customer growth and data pipeline needs." },
      { type: "financial", title: "Healthcare Funding Activity", description: "Recent fundraise signals expansion into new clinical markets or regulatory environments." },
    ],
    painPoints: [
      "HIPAA compliance infrastructure difficult to maintain across rapidly growing data volumes",
      "Interoperability with legacy EHR systems creating engineering bottlenecks and costly integrations",
      "Clinical workflow adoption slow - technology must fit into existing clinical team routines",
      "Data de-identification and privacy-preserving analytics blocking research use cases",
    ],
    decisionMakers: [
      { title: "Chief Medical Officer", focus: "Clinical workflow and patient outcomes", priority: "Clinical adoption" },
      { title: "CISO", focus: "HIPAA compliance and data security", priority: "Zero data breaches" },
      { title: "VP of Engineering", focus: "Integration infrastructure and scalability", priority: "EHR compatibility" },
    ],
    marketContext: "healthcare technology",
  },
  "Cybersecurity": {
    signalTemplates: [
      { type: "market", title: "Threat Landscape Escalation", description: "Rising enterprise security incidents creating urgent evaluation cycles for new tools." },
      { type: "hiring", title: "Security Engineering Growth", description: "Security engineering and SOC headcount growth signals investment in detection capabilities." },
      { type: "product", title: "New Security Product Line", description: "Product expansion signals active platform strategy and potential integration opportunities." },
      { type: "financial", title: "Security Budget Expansion", description: "Industry-wide security budget increases creating favorable procurement environment." },
    ],
    painPoints: [
      "Alert fatigue from too many security tools creating SOC analyst burnout and missed threats",
      "Security tool sprawl making unified visibility across the attack surface nearly impossible",
      "Compliance audit preparation consuming disproportionate engineering team time",
      "Insider threat detection and identity security gaps in traditional perimeter-focused tools",
    ],
    decisionMakers: [
      { title: "CISO", focus: "Security posture and risk reduction", priority: "Breach prevention" },
      { title: "Head of Security Engineering", focus: "Detection and response tooling", priority: "SOC efficiency" },
      { title: "VP of IT", focus: "Tool consolidation and cost control", priority: "Vendor simplification" },
    ],
    marketContext: "cybersecurity",
  },
  "SaaS": {
    signalTemplates: [
      { type: "hiring", title: "Go-to-Market Expansion", description: "Sales and customer success hiring signals active revenue growth and scaling GTM infrastructure." },
      { type: "product", title: "New Feature or Product Tier", description: "Product expansion signals active investment in customer retention and upsell motions." },
      { type: "market", title: "Enterprise Tier Growth", description: "Enterprise customer growth creating new requirements for admin, compliance, and support." },
      { type: "financial", title: "ARR Growth Signal", description: "Public ARR milestones or funding signals investment in scaling infrastructure." },
    ],
    painPoints: [
      "Customer success scaling challenges - too many accounts, not enough CSM capacity",
      "Product adoption gaps between activated users and power users creating churn risk",
      "Billing and subscription complexity growing with pricing model evolution",
      "Onboarding friction slowing time-to-value for new enterprise customers",
    ],
    decisionMakers: [
      { title: "VP of Customer Success", focus: "Customer retention and expansion", priority: "NRR improvement" },
      { title: "VP of Product", focus: "Product adoption and feature utilization", priority: "Engagement depth" },
      { title: "VP of Engineering", focus: "Platform reliability and integration ecosystem", priority: "API quality" },
    ],
    marketContext: "SaaS",
  },
  "E-commerce": {
    signalTemplates: [
      { type: "market", title: "Commerce Platform Scaling", description: "Rapid GMV growth creating infrastructure pressure across checkout, logistics, and payments." },
      { type: "hiring", title: "Engineering Scale-Up", description: "Platform and data engineering hiring signal active infrastructure investment." },
      { type: "product", title: "New Commerce Feature Launch", description: "Product expansion into new categories or markets signals infrastructure investment cycle." },
      { type: "financial", title: "Funding or Revenue Milestone", description: "Capital or revenue growth signals active infrastructure procurement phase." },
    ],
    painPoints: [
      "Peak traffic infrastructure unpredictable - Black Friday spikes creating reliability nightmares",
      "Checkout conversion rate optimization requiring A/B testing infrastructure investment",
      "Logistics and fulfillment data fragmentation creating inventory accuracy problems",
      "Customer data platform integration complex across multiple commerce touchpoints",
    ],
    decisionMakers: [
      { title: "VP of Engineering", focus: "Commerce platform reliability and scalability", priority: "Uptime during peak events" },
      { title: "Head of Growth", focus: "Conversion optimization and customer acquisition", priority: "CAC and conversion rate" },
      { title: "VP of Product", focus: "Commerce experience and customer journey", priority: "AOV and repeat purchase" },
    ],
    marketContext: "e-commerce",
  },
  "Data Analytics": {
    signalTemplates: [
      { type: "product", title: "New Analytics Capability", description: "Analytics product expansion signals data infrastructure investment and growing data volumes." },
      { type: "hiring", title: "Data Engineering Growth", description: "Data engineering and analytics engineering roles signal active data stack modernization." },
      { type: "market", title: "Self-Serve Analytics Demand", description: "Business intelligence democratization trend creating new tooling and infrastructure requirements." },
      { type: "financial", title: "Data Stack Investment", description: "Industry reports of data infrastructure budget increases creating favorable procurement timing." },
    ],
    painPoints: [
      "Data quality and trust issues slowing analytics adoption across business teams",
      "Query performance degrading as data volumes grow beyond initial architecture expectations",
      "Data governance and lineage difficult to maintain across complex transformation pipelines",
      "Business user self-serve analytics creating SQL skill gaps and support burden",
    ],
    decisionMakers: [
      { title: "VP of Data", focus: "Data reliability and business analytics enablement", priority: "Data trust" },
      { title: "Head of Analytics Engineering", focus: "Data modeling and transformation quality", priority: "Pipeline reliability" },
      { title: "CTO", focus: "Data infrastructure strategy", priority: "Scalability" },
    ],
    marketContext: "data analytics",
  },
  "Marketing Tech": {
    signalTemplates: [
      { type: "product", title: "AI Marketing Feature Launch", description: "AI content or personalization features signal active data and ML infrastructure investment." },
      { type: "hiring", title: "Marketing Engineering Growth", description: "Growth engineering and marketing ops hires signal technical investment in the marketing stack." },
      { type: "market", title: "Third-Party Cookie Deprecation", description: "Privacy changes forcing active investment in first-party data infrastructure across marketing teams." },
      { type: "financial", title: "Marketing Budget Reallocation", description: "Reported shift from paid acquisition to owned channels signals MarTech investment." },
    ],
    painPoints: [
      "Attribution complexity across channels making ROI measurement unreliable for budget decisions",
      "First-party data strategy immature - cookie deprecation timeline creating urgency",
      "Marketing and product data silos preventing personalization at scale",
      "Campaign performance reporting fragmented across too many disconnected tools",
    ],
    decisionMakers: [
      { title: "CMO", focus: "Brand growth and revenue attribution", priority: "Pipeline contribution" },
      { title: "VP of Marketing Operations", focus: "MarTech stack efficiency and data quality", priority: "Stack consolidation" },
      { title: "Head of Growth Engineering", focus: "Technical marketing infrastructure", priority: "Experimentation velocity" },
    ],
    marketContext: "marketing technology",
  },
  "HR Tech": {
    signalTemplates: [
      { type: "hiring", title: "Talent Acquisition Surge", description: "Heavy hiring signals active headcount growth and potential internal HR tooling investment." },
      { type: "product", title: "People Analytics Expansion", description: "New people analytics features signal HR data infrastructure investment and maturation." },
      { type: "market", title: "Remote Work Tool Demand", description: "Distributed workforce growth creating sustained demand for HR tooling modernization." },
      { type: "financial", title: "HR Budget Expansion", description: "People investment increase signals potential evaluation of HR technology stack." },
    ],
    painPoints: [
      "Compensation benchmarking data fragmented and hard to maintain at competitive hiring pace",
      "Employee engagement signals hard to interpret before attrition risk becomes critical",
      "Onboarding experience inconsistent across teams and geographies",
      "People analytics too complex for HR business partners without dedicated data support",
    ],
    decisionMakers: [
      { title: "Chief People Officer", focus: "Employee experience and retention", priority: "Attrition reduction" },
      { title: "VP of HR Operations", focus: "HR process efficiency and data quality", priority: "Operational scale" },
      { title: "Head of People Analytics", focus: "Workforce insights and reporting", priority: "Predictive retention" },
    ],
    marketContext: "HR technology",
  },
};

// Default template for any unrecognized industry
const DEFAULT_TEMPLATE: IndustryTemplate = {
  signalTemplates: [
    { type: "hiring", title: "Engineering Hiring Surge", description: "Technical role growth signals active infrastructure investment and scaling challenges ahead." },
    { type: "market", title: "Market Expansion Signal", description: "Industry tailwinds and increased enterprise adoption creating favorable timing for outreach." },
    { type: "product", title: "New Product Capability", description: "Recent feature or product announcement signals active development investment and new integration needs." },
    { type: "financial", title: "Growth Stage Funding", description: "Funding activity signals active infrastructure procurement and team scaling phase." },
  ],
  painPoints: [
    "Scaling technical infrastructure to keep pace with business growth demands",
    "Managing operational complexity as the organization and product expand",
    "Maintaining quality and reliability standards under increasing velocity pressure",
    "Integrating new capabilities without disrupting existing production workflows",
  ],
  decisionMakers: [
    { title: "VP of Engineering", focus: "Technical infrastructure and team productivity", priority: "Reliability at scale" },
    { title: "Head of Product", focus: "Product velocity and customer outcomes", priority: "Feature delivery speed" },
    { title: "CTO", focus: "Technical architecture and strategic direction", priority: "Long-term platform health" },
  ],
  marketContext: "technology",
};

function getIndustryTemplate(industry: string): IndustryTemplate {
  // Try direct match
  if (INDUSTRY_TEMPLATES[industry]) return INDUSTRY_TEMPLATES[industry];
  
  // Try partial match
  const key = Object.keys(INDUSTRY_TEMPLATES).find(k => 
    industry.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(industry.toLowerCase())
  );
  
  return key ? INDUSTRY_TEMPLATES[key] : DEFAULT_TEMPLATE;
}

function generateScore(company: string, industry: string): number {
  // Deterministic-ish score based on company name length + industry
  const base = 65;
  const nameBonus = (company.length % 5) * 3;
  const industryBonus = industry.includes("AI") || industry.includes("Artificial") ? 12 :
    industry.includes("Security") || industry.includes("Fintech") ? 8 :
    industry.includes("SaaS") || industry.includes("Dev") ? 6 : 4;
  return Math.min(97, base + nameBonus + industryBonus);
}

function generateSignals(
  company: string,
  template: IndustryTemplate,
  knownSignals?: Signal[]
): Signal[] {
  if (knownSignals && knownSignals.length > 0) {
    return knownSignals;
  }
  const defaultConfidences = [91, 85, 82, 78];
  return template.signalTemplates.slice(0, 4).map((s, i) => ({
    type: s.type || "market",
    title: s.title || "Business Signal",
    description: (s.description || "Signal detected.").replace(/the company/gi, company),
    confidence: defaultConfidences[i] || 80,
  }));
}

export function generateMockReport(
  company: string,
  industry: string,
  product: string,
  goal: string
): AtlasReport {
  const companyKey = company.toLowerCase().replace(/\s+/g, "");
  const known = KNOWN_COMPANIES[companyKey];
  const template = getIndustryTemplate(industry);
  const score = known?.score || generateScore(company, industry);

  const whyNow = known?.whyNow || [
    `Active expansion phase with significant technical hiring across ${template.marketContext}`,
    `Recent product announcements signal infrastructure investment and new capability buildout`,
    `Market timing favorable - ${industry.toLowerCase()} sector showing above-average growth signals`,
    `Budget cycles align with typical Q3/Q4 infrastructure and tooling evaluation windows`,
  ];

  const signals = generateSignals(company, template, known?.signals as Signal[]);
  
  const painPoints = known?.painPoints || template.painPoints.map(p =>
    p.replace("the company", company)
  );

  const decisionMakers: DecisionMaker[] = known?.decisionMakers || template.decisionMakers;

  const strategy = known?.strategy || 
    `Position your ${product} around the specific growth challenges ${company} is navigating in ${template.marketContext}. ` +
    `Their signals indicate active infrastructure investment - lead with how you reduce operational friction and accelerate delivery velocity. ` +
    `Connect your value directly to their expansion timeline and the specific pain points their engineering and product leaders are facing right now.`;

  const questions = known?.questions || [
    `How is your current ${template.marketContext} infrastructure keeping pace with your growth trajectory?`,
    `What's creating the most friction for your engineering team as you scale?`,
    `Where are you seeing the biggest gaps between where you are technically and where you need to be in 12 months?`,
    `What would make your team move faster on infrastructure and tooling decisions right now?`,
  ];

  const avoid = known?.avoid || [
    `Don't lead with pricing before establishing strategic and technical fit`,
    `Avoid generic capability claims - speak directly to the ${template.marketContext} signals you've identified`,
    `Don't focus on features in isolation - tie every capability to a specific business outcome for ${company}`,
  ];

  return {
    id: `${companyKey}-${Date.now()}`,
    company,
    industry,
    product,
    goal,
    generatedAt: new Date().toISOString(),
    score,
    scoreLabel: score >= 85 ? "High Potential" : score >= 70 ? "Strong Opportunity" : score >= 55 ? "Moderate Fit" : "Low Priority",
    overview: known?.overview || 
      `${company} is a growing ${industry.toLowerCase()} company showing strong signals of market expansion and active technical investment. ` +
      `Recent developments suggest an active infrastructure buildout phase and increasing appetite for tools that accelerate their engineering and product velocity.`,
    whyNow,
    signals,
    painPoints,
    decisionMakers,
    strategy,
    questions,
    avoid,
  };
}
