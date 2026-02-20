import { useState, useEffect } from "react";

interface Section {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  deliverable?: string;
  acceptanceCriteria?: string[];
  table?: { headers: string[]; rows: string[][] };
  codeBlock?: string;
  sampleInteractions?: string;
}

interface PhaseInfo {
  key: number;
  label: string;
  subtitle: string;
  color: string;
  bg: string;
  border: string;
  sections: Section[];
}

/* ── Phase 1 ── */
const PHASE_1: Section[] = [
  {
    id: "1.1",
    number: "1.1",
    title: "CLI Interface",
    description:
      "Build a simple read-eval-print loop that serves as the primary interface for Phase 1.",
    bullets: [
      "Prompt the user for input, send to the Orchestrator, print the response.",
      "Display which agent handled the request (e.g., [Password Reset Agent]) so routing is visible during development.",
      "Support a `quit` or `exit` command to end the session.",
    ],
  },
  {
    id: "1.2",
    number: "1.2",
    title: "Orchestrator — Intent Classification & Routing",
    description:
      "Build the central Orchestrator that receives the user's message and classifies intent with a dedicated LLM call.",
    bullets: [
      "Intent classifier returns structured JSON with an `intent` label and a `confidence` score (0.0–1.0).",
      "Routes to the correct Specialist Agent based on the intent label.",
      "If confidence < 0.6, always routes to the Escalation Agent regardless of intent.",
      "Uses a dedicated prompt template for classification with few-shot examples covering both intent categories.",
      "Unrecognized intents return a fallback message directly from the Orchestrator — no Escalation Agent yet.",
    ],
    codeBlock: '{ "intent": "password_reset", "confidence": 0.94 }',
  },
  {
    id: "1.3",
    number: "1.3",
    title: "Dell Hardware Troubleshooting Agent",
    description:
      "Build the specialist agent that handles laptop and desktop hardware faults.",
    bullets: [
      "Handles: overheating, display issues, keyboard/trackpad failures, boot failures, BIOS errors, driver conflicts, and peripheral problems.",
      "Has a focused system prompt that guides it through a structured diagnostic flow before suggesting solutions.",
      "Knows when to recommend an in-person hardware inspection and says so clearly — never fabricates a fix for a problem that requires physical intervention.",
    ],
  },
  {
    id: "1.4",
    number: "1.4",
    title: "Internal Tools Access Agent",
    description:
      "Build the specialist agent that handles access requests and how-to questions for internal platforms.",
    bullets: [
      "Handles access requests and how-to questions for: LucidChart, GitHub, Azure, and other internal platforms.",
      "For access requests: confirms the user's role and team before describing next steps, since different roles have different access levels.",
      "For how-to questions: walks the user through the relevant process step by step.",
    ],
  },
  {
    id: "1.5",
    number: "1.5",
    title: "Prompt Library",
    description:
      "Create the prompt template system that decouples agent behavior from application code.",
    bullets: [
      "All system prompts, few-shot examples, and guardrails stored in /prompts/ as plain text or YAML files.",
      "Agents load prompts from disk at runtime — changing an agent's behavior requires only editing a file, not changing code.",
    ],
    deliverable:
      "A runnable CLI application with instructions in the README, a /prompts/ directory with all templates committed to version control, and a brief README explaining your routing logic and confidence threshold.",
    acceptanceCriteria: [
      "A user can describe a Dell hardware symptom and the agent asks a relevant diagnostic follow-up question.",
      "A user can request access to LucidChart or GitHub and receive the correct process based on their team.",
      "An unrecognized request (e.g., password reset) returns a clear fallback message from the Orchestrator.",
      "You can change an agent's behavior entirely by editing a prompt file without touching code.",
      "The Orchestrator's JSON output is visible in the terminal (debug mode) showing intent and confidence on every turn.",
    ],
    sampleInteractions: `> My Dell XPS 15 keeps shutting down randomly under heavy load and the fan is very loud
[Dell Hardware Agent] That sounds like a thermal issue. Let's go through a quick diagnostic.
How long have you had the laptop, and has it always done this or did it start recently?

> I need access to LucidChart
[Internal Tools Agent] Happy to help. LucidChart access levels differ by team — could
you confirm your team and your manager's name so I can describe the right process?

> I can't log into my account
[Orchestrator] I'm not able to help with that yet. Please contact the IT support team
directly for account and password issues.`,
  },
];

