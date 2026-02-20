# 🤖 AI Developer Roadmap — Final Project: AI-Powered IT Help Desk

**Version:** 4.0 | **Difficulty:** Progressive | **Total Estimated Time:** 4–8 weeks

---

## Overview

This final project is the capstone of the AI Foundation roadmap. You will design and build a **production-grade, multi-agent IT Help Desk system** that handles employee IT support requests through a conversational interface.

The project is structured into **three phases**. Each phase produces a working, demonstrable system — you are not blocked from shipping until everything is complete. Build Phase 1 first. If you have time and want to go deeper, continue to Phase 2 and 3.

---

## System Description

The AI Help Desk is a multi-agent system where employees submit IT issues through a conversational interface. A central **Coordinator Agent** triages requests and delegates to specialist agents. Each specialist can retrieve knowledge from internal documentation (via RAG) and invoke external tools (via MCP). When agent confidence is low, the system escalates to a human.

The system has five layers:

```
Chat Interface  →  API Gateway / Orchestrator  →  Context Layer  →  Documents & Tools
                              ↑
                   Cloud Platform (LLM, Memory, Embeddings, Identity, Monitoring)
```

### Supported Request Categories

The system handles four categories of IT support:

| Agent | Handles |
|---|---|
| **Password Reset** | Credential resets, account lockouts, MFA issues |
| **Dell Hardware Troubleshooting** | Laptop/desktop hardware faults, BIOS issues, driver problems, warranty checks, peripheral failures |
| **Internal Tools Access** | Access requests, onboarding setup, and how-to questions for LucidChart, GitHub, Azure, and other internal platforms |
| **Escalation / General** | Out-of-scope requests, low-confidence routing, anything that needs a human |

---

## Phase 1 — Core Agent System (CLI)
**Estimated time: 1–2 weeks | Difficulty: Intermediate**

Build a working multi-agent system that runs entirely in the **command line**. A Coordinator routes requests to two specialist agents and returns a response. This phase validates the agent architecture and prompt engineering foundation before adding more agents or any UI complexity.

### What You Will Build
- A **CLI interface** where an employee types an IT question and receives an agent response in the terminal
- An **Orchestrator** that classifies intent and routes to the correct agent
- **Two Specialist Agents**: Dell Hardware Troubleshooting and Internal Tools Access
- A **Prompt Template Library** — system prompts and few-shot examples stored as versioned files, not hardcoded in application logic

### Technical Requirements

**CLI Interface**
- Simple read-eval-print loop: prompt the user for input, send to the Orchestrator, print the response
- Display which agent handled the request (e.g., `[Password Reset Agent]`) so routing is visible during development
- Support a `quit` or `exit` command to end the session

**Orchestrator**
- Receives the user's message and classifies intent with a dedicated LLM call
- Intent classifier returns **structured JSON** with an `intent` label and a `confidence` score (0.0–1.0)

```json
{ "intent": "password_reset", "confidence": 0.94 }
```

- Routes to the correct Specialist Agent based on the intent label
- If `confidence < 0.6`, always routes to the Escalation Agent regardless of intent
- Uses a dedicated prompt template for classification with few-shot examples covering both intent categories
- Unrecognized intents return a fallback message directly from the Orchestrator — no Escalation Agent yet

**Dell Hardware Troubleshooting Agent**
- Handles laptop and desktop hardware faults: overheating, display issues, keyboard/trackpad failures, boot failures, BIOS errors, driver conflicts, and peripheral problems
- Has a focused system prompt that guides it through a structured diagnostic flow before suggesting solutions
- Knows when to recommend an in-person hardware inspection and says so clearly — never fabricates a fix for a problem that requires physical intervention

**Internal Tools Access Agent**
- Handles access requests and how-to questions for: **LucidChart**, **GitHub**, **Azure**, and other internal platforms
- For access requests: confirms the user's role and team before describing next steps, since different roles have different access levels
- For how-to questions: walks the user through the relevant process step by step

**Prompt Library**
- All system prompts, few-shot examples, and guardrails stored in `/prompts/` as plain text or YAML files
- Agents load prompts from disk at runtime — changing an agent's behavior requires only editing a file, not changing code

### Sample Interactions to Support

