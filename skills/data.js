
// ============================================================
// 📝 EDIT YOUR DATA HERE — update this JSON and the page rebuilds
//
// LEAF NODE SCHEMA:
//   name         — display label (required)
//   description  — paragraph shown in sidebar
//   tags         — array of short labels e.g. ["API", "Model"]
//   sources      — array of { label, url } for external links
//
// BRANCH NODE SCHEMA:
//   name         — display label (required)
//   children     — array of child nodes
//   icon, color, colorLight, colorBorder — top-level tabs only
// ============================================================
const DATA = [
  {
    "name": "AI Learning Path",
    "children": [
      {
        "name": "Tools",
        "icon": "⚙",
        "color": "#2563EB",
        "colorLight": "#EFF6FF",
        "colorBorder": "#BFDBFE",
        "children": [
          {
            "name": "Platforms",
            "children": [
              {
                "name": "OpenAI",
                "children": [
                  {
                    "name": "Models",
                    "children": [
                      {
                        "name": "GPT-4o",
                        "description": "OpenAI's flagship multimodal model that can reason across text, images, and audio in a single model. Offers high intelligence at faster speeds and lower cost than previous models.",
                        "tags": ["Multimodal", "LLM", "Vision", "Audio"],
                        "sources": [
                          { "label": "OpenAI Docs — GPT-4o", "url": "https://platform.openai.com/docs/models/gpt-4o" },
                          { "label": "GPT-4o Announcement", "url": "https://openai.com/index/hello-gpt-4o/" }
                        ]
                      },
                      {
                        "name": "GPT-5 / GPT-5.2",
                        "description": "OpenAI's next-generation model family with significant improvements in reasoning, instruction following, and multimodal capabilities. Represents a leap forward in general intelligence.",
                        "tags": ["LLM", "Next-gen", "Reasoning"],
                        "sources": [
                          { "label": "OpenAI — Introducing GPT-5", "url": "https://openai.com/index/introducing-gpt-5/" }
                        ]
                      },
                      {
                        "name": "o1 / o3 (Reasoning)",
                        "description": "OpenAI's reasoning-focused model family designed to think before answering. Uses chain-of-thought reasoning to solve complex math, science, and coding problems with higher accuracy.",
                        "tags": ["Reasoning", "Chain-of-Thought", "STEM"],
                        "sources": [
                          { "label": "OpenAI Docs — o1", "url": "https://platform.openai.com/docs/models/o1" },
                          { "label": "Learning to Reason with LLMs", "url": "https://openai.com/index/learning-to-reason-with-llms/" }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "APIs & SDKs",
                    "children": [
                      // https://developers.openai.com/api/docs
                      {
                        "name": "OpenAI API",
                        "description": "OpenAI's unified API for accessing all OpenAI models and features. Supports REST and gRPC interfaces with advanced capabilities like function calling, tool use, and multimodal inputs.",
                        "tags": ["API", "OpenAI", "Multimodal"],
                        "sources": [
                          { "label": "OpenAI API Docs", "url": "https://developers.openai.com/api/docs" },
                          { "label": "API Core Concepts", "url": "https://developers.openai.com/api/docs/guides/text" },
                          { "label": "API Agents Guide", "url": "https://developers.openai.com/api/docs/guides/agents" },
                          { "label": "API Tools Guide", "url": "https://developers.openai.com/api/docs/guides/tools" },
                          { "label": "API Realtime Guide", "url": "https://developers.openai.com/api/docs/guides/realtime" },


                        ]
                      },
                      {
                        "name": "OpenAI Codex API",
                        "description": "OpenAI's API for agentic coding tasks. Provides access to Codex models that can write, edit, and debug code across multiple programming languages with an agentic interface.",
                        "tags": ["API", "Coding", "Agent"],
                        "sources": [
                          { "label": "OpenAI Codex", "url": "https://openai.com/index/openai-codex/" },
                          { "label": "Quick start", "url": " https://developers.openai.com/codex/quickstart" }
                        ]
                      },
                      {
                        "name": "Agents SDK",
                        "description": "OpenAI's Python SDK for building multi-agent systems. Provides primitives for agent handoffs, guardrails, tracing, and orchestrating complex workflows across multiple specialized agents.",
                        "tags": ["SDK", "Agents", "Python"],
                        "sources": [
                          { "label": "Agents SDK Docs", "url": "https://openai.github.io/openai-agents-python/" },
                          { "label": "GitHub Repository", "url": "https://github.com/openai/openai-agents-python" }
                        ]
                      },
                    ]
                  },
                  {
                    "name": "Applications",
                    "children": [
                      {
                        "name": "ChatGPT",
                        "description": "OpenAI's consumer AI assistant available on web, mobile, and desktop. Features include web browsing, code execution, image generation, file analysis, and memory across conversations.",
                        "tags": ["App", "Consumer", "Assistant"],
                        "sources": [
                          { "label": "ChatGPT", "url": "https://chatgpt.com" },
                          { "label": "ChatGPT 101", "url": "https://academy.openai.com/public/videos/chatgpt-101-a-guide-to-your-super-assistant-2025-02-13" }
                        ]
                      },
                      {
                        "name": "DALL·E 3 / GPT-Image",
                        "description": "OpenAI's image generation models. DALL·E 3 is integrated into ChatGPT for creating images from text prompts. GPT-Image (gpt-image-1) adds editing, in-painting, and multi-image generation via API.",
                        "tags": ["Image Gen", "Multimodal", "Creative"],
                        "sources": [
                          { "label": "DALL·E 3 Announcement", "url": "https://openai.com/index/dall-e-3/" },
                          { "label": "Research Paper", "url": "https://cdn.openai.com/papers/dall-e-3.pdf" },
                          { "label": "DALL·E API", "url": "https://developers.openai.com/api/docs/models/dall-e-3" }
                        ]
                      },
                      {
                        "name": "Sora (Video)",
                        "description": "OpenAI's video generation model that creates realistic and imaginative video clips from text descriptions. Can generate, extend, and edit videos with an understanding of physics and motion.",
                        "tags": ["Video", "Generative", "Creative"],
                        "sources": [
                          { "label": "Sora Overview", "url": "https://openai.com/index/sora/" }
                        ]
                      },
                      {
                        "name": "Whisper (Speech-to-Text)",
                        "description": "An open-source automatic speech recognition model trained on 680,000 hours of multilingual audio. Supports transcription, translation, and language identification across 99 languages.",
                        "tags": ["Speech", "Open Source", "Transcription"],
                        "sources": [
                          { "label": "Whisper Overview", "url": "https://openai.com/index/whisper/" },
                          { "label": "GitHub Repository", "url": "https://github.com/openai/whisper" }
                        ]
                      },
                      {
                        "name": "Codex / Operator (Agents)",
                        "description": "OpenAI's agentic products. Codex is a cloud-based coding agent that can write features, fix bugs, and run tests in parallel. Operator is a browser-using agent that performs web tasks autonomously.",
                        "tags": ["Agent", "Coding", "Automation"],
                        "sources": [
                          { "label": "OpenAI Codex", "url": "https://openai.com/index/openai-codex/" },
                          { "label": "Operator", "url": "https://openai.com/index/introducing-operator/" }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Anthropic",
                "children": [
                  {
                    "name": "Models",
                    "children": [
                      {
                        "name": "Claude Opus 4.5",
                        "description": "Anthropic's most powerful and intelligent model. Excels at complex analysis, nuanced understanding, creative tasks, and multi-step reasoning. Best suited for the hardest problems requiring depth.",
                        "tags": ["LLM", "Flagship", "Reasoning"],
                        "sources": [
                          { "label": "Claude Models Overview", "url": "https://docs.anthropic.com/en/docs/about-claude/models" }
                        ]
                      },
                      {
                        "name": "Claude Sonnet 4.5",
                        "description": "Anthropic's best balance of intelligence and speed. Excels at coding, analysis, and complex tasks while maintaining fast response times. The most popular model for production use.",
                        "tags": ["LLM", "Balanced", "Production"],
                        "sources": [
                          { "label": "Claude Models Overview", "url": "https://docs.anthropic.com/en/docs/about-claude/models" }
                        ]
                      },
                      {
                        "name": "Claude Haiku 4.5",
                        "description": "Anthropic's fastest and most compact model. Designed for quick responses, high-throughput tasks, and cost-effective use cases while still maintaining strong reasoning capabilities.",
                        "tags": ["LLM", "Fast", "Cost-effective"],
                        "sources": [
                          { "label": "Claude Models Overview", "url": "https://docs.anthropic.com/en/docs/about-claude/models" }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Tools & Products",
                    "children": [
                      {
                        "name": "Claude.ai",
                        "description": "Anthropic's consumer and business chat interface for interacting with Claude. Supports file uploads, image analysis, web search, artifact creation, projects, and team collaboration.",
                        "tags": ["App", "Consumer", "Business"],
                        "sources": [
                          { "label": "Claude.ai", "url": "https://claude.ai" },
                          { "label": "Claude 101", "url": "https://anthropic.skilljar.com/claude-101" }
                        ]
                      },
                      {
                        "name": "Claude Code (CLI Agent)",
                        "description": "An agentic command-line tool that lets developers delegate coding tasks to Claude directly from their terminal. Can navigate codebases, edit files, run tests, and handle complex multi-step development workflows.",
                        "tags": ["CLI", "Agent", "Coding"],
                        "sources": [
                          { "label": "Claude Code Docs", "url": "https://docs.anthropic.com/en/docs/claude-code" },
                          { "label": "Claude code in action", "url": "https://anthropic.skilljar.com/claude-code-in-action" }
                        ]
                      },
                      {
                        "name": "Claude API",
                        "description": "Anthropic's API for integrating Claude into your applications. Supports REST and gRPC interfaces with features for tool use, function calling, and multimodal inputs.",
                        "tags": ["API", "Anthropic", "Multimodal"],
                        "sources": [
                          { "label": "Claude API Docs", "url": "https://platform.claude.com/docs/en/get-started" },
                          { "label": "Working with messages", "url": "https://platform.claude.com/docs/en/build-with-claude/working-with-messages" },
                          { "label": "Tool Use Guide", "url": "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" },
                          { "label": "Extended Thinking Guide", "url": "https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking" }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Google",
                "children": [
                  {
                    "name": "Models",
                    "children": [
                      {
                        "name": "Gemini 3",
                        "description": "Google's next-generation model with further improvements in reasoning, multimodal understanding, and agentic capabilities. Pushes the frontier of what's possible with large language models.",
                        "tags": ["LLM", "Next-gen", "Google"],
                        "sources": [
                          { "label": "Google DeepMind", "url": "https://deepmind.google/models/gemini/" }
                        ]
                      },
                      {
                        "name": "Nano Banana",
                        "description": "Google's compact multimodal model designed for image understanding and generation tasks. Excels at interpreting visual content and generating images from text prompts with high fidelity.",
                        "tags": ["Multimodal", "Image Gen", "Google"],
                        "sources": [
                          { "label": "Nano Banana Overview", "url": "https://deepmind.google/models/gemini-image/" }
                        ]
                      },
                      {
                        "name": "Gemini Audio",
                        "description": "Google's model for understanding and generating audio content. Capable of transcribing, analyzing, and creating audio across various formats, enabling new possibilities for voice interfaces and music generation.",
                        "tags": ["Multimodal", "Audio", "Google"],
                        "sources": [
                          { "label": "Gemini Audio Overview", "url": "https://deepmind.google/models/gemini-audio/" }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Tools",
                    "children": [
                      {
                        "name": "Google AI Studio",
                        "description": "A free, web-based IDE for prototyping and experimenting with Gemini models. Offers prompt design tools, model tuning, and API key management with a simple drag-and-drop interface.",
                        "tags": ["IDE", "Prototyping", "Free"],
                        "sources": [
                          { "label": "Google AI Studio", "url": "https://aistudio.google.com/" }
                        ]
                      },
                      {
                        "name": "Gemini API",
                        "description": "Google's API for accessing Gemini models in your applications. Supports REST and gRPC interfaces with features for tool use, function calling, and multimodal inputs.",
                        "tags": ["API", "Google", "Multimodal"],
                        "sources": [
                          { "label": "Gemini API Docs", "url": "https://ai.google.dev/gemini-api/docs" }
                        ]
                      },
                      {
                        "name": "Agent Development Kit (ADK)",
                        "description": "Google's open-source framework for building, evaluating, and deploying AI agents. Supports multi-agent architectures, tool integration, and orchestration with a focus on composability.",
                        "tags": ["Framework", "Agents", "Open Source"],
                        "sources": [
                          { "label": "ADK Documentation", "url": "https://google.github.io/adk-docs/" },
                          { "label": "GitHub Repository", "url": "https://github.com/google/adk-python" }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Open Source / Other",
                "children": [
                  {
                    "name": "Meta Llama 4",
                    "description": "Meta's open-weight large language model family. Llama 4 brings significant improvements in reasoning, multilingual support, and efficiency. Available for research and commercial use under Meta's community license.",
                    "tags": ["Open Source", "LLM", "Meta"],
                    "sources": [
                      { "label": "Llama Official Site", "url": "https://llama.meta.com/" },
                      { "label": "GitHub Repository", "url": "https://github.com/meta-llama/llama" }
                    ]
                  },
                  {
                    "name": "DeepSeek V3 / R1",
                    "description": "High-performance open-source models from the Chinese AI lab DeepSeek. V3 is a strong general-purpose model while R1 is a reasoning-focused model competitive with leading proprietary systems at a fraction of the cost.",
                    "tags": ["Open Source", "LLM", "Reasoning"],
                    "sources": [
                      { "label": "DeepSeek GitHub", "url": "https://github.com/deepseek-ai" },
                      { "label": "DeepSeek Platform", "url": "https://platform.deepseek.com/" }
                    ]
                  },
                  {
                    "name": "Mistral / Mixtral",
                    "description": "European AI lab Mistral's family of efficient open-weight models. Mixtral uses a Mixture of Experts architecture for high performance with lower compute. Strong for European languages and code.",
                    "tags": ["Open Source", "LLM", "MoE"],
                    "sources": [
                      { "label": "Mistral AI", "url": "https://mistral.ai/" },
                      { "label": "Mistral Docs", "url": "https://docs.mistral.ai/" }
                    ]
                  },
                  {
                    "name": "Qwen 3",
                    "description": "Alibaba Cloud's open-source model family with strong multilingual capabilities. Qwen 3 offers competitive performance across benchmarks and comes in multiple sizes for different deployment scenarios.",
                    "tags": ["Open Source", "LLM", "Multilingual"],
                    "sources": [
                      { "label": "Qwen Official Site", "url": "https://qwenlm.github.io/" },
                      { "label": "Hugging Face", "url": "https://huggingface.co/Qwen" }
                    ]
                  },
                  {
                    "name": "xAI Grok",
                    "description": "xAI's large language model with real-time knowledge integration and a distinctive conversational style. Integrated into the X platform and available via API for developer use.",
                    "tags": ["LLM", "Realtime", "xAI"],
                    "sources": [
                      { "label": "xAI Official", "url": "https://x.ai/" },
                      { "label": "Grok API", "url": "https://docs.x.ai/" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "Frameworks",
            "children": [
              {
                "name": "LangChain",
                "description": "The most popular framework for building applications powered by language models. Provides composable components for chains, agents, retrieval, memory, and tool use across Python and JavaScript.",
                "tags": ["Framework", "Python", "JavaScript"],
                "sources": [
                  { "label": "LangChain Python Docs", "url": "https://python.langchain.com/" },
                  { "label": "LangChain JS Docs", "url": "https://js.langchain.com/" }
                ]
              },
              {
                "name": "Semantic Kernel",
                "description": "Microsoft's open-source SDK for integrating LLMs into applications. Supports C#, Python, and Java with a plugin architecture, planners, and memory connectors for enterprise AI development.",
                "tags": ["Framework", "Microsoft", "C#", "Python"],
                "sources": [
                  { "label": "Semantic Kernel Docs", "url": "https://learn.microsoft.com/en-us/semantic-kernel/" },
                  { "label": "GitHub Repository", "url": "https://github.com/microsoft/semantic-kernel" }
                ]
              },
              {
                "name": "AutoGen",
                "description": "Microsoft's framework for building multi-agent conversational systems. Agents can collaborate, debate, and work together on complex tasks with human-in-the-loop capabilities.",
                "tags": ["Framework", "Multi-Agent", "Microsoft"],
                "sources": [
                  { "label": "AutoGen Docs", "url": "https://microsoft.github.io/autogen/" },
                  { "label": "GitHub Repository", "url": "https://github.com/microsoft/autogen" }
                ]
              },
              {
                "name": "Microsoft Agent Framework",
                "description": "Microsoft's broader agentic AI framework for building autonomous agents that can plan, reason, and take actions. Integrates with Azure AI services and enterprise tooling.",
                "tags": ["Framework", "Enterprise", "Azure"],
                "sources": [
                  { "label": "Azure AI Services", "url": "https://learn.microsoft.com/en-us/azure/ai-services/" }
                ]
              },
              {
                "name": "AI-SDK (JavaScript/Vercel)",
                "description": "Vercel's TypeScript toolkit for building AI applications with React. Provides hooks and streaming utilities for chat interfaces, generative UI, and tool calling with any LLM provider.",
                "tags": ["Framework", "TypeScript", "React"],
                "sources": [
                  { "label": "AI SDK Docs", "url": "https://sdk.vercel.ai/" },
                  { "label": "GitHub Repository", "url": "https://github.com/vercel/ai" }
                ]
              }
            ]
          },
          {
            "name": "IDEs",
            "children": [
              {
                "name": "Cursor",
                "description": "An AI-first code editor built on VS Code. Features include inline code generation, multi-file editing, codebase-aware chat, and the ability to reference documentation and files in prompts.",
                "tags": ["IDE", "AI-native", "VS Code fork"],
                "sources": [
                  { "label": "Cursor", "url": "https://www.cursor.com/" },
                  { "label": "Cursor Docs", "url": "https://docs.cursor.com/" }
                ]
              },
              {
                "name": "VS Code + GitHub Copilot",
                "description": "Microsoft's mainstream code editor with GitHub Copilot integration. Provides inline suggestions, chat-based assistance, code explanation, test generation, and agent mode for multi-step tasks.",
                "tags": ["IDE", "Microsoft", "Copilot"],
                "sources": [
                  { "label": "VS Code", "url": "https://code.visualstudio.com/" },
                  { "label": "GitHub Copilot", "url": "https://github.com/features/copilot" }
                ]
              },
              {
                "name": "Claude Code (CLI)",
                "description": "Anthropic's terminal-based coding agent. Rather than an IDE, it works in your existing workflow — navigating codebases, making edits, running commands, and handling complex development tasks.",
                "tags": ["CLI", "Agent", "Terminal"],
                "sources": [
                  { "label": "Claude Code Docs", "url": "https://docs.anthropic.com/en/docs/claude-code" }
                ]
              },
              {
                "name": "Windsurf (Codeium)",
                "description": "An AI-powered IDE by Codeium with deep integration of agentic AI. Features Cascade, an AI agent that can plan and execute multi-step coding tasks with awareness of your entire codebase.",
                "tags": ["IDE", "Agent", "Codeium"],
                "sources": [
                  { "label": "Windsurf", "url": "https://codeium.com/windsurf" }
                ]
              },
              {
                "name": "Zed",
                "description": "A high-performance, multiplayer code editor with built-in AI features. Written in Rust for speed, supports inline AI assistance and real-time collaboration with other developers.",
                "tags": ["IDE", "Rust", "Collaboration"],
                "sources": [
                  { "label": "Zed", "url": "https://zed.dev/" }
                ]
              }
            ]
          },
          {
            "name": "Workflow Automation",
            "children": [
              {
                "name": "N8N",
                "description": "An open-source workflow automation platform with a visual editor. Build complex AI workflows connecting hundreds of services with native LLM nodes, custom code, and self-hosting options.",
                "tags": ["Automation", "Open Source", "Visual"],
                "sources": [
                  { "label": "N8N", "url": "https://n8n.io/" },
                  { "label": "GitHub Repository", "url": "https://github.com/n8n-io/n8n" }
                ]
              },
              {
                "name": "Zapier",
                "description": "The leading no-code automation platform connecting 7,000+ apps. Zapier AI features include natural language workflow creation, AI-powered actions, and chatbot builders.",
                "tags": ["Automation", "No-code", "SaaS"],
                "sources": [
                  { "label": "Zapier", "url": "https://zapier.com/" }
                ]
              },
              {
                "name": "Make (Integromat)",
                "description": "A visual automation platform for designing complex workflows. Offers more granular control than Zapier with branching, error handling, and data transformation for sophisticated AI pipelines.",
                "tags": ["Automation", "Visual", "Advanced"],
                "sources": [
                  { "label": "Make", "url": "https://www.make.com/" }
                ]
              },
              {
                "name": "LangFlow",
                "description": "A visual framework for building multi-agent and RAG applications. Drag-and-drop components to create LangChain-based flows without writing code, then export as Python or deploy as APIs.",
                "tags": ["Visual", "LangChain", "RAG"],
                "sources": [
                  { "label": "LangFlow", "url": "https://www.langflow.org/" },
                  { "label": "GitHub Repository", "url": "https://github.com/langflow-ai/langflow" }
                ]
              },
              {
                "name": "Flowise",
                "description": "An open-source UI visual tool to build customized LLM flows. Drag-and-drop interface for creating chatbots, RAG pipelines, and agent workflows using LangChain components.",
                "tags": ["Visual", "Open Source", "Chatbots"],
                "sources": [
                  { "label": "Flowise", "url": "https://flowiseai.com/" },
                  { "label": "GitHub Repository", "url": "https://github.com/FlowiseAI/Flowise" }
                ]
              }
            ]
          },
          {
            "name": "Cloud Platforms",
            "children": [
              {
                "name": "Azure AI Foundry",
                "description": "Microsoft's unified platform for building AI applications on Azure. Provides access to OpenAI models, open-source models, evaluation tools, prompt flow, and enterprise-grade deployment.",
                "tags": ["Cloud", "Microsoft", "Enterprise"],
                "sources": [
                  { "label": "Azure AI Foundry", "url": "https://azure.microsoft.com/en-us/products/ai-services" },
                  { "label": "Azure AI Docs", "url": "https://learn.microsoft.com/en-us/azure/ai-studio/" }
                ]
              },
              {
                "name": "AWS Bedrock",
                "description": "Amazon's fully managed service for building with foundation models. Access Anthropic Claude, Meta Llama, Mistral, and other models through a unified API with fine-tuning, guardrails, and knowledge bases.",
                "tags": ["Cloud", "AWS", "Multi-model"],
                "sources": [
                  { "label": "AWS Bedrock", "url": "https://aws.amazon.com/bedrock/" },
                  { "label": "Bedrock Documentation", "url": "https://docs.aws.amazon.com/bedrock/" }
                ]
              },
              {
                "name": "Google Cloud Vertex AI",
                "description": "Google's enterprise ML platform offering Gemini models, model garden with 150+ models, fine-tuning, RAG engine, and end-to-end MLOps for building production AI systems.",
                "tags": ["Cloud", "Google", "MLOps"],
                "sources": [
                  { "label": "Vertex AI", "url": "https://cloud.google.com/vertex-ai" }
                ]
              },
              {
                "name": "Hugging Face",
                "description": "The open-source AI community hub hosting 500K+ models, 200K+ datasets, and tools for training, fine-tuning, and deploying models. Features Transformers library, Spaces for demos, and Inference Endpoints.",
                "tags": ["Community", "Open Source", "Hub"],
                "sources": [
                  { "label": "Hugging Face", "url": "https://huggingface.co/" },
                  { "label": "Transformers Docs", "url": "https://huggingface.co/docs/transformers" }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Concepts",
        "icon": "◈",
        "color": "#059669",
        "colorLight": "#ECFDF5",
        "colorBorder": "#A7F3D0",
        "children": [
          {
            "name": "AI Fundamentals",
            "children": [
              {
                "name": "LLMs",
                "description": "Large Language Models are neural networks trained on massive text datasets to understand and generate human language. They form the foundation of modern AI assistants, using transformer architectures with billions of parameters.",
                "tags": ["Core Concept", "Foundation"],
                "sources": [
                  { "label": "Wikipedia — LLMs", "url": "https://en.wikipedia.org/wiki/Large_language_model" },
                  { "label": "Attention Is All You Need (Paper)", "url": "https://arxiv.org/abs/1706.03762" }
                ]
              },
              {
                "name": "Prompt Engineering",
                "description": "The practice of crafting effective instructions to get the best outputs from language models. Techniques include few-shot examples, chain-of-thought prompting, system prompts, and structured output formatting.",
                "tags": ["Skill", "Practical", "Essential"],
                "sources": [
                  { "label": "Anthropic Prompt Engineering Guide", "url": "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
                  { "label": "OpenAI Prompt Engineering Guide", "url": "https://platform.openai.com/docs/guides/prompt-engineering" },
                  { "label": "Claude Prompt Library", "url": "https://platform.claude.com/docs/en/resources/prompt-library/library" }
                ]
              },
              {
                "name": "Optimizing Models",
                "description": "Techniques for improving LLM accuracy and performance including prompt optimization, fine-tuning, retrieval-augmented generation, evaluation frameworks, and cost/latency trade-offs.",
                "tags": ["Optimization", "Performance"],
                "sources": [
                  { "label": "OpenAI — Optimizing LLM Accuracy", "url": "https://platform.openai.com/docs/guides/optimizing-llm-accuracy" }
                ]
              },
              {
                "name": "Agents",
                "description": "AI systems that can autonomously plan, reason, and take actions to accomplish goals. Agents use LLMs as their reasoning engine and interact with the world through tools like APIs, web browsers, and code execution.",
                "tags": ["Core Concept", "Agentic AI"],
                "sources": [
                  { "label": "Anthropic — Building Agents", "url": "https://docs.anthropic.com/en/docs/build-with-claude/tool-use" },
                  { "label": "Anthropic — Agents Research", "url": "https://www.anthropic.com/research/building-effective-agents" }
                ]
              },
              {
                "name": "AI vs Machine Learning",
                "description": "Understanding the relationship between AI, machine learning, and deep learning. AI is the broadest concept, ML is a subset focused on learning from data, and DL uses neural networks for complex pattern recognition.",
                "tags": ["Core Concept", "Terminology"],
                "sources": [
                  { "label": "Google Cloud — AI vs ML", "url": "https://cloud.google.com/learn/artificial-intelligence-vs-machine-learning" }
                ]
              }
            ]
          },
          {
            "name": "Advanced Concepts",
            "children": [
              {
                "name": "Embeddings",
                "description": "Numerical vector representations of text, images, or other data that capture semantic meaning. Similar concepts end up close together in vector space, enabling similarity search, clustering, and recommendation systems.",
                "tags": ["Vectors", "Semantic", "Core"],
                "sources": [
                  { "label": "OpenAI — Embeddings Guide", "url": "https://platform.openai.com/docs/guides/embeddings" }
                ]
              },
              {
                "name": "Vector Databases",
                "description": "Specialized databases optimized for storing and querying high-dimensional vectors. Enable fast similarity search at scale, forming the backbone of RAG systems, semantic search, and recommendation engines.",
                "tags": ["Database", "Infrastructure"],
                "sources": [
                  { "label": "Pinecone — What is a Vector DB", "url": "https://www.pinecone.io/learn/vector-database/" },
                  { "label": "Pinecone", "url": "https://www.pinecone.io/" }
                ]
              },
              {
                "name": "RAG",
                "description": "Retrieval-Augmented Generation combines LLMs with external knowledge retrieval. Instead of relying solely on training data, RAG fetches relevant documents at query time and includes them in the prompt for more accurate, up-to-date responses.",
                "tags": ["Architecture", "Retrieval", "Key Pattern"],
                "sources": [
                  { "label": "Anthropic — RAG Guide", "url": "https://docs.anthropic.com/en/docs/build-with-claude/retrieval-augmented-generation" }
                ]
              },
              {
                "name": "MCP",
                "description": "The Model Context Protocol is an open standard for connecting AI models to external data sources and tools. Think of it as a universal adapter — one protocol that lets any AI model talk to any data source or service.",
                "tags": ["Protocol", "Standard", "Integration"],
                "sources": [
                  { "label": "MCP Official Site", "url": "https://modelcontextprotocol.io/" },
                  { "label": "MCP Specification", "url": "https://spec.modelcontextprotocol.io/" }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "AI Architecture",
        "icon": "◲",
        "color": "#9333EA",
        "colorLight": "#FAF5FF",
        "colorBorder": "#DDD6FE",
        "children": [
          {
            "name": "Production Systems",
            "children": [
              {
                "name": "Structured Outputs (JSON Mode)",
                "description": "Techniques for getting LLMs to return data in specific formats like JSON, XML, or typed schemas. Essential for building reliable AI pipelines where downstream systems need to parse model outputs programmatically.",
                "tags": ["Production", "Reliability", "API"],
                "sources": [
                  { "label": "OpenAI — Structured Outputs", "url": "https://platform.openai.com/docs/guides/structured-outputs" }
                ]
              },
              {
                "name": "Multi Agent Systems",
                "description": "Architectures where multiple specialized AI agents collaborate to solve complex problems. Each agent handles a specific domain or task, communicating through defined protocols to achieve goals no single agent could.",
                "tags": ["Architecture", "Multi-Agent", "Advanced"],
                "sources": [
                  { "label": "AutoGen — Multi-Agent", "url": "https://microsoft.github.io/autogen/" },
                  { "label": "CrewAI", "url": "https://www.crewai.com/" }
                ]
              },
              {
                "name": "Agent Orchestration",
                "description": "The practice of coordinating and managing AI agents in production. Includes routing between agents, maintaining state, handling errors, implementing guardrails, and ensuring reliable execution of complex workflows.",
                "tags": ["Orchestration", "Production", "Workflow"],
                "sources": [
                  { "label": "LangChain — Agents", "url": "https://python.langchain.com/docs/concepts/agents/" },
                  { "label": "LangGraph", "url": "https://langchain-ai.github.io/langgraph/" }
                ]
              },
              {
                "name": "Fine-tuning LLMs",
                "description": "The process of further training a pre-trained model on domain-specific data to improve performance for particular tasks. Balances customization benefits against cost, complexity, and the risk of losing general capabilities.",
                "tags": ["Training", "Customization", "Advanced"],
                "sources": [
                  { "label": "OpenAI — Fine-tuning Guide", "url": "https://platform.openai.com/docs/guides/fine-tuning" }
                ]
              },
              {
                "name": "Building Vector Search Systems",
                "description": "Designing and implementing systems that use vector embeddings for semantic search. Covers embedding model selection, chunking strategies, indexing approaches, hybrid search, and scaling considerations.",
                "tags": ["Search", "Infrastructure", "Embeddings"],
                "sources": [
                  { "label": "Pinecone — Vector Database", "url": "https://www.pinecone.io/learn/vector-database/" }
                ]
              },
              {
                "name": "Implementing RAG",
                "description": "Building production RAG pipelines from end to end. Covers document ingestion, chunking, embedding, retrieval strategies, re-ranking, prompt construction, evaluation, and common failure modes.",
                "tags": ["RAG", "Pipeline", "Production"],
                "sources": [
                  { "label": "Anthropic — RAG Guide", "url": "https://docs.anthropic.com/en/docs/build-with-claude/retrieval-augmented-generation" }
                ]
              },
              {
                "name": "Connecting MCP servers",
                "description": "Integrating existing MCP servers into your AI applications. Learn how to discover, configure, and connect to MCP-compliant data sources and tools to extend your AI system's capabilities.",
                "tags": ["MCP", "Integration", "Setup"],
                "sources": [
                  { "label": "MCP Quickstart — Client", "url": "https://modelcontextprotocol.io/quickstart/client" },
                  { "label": "MCP Quickstart — Server", "url": "https://modelcontextprotocol.io/quickstart/server" }
                ]
              },
              {
                "name": "Building MCPs",
                "description": "Creating custom MCP servers to expose your own data and tools to AI models. Learn the protocol specification, implement resource providers, define tool schemas, and handle the MCP lifecycle.",
                "tags": ["MCP", "Development", "Protocol"],
                "sources": [
                  { "label": "MCP Server Quickstart", "url": "https://modelcontextprotocol.io/quickstart/server" },
                  { "label": "MCP Specification", "url": "https://spec.modelcontextprotocol.io/" }
                ]
              }
            ]
          },
          {
            "name": "Agent Design Patterns",
            "children": [
              {
                "name": "ReAct (Reason + Act)",
                "description": "A pattern where the agent alternates between reasoning (thinking about what to do) and acting (executing tools or actions). The model generates a thought, takes an action, observes the result, and repeats until the task is complete.",
                "tags": ["Pattern", "Reasoning", "Foundational"],
                "sources": [
                  { "label": "Prompting Guide — ReAct", "url": "https://www.promptingguide.ai/techniques/react" },
                  { "label": "ReAct Paper", "url": "https://arxiv.org/abs/2210.03629" }
                ]
              },
              {
                "name": "Plan-and-Execute",
                "description": "A two-phase pattern where one LLM call creates a high-level plan of steps, and subsequent calls execute each step. Separating planning from execution improves reliability on complex, multi-step tasks.",
                "tags": ["Pattern", "Planning", "Multi-step"],
                "sources": [
                  { "label": "LangChain — Planning Agents", "url": "https://blog.langchain.dev/planning-agents/" }
                ]
              },
              {
                "name": "Reflection & Self-Critique",
                "description": "Agents evaluate and critique their own outputs before finalizing them. An inner loop reviews the response for errors, completeness, and quality, then revises as needed. Dramatically improves output quality.",
                "tags": ["Pattern", "Quality", "Self-improvement"],
                "sources": [
                  { "label": "Reflexion Paper", "url": "https://arxiv.org/abs/2303.11366" }
                ]
              },
              {
                "name": "Human-in-the-Loop",
                "description": "Designing agent systems that can request human approval, feedback, or input at critical decision points. Balances autonomy with oversight, especially important for high-stakes actions or when agent confidence is low.",
                "tags": ["Pattern", "Safety", "Oversight"],
                "sources": [
                  { "label": "LangChain — Human-in-the-Loop", "url": "https://python.langchain.com/docs/concepts/human_in_the_loop/" }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

// ============================================================
// 🔧 RENDERER — no need to edit below this line
// ============================================================