/* ── Phase 2 ── */
const PHASE_2: Section[] = [
  {
    id: "2.1",
    number: "2.1",
    title: "Password Reset Agent",
    description:
      "Build the specialist agent that handles credential resets, account lockouts, and MFA issues.",
    bullets: [
      "Guides the user through identity verification steps before taking any action.",
      "Has explicit guardrails in its system prompt: never skip verification, never confirm a reset without a verified identity.",
      "Uses chain-of-thought prompting to reason through the verification flow step by step.",
    ],
  },
  {
    id: "2.2",
    number: "2.2",
    title: "Escalation / General Agent",
    description:
      "Build the agent that handles unrecognized requests and anything below the confidence threshold.",
    bullets: [
      "Replaces the Orchestrator's basic fallback message from Phase 1 with a proper empathetic response.",
      "Never fabricates a resolution for something it cannot handle — always confirms a human will follow up.",
    ],
  },
  {
    id: "2.3",
    number: "2.3",
    title: "Updated Orchestrator",
    description:
      "Expand the Orchestrator's intent classifier to cover all four agent categories.",
    bullets: [
      "Expanded intent classifier now covers all four categories: dell_hardware, internal_tools, password_reset, escalation.",
      "Few-shot examples updated to include the two new intent types.",
      "Routes to the Escalation Agent when confidence < 0.6.",
    ],
  },
  {
    id: "2.4",
    number: "2.4",
    title: "Web Chat Interface",
    description:
      "Replace the CLI with a browser-based chat window.",
    bullets: [
      "A browser-based chat window where the employee types messages and reads agent responses.",
      "Displays which agent handled each response.",
      "Shows a loading/typing indicator while the agent is generating.",
      "Connects to the same Orchestrator backend — the routing logic does not change, only the interface does.",
    ],
  },
  {
    id: "2.5",
    number: "2.5",
    title: "RAG Pipeline",
    description:
      "Implement retrieval-augmented generation so agents are grounded in real documentation.",
    bullets: [
      "Chunk and embed a set of internal IT documents (see document list below).",
      "Store embeddings in a vector database.",
      "At inference time: embed the user's query → retrieve top-K relevant chunks → inject into the agent's prompt before generation.",
      "Retrieval is scoped per agent: the Dell agent only searches hardware docs, the Internal Tools agent only searches platform docs.",
    ],
    table: {
      headers: ["Category", "Documents"],
      rows: [
        [
          "Password Reset",
          "Account recovery SOP, MFA setup guide, lockout policy",
        ],
        [
          "Dell Hardware",
          "Dell laptop troubleshooting runbook, common BIOS error codes, driver update procedure, warranty claim SOP, peripheral compatibility list",
        ],
        [
          "Internal Tools",
          "LucidChart access request process, GitHub organization onboarding guide, Azure portal access levels and request form, general tool access SOP, offboarding checklist",
        ],
        [
          "General",
          "IT support escalation policy, on-call schedule format",
        ],
      ],
    },
  },
  {
    id: "2.6",
    number: "2.6",
    title: "Session Memory",
    description:
      "Implement conversation history so agents remember earlier turns within a session.",
    bullets: [
      "Conversation history is stored and injected into every subsequent agent call within the same session.",
      'Agents can reference earlier turns naturally ("As you mentioned, you\'re on the Engineering team...").',
      "Memory is scoped to the session — nothing persists across separate conversations.",
    ],
    deliverable:
      "A running web UI connected to the expanded backend, a /data/ directory with all sample IT documents committed, working RAG retrieval with logged chunk retrieval, and a demo covering all four agent types in a single session.",
    acceptanceCriteria: [
      "All four agents respond correctly to their respective request types.",
      "Agents reference content from actual documentation rather than solely relying on LLM training knowledge.",
      "A multi-turn Dell troubleshooting conversation maintains context across at least 3 exchanges.",
      "The Internal Tools agent returns different access instructions depending on the tool the user mentions.",
      "You can add a new document to the vector store and agents immediately use it — no redeployment required.",
    ],
    sampleInteractions: `User: I can't log into my account, I think it's locked
Password Reset Agent: Let me help you regain access. First, I need to verify your
                      identity before making any changes to your account...

User: My Dell XPS 15 keeps shutting down randomly under heavy load
Dell Agent: That sounds like a thermal issue. Let's narrow it down — have you noticed
            the fan running loudly before it shuts off?
            [retrieves Dell thermal SOP from RAG]

User: I need LucidChart Pro access
Tools Agent: I can help with that. Access levels differ by team — could you confirm
             your team and your manager's name?
             [retrieves LucidChart access SOP from RAG]

User: Can you order me a new monitor?
Escalation Agent: That's outside what I'm able to help with directly. I've flagged
                  this for the IT team — someone will follow up with you shortly.`,
  },
];

