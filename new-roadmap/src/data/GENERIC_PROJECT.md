# Final Project: AI Agentic Application

## Project Overview

Build a **multi-agent AI assistant** that can answer user questions by retrieving information from a knowledge base, using external tools, and collaborating across specialized agents — all deployed on a cloud platform of your choice.

The application must demonstrate mastery of every major topic covered in the AI Developer Path roadmap, from foundational LLM concepts through production-grade agentic architecture.

---

## Phase 1: Architecture Design (Cloud-Agnostic)

Before writing any code, produce a complete system design document. This phase ensures you understand the "why" behind every component.

### 1.1 — Define the Problem & Agent Scope

- Choose a real-world domain for your application (e.g. Code Generator, Knowledge Base Assistant, Performance Review Helper, etc).
- Write a clear problem statement: what does the user need, and why is an agentic approach better than a simple chat completion?
- Identify 2–3 distinct **agent roles** your system will need (e.g. a Planner agent, a Research agent, a Writer agent).

**Roadmap topics covered:** LLM fundamentals, Agents (concept)

### 1.2 — Agent Design Patterns

Select and document the design patterns your system will use. At minimum, incorporate one of the following patterns, but feel free to combine multiple:

| Pattern                        | How It Applies                                                                                                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ReAct (Reason + Act)**       | Each agent uses a think → act → observe loop when calling tools.                                                                                                                |
| **Plan-and-Execute**           | A top-level orchestrator decomposes the user's request into a multi-step plan, then delegates steps to specialized agents.                                                      |
| **Reflection & Self-Critique** | At least one agent reviews its own output for quality/accuracy before returning it.                                                                                             |
| **Human-in-the-Loop**          | Define at least one decision point where the system pauses for user confirmation (e.g. before executing a destructive action or sending a final answer on a high-stakes query). |

Deliverable: An architecture diagram showing agents, their patterns, and communication flow.

### 1.3 — Knowledge & Retrieval Architecture (RAG)

Design your Retrieval-Augmented Generation pipeline:

- **Data sources:** Identify 1–2 document sets your agents will draw from (PDFs, markdown files, web pages, API responses).
- **Embedding strategy:** Choose an embedding model and describe how documents will be chunked and embedded.
- **Vector database:** Select a vector store (e.g. Pinecone, Weaviate, Azure AI Search, Amazon OpenSearch)
- **Retrieval flow:** Diagram the path from user query → embedding → similarity search → context injection → LLM generation.

Deliverable: A RAG architecture diagram with data flow annotations.

### 1.4 — Tool & Integration Design (MCP)

Define the external tools your agents will use:

- List 1–2 tools (e.g. web search, database query, calendar API, code execution, file reader).
- For each tool, specify its input schema, output schema, and when an agent should invoke it.

Deliverable: A tool registry document with MCP-compatible tool definitions.

### 1.5 — Model Configuration Strategy

Document the LLM configuration choices for each agent:

- Which model(s) will you use and why? (e.g. a larger model for the planner, a smaller/faster model for simple tool-calling agents)
- Define **temperature**, **top-p**, and **max tokens** settings per agent role with rationale (e.g. low temperature for factual retrieval, higher for creative writing).
- Specify **context window** budgets: how will you allocate tokens between system prompt, retrieved documents, conversation history, and generation?
- Design your **prompt templates** — system prompt, few-shot examples, and output format instructions for each agent.

Deliverable: A model configuration table and prompt template file.

---

## Phase 2: Build

Implement the system incrementally. Each step builds on the previous one.

### 2.1 — Set Up Cloud Infrastructure & Deploy a Model

- Provision your cloud environment (resource group, IAM roles, networking).
- Deploy at least one LLM through your cloud provider's model hosting service.
- Verify the model is accessible via API — send a basic chat completion request and confirm a response.

**Acceptance criteria:** A working API call that sends a prompt and returns a model response.

**Roadmap topics covered:** Azure AI Foundry or AWS Bedrock, Deploy a Model in the Cloud

### 2.2 — Build Initial Application

- Create an initial service where users can send messages and receive responses from the LLM.
- Implement conversation history management.
- Print tokens used per message and total tokens in the conversation for monitoring.

**Acceptance criteria:** A user can have a multi-turn conversation with the LLM.

### 2.3 — Implement Tools & Structured Outputs

- Define the tools with clear JSON input/output schemas.
- Integrate tools with your LLM using your framework's function-calling or tool-use mechanism (Semantic Kernel Plugins, Bedrock Tools, or similar).
- Ensure the model returns **structured JSON outputs** when invoking tools and that your application parses these reliably.
- Add error handling for malformed tool calls and tool execution failures.

**Acceptance criteria:** The LLM can autonomously decide to call a tool, receive the result, and incorporate it into its response. Tool inputs and outputs are valid JSON.

### 2.4 — Build the RAG Pipeline

- Prepare your document: clean, chunk, and embed documents using your chosen embedding model.
- Load embeddings into your vector database.
- Implement a retrieval function that takes a user query, embeds it, performs similarity search, and returns the top-k relevant chunks.
- Inject retrieved context into the LLM prompt and verify that responses are grounded in the retrieved documents.
- Test with queries that require knowledge not in the model's training data to confirm RAG is working.

**Acceptance criteria:** The assistant answers domain-specific questions accurately by citing information from the knowledge base. Without RAG, it cannot answer these questions.

### 2.5 — Implement MCP Integration

- Set up an MCP server that exposes your tools and data sources through the Model Context Protocol.
- Verify that agents can discover available tools dynamically through MCP and invoke them.
- Demonstrate that a new tool can be added to the MCP server and used by agents without changing agent code.

**Acceptance criteria:** Tools are served via MCP, and agents interact with them through the protocol rather than hardcoded integrations.

### 2.6 — Create the Multi-Agent System

- Implement your 2–3 specialized agents, each with its own system prompt, model configuration, and tool access.
- Build the orchestrator that implements the agent patterns already planned in phase 1.2 (e.g. ReAct, Plan-and-Execute), etc.
- Implement shared context or memory so agents can read each other's outputs when needed.

**Acceptance criteria:** A complex user query triggers the orchestrator, which breaks it into steps, delegates to multiple agents, and assembles a final response.

### 2.7 — Integration Testing & Optimization

- Test the full system end-to-end with at least 5 diverse user scenarios.
- Tune prompts — refine system prompts, few-shot examples, and chain-of-thought instructions based on failure cases.
- Optimize model parameters per agent based on observed behavior (e.g. reduce temperature if an agent hallucinates, increase max tokens if responses are truncated).
- Measure and optimize latency: identify bottlenecks (retrieval time, model inference, tool calls) and address them.

**Acceptance criteria:** The system handles all test scenarios correctly. Prompt and parameter changes are documented with before/after comparisons.