```
> My Dell XPS 15 keeps shutting down randomly under heavy load and the fan is very loud
[Dell Hardware Agent] That sounds like a thermal issue. Let's go through a quick diagnostic.
How long have you had the laptop, and has it always done this or did it start recently?

> I need access to LucidChart
[Internal Tools Agent] Happy to help. LucidChart access levels differ by team — could
you confirm your team and your manager's name so I can describe the right process?

> I can't log into my account
[Orchestrator] I'm not able to help with that yet. Please contact the IT support team
directly for account and password issues.
```

### Deliverables
- A runnable CLI application with instructions in the README
- `/prompts/` directory with all templates committed to version control
- Brief README explaining your routing logic and how you determined the confidence threshold

### You Have Completed Phase 1 When...
- A user can describe a Dell hardware symptom and the agent asks a relevant diagnostic follow-up question
- A user can request access to LucidChart or GitHub and receive the correct process based on their team
- An unrecognized request (e.g., password reset) returns a clear fallback message from the Orchestrator
- You can change an agent's behavior entirely by editing a prompt file without touching code
- The Orchestrator's JSON output is visible in the terminal (debug mode) showing intent and confidence on every turn

---

## Phase 2 — All Four Agents, RAG & Web UI
**Estimated time: 2–3 weeks | Difficulty: Advanced**

Extend Phase 1 by adding the two remaining specialist agents, a RAG pipeline that grounds all agents in real documentation, session memory, and a **web-based chat interface** to replace the CLI. By the end of this phase the system covers the full range of IT support scenarios.

### What You Will Build
- **Two new Specialist Agents**: Password Reset and Escalation / General — completing the full agent roster
- A **web chat UI** that replaces the CLI as the primary interface
- A **RAG pipeline** (embed → store → retrieve → inject) connected to all four agents
- **Session Memory** so agents remember earlier turns in the conversation

### Technical Requirements

**Password Reset Agent**
- Guides the user through identity verification steps before taking any action
- Has explicit guardrails in its system prompt: never skip verification, never confirm a reset without a verified identity
- Uses chain-of-thought prompting to reason through the verification flow step by step

**Escalation / General Agent**
- Handles unrecognized requests and anything below the confidence threshold
- Replaces the Orchestrator's basic fallback message from Phase 1 with a proper empathetic response
- Never fabricates a resolution for something it cannot handle — always confirms a human will follow up

**Updated Orchestrator**
- Expanded intent classifier now covers all four categories: `dell_hardware`, `internal_tools`, `password_reset`, `escalation`
- Few-shot examples updated to include the two new intent types
- Routes to the Escalation Agent when `confidence < 0.6`

**Web Chat Interface**
- A browser-based chat window where the employee types messages and reads agent responses
- Displays which agent handled each response
- Shows a loading/typing indicator while the agent is generating
- Connects to the same Orchestrator backend — the routing logic does not change, only the interface does

**RAG Pipeline**
- Chunk and embed a set of internal IT documents — see the document list below
- Store embeddings in a vector database
- At inference time: embed the user's query → retrieve top-K relevant chunks → inject into the agent's prompt before generation
- Retrieval is scoped per agent: the Dell agent only searches hardware docs, the Internal Tools agent only searches platform docs

**Sample Documents to Create and Index**

| Category | Documents |
|---|---|
| Password Reset | Account recovery SOP, MFA setup guide, lockout policy |
| Dell Hardware | Dell laptop troubleshooting runbook, common BIOS error codes, driver update procedure, warranty claim SOP, peripheral compatibility list |
| Internal Tools | LucidChart access request process, GitHub organization onboarding guide, Azure portal access levels and request form, general tool access SOP, offboarding checklist |
| General | IT support escalation policy, on-call schedule format |

**Session Memory**
- Conversation history is stored and injected into every subsequent agent call within the same session
- Agents can reference earlier turns naturally ("As you mentioned, you're on the Engineering team...")
- Memory is scoped to the session — nothing persists across separate conversations

### Sample Interactions to Support

```
User: I can't log into my account, I think it's locked
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
                  this for the IT team — someone will follow up with you shortly.
```

### Deliverables
- A running web UI connected to the expanded backend
- A `/data/` directory with all sample IT documents committed
- Working RAG retrieval — log which chunks were retrieved for a given query
- Demo covering all four agent types in a single session, including a multi-turn Dell troubleshooting flow and a password reset flow
- Updated README documenting the new agents, RAG pipeline design, and chunking strategy