/* ── Phase 3 ── */
const PHASE_3: Section[] = [
  {
    id: "3.1",
    number: "3.1",
    title: "MCP Tool Integrations",
    description:
      "Implement a standardized Model Context Protocol interface that agents use to invoke external systems. Mocking is acceptable for tools that require enterprise credentials — the schema and interface must be real even if the backend is stubbed.",
    bullets: [
      "Each tool must be defined as a structured tool schema (name, description, input parameters, return type).",
      "Agents invoke tools by name — they never call functions directly.",
    ],
    table: {
      headers: ["Tool", "Agent", "Actions"],
      rows: [
        [
          "Active Directory",
          "Password Reset",
          "Verify user identity, trigger credential reset, check lockout status",
        ],
        [
          "ITSM (ServiceNow / Jira)",
          "All agents",
          "Create ticket, update status, close ticket, attach conversation transcript",
        ],
        [
          "Dell Warranty API",
          "Dell Hardware",
          "Look up device warranty status and entitlement by service tag",
        ],
        [
          "GitHub API",
          "Internal Tools",
          "Check org membership, check team permissions, send access invite",
        ],
        [
          "Azure Management API",
          "Internal Tools",
          "Check subscription access, look up role assignments",
        ],
      ],
    },
  },
  {
    id: "3.2",
    number: "3.2",
    title: "Reflection Loop",
    description:
      "Add a self-critique step so agents evaluate and revise their own outputs before responding.",
    bullets: [
      "After generating a draft response, each agent runs a second LLM call that critiques the draft: Is the answer complete? Does it follow the guardrails? Is anything missing or potentially wrong?",
      "If the critique identifies a problem, the agent revises before returning the final response.",
      "Both the draft and final response are logged for evaluation.",
    ],
  },
  {
    id: "3.3",
    number: "3.3",
    title: "Monitoring & Structured Logging",
    description:
      "Every agent turn must produce a structured log entry for observability.",
    bullets: [
      "Log: session_id, agent, latency_ms, input_tokens, output_tokens, confidence, escalated, tools_invoked, rag_chunks_retrieved, reflection_revised.",
      "Collect at least 20 agent turns with complete structured entries for your demo.",
    ],
    codeBlock: `{
  "session_id": "abc123",
  "agent": "dell_hardware",
  "latency_ms": 1240,
  "input_tokens": 538,
  "output_tokens": 203,
  "confidence": 0.87,
  "escalated": false,
  "tools_invoked": ["dell_warranty_api.lookup"],
  "rag_chunks_retrieved": 4,
  "reflection_revised": false
}`,
  },
  {
    id: "3.4",
    number: "3.4",
    title: "Identity & Access Control",
    description:
      "Add authentication and user context to the system.",
    bullets: [
      "Users must authenticate before submitting a request (JWT or session token is sufficient).",
      "Authenticated user identity (name, team, role) is passed as context to every agent.",
      "The Internal Tools agent uses the user's role to determine which access levels to describe.",
      "No PII is persisted in LLM context beyond the active session.",
    ],
  },
  {
    id: "3.5",
    number: "3.5",
    title: "Streaming Responses",
    description:
      "Stream agent responses token-by-token to the chat interface.",
    bullets: [
      "Agent responses stream token-by-token to the chat interface.",
      "The UI renders tokens as they arrive rather than waiting for the full response.",
    ],
    deliverable:
      "All MCP tool schemas committed as files in /context/mcp/, monitoring logs showing at least 20 agent turns with complete structured entries, a live or recorded demo, and a final Architecture Write-Up.",
    acceptanceCriteria: [
      "An agent invokes an MCP tool, receives a result, and incorporates it into its response — all within a single user turn.",
      "The reflection loop demonstrably improves at least one response in your demo.",
      "Every agent turn produces a complete structured log entry.",
      "A new engineer could read your Architecture Write-Up and understand every design decision without asking you.",
    ],
    sampleInteractions: `User: I need GitHub access for the mobile-app repo
Tools Agent: [invokes GitHub API → checks org membership]
             I can see you're already a member of the org. The mobile-app repo is restricted
             to the Mobile Engineering team. I'll open a ticket to request team membership
             for you. [invokes ITSM → creates ticket #IT-4821]
             Ticket #IT-4821 has been created. Your manager will receive an approval request.

---

User: My Dell Latitude 5540 won't boot, showing error 0xc0000225
Dell Agent: [invokes Dell Warranty API → confirms device is under warranty]
            [retrieves boot error SOP from RAG]
            Error 0xc0000225 is a Windows Boot Manager failure — your device is still
            under warranty (expires March 2027). Here's how to attempt a repair boot first...
            If this doesn't resolve it, I'll open a warranty service ticket.`,
  },
];

