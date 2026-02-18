import { useState, useEffect } from "react";

interface Section {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets: string[];
  deliverable?: string;
  acceptanceCriteria?: string;
  roadmapTopics?: string;
  table?: { headers: string[]; rows: string[][] };
}

const PHASE_1: Section[] = [
  {
    id: "1.1",
    number: "1.1",
    title: "Define the Problem & Agent Scope",
    description:
      "Before writing any code, clearly define what your system will do and why an agentic approach is the right fit.",
    bullets: [
      "Choose a real-world domain for your application (e.g. Code Generator, Knowledge Base Assistant, Performance Review Helper, etc).",
      "Write a clear problem statement: what does the user need, and why is an agentic approach better than a simple chat completion?",
      "Identify 2–3 distinct agent roles your system will need (e.g. a Planner agent, a Research agent, a Writer agent).",
    ],
    roadmapTopics: "LLM fundamentals, Agents (concept)",
  },
  {
    id: "1.2",
    number: "1.2",
    title: "Agent Design Patterns",
    description:
      "Select and document the design patterns your system will use. At minimum, incorporate one of the following patterns, but feel free to combine multiple:",
    bullets: [],
    table: {
      headers: ["Pattern", "How It Applies"],
      rows: [
        [
          "ReAct (Reason + Act)",
          "Each agent uses a think → act → observe loop when calling tools.",
        ],
        [
          "Plan-and-Execute",
          "A top-level orchestrator decomposes the user's request into a multi-step plan, then delegates steps to specialized agents.",
        ],
        [
          "Reflection & Self-Critique",
          "At least one agent reviews its own output for quality/accuracy before returning it.",
        ],
        [
          "Human-in-the-Loop",
          "Define at least one decision point where the system pauses for user confirmation (e.g. before executing a destructive action).",
        ],
      ],
    },
    deliverable:
      "An architecture diagram showing agents, their patterns, and communication flow.",
  },
  {
    id: "1.3",
    number: "1.3",
    title: "Knowledge & Retrieval Architecture (RAG)",
    description: "Design your Retrieval-Augmented Generation pipeline:",
    bullets: [
      "Data sources: Identify 1–2 document sets your agents will draw from (PDFs, markdown files, web pages, API responses).",
      "Embedding strategy: Choose an embedding model and describe how documents will be chunked and embedded.",
      "Vector database: Select a vector store (e.g. Pinecone, Weaviate, Azure AI Search, Amazon OpenSearch).",
      "Retrieval flow: Diagram the path from user query → embedding → similarity search → context injection → LLM generation.",
    ],
    deliverable: "A RAG architecture diagram with data flow annotations.",
  },
  {
    id: "1.4",
    number: "1.4",
    title: "Tool & Integration Design (MCP)",
    description: "Define the external tools your agents will use:",
    bullets: [
      "List 1–2 tools (e.g. web search, database query, calendar API, code execution, file reader).",
      "For each tool, specify its input schema, output schema, and when an agent should invoke it.",
    ],
    deliverable:
      "A tool registry document with MCP-compatible tool definitions.",
  },
  {
    id: "1.5",
    number: "1.5",
    title: "Model Configuration Strategy",
    description:
      "Document the LLM configuration choices for each agent:",
    bullets: [
      "Which model(s) will you use and why? (e.g. a larger model for the planner, a smaller/faster model for simple tool-calling agents)",
      "Define temperature, top-p, and max tokens settings per agent role with rationale.",
      "Specify context window budgets: how will you allocate tokens between system prompt, retrieved documents, conversation history, and generation?",
      "Design your prompt templates — system prompt, few-shot examples, and output format instructions for each agent.",
    ],
    deliverable: "A model configuration table and prompt template file.",
  },
];

