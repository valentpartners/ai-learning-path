# AI Learning Path

## Table of Contents

- [AI Foundation](#-ai-foundation)
  - [Basics of AI](#basics-of-ai)
  - [Model Optimization](#model-optimization)
  - [Advanced Optimization](#advanced-optimization)
- [Generative AI](#-generative-ai)
  - [Cloud Platforms](#cloud-platforms)
  - [Build an AI Chat App](#build-an-ai-chat-app)
  - [Tools and Plugins](#tools-and-plugins)
  - [Creating Agents](#creating-agents)
  - [MCP Setup](#mcp-setup)
  - [RAG Implementation](#rag-implementation)
- [Agent Orchestration](#-agent-orchestration)
  - [Frameworks & Libraries](#frameworks--libraries)
  - [Enterprise Orchestration](#enterprise-orchestration)
- [AI Certifications](#-ai-certifications)
  - [AWS AI Certifications](#aws-ai-certifications)
  - [Microsoft Azure AI Certifications](#microsoft-azure-ai-certifications)

---

## 🔵 AI Foundation
This module covers the basics of AI concepts, model optimization techniques, and advanced optimization strategies to prepare you for building effective AI applications.

### Basics of AI


#### LLM

Tags: `LLM`

Large Language Models are neural networks trained on massive text datasets to understand and generate human language. They form the foundation of modern AI assistants, using transformer architectures with billions of parameters.

**Resources:**
- [How LLMs work](https://www.youtube.com/watch?v=LPZh9BOjkQs)

---

#### Context Window

Tags:  `LLM` `Limit`

The maximum number of tokens that an LLM can process in a single input or output. Understanding context window limits is crucial for effective prompt engineering and model usage.

**Resources:**
- [Context Window](https://www.youtube.com/watch?v=-QVoIxEpFkM)

---

#### AI Model Parameters (Temperature, Top-p, etc.)

Tags: `LLM` `Parameters`

Parameters that control the behavior of LLMs, including temperature (controls randomness), top-p (controls diversity), and max tokens (controls output length). Understanding these parameters is essential for fine-tuning model outputs.

**Resources:**
- [What is Temperature?](https://www.youtube.com/watch?v=ezgqHnWvua8)
- [What is Top P?](https://www.youtube.com/watch?v=wQP-im_HInk)
- [What is Top K?](https://www.youtube.com/watch?v=EbZv6-N8Xlk)

---

#### Agents

Tags: `Agentic AI` `Core Concept`

AI systems that can autonomously plan, reason, and take actions to accomplish goals. Agents use LLMs as their reasoning engine and interact with the world through tools like APIs, web browsers, and code execution.

**Resources:**
- [What are AI Agents?](https://www.youtube.com/watch?v=F8NKVhkZZWI)
- [LLM vs Agents](https://www.youtube.com/watch?v=I9z-nrk9cw0)

---

### Model Optimization

#### Model Optimization

Tags: `Optimization` `Prompting`

Techniques for improving LLM performance, including few-shot prompting, chain-of-thought prompting, and system prompts. Effective optimization can significantly enhance model outputs without changing the underlying model.

**Resources:**
- [Optimizing AI Models](https://www.youtube.com/watch?v=zYGDpG-pTho)

---

#### Prompt Engineering

Tags: `Skill` `Practical` `Essential`

The practice of crafting effective instructions to get the best outputs from language models. Techniques include few-shot examples, chain-of-thought prompting, system prompts, and structured output formatting.

**Resources:**
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Claude Prompt Library](https://platform.claude.com/docs/en/resources/prompt-library/library)
- [Prompting Techniques Guide](https://www.promptingguide.ai/)

---

### Advanced Optimization

#### Structured Outputs (JSON Mode)

Tags: `Production` `Reliability` `API`

Techniques for getting LLMs to return data in specific formats like JSON, XML, or typed schemas. Essential for building reliable AI pipelines where downstream systems need to parse model outputs programmatically.

**Resources:**
- [Structured Outputs](https://agenta.ai/blog/the-guide-to-structured-outputs-and-function-calling-with-llms)

---

#### Embeddings

Tags: `Vectors` `Semantic` `Core`

Numerical vector representations of text, images, or other data that capture semantic meaning. Similar concepts end up close together in vector space, enabling similarity search, clustering, and recommendation systems.

**Resources:**
- [What are embeddings?](https://www.youtube.com/watch?v=wgfSDrqYMJ4)

---

#### Vector Databases

Tags: `Database` `Infrastructure`

Specialized databases optimized for storing and querying high-dimensional vectors. Enable fast similarity search at scale, forming the backbone of RAG systems, semantic search, and recommendation engines.

**Resources:**
- [Vector Databases Explained](https://www.youtube.com/watch?v=gl1r1XV0SLw)

---

#### RAG

Tags: `Architecture` `Retrieval` `Key Pattern`

Retrieval-Augmented Generation combines LLMs with external knowledge retrieval. Instead of relying solely on training data, RAG fetches relevant documents at query time and includes them in the prompt for more accurate, up-to-date responses.

**Resources:**
- [What is RAG (Retrieval-Augmented Generation)?](https://www.youtube.com/watch?v=T-D1OfcDW1M)

---

#### MCP

Tags: `Protocol` `Standard` `Integration`

The Model Context Protocol is an open standard for connecting AI models to external data sources and tools. Think of it as a universal adapter — one protocol that lets any AI model talk to any data source or service.

**Resources:**
- [MCP (Model Context Protocol) Explained](https://www.youtube.com/watch?v=7j1t3UZA1TY&t)

---

#### Orchestrating Agents

Tags: `Agentic AI` `Collaboration` `Advanced`

Techniques for coordinating multiple AI agents to work together on complex tasks. This includes communication protocols, task decomposition, and shared memory systems to enable collaborative problem-solving.

**Resources:**
- [Orchestrating Multiple AI Agents](https://www.anthropic.com/engineering/building-effective-agents)

---

## 🟢 AI Building Blocks
This module covers cloud platforms for AI development, building AI chat applications, using tools and plugins, creating agents, setting up MCP, and implementing RAG.

### Deploy a Model in the Cloud

#### Azure AI Foundry

Tags: `Cloud` `Microsoft` `Enterprise`

Microsoft's unified platform for building AI applications on Azure. Provides access to OpenAI models, open-source models, evaluation tools, prompt flow, and enterprise-grade deployment.

**Resources:**
- [Azure AI Foundry](https://azure.microsoft.com/en-us/products/ai-services)
- [Azure AI Docs](https://learn.microsoft.com/en-us/azure/ai-studio/)
- [Deploy Models in Azure Foundry](https://www.youtube.com/watch?v=ewHPdDtmHj4&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=21)

---

#### AWS Bedrock

Tags: `Cloud` `AWS` `Multi-model`

Amazon's fully managed service for building with foundation models. Access Anthropic Claude, Meta Llama, Mistral, and other models through a unified API with fine-tuning, guardrails, and knowledge bases.

**Resources:**
- [AWS Bedrock](https://aws.amazon.com/bedrock/)
- [Bedrock Documentation](https://docs.aws.amazon.com/bedrock/)
- [Deploy a Model in Bedrock](https://www.youtube.com/watch?v=nSQrY-uPWLY)
- [Import custom model to Bedrock](https://www.youtube.com/watch?v=1aq_ju70qHQ)

---

### Build an AI Chat App

#### Building an AI Chat App with AWS Bedrock

Tags: `Tutorial` `AWS Bedrock` `Chat App`

Learn how to build a simple AI chat application using Amazon Bedrock.

**Resources:**
- [Tutorial: Build an AI Chat App with Amazon Bedrock](https://www.youtube.com/watch?v=E1-mUfpeRu0)
- [Repository](https://github.com/trevorspires/Bedrock-Chatbot-Youtube/blob/main/main.py)

---

#### Building an AI Chat App with Azure Foundry

Tags: `Tutorial` `Azure Foundry` `Chat App`

Learn how to build a simple AI chat application using Azure Foundry.

**Resources:**
- [Simple Chat App](https://www.youtube.com/watch?v=lPsMx8yaO_I&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=19)
- [Simple Chat App - Settings, History and Streaming](https://www.youtube.com/watch?v=RKY8DWGOWTI&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=18)

---

### Tools and Plugins

#### Semantic Kernel Plugins

Tags: `Semantic Kernel` `Plugins`

Learn how to build and use plugins in Semantic Kernel.

**Resources:**
- [Semantic Kernel Plugins](https://www.youtube.com/watch?v=Xq1MeGssPWA&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=10)
- [Semantic Kernel Multiple Plugins](https://www.youtube.com/watch?v=ety3aQ32b8U&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=9)

---

#### AWS Bedrock Tools

Tags: `AWS Bedrock` `Tools`

Learn how to use tools in AWS Bedrock.

**Resources:**
- [Agents Tools & Function Calling with Amazon Bedrock (How-to)](https://www.youtube.com/watch?v=2L_XE6g3atI)

---

### Creating Agents

#### Create Agents with Azure Foundry

Tags: `Azure Foundry` `Agents` `Semantic Kernel`

Learn how to create AI agents using Azure Foundry.

**Resources:**
- [Single Agent Creation with Azure Foundry and Semantic Kernel](https://www.youtube.com/watch?v=EtvW3sr_vqA&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=5)
- [Multiple Agent Creation with Azure Foundry and Semantic Kernel](https://www.youtube.com/watch?v=0hXFDPx9bug&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=3)

---

#### Create Agents with AWS Bedrock

Tags: `AWS Bedrock` `Agents` `Agent Core`

Learn how to create AI agents using AWS Bedrock.

**Resources:**
- [Tutorial: Deploy any AI agent with AgentCore](https://www.youtube.com/watch?v=N7FGbBq1mI4)

---

### MCP Setup

#### MCP Overview

Learn how to build modular AI applications using MCP to connect Claude with external tools and data sources. Deep dive into MCP's advanced features including sampling, notifications, and transport implementations.

**Resources:**
- [Intro to MCP](https://anthropic.skilljar.com/introduction-to-model-context-protocol)
- [Advanced MCP](https://anthropic.skilljar.com/model-context-protocol-advanced-topics)

---

#### MCP Implementation with Semantic Kernel

Learn how to implement MCP with Semantic Kernel.

**Resources:**
- [Semantic Kernel Fundamentals - MCP StdioTransport](https://www.youtube.com/watch?v=NE9Y-6jizO0&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=2)
- [Semantic Kernel Fundamentals - MCP StreamableHttp](https://www.youtube.com/watch?v=1tTUOU9Gnd8&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=1)

---

#### MCP Implementation with AWS Bedrock

Learn how to implement MCP with AWS Bedrock.

**Resources:**
- [MCP with AWS Bedrock - part 1](https://www.youtube.com/watch?v=6OgFTW6bfSk)
- [How to build an MCP Server - part 2](https://www.youtube.com/watch?v=RO6gBtPi25w)

---

### RAG Implementation

#### What is RAG?

RAG (Retrieval-Augmented Generation) is a technique that combines information retrieval with generative AI models. It allows LLMs to access external knowledge sources during generation, improving accuracy and relevance of responses.

**Resources:**
- [RAG Overview](https://aws.amazon.com/what-is/retrieval-augmented-generation/)

---

#### Implementing RAG in AWS

Tags: `RAG` `AWS Bedrock` `Agent Core` `Knowledge Base`

Learn how to implement RAG in Amazon Bedrock.

**Resources:**
- [Build a RAG based Generative AI Chatbot in 20 mins using Amazon Bedrock Knowledge Base](https://www.youtube.com/watch?v=hnyDDfo8e9Q)

---

#### Implementing RAG in Azure

Tags: `RAG` `Azure AI Foundry` `Semantic Kernel` `Vector Store` `AI Search`

Learn how to implement a Vector Store and a Search RAG in Azure AI Foundry.

**Resources:**
- [Semantic Kernel Fundamentals - AI Search Vector Store](https://www.youtube.com/watch?v=txoGIPYBZoU&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=7)
- [Semantic Kernel Fundamentals - AI Search RAG](https://www.youtube.com/watch?v=9_eHPPEQSTM&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=5)

---

#### Learn RAG From Scratch with LangChain

Tags: `RAG` `LangChain` `Python`

Learn how to implement RAG from scratch using the LangChain framework.

**Resources:**
- [Learn RAG From Scratch – Python AI Tutorial from a LangChain Engineer](https://www.youtube.com/watch?v=sVcwVQRHIc8&)

---

## 🔴 Agent Orchestration
This module covers the leading agentic AI frameworks, as well as enterprise orchestration platforms from AWS and Azure.

### Frameworks & Libraries

#### Semantic Kernel

Tags: `Framework` `Microsoft` `C#` `Python`

Microsoft's open-source SDK for integrating LLMs into applications. Supports C#, Python, and Java with a plugin architecture, planners, and memory connectors for enterprise AI development.

**Resources:**
- [Semantic Kernel Docs](https://learn.microsoft.com/en-us/semantic-kernel/)
- [GitHub Repository](https://github.com/microsoft/semantic-kernel)
- [Semantic Kernel Tutorial](https://www.youtube.com/watch?v=ewHPdDtmHj4&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=20)

---

#### AutoGen

Tags: `Framework` `Multi-Agent` `Microsoft`

Microsoft's framework for building multi-agent conversational systems. Agents can collaborate, debate, and work together on complex tasks with human-in-the-loop capabilities.

**Resources:**
- [AutoGen Docs](https://microsoft.github.io/autogen/)
- [GitHub Repository](https://github.com/microsoft/autogen)
- [AutoGen Tutorial](https://www.youtube.com/watch?v=ewHPdDtmHj4&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=20)

---

#### Microsoft Agent Framework

Tags: `Framework` `Enterprise` `Azure`

Microsoft's broader agentic AI framework for building autonomous agents that can plan, reason, and take actions. Integrates with Azure AI services and enterprise tooling. Agent Framework combines AutoGen's simple agent abstractions with Semantic Kernel's enterprise features — session-based state management, type safety, middleware, telemetry — and adds graph-based workflows for explicit multi-agent orchestration.

**Resources:**
- [Microsoft Agent Framework Docs](https://learn.microsoft.com/en-us/agent-framework/overview/?pivots=programming-language-csharp)
- [GitHub Repository](https://github.com/microsoft/agent-framework)
- [Microsoft Agent Framework tutorial](https://www.youtube.com/watch?v=EAeUiipzCTE)

---

#### AI-SDK (JavaScript/Vercel)

Tags: `Framework` `TypeScript` `React`

Vercel's TypeScript toolkit for building AI applications with React. Provides hooks and streaming utilities for chat interfaces, generative UI, and tool calling with any LLM provider.

**Resources:**
- [AI SDK Docs](https://ai-sdk.dev/getting-started)
- [GitHub Repository](https://github.com/vercel/ai)
- [AI SDK Cookbook](https://ai-sdk.dev/cookbook)
- [AI SDK Guides](https://ai-sdk.dev/cookbook/guides)
- [AI SDK Tutorial](https://www.youtube.com/watch?v=mojZpktAiYQ)

---

#### LangChain

Tags: `Framework` `Python` `JavaScript`

The most popular framework for building applications powered by language models. Provides composable components for chains, agents, retrieval, memory, and tool use across Python and JavaScript.

**Resources:**
- [LangChain Python Docs](https://python.langchain.com/)
- [LangChain JS Docs](https://js.langchain.com/)
- [LangChain Python Tutorial](https://www.youtube.com/watch?v=lG7Uxts9SXs)
- [LangChain JS Tutorial](https://www.youtube.com/watch?v=HSZ_uaif57o)

---

### Enterprise Orchestration

#### Amazon Agent Core

Tags: `Framework` `AWS` `Agentic AI`

Amazon Bedrock AgentCore is an agentic platform for building, deploying, and operating highly effective agents securely at scale using any framework and foundation model.

**Resources:**
- [Agent Core Docs](https://docs.aws.amazon.com/bedrock-agentcore/)
- [Agent Core - Getting Started Toolkit](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-get-started-toolkit.html)
- [Agent Core - Samples](https://github.com/awslabs/amazon-bedrock-agentcore-samples/?tab=readme-ov-file)
- [Agent Core Deep Dive](https://www.youtube.com/watch?v=Op6L62rS5WU&list=PLrDJzKfz9AUuq0Rt-I0HyWgCNOYME1f6Y)

---

#### Azure Foundry Agent Service

Tags: `Framework` `Azure` `Agentic AI`

Agent Service provides a production-ready foundation for deploying intelligent agents in enterprise environments.

**Resources:**
- [Agent Service Docs](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview?view=foundry&preserve-view=true)
- [FAQ](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/faq?view=foundry)
- [Deploy your first agent](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/quickstarts/quickstart-hosted-agent?view=foundry)
- [Observability and monitoring](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/metrics?view=foundry)
- [Develop AI Agents on Azure](https://www.youtube.com/watch?v=EoghOd0hU6E&list=PLahhVEj9XNTd9_qEnUZSUfxWSSpRwqXjk&index=1)

---

## 🟣 AI Certifications
This module covers the key certifications offered by AWS and Microsoft Azure for AI practitioners and engineers, along with recommended learning paths and resources to prepare for these exams.

### AWS AI Certifications

#### AWS Track - Beginner

Tags: `AWS Bedrock` `Agentcore`

Build and deploy simple AI solutions. Learn core AI concepts, responsible AI principles. Customizing Agentic Solutions and Implementing Agentic AI Frameworks.

**Resources:**
- [Course: Fundamentals of Generative AI](https://skillbuilder.aws/learn/FKXM21R555/fundamentals-of-generative-ai/ZFX96NREH4)
- [AWS AI Practitioner Learning Plan](https://skillbuilder.aws/learning-plan/G8ENMJ5QBE/aws-artificial-intelligence-practitioner-learning-plan/SU2A1EJM1A)
- [Tutorial: Bedrock Running in Lambda](https://www.youtube.com/watch?v=7PK4zdUgAt0)
- [Amazon Bedrock Agent Core Getting Started](https://skillbuilder.aws/learn/SXMNDA9AJ1/amazon-bedrock-agentcore-getting-started/6SGJD8ZV9A)
- [Documentation: Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)

---

#### AWS Track - Intermediate

Tags: `Amazon Bedrock` `Amazon SageMaker` `Amazon Simple Storage Service` `LangChain` `AWS Identity and Access Management` `AWS Lambda`

Design enterprise-grade AI solutions. Learn about multi-turn conversations, streaming responses, and structured data extraction. Automated development workflows and parallelized task execution. RAG systems with text chunking, embeddings, and hybrid search. Fine-tuning. Embeddings with vector database.

**Resources:**
- [Course: Agentic AI Foundations](https://skillbuilder.aws/learning-plan/HDZPWG63J3/agentic-ai-foundations/R4E9CC77T7)
- [Getting Started with Claude in Amazon Bedrock](https://anthropic.skilljar.com/claude-in-amazon-bedrock)
- [Building Generative AI Applications Using Amazon Bedrock](https://skillbuilder.aws/learn/TM4ZAXTGEZ/building-generative-ai-applications-using-amazon-bedrock/WM6Z6ZHU7K)
- [Generative AI Learning Plan for Developers](https://skillbuilder.aws/learning-plan/5C9XQBTXBB/generative-ai-learning-plan-for-developers-includes-labs/EGATKJP13J)
- [Digital Classroom - Developing Generative AI Applications](https://skillbuilder.aws/learn/7UWY7BAE4X/digital-classroom--developing-generative-ai-applications-on-aws/4FBWZ9EK8X)

---

#### AWS Track - Expert

Tags: `Amazon Bedrock` `AWS Lambda` `AWS Step Functions` `SageMaker Model Cards` `AWS Glue Data Catalog`

Architect complex AI systems. Learn about foundation model integration, multimodal data handling, responsible AI & governance, cost optimization & performance efficiency, AI evaluation & testing, and hallucination detection.

**Resources:**
- [AWS Generative AI Developer Advanced Learning Plan](https://skillbuilder.aws/learning-plan/BGTH16YCTU/aws-generative-ai-developer-advanced-learning-plan-includes-labs/ZDN46CX881)

---

### Microsoft Azure AI Certifications

#### Azure Track - Beginner

Tags: `Azure Foundry` `Azure Vision service` `Azure Language text analysis features`

Learn core AI concepts and Azure Services. Learn about LLMs, prompts, and AI agents. Natural language processing (NLP). Text analysis. Speech recognition and synthesis. Computer vision concepts.

**Resources:**
- [AI Concepts Overview](https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/)
- [Get Started with Microsoft Foundry](https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/)
- [Introduction to Generative AI and Agents](https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/)
- [Get Started with Generative AI in Microsoft Foundry](https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/)
- [Text Analysis Concepts](https://learn.microsoft.com/en-us/training/modules/introduction-language/)
- [Get Started with Text Analysis in Microsoft Foundry](https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/)
- [Introduction to AI Speech Concepts](https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/)
- [Introduction to Computer Vision Concepts](https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/)
- [Get Started with Computer Vision in Microsoft Foundry](https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/)
- [AI-Powered Information Extraction Concepts](https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/)
- [Get Started with AI-Powered Information Extraction](https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/)
- [🏆 Certification: Azure AI Fundamentals (AI-900)](https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/)

---

#### Azure Track - Intermediate

Tags: `Azure Foundry` `Semantic Kernel` `Azure AI Services` `C#` `Python` `REST-based APIs` `Azure SDKs`

Design enterprise-grade AI solutions. Learn about developing generative AI applications, implementing computer vision solutions, implementing information extraction solutions, using REST APIs and SDKs, and language analysis in AI systems.

**Resources:**
- [Develop Generative AI Apps in Azure](https://learn.microsoft.com/en-us/training/paths/create-custom-copilots-ai-studio/)
- [Develop AI Agents on Azure](https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-on-azure/)
- [Develop Natural Language Solutions in Azure](https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure-ai/)
- [Develop Computer Vision Solutions in Azure](https://learn.microsoft.com/en-us/training/paths/create-computer-vision-solutions-azure-ai/)
- [Develop AI Information Extraction Solutions](https://learn.microsoft.com/en-us/training/paths/ai-extract-information/)
- [Create an AI Agent (Applied Skills)](https://learn.microsoft.com/en-us/credentials/applied-skills/create-an-ai-agent/)
- [Build a Generative AI Chat App (Applied Skills)](https://learn.microsoft.com/en-us/credentials/applied-skills/build-a-generative-ai-chat-app/)
- [Develop Generative AI Apps with Semantic Kernel](https://learn.microsoft.com/en-us/credentials/applied-skills/develop-ai-agents-using-microsoft-azure-openai-and-semantic-kernel/)
- [Implement Knowledge Mining with AI Search](https://learn.microsoft.com/en-us/credentials/applied-skills/implement-knowledge-mining-with-azure-ai-search/)
- [Build a Natural Language Processing Solution](https://learn.microsoft.com/en-us/credentials/applied-skills/build-natural-language-solution-azure-ai/)
- [🏆 Certification: Azure AI Engineer Associate](https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/)