/* ── Phase metadata ── */
const PHASES: PhaseInfo[] = [
  {
    key: 1,
    label: "Phase 1",
    subtitle: "Core Agent System (CLI)",
    color: "#4f46e5",
    bg: "#eef2ff",
    border: "#c7d2fe",
    sections: PHASE_1,
  },
  {
    key: 2,
    label: "Phase 2",
    subtitle: "All Four Agents, RAG & Web UI",
    color: "#059669",
    bg: "#ecfdf5",
    border: "#a7f3d0",
    sections: PHASE_2,
  },
  {
    key: 3,
    label: "Phase 3",
    subtitle: "Tool Integration, Observability & Production Hardening",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
    sections: PHASE_3,
  },
];

const DIFFICULTY: Record<number, string> = {
  1: "Intermediate",
  2: "Advanced",
  3: "Expert",
};

const TIME_EST: Record<number, string> = {
  1: "1-2 weeks",
  2: "2-3 weeks",
  3: "2-3 weeks",
};

/* ── Agent roster table ── */
const AGENT_TABLE = {
  headers: ["Agent", "Handles"],
  rows: [
    [
      "Password Reset",
      "Credential resets, account lockouts, MFA issues",
    ],
    [
      "Dell Hardware Troubleshooting",
      "Laptop/desktop hardware faults, BIOS issues, driver problems, warranty checks, peripheral failures",
    ],
    [
      "Internal Tools Access",
      "Access requests, onboarding setup, and how-to questions for LucidChart, GitHub, Azure, and other internal platforms",
    ],
    [
      "Escalation / General",
      "Out-of-scope requests, low-confidence routing, anything that needs a human",
    ],
  ],
};

/* ── Folder structure ── */
const FOLDER_STRUCTURE = `/
├── cli/                    # Phase 1 CLI interface
├── frontend/               # Phase 2 web chat UI
├── orchestrator/           # Coordinator agent + routing logic
├── agents/
│   ├── password_reset/
│   ├── dell_hardware/
│   ├── internal_tools/
│   └── escalation/
├── context/
│   ├── rag/                # Embedding, chunking, retrieval
│   └── mcp/                # Tool schemas and handlers
├── prompts/                # All prompt templates, versioned
├── data/                   # Sample IT documentation
├── monitoring/             # Logging and confidence scoring
└── README.md`;

/* ── Architecture write-up topics ── */
const WRITEUP_TOPICS = [
  "Tech stack choices — what you used and why",
  "RAG vs. fine-tuning — why RAG was the right choice for this use case",
  "Multi-agent vs. monolithic prompt — the tradeoffs and why you delegated to specialists",
  "MCP vs. custom integrations — why a standardized tool interface matters at scale",
  "Confidence-based escalation — how you determined the threshold and what happens when it triggers",
  "Known limitations — what would need to change before this runs in a real enterprise environment",
];

/* ── Persistence ── */
const STORAGE_KEY = "helpdesk-project-progress";