const PHASE_2: Section[] = [
  {
    id: "2.1",
    number: "2.1",
    title: "Set Up Cloud Infrastructure & Deploy a Model",
    description:
      "Provision your cloud environment and get a model running.",
    bullets: [
      "Provision your cloud environment (resource group, IAM roles, networking).",
      "Deploy at least one LLM through your cloud provider's model hosting service.",
      "Verify the model is accessible via API — send a basic chat completion request and confirm a response.",
    ],
    acceptanceCriteria:
      "A working API call that sends a prompt and returns a model response.",
    roadmapTopics:
      "Azure AI Foundry or AWS Bedrock, Deploy a Model in the Cloud",
  },
  {
    id: "2.2",
    number: "2.2",
    title: "Build Initial Application",
    description:
      "Create the foundation of your conversational application.",
    bullets: [
      "Create an initial service where users can send messages and receive responses from the LLM.",
      "Implement conversation history management.",
      "Print tokens used per message and total tokens in the conversation for monitoring.",
    ],
    acceptanceCriteria:
      "A user can have a multi-turn conversation with the LLM.",
  },
  {
    id: "2.3",
    number: "2.3",
    title: "Implement Tools & Structured Outputs",
    description:
      "Give your agents the ability to use external tools.",
    bullets: [
      "Define the tools with clear JSON input/output schemas.",
      "Integrate tools with your LLM using your framework's function-calling or tool-use mechanism.",
      "Ensure the model returns structured JSON outputs when invoking tools and that your application parses these reliably.",
      "Add error handling for malformed tool calls and tool execution failures.",
    ],
    acceptanceCriteria:
      "The LLM can autonomously decide to call a tool, receive the result, and incorporate it into its response. Tool inputs and outputs are valid JSON.",
  },
  {
    id: "2.4",
    number: "2.4",
    title: "Build the RAG Pipeline",
    description:
      "Implement retrieval-augmented generation for domain knowledge.",
    bullets: [
      "Prepare your documents: clean, chunk, and embed documents using your chosen embedding model.",
      "Load embeddings into your vector database.",
      "Implement a retrieval function that takes a user query, embeds it, performs similarity search, and returns the top-k relevant chunks.",
      "Inject retrieved context into the LLM prompt and verify that responses are grounded in the retrieved documents.",
      "Test with queries that require knowledge not in the model's training data to confirm RAG is working.",
    ],
    acceptanceCriteria:
      "The assistant answers domain-specific questions accurately by citing information from the knowledge base. Without RAG, it cannot answer these questions.",
  },
  {
    id: "2.5",
    number: "2.5",
    title: "Implement MCP Integration",
    description:
      "Expose tools through the Model Context Protocol.",
    bullets: [
      "Set up an MCP server that exposes your tools and data sources through the Model Context Protocol.",
      "Verify that agents can discover available tools dynamically through MCP and invoke them.",
      "Demonstrate that a new tool can be added to the MCP server and used by agents without changing agent code.",
    ],
    acceptanceCriteria:
      "Tools are served via MCP, and agents interact with them through the protocol rather than hardcoded integrations.",
  },
  {
    id: "2.6",
    number: "2.6",
    title: "Create the Multi-Agent System",
    description:
      "Build the orchestration layer that ties everything together.",
    bullets: [
      "Implement your 2–3 specialized agents, each with its own system prompt, model configuration, and tool access.",
      "Build the orchestrator that implements the agent patterns already planned in Phase 1.2 (e.g. ReAct, Plan-and-Execute).",
      "Implement shared context or memory so agents can read each other's outputs when needed.",
    ],
    acceptanceCriteria:
      "A complex user query triggers the orchestrator, which breaks it into steps, delegates to multiple agents, and assembles a final response.",
  },
  {
    id: "2.7",
    number: "2.7",
    title: "Integration Testing & Optimization",
    description:
      "Validate and polish the complete system.",
    bullets: [
      "Test the full system end-to-end with at least 5 diverse user scenarios.",
      "Tune prompts — refine system prompts, few-shot examples, and chain-of-thought instructions based on failure cases.",
      "Optimize model parameters per agent based on observed behavior (e.g. reduce temperature if an agent hallucinates).",
      "Measure and optimize latency: identify bottlenecks (retrieval time, model inference, tool calls) and address them.",
    ],
    acceptanceCriteria:
      "The system handles all test scenarios correctly. Prompt and parameter changes are documented with before/after comparisons.",
  },
];

const STORAGE_KEY = "agent-project-progress";

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

export default function AgentProjectGuidelines() {
  const [activePhase, setActivePhase] = useState<1 | 2>(1);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const [progress, setProgress] = useState<Record<string, boolean>>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const sections = activePhase === 1 ? PHASE_1 : PHASE_2;

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

  const p1 = phaseProgress(PHASE_1);
  const p2 = phaseProgress(PHASE_2);
  const overall = { done: p1.done + p2.done, total: p1.total + p2.total };

  return (
    <div className="container">
      <header className="header">
        <p className="header-label">Final Project</p>
        <h1>AI Agentic Application</h1>
        <p>
          Build a multi-agent AI assistant that can answer user questions by
          retrieving information from a knowledge base, using external tools,
          and collaborating across specialized agents.
        </p>
      </header>

      {/* Overall Progress */}
      <div className="pg-progress-overview">
        <div className="pg-progress-bar-track">
          <div
            className="pg-progress-bar-fill"
            style={{
              width: `${overall.total ? (overall.done / overall.total) * 100 : 0}%`,
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
            "--tab-color": activePhase === 1 ? "#4f46e5" : "#059669",
            "--tab-bg": activePhase === 1 ? "#eef2ff" : "#ecfdf5",
            "--tab-border": activePhase === 1 ? "#c7d2fe" : "#a7f3d0",
          } as React.CSSProperties
        }
      >
        <button
          className={`tab ${activePhase === 1 ? "active" : ""}`}
          onClick={() => setActivePhase(1)}
        >
          Phase 1: Architecture Design
          <span className="pg-tab-count">
            {p1.done}/{p1.total}
          </span>
        </button>
        <button
          className={`tab ${activePhase === 2 ? "active" : ""}`}
          onClick={() => setActivePhase(2)}
        >
          Phase 2: Build
          <span className="pg-tab-count">
            {p2.done}/{p2.total}
          </span>
        </button>
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
                    background: isDone
                      ? "#059669"
                      : activePhase === 1
                        ? "#4f46e5"
                        : "#059669",
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

                  {section.deliverable && (
                    <div className="pg-callout pg-callout--deliverable">
                      <span className="pg-callout-icon">&#128196;</span>
                      <div>
                        <span className="pg-callout-label">Deliverable</span>
                        <p>{section.deliverable}</p>
                      </div>
                    </div>
                  )}

                  {section.acceptanceCriteria && (
                    <div className="pg-callout pg-callout--criteria">
                      <span className="pg-callout-icon">&#9989;</span>
                      <div>
                        <span className="pg-callout-label">
                          Acceptance Criteria
                        </span>
                        <p>{section.acceptanceCriteria}</p>
                      </div>
                    </div>
                  )}

                  {section.roadmapTopics && (
                    <div className="pg-topics">
                      {section.roadmapTopics.split(", ").map((t, i) => (
                        <span key={i} className="pg-topic-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