### You Have Completed Phase 2 When...
- All four agents respond correctly to their respective request types
- Agents reference content from actual documentation rather than solely relying on LLM training knowledge
- A multi-turn Dell troubleshooting conversation maintains context across at least 3 exchanges
- The Internal Tools agent returns different access instructions depending on the tool the user mentions
- You can add a new document to the vector store and agents immediately use it — no redeployment required

---

## Phase 3 — Tool Integration, Observability & Production Hardening
**Estimated time: 2–3 weeks | Difficulty: Expert**

Connect agents to real external systems via MCP, add monitoring and structured logging, add identity and access control, and harden the system with a reflection loop and streaming responses. This phase transforms the prototype into something you could present to an engineering team.

### What You Will Build
- **MCP tool integrations** for Active Directory, ITSM, and platform APIs
- **Monitoring** with structured logs on every agent turn
- **Identity and access control** on the chat interface
- A **Reflection loop** so agents evaluate and revise their own outputs before responding
- **Streaming responses** from agents to the chat UI

### Technical Requirements

**MCP Tool Integrations**

Implement a standardized Model Context Protocol interface that agents use to invoke external systems. Mocking is acceptable for tools that require enterprise credentials — the schema and interface must be real even if the backend is stubbed.

| Tool | Agent | Actions |
|---|---|---|
| Active Directory | Password Reset | Verify user identity, trigger credential reset, check lockout status |
| ITSM (ServiceNow / Jira) | All agents | Create ticket, update status, close ticket, attach conversation transcript |
| Dell Warranty API | Dell Hardware | Look up device warranty status and entitlement by service tag |
| GitHub API | Internal Tools | Check org membership, check team permissions, send access invite |
| Azure Management API | Internal Tools | Check subscription access, look up role assignments |

Each tool must be defined as a **structured tool schema** (name, description, input parameters, return type). Agents invoke tools by name — they never call functions directly.

**Reflection Loop**
- After generating a draft response, each agent runs a second LLM call that critiques the draft: Is the answer complete? Does it follow the guardrails? Is anything missing or potentially wrong?
- If the critique identifies a problem, the agent revises before returning the final response
- Both the draft and final response are logged for evaluation

**Monitoring**

Every agent turn must produce a structured log entry:

```json
{
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
}
```

**Identity**
- Users must authenticate before submitting a request (JWT or session token is sufficient)
- Authenticated user identity (name, team, role) is passed as context to every agent
- The Internal Tools agent uses the user's role to determine which access levels to describe
- No PII is persisted in LLM context beyond the active session

**Streaming**
- Agent responses stream token-by-token to the chat interface
- The UI renders tokens as they arrive rather than waiting for the full response

### Sample Interactions to Support

```
User: I need GitHub access for the mobile-app repo
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
            If this doesn't resolve it, I'll open a warranty service ticket.
```

### Deliverables
- All MCP tool schemas committed as files in `/context/mcp/`
- Monitoring logs showing at least 20 agent turns with complete structured entries
- A live or recorded demo showing: a password reset invoking Active Directory, a GitHub access request creating an ITSM ticket, and the reflection loop catching and correcting a draft response
- A final **Architecture Write-Up**

### You Have Completed Phase 3 When...
- An agent invokes an MCP tool, receives a result, and incorporates it into its response — all within a single user turn
- The reflection loop demonstrably improves at least one response in your demo
- Every agent turn produces a complete structured log entry
- A new engineer could read your Architecture Write-Up and understand every design decision without asking you

---

## Architecture Write-Up (Required for Phase 3)

Your write-up must address:

- **Tech stack choices** — what you used and why
- **RAG vs. fine-tuning** — why RAG was the right choice for this use case
- **Multi-agent vs. monolithic prompt** — the tradeoffs and why you delegated to specialists
- **MCP vs. custom integrations** — why a standardized tool interface matters at scale
- **Confidence-based escalation** — how you determined the threshold and what happens when it triggers
- **Known limitations** — what would need to change before this runs in a real enterprise environment

---

## Recommended Folder Structure

```
/
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
└── README.md
```

---

*Build Phase 1. Ship it. Then decide if you keep going.*
