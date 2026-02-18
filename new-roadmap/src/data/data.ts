import type { DataNode } from "../types";

export const DEV_PATH: DataNode[] = [
  {
    name: "AI Developer Path",
    children: [
      {
        name: "AI Foundation",
        icon: "1",
        color: "#2563EB",
        description:
          "This module covers the basics of AI concepts, model optimization techniques, and advanced optimization strategies to prepare you for building effective AI applications.",
        children: [
          {
            name: "Basics of AI",
            children: [
              {
                name: "LLM",
                description:
                  "Large Language Models are neural networks trained on massive text datasets to understand and generate human language. They form the foundation of modern AI assistants, using transformer architectures with billions of parameters.",
                tags: ["LLM"],
                sources: [
                  {
                    label: "How LLMs work",
                    url: "https://www.youtube.com/watch?v=LPZh9BOjkQs",
                  },
                ],
              },
              {
                name: "Context Window",
                description:
                  "The maximum number of tokens that an LLM can process in a single input or output. Understanding context window limits is crucial for effective prompt engineering and model usage.",
                tags: ["LLM", "Limit"],
                sources: [
                  {
                    label: "Context Window",
                    url: "https://www.youtube.com/watch?v=-QVoIxEpFkM",
                  },
                ],
              },
              {
                name: "AI Model Parameters (Temperature, Top-p, etc.)",
                description:
                  "Parameters that control the behavior of LLMs, including temperature (controls randomness), top-p (controls diversity), and max tokens (controls output length). Understanding these parameters is essential for fine-tuning model outputs.",
                tags: ["LLM", "Parameters"],
                sources: [
                  {
                    label: "What is Temperature?",
                    url: "https://www.youtube.com/watch?v=ezgqHnWvua8",
                  },
                  {
                    label: "What is Top P?",
                    url: "https://www.youtube.com/watch?v=wQP-im_HInk",
                  },
                  {
                    label: "What is Top K?",
                    url: "https://www.youtube.com/watch?v=EbZv6-N8Xlk",
                  },
                ],
              },
              {
                name: "Agents",
                description:
                  "AI systems that can autonomously plan, reason, and take actions to accomplish goals. Agents use LLMs as their reasoning engine and interact with the world through tools like APIs, web browsers, and code execution.",
                tags: ["Agentic AI", "Core Concept"],
                sources: [
                  {
                    label: "What are AI Agents?",
                    url: "https://www.youtube.com/watch?v=F8NKVhkZZWI",
                  },
                  {
                    label: "LLM vs Agents",
                    url: "https://www.youtube.com/watch?v=I9z-nrk9cw0",
                  },
                ],
              },
            ],
          },
          {
            name: "Model Optimization",
            children: [
              {
                name: "Model Optimization",
                description:
                  "Techniques for improving LLM performance, including few-shot prompting, chain-of-thought prompting, and system prompts. Effective optimization can significantly enhance model outputs without changing the underlying model.",
                tags: ["Optimization", "Prompting"],
                sources: [
                  {
                    label: "Optimizing AI Models",
                    url: "https://www.youtube.com/watch?v=zYGDpG-pTho",
                  },
                ],
              },
              {
                name: "Prompt Engineering",
                description:
                  "The practice of crafting effective instructions to get the best outputs from language models. Techniques include few-shot examples, chain-of-thought prompting, system prompts, and structured output formatting.",
                tags: ["Skill", "Practical", "Essential"],
                sources: [
                  {
                    label: "Anthropic Prompt Engineering Guide",
                    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
                  },
                  {
                    label: "Claude Prompt Library",
                    url: "https://platform.claude.com/docs/en/resources/prompt-library/library",
                  },
                  {
                    label: "Prompting Techniques Guide",
                    url: "https://www.promptingguide.ai/",
                  },
                ],
              },
            ],
          },
          {
            name: "Agent Design Patterns",
            children: [
              {
                name: "Orchestrating Agents",
                description:
                  "Techniques for coordinating multiple AI agents to work together on complex tasks. This includes communication protocols, task decomposition, and shared memory systems to enable collaborative problem-solving.",
                tags: ["Agentic AI", "Collaboration", "Advanced"],
                sources: [
                  {
                    label: "Orchestrating Multiple AI Agents",
                    url: "https://www.anthropic.com/engineering/building-effective-agents",
                  },
                ],
              },
              {
                name: "ReAct (Reason + Act)",
                description:
                  "A pattern where the agent alternates between reasoning (thinking about what to do) and acting (executing tools or actions). The model generates a thought, takes an action, observes the result, and repeats until the task is complete.",
                tags: ["Pattern", "Reasoning", "Foundational"],
                sources: [
                  {
                    label: "Prompting Guide — ReAct",
                    url: "https://www.promptingguide.ai/techniques/react",
                  },
                ],
              },
              {
                name: "Plan-and-Execute",
                description:
                  "A two-phase pattern where one LLM call creates a high-level plan of steps, and subsequent calls execute each step. Separating planning from execution improves reliability on complex, multi-step tasks.",
                tags: ["Pattern", "Planning", "Multi-step"],
                sources: [
                  {
                    label: "LangChain — Planning Agents",
                    url: "https://blog.langchain.dev/planning-agents/",
                  },
                ],
              },
              {
                name: "Reflection & Self-Critique",
                description:
                  "Agents evaluate and critique their own outputs before finalizing them. An inner loop reviews the response for errors, completeness, and quality, then revises as needed. Dramatically improves output quality.",
                tags: ["Pattern", "Quality", "Self-improvement"],
                sources: [
                  {
                    label: "Reflexion",
                    url: "https://www.promptingguide.ai/techniques/reflexion",
                  },
                ],
              },
              {
                name: "Human-in-the-Loop",
                description:
                  "Designing agent systems that can request human approval, feedback, or input at critical decision points. Balances autonomy with oversight, especially important for high-stakes actions or when agent confidence is low.",
                tags: ["Pattern", "Safety", "Oversight"],
                sources: [
                  {
                    label: "Human-in-the-Loop",
                    url: "https://zapier.com/blog/human-in-the-loop/",
                  },
                ],
              },
            ],
          },
          {
            name: "Advanced Optimization",
            children: [
              {
                name: "Structured Outputs (JSON Mode)",
                description:
                  "Techniques for getting LLMs to return data in specific formats like JSON, XML, or typed schemas. Essential for building reliable AI pipelines where downstream systems need to parse model outputs programmatically.",
                tags: ["Production", "Reliability", "API"],
                sources: [
                  {
                    label: "Structured Outputs",
                    url: "https://agenta.ai/blog/the-guide-to-structured-outputs-and-function-calling-with-llms",
                  },
                ],
              },
              {
                name: "Embeddings",
                description:
                  "Numerical vector representations of text, images, or other data that capture semantic meaning. Similar concepts end up close together in vector space, enabling similarity search, clustering, and recommendation systems.",
                tags: ["Vectors", "Semantic", "Core"],
                sources: [
                  {
                    name: "What are embeddings?",
                    url: "https://www.youtube.com/watch?v=wgfSDrqYMJ4",
                  },
                ],
              },
              {
                name: "Vector Databases",
                description:
                  "Specialized databases optimized for storing and querying high-dimensional vectors. Enable fast similarity search at scale, forming the backbone of RAG systems, semantic search, and recommendation engines.",
                tags: ["Database", "Infrastructure"],
                sources: [
                  {
                    name: "Vector Databases Explained",
                    url: "https://www.youtube.com/watch?v=gl1r1XV0SLw",
                  },
                ],
              },
              {
                name: "RAG",
                description:
                  "Retrieval-Augmented Generation combines LLMs with external knowledge retrieval. Instead of relying solely on training data, RAG fetches relevant documents at query time and includes them in the prompt for more accurate, up-to-date responses.",
                tags: ["Architecture", "Retrieval", "Key Pattern"],
                sources: [
                  {
                    label: "What is RAG (Retrieval-Augmented Generation)?",
                    url: "https://www.youtube.com/watch?v=T-D1OfcDW1M",
                  },
                ],
              },
              {
                name: "MCP",
                description:
                  "The Model Context Protocol is an open standard for connecting AI models to external data sources and tools. Think of it as a universal adapter — one protocol that lets any AI model talk to any data source or service.",
                tags: ["Protocol", "Standard", "Integration"],
                sources: [
                  {
                    label: "MCP (Model Context Protocol) Explained",
                    url: "https://www.youtube.com/watch?v=7j1t3UZA1TY&t",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "AI Building Blocks",
        icon: "2",
        color: "#16A34A",
        description:
          "This module covers cloud platforms for AI development, building AI chat applications, using tools and plugins, creating agents, setting up MCP, and implementing RAG.",
        children: [
          {
            name: "Deploy a Model in the Cloud",
            children: [
              {
                name: "Azure AI Foundry",
                description:
                  "Microsoft's unified platform for building AI applications on Azure. Provides access to OpenAI models, open-source models, evaluation tools, prompt flow, and enterprise-grade deployment.",
                tags: ["Cloud", "Microsoft", "Enterprise"],
                sources: [
                  {
                    label: "Azure AI Foundry",
                    url: "https://azure.microsoft.com/en-us/products/ai-services",
                  },
                  {
                    label: "Azure AI Docs",
                    url: "https://learn.microsoft.com/en-us/azure/ai-studio/",
                  },
                  {
                    label: "Deploy Models in Azure Foundry",
                    url: "https://www.youtube.com/watch?v=ewHPdDtmHj4&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=21",
                  },
                ],
              },
              {
                name: "AWS Bedrock",
                description:
                  "Amazon's fully managed service for building with foundation models. Access Anthropic Claude, Meta Llama, Mistral, and other models through a unified API with fine-tuning, guardrails, and knowledge bases.",
                tags: ["Cloud", "AWS", "Multi-model"],
                sources: [
                  {
                    label: "AWS Bedrock",
                    url: "https://aws.amazon.com/bedrock/",
                  },
                  {
                    label: "Bedrock Documentation",
                    url: "https://docs.aws.amazon.com/bedrock/",
                  },
                  {
                    label: "Deploy a Model in Bedrock",
                    url: "https://www.youtube.com/watch?v=nSQrY-uPWLY",
                  },
                  {
                    label: "Import custom model to Bedrock",
                    url: "https://www.youtube.com/watch?v=1aq_ju70qHQ",
                  },
                ],
              },
            ],
          },
          {
            name: "Build an AI chat app",
            children: [
              {
                name: "Building an AI Chat App with AWS Bedrock",
                description:
                  "Learn how to build a simple AI chat application using Amazon Bedrock.",
                tags: ["Tutorial", "AWS Bedrock", "Chat App"],
                sources: [
                  {
                    label: "Tutorial: Build an AI Chat App with Amazon Bedrock",
                    url: "https://www.youtube.com/watch?v=E1-mUfpeRu0",
                  },
                  {
                    label: "Repository",
                    url: "https://github.com/trevorspires/Bedrock-Chatbot-Youtube/blob/main/main.py",
                  },
                ],
              },
              {
                name: "Building an AI Chat App with Azure Foundry",
                description:
                  "Learn how to build a simple AI chat application using Azure Foundry.",
                tags: ["Tutorial", "Azure Foundry", "Chat App"],
                sources: [
                  {
                    label: "Simple Chat App",
                    url: "https://www.youtube.com/watch?v=lPsMx8yaO_I&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=19",
                  },
                  {
                    label: "Simple Chat App - Settings, History and Streaming",
                    url: "https://www.youtube.com/watch?v=RKY8DWGOWTI&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=18",
                  },
                ],
              },
            ],
          },
          {
            name: "Model Tools and Plugins",
            children: [
              {
                name: "Semantic Kernel Plugins",
                description:
                  "Learn how to build and use plugins in Semantic Kernel.",
                tags: ["Semantic Kernel", "Plugins"],
                sources: [
                  {
                    label: "Semantic Kernel Plugins",
                    url: "https://www.youtube.com/watch?v=Xq1MeGssPWA&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=10",
                  },
                  {
                    label: "Semantic Kernel Multiple Plugins",
                    url: "https://www.youtube.com/watch?v=ety3aQ32b8U&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=9",
                  },
                ],
              },
              {
                name: "AWS Bedrock Tools",
                description: "Learn how to use tools in AWS Bedrock.",
                tags: ["AWS Bedrock", "Tools"],
                sources: [
                  {
                    label:
                      "Agents Tools & Function Calling with Amazon Bedrock (How-to)",
                    url: "https://www.youtube.com/watch?v=2L_XE6g3atI",
                  },
                ],
              },
            ],
          },
          {
            name: "Creating Agents",
            children: [
              {
                name: "Create Agents with Azure Foundry",
                description:
                  "Learn how to create AI agents using Azure Foundry.",
                tags: ["Azure Foundry", "Agents", "Semantic Kernel"],
                sources: [
                  {
                    label:
                      "Single Agent Creation with Azure Foundry and Semantic Kernel",
                    url: "https://www.youtube.com/watch?v=EtvW3sr_vqA&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=5",
                  },
                  {
                    label:
                      "Multiple Agent Creation with Azure Foundry and Semantic Kernel",
                    url: "https://www.youtube.com/watch?v=0hXFDPx9bug&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=3",
                  },
                ],
              },
              {
                name: "Create Agents with AWS Bedrock",
                description: "Learn how to create AI agents using AWS Bedrock.",
                tags: ["AWS Bedrock", "Agents", "Agent Core"],
                sources: [
                  {
                    label: "Tutorial: Deploy any AI agent with AgentCore",
                    url: "https://www.youtube.com/watch?v=N7FGbBq1mI4",
                  },
                ],
              },
            ],
          },
          {
            name: "MCP setup",
            children: [
              {
                name: "MCP Overview",
                description:
                  "Learn how to build modular AI applications using MCP to connect Claude with external tools and data sources. Deep dive into MCP's advanced features including sampling, notifications, and transport implementations",
                sources: [
                  {
                    label: "Intro to MCP",
                    url: "https://anthropic.skilljar.com/introduction-to-model-context-protocol",
                  },
                  {
                    label: "Advanced MCP",
                    url: "https://anthropic.skilljar.com/model-context-protocol-advanced-topics",
                  },
                ],
              },
              {
                name: "MCP Implementation with Semantic Kernel",
                description: "Learn how to implement MCP with Semantic Kernel.",
                sources: [
                  {
                    label: "Semantic Kernel Fundamentals - MCP StdioTransport",
                    url: "https://www.youtube.com/watch?v=NE9Y-6jizO0&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=2",
                  },
                  {
                    label: "Semantic Kernel Fundamentals - MCP StreamableHttp",
                    url: "https://www.youtube.com/watch?v=1tTUOU9Gnd8&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=1",
                  },
                ],
              },
              {
                name: "MCP Implementation with AWS Bedrock",
                description: "Learn how to implement MCP with AWS Bedrock.",
                sources: [
                  {
                    label: "MCP with AWS Bedrock - part 1",
                    url: "https://www.youtube.com/watch?v=6OgFTW6bfSk",
                  },
                  {
                    label: "How to build an MCP Server - part 2",
                    url: "https://www.youtube.com/watch?v=RO6gBtPi25w",
                  },
                ],
              },
            ],
          },
          {
            name: "RAG Implementation",
            children: [
              {
                name: "What is RAG?",
                description:
                  "RAG (Retrieval-Augmented Generation) is a technique that combines information retrieval with generative AI models. It allows LLMs to access external knowledge sources during generation, improving accuracy and relevance of responses.",
                sources: [
                  {
                    label: "RAG Overview",
                    url: "https://aws.amazon.com/what-is/retrieval-augmented-generation/",
                  },
                ],
              },
              {
                name: "Implementing RAG in AWS",
                description: "Learn how to implement RAG in Amazon Bedrock.",
                tags: ["RAG", "AWS Bedrock", "Agent Core", "Knowledge Base"],
                sources: [
                  {
                    label:
                      "Build a RAG based Generative AI Chatbot in 20 mins using Amazon Bedrock Knowledge Base",
                    url: "https://www.youtube.com/watch?v=hnyDDfo8e9Q",
                  },
                ],
              },
              {
                name: "Implementing RAG in Azure",
                description:
                  "Learn how to implement a Vector Store and a Search RAG in Azure AI Foundry.",
                tags: [
                  "RAG",
                  "Azure AI Foundry",
                  "Semantic Kernel",
                  "Vector Store",
                  "AI Search",
                ],
                sources: [
                  {
                    label:
                      "Semantic Kernel Fundamentals - AI Search Vector Store",
                    url: "https://www.youtube.com/watch?v=txoGIPYBZoU&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=7",
                  },
                  {
                    label: "Semantic Kernel Fundamentals - AI Search RAG",
                    url: "https://www.youtube.com/watch?v=9_eHPPEQSTM&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=5",
                  },
                ],
              },
              {
                name: "Learn RAG From Scratch with LangChain",
                description:
                  "Learn how to implement RAG from scratch using the LangChain framework.",
                tags: ["RAG", "LangChain", "Python"],
                sources: [
                  {
                    label:
                      "Learn RAG From Scratch – Python AI Tutorial from a LangChain Engineer",
                    url: "https://www.youtube.com/watch?v=sVcwVQRHIc8&",
                  },
                ],
              },
            ],
          },
          {
            name: "Final Project: Build an AI Agentic Application",
            children: [
              {
                name: "Project Overview",
                description:
                  "Apply everything you've learned by building a complete AI agentic application. This project will involve designing an agent architecture, implementing it using a framework of your choice, and deploying it on a cloud platform.",
                sources: [
                  {
                    label: "Project Guidelines",
                    url: "/project-guidelines",
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   name: "Agent Orchestration",
      //   icon: "3",
      //   color: "#cf3e3e",
      //   description:
      //     "This module covers the leading agentic AI frameworks, as well as enterprise orchestration platforms from AWS and Azure.",
      //   children: [
      //     {
      //       name: "Frameworks & Libraries",
      //       children: [
      //         {
      //           name: "Semantic Kernel",
      //           description:
      //             "Microsoft's open-source SDK for integrating LLMs into applications. Supports C#, Python, and Java with a plugin architecture, planners, and memory connectors for enterprise AI development.",
      //           tags: ["Framework", "Microsoft", "C#", "Python"],
      //           sources: [
      //             {
      //               label: "Semantic Kernel Docs",
      //               url: "https://learn.microsoft.com/en-us/semantic-kernel/",
      //             },
      //             {
      //               label: "GitHub Repository",
      //               url: "https://github.com/microsoft/semantic-kernel",
      //             },
      //             {
      //               label: "Semantic Kernel Tutorial",
      //               url: "https://www.youtube.com/watch?v=ewHPdDtmHj4&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=20",
      //             },
      //           ],
      //         },
      //         {
      //           name: "AutoGen",
      //           description:
      //             "Microsoft's framework for building multi-agent conversational systems. Agents can collaborate, debate, and work together on complex tasks with human-in-the-loop capabilities.",
      //           tags: ["Framework", "Multi-Agent", "Microsoft"],
      //           sources: [
      //             {
      //               label: "AutoGen Docs",
      //               url: "https://microsoft.github.io/autogen/",
      //             },
      //             {
      //               label: "GitHub Repository",
      //               url: "https://github.com/microsoft/autogen",
      //             },
      //             {
      //               label: "AutoGen Tutorial",
      //               url: "https://www.youtube.com/watch?v=ewHPdDtmHj4&list=PLyqwquIuSMZpGDiocmT-M67dcDxjWmoYK&index=20",
      //             },
      //           ],
      //         },
      //         {
      //           name: "Microsoft Agent Framework",
      //           description:
      //             "Microsoft's broader agentic AI framework for building autonomous agents that can plan, reason, and take actions. Integrates with Azure AI services and enterprise tooling. Agent Framework combines AutoGen's simple agent abstractions with Semantic Kernel's enterprise features — session-based state management, type safety, middleware, telemetry — and adds graph-based workflows for explicit multi-agent orchestration.",
      //           tags: ["Framework", "Enterprise", "Azure"],
      //           sources: [
      //             {
      //               label: "Microsoft Agent Framework Docs",
      //               url: "https://learn.microsoft.com/en-us/agent-framework/overview/?pivots=programming-language-csharp",
      //             },
      //             {
      //               label: "GitHub Repository",
      //               url: "https://github.com/microsoft/agent-framework",
      //             },
      //             {
      //               label: "Microsoft Agent Framework tutorial",
      //               url: "https://www.youtube.com/watch?v=EAeUiipzCTE",
      //             },
      //           ],
      //         },
      //         {
      //           name: "AI-SDK (JavaScript/Vercel)",
      //           description:
      //             "Vercel's TypeScript toolkit for building AI applications with React. Provides hooks and streaming utilities for chat interfaces, generative UI, and tool calling with any LLM provider.",
      //           tags: ["Framework", "TypeScript", "React"],
      //           sources: [
      //             {
      //               label: "AI SDK Docs",
      //               url: "https://ai-sdk.dev/getting-started",
      //             },
      //             {
      //               label: "GitHub Repository",
      //               url: "https://github.com/vercel/ai",
      //             },
      //             {
      //               label: "AI SDK Cookbook",
      //               url: "https://ai-sdk.dev/cookbook",
      //             },
      //             {
      //               label: "AI SDK Guides",
      //               url: "https://ai-sdk.dev/cookbook/guides",
      //             },
      //             {
      //               label: "AI SDK Tutorial",
      //               url: "https://www.youtube.com/watch?v=mojZpktAiYQ",
      //             },
      //           ],
      //         },
      //         {
      //           name: "LangChain",
      //           description:
      //             "The most popular framework for building applications powered by language models. Provides composable components for chains, agents, retrieval, memory, and tool use across Python and JavaScript.",
      //           tags: ["Framework", "Python", "JavaScript"],
      //           sources: [
      //             {
      //               label: "LangChain Python Docs",
      //               url: "https://python.langchain.com/",
      //             },
      //             {
      //               label: "LangChain JS Docs",
      //               url: "https://js.langchain.com/",
      //             },
      //             {
      //               label: "LangChain Python Tutorial",
      //               url: "https://www.youtube.com/watch?v=lG7Uxts9SXs",
      //             },
      //             {
      //               label: "LangChain JS Tutorial",
      //               url: "https://www.youtube.com/watch?v=HSZ_uaif57o",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       name: "Enterprise Orchestration",
      //       children: [
      //         {
      //           name: "Amazon Agent Core",
      //           description:
      //             "Amazon Bedrock AgentCore is an agentic platform for building, deploying, and operating highly effective agents securely at scale using any framework and foundation model",
      //           tags: ["Framework", "AWS", "Agentic AI"],
      //           sources: [
      //             {
      //               label: "Agent Core Docs",
      //               url: "https://docs.aws.amazon.com/bedrock-agentcore/",
      //             },
      //             {
      //               label: "Agent Core - Getting Started Toolkit",
      //               url: "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-get-started-toolkit.html",
      //             },
      //             {
      //               label: "Agent Core - Samples",
      //               url: "https://github.com/awslabs/amazon-bedrock-agentcore-samples/?tab=readme-ov-file",
      //             },
      //             {
      //               label: "Agent Core Deep Dive",
      //               url: "https://www.youtube.com/watch?v=Op6L62rS5WU&list=PLrDJzKfz9AUuq0Rt-I0HyWgCNOYME1f6Y",
      //             },
      //           ],
      //         },
      //         {
      //           name: "Azure Foundry Agent Service",
      //           description:
      //             "Agent Service provides a production-ready foundation for deploying intelligent agents in enterprise environments",
      //           tags: ["Framework", "Azure", "Agentic AI"],
      //           sources: [
      //             {
      //               label: "Agent Service Docs",
      //               url: "https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview?view=foundry&preserve-view=true",
      //             },
      //             {
      //               label: "FAQ",
      //               url: "https://learn.microsoft.com/en-us/azure/ai-foundry/agents/faq?view=foundry",
      //             },
      //             {
      //               label: "Deploy your first agent",
      //               url: "https://learn.microsoft.com/en-us/azure/ai-foundry/agents/quickstarts/quickstart-hosted-agent?view=foundry",
      //             },
      //             {
      //               label: "Observability and monitoring",
      //               url: "https://learn.microsoft.com/en-us/azure/ai-foundry/agents/how-to/metrics?view=foundry",
      //             },
      //             {
      //               label: "Develop AI Agents on Azure",
      //               url: "https://www.youtube.com/watch?v=EoghOd0hU6E&list=PLahhVEj9XNTd9_qEnUZSUfxWSSpRwqXjk&index=1",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
];

export const BUSINESS_PATH: DataNode[] = [
  {
    name: "Business AI Path",
    description:
      "Learn how to leverage AI in a business context, including identifying use cases, building a business case, and implementing AI solutions.",
    children: [
      {
        name: "AI Foundation Concepts",
        description: "Understand the core concepts of AI.",
        children: [
          {
            name: "TODO",
            description: "TODO",
            children: [
              {
                name: "TODO",
                description: "TODO",
                sources: [],
              },
            ],
          },
        ],
      },
      {
        name: "AI Use Cases in Business",
        description:
          "Explore various use cases of AI in different industries and business functions.",
        children: [
          {
            name: "TODO",
            description: "TODO",
            children: [
              {
                name: "TODO",
                description: "TODO",
                sources: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const CERTIFICATIONS_PATH: DataNode[] = [
  {
    name: "AI Certifications",
    description:
      "This module covers the key certifications offered by AWS and Microsoft Azure for AI practitioners and engineers, along with recommended learning paths and resources to prepare for these exams.",
    children: [
      {
        name: "AWS AI Certifications",
        icon: "AWS",
        color: "#ff9900",
        children: [
          {
            name: "AWS Learning Tracks",
            children: [
              {
                name: "AWS Track - Beginner",
                description:
                  "Build and deploy simple AI solutions. Learn core AI concepts, responsible AI principles. Customizing Agentic Solutions and Implementing Agentic AI Frameworks",
                tags: ["AWS Bedrock", "Agentcore"],
                sources: [
                  {
                    label: "Course: Fundamentals of Generative AI",
                    url: "https://skillbuilder.aws/learn/FKXM21R555/fundamentals-of-generative-ai/ZFX96NREH4",
                  },
                  {
                    label: "AWS AI Practitioner Learning Plan",
                    url: "https://skillbuilder.aws/learning-plan/G8ENMJ5QBE/aws-artificial-intelligence-practitioner-learning-plan/SU2A1EJM1A",
                  },
                  {
                    label: "Tutorial: Bedrock Running in Lambda",
                    url: "https://www.youtube.com/watch?v=7PK4zdUgAt0",
                  },
                  {
                    label: "Amazon Bedrock Agent Core Getting Started",
                    url: "https://skillbuilder.aws/learn/SXMNDA9AJ1/amazon-bedrock-agentcore-getting-started/6SGJD8ZV9A",
                  },
                  {
                    label: "Documentation: Amazon Bedrock",
                    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html",
                  },
                ],
              },
              {
                name: "AWS Track - Intermediate",
                description:
                  "Design enterprise-grade AI solutions. Learn about multi-turn conversations, streaming responses, and structured data extraction. Automated development workflows and parallelized task execution. RAG systems with text chunking, embeddings, and hybrid search. Fine-tuning. Embeddings with vector database",
                tags: [
                  "Amazon Bedrock",
                  "Amazon SageMaker",
                  "Amazon Simple Storage Service",
                  "LangChain",
                  "AWS Identity and Access Management",
                  "AWS Lambda",
                ],
                sources: [
                  {
                    label: "Course: Agentic AI Foundations",
                    url: "https://skillbuilder.aws/learning-plan/HDZPWG63J3/agentic-ai-foundations/R4E9CC77T7",
                  },
                  {
                    label: "Getting Started with Claude in Amazon Bedrock",
                    url: "https://anthropic.skilljar.com/claude-in-amazon-bedrock",
                  },
                  {
                    label:
                      "Building Generative AI Applications Using Amazon Bedrock",
                    url: "https://skillbuilder.aws/learn/TM4ZAXTGEZ/building-generative-ai-applications-using-amazon-bedrock/WM6Z6ZHU7K",
                  },
                  {
                    label: "Generative AI Learning Plan for Developers",
                    url: "https://skillbuilder.aws/learning-plan/5C9XQBTXBB/generative-ai-learning-plan-for-developers-includes-labs/EGATKJP13J",
                  },
                  {
                    label:
                      "Digital Classroom - Developing Generative AI Applications",
                    url: "https://skillbuilder.aws/learn/7UWY7BAE4X/digital-classroom--developing-generative-ai-applications-on-aws/4FBWZ9EK8X",
                  },
                ],
              },
              {
                name: "AWS Track - Expert",
                description:
                  "Architect complex AI systems. Learn about foundation model integration, multimodal data handling, responsible AI & governance, cost optimization & performance efficiency, AI evaluation & testing, and hallucination detection.",
                tags: [
                  "Amazon Bedrock",
                  "AWS Lambda",
                  "AWS Step Functions",
                  "SageMaker Model Cards",
                  "AWS Glue Data Catalog",
                ],
                sources: [
                  {
                    label: "AWS Generative AI Developer Advanced Learning Plan",
                    url: "https://skillbuilder.aws/learning-plan/BGTH16YCTU/aws-generative-ai-developer-advanced-learning-plan-includes-labs/ZDN46CX881",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Microsoft Azure AI Certifications",
        icon: "Azure",
        color: "#0078d4",
        children: [
          {
            name: "Azure Learning Tracks",
            children: [
              {
                name: "Azure Track - Beginner",
                description:
                  "Learn core AI concepts and Azure Services. Learn about LLMs, prompts, and AI agents. Natural language processing (NLP). Text analysis. Speech recognition and synthesis. Computer vision concepts.",
                tags: [
                  "Azure Foundry",
                  "Azure Vision service",
                  "Azure Language text analysis features",
                ],
                sources: [
                  {
                    label: "AI Concepts Overview",
                    url: "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/",
                  },
                  {
                    label: "Get Started with Microsoft Foundry",
                    url: "https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/",
                  },
                  {
                    label: "Introduction to Generative AI and Agents",
                    url: "https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/",
                  },
                  {
                    label:
                      "Get Started with Generative AI in Microsoft Foundry",
                    url: "https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/",
                  },
                  {
                    label: "Text Analysis Concepts",
                    url: "https://learn.microsoft.com/en-us/training/modules/introduction-language/",
                  },
                  {
                    label:
                      "Get Started with Text Analysis in Microsoft Foundry",
                    url: "https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/",
                  },
                  {
                    label: "Introduction to AI Speech Concepts",
                    url: "https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/",
                  },
                  {
                    label: "Introduction to Computer Vision Concepts",
                    url: "https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/",
                  },
                  {
                    label:
                      "Get Started with Computer Vision in Microsoft Foundry",
                    url: "https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/",
                  },
                  {
                    label: "AI-Powered Information Extraction Concepts",
                    url: "https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/",
                  },
                  {
                    label: "Get Started with AI-Powered Information Extraction",
                    url: "https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/",
                  },
                  {
                    label: "Certification: Azure AI Fundamentals (AI-900)",
                    url: "https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/",
                  },
                ],
              },
              {
                name: "Azure Track - Intermediate",
                description:
                  "Design enterprise-grade AI solutions. Learn about developing generative AI applications, implementing computer vision solutions, implementing information extraction solutions, using REST APIs and SDKs, and language analysis in AI systems.",
                tags: [
                  "Azure Foundry",
                  "Semantic Kernel",
                  "Azure AI Services (e.g., vision, language, information extraction services)",
                  "C#",
                  "Python",
                  "REST-based APIs",
                  "Azure SDKs",
                ],
                sources: [
                  {
                    label: "Develop Generative AI Apps in Azure",
                    url: "https://learn.microsoft.com/en-us/training/paths/create-custom-copilots-ai-studio/",
                  },
                  {
                    label: "Develop AI Agents on Azure",
                    url: "https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-on-azure/",
                  },
                  {
                    label: "Develop Natural Language Solutions in Azure",
                    url: "https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure-ai/",
                  },
                  {
                    label: "Develop Computer Vision Solutions in Azure",
                    url: "https://learn.microsoft.com/en-us/training/paths/create-computer-vision-solutions-azure-ai/",
                  },
                  {
                    label: "Develop AI Information Extraction Solutions",
                    url: "https://learn.microsoft.com/en-us/training/paths/ai-extract-information/",
                  },
                  {
                    label: "Create an AI Agent (Applied Skills)",
                    url: "https://learn.microsoft.com/en-us/credentials/applied-skills/create-an-ai-agent/",
                  },
                  {
                    label: "Build a Generative AI Chat App (Applied Skills)",
                    url: "https://learn.microsoft.com/en-us/credentials/applied-skills/build-a-generative-ai-chat-app/",
                  },
                  {
                    label: "Develop Generative AI Apps with Semantic Kernel",
                    url: "https://learn.microsoft.com/en-us/credentials/applied-skills/develop-ai-agents-using-microsoft-azure-openai-and-semantic-kernel/",
                  },
                  {
                    label: "Implement Knowledge Mining with AI Search",
                    url: "https://learn.microsoft.com/en-us/credentials/applied-skills/implement-knowledge-mining-with-azure-ai-search/",
                  },
                  {
                    label: "Build a Natural Language Processing Solution",
                    url: "https://learn.microsoft.com/en-us/credentials/applied-skills/build-natural-language-solution-azure-ai/",
                  },
                  {
                    label: "Certification: Azure AI Engineer Associate",
                    url: "https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