function loadProgress(): Record<string, boolean> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

/* ── Component ── */
export default function HelpDeskInteractiveProject() {
  const [activePhase, setActivePhase] = useState(1);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const [progress, setProgress] = useState<Record<string, boolean>>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const currentPhase = PHASES.find((p) => p.key === activePhase)!;
  const sections = currentPhase.sections;

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleCheck = (id: string) => {
    setProgress((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    setOpenSections(new Set(sections.map((s) => s.id)));
  };

  const collapseAll = () => {
    setOpenSections(new Set());
  };

  const phaseProgress = (items: Section[]) => {
    const done = items.filter((s) => progress[s.id]).length;
    return { done, total: items.length };
  };

  const allProgress = PHASES.map((p) => phaseProgress(p.sections));
  const overall = allProgress.reduce(
    (acc, p) => ({ done: acc.done + p.done, total: acc.total + p.total }),
    { done: 0, total: 0 }
  );

  return (
    <div className="container">
      <header className="header">
        <p className="header-label">Final Project</p>
        <h1>AI-Powered IT Help Desk</h1>
        <p>
          Design and build a production-grade, multi-agent IT Help Desk system
          that handles employee IT support requests through a conversational
          interface. Build Phase 1 first. If you have time and want to go
          deeper, continue to Phase 2 and 3.
        </p>
      </header>

      {/* System Overview */}
      <div className="pg-callout pg-callout--deliverable">
        <span className="pg-callout-icon">&#128640;</span>
        <div>
          <span className="pg-callout-label">System Architecture</span>
          <pre style={{ margin: "8px 0 0", fontSize: "0.82rem", lineHeight: 1.5, overflowX: "auto" }}>
{`Chat Interface  →  API Gateway / Orchestrator  →  Context Layer  →  Documents & Tools
                              ↑
                   Cloud Platform (LLM, Memory, Embeddings, Identity, Monitoring)`}
          </pre>
        </div>
      </div>

      {/* Agent roster */}
      <div className="pg-table-wrap" style={{ marginBottom: "1.5rem" }}>
        <table className="pg-table">
          <thead>
            <tr>
              {AGENT_TABLE.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AGENT_TABLE.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci}>
                    {ci === 0 ? <strong>{cell}</strong> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Overall Progress */}
      <div className="pg-progress-overview">
        <div className="pg-progress-bar-track">
          <div
            className="pg-progress-bar-fill"
            style={{
              width: `${overall.total ? (overall.done / overall.total) * 100 : 0}%`,
              background: `linear-gradient(90deg, ${PHASES[0].color}, ${PHASES[1].color}, ${PHASES[2].color})`,
            }}
          />
        </div>
        <span className="pg-progress-label">
          {overall.done} / {overall.total} sections completed
        </span>
      </div>

      {/* Phase Tabs */}
      <div
        className="tabs"
        style={
          {
            "--tab-color": currentPhase.color,
            "--tab-bg": currentPhase.bg,
            "--tab-border": currentPhase.border,
          } as React.CSSProperties
        }
      >
        {PHASES.map((phase, i) => {
          const pp = allProgress[i];
          return (
            <button
              key={phase.key}
              className={`tab ${activePhase === phase.key ? "active" : ""}`}
              onClick={() => setActivePhase(phase.key)}
            >
              {phase.label}: {phase.subtitle}
              <span className="pg-tab-count">
                {pp.done}/{pp.total}
              </span>
            </button>
          );
        })}
      </div>

      {/* Difficulty & time */}
      <div style={{ display: "flex", gap: "0.75rem", margin: "0.5rem 0 0.25rem", flexWrap: "wrap" }}>
        <span className="pg-topic-tag" style={{ background: currentPhase.bg, color: currentPhase.color, border: `1px solid ${currentPhase.border}` }}>
          {DIFFICULTY[activePhase]}
        </span>
        <span className="pg-topic-tag" style={{ background: currentPhase.bg, color: currentPhase.color, border: `1px solid ${currentPhase.border}` }}>
          {TIME_EST[activePhase]}
        </span>
      </div>

      {/* Toolbar */}
      <div className="toolbar">
        <button className="toolbar-btn" onClick={expandAll}>
          Expand All
        </button>
        <button className="toolbar-btn" onClick={collapseAll}>
          Collapse All
        </button>
      </div>

      {/* Sections */}
      <div className="accordion-group">
        {sections.map((section) => {
          const isOpen = openSections.has(section.id);
          const isDone = !!progress[section.id];

          return (
            <div
              key={section.id}
              className={`accordion ${isOpen ? "open" : ""} ${isDone ? "pg-done" : ""}`}
            >
              <button
                className="accordion-trigger"
                onClick={() => toggleSection(section.id)}
              >
                <span className="accordion-chevron">&#9654;</span>
                <span
                  className="dot"
                  style={{
                    background: isDone ? "#059669" : currentPhase.color,
                    opacity: isDone ? 1 : 0.3,
                  }}
                />
                <span
                  className="accordion-title"
                  style={{
                    textDecoration: isDone ? "line-through" : "none",
                    opacity: isDone ? 0.6 : 1,
                  }}
                >
                  {section.number} — {section.title}
                </span>
                <label
                  className="pg-check"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => toggleCheck(section.id)}
                  />
                  <span className="pg-checkmark" />
                </label>
              </button>

              <div className="accordion-body">
                <div className="accordion-inner">
                  <p className="pg-section-desc">{section.description}</p>

                  {section.bullets.length > 0 && (
                    <ul className="pg-bullet-list">
                      {section.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {section.codeBlock && (
                    <pre style={{ background: "#1e1e2e", color: "#cdd6f4", padding: "1rem", borderRadius: "8px", fontSize: "0.82rem", overflowX: "auto", margin: "1rem 0" }}>
                      {section.codeBlock}
                    </pre>
                  )}

                  {section.table && (
                    <div className="pg-table-wrap">
                      <table className="pg-table">
                        <thead>
                          <tr>
                            {section.table.headers.map((h, i) => (
                              <th key={i}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => (
                                <td key={ci}>
                                  {ci === 0 ? <strong>{cell}</strong> : cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.sampleInteractions && (
                    <div className="pg-callout pg-callout--deliverable" style={{ marginTop: "1rem" }}>
                      <span className="pg-callout-icon">&#128172;</span>
                      <div style={{ width: "100%" }}>
                        <span className="pg-callout-label">Sample Interactions</span>
                        <pre style={{ margin: "8px 0 0", fontSize: "0.82rem", lineHeight: 1.6, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                          {section.sampleInteractions}
                        </pre>
                      </div>
                    </div>
                  )}

                  {section.deliverable && (
                    <div className="pg-callout pg-callout--deliverable">
                      <span className="pg-callout-icon">&#128196;</span>
                      <div>
                        <span className="pg-callout-label">Deliverables</span>
                        <p>{section.deliverable}</p>
                      </div>
                    </div>
                  )}

                  {section.acceptanceCriteria && (
                    <div className="pg-callout pg-callout--criteria">
                      <span className="pg-callout-icon">&#9989;</span>
                      <div>
                        <span className="pg-callout-label">
                          Completion Criteria
                        </span>
                        <ul style={{ margin: "0.5rem 0 0", paddingLeft: "1.25rem" }}>
                          {section.acceptanceCriteria.map((c, i) => (
                            <li key={i} style={{ marginBottom: "0.35rem" }}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Write-Up (shown on Phase 3) */}
      {activePhase === 3 && (
        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Architecture Write-Up (Required)</h2>
          <p className="pg-section-desc" style={{ marginBottom: "1rem" }}>
            Your final write-up must address each of the following topics:
          </p>
          <ul className="pg-bullet-list">
            {WRITEUP_TOPICS.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Folder Structure (always visible at bottom) */}
      <div style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Recommended Folder Structure</h2>
        <pre style={{ background: "#1e1e2e", color: "#cdd6f4", padding: "1rem", borderRadius: "8px", fontSize: "0.82rem", lineHeight: 1.6, overflowX: "auto" }}>
          {FOLDER_STRUCTURE}
        </pre>
      </div>

      <p style={{ marginTop: "2rem", fontStyle: "italic", opacity: 0.7 }}>
        Build Phase 1. Ship it. Then decide if you keep going.
      </p>
    </div>
  );
}
