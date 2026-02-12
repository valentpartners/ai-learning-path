const contentData = {
    'foundation': {
        title: 'AI Fundamentals',
        subtitle: 'Common Base for All Tracks',
        concepts: [
            'Large Language Models (LLMs) overview',
            'Generative AI use cases and applications',
            'Agents and their capabilities',
            'Prompt engineering fundamentals',
            'MCP servers',
            'RAG (Retrieval-Augmented Generation) basics',
            'Vector databases and embeddings',
            'AI vs ML vs Deep Learning distinctions',
        ],
        tools: [
            'Copilot' , 'Anthropic Claude' , 'OpenAI ChatGPT',
        ],
        deliverables: [
            'Execute basic prompts',
            'Understand use case identification',
            'Recognize AI capabilities and limitations',
        ],
        training: [
            {
                name: 'How LLMs work',
                url:'https://www.youtube.com/watch?v=LPZh9BOjkQs',
                duration: '10 minutes',
            },
            {
                name: 'Context Window',
                url: 'https://www.youtube.com/watch?v=-QVoIxEpFkM',
                duration: '10 minutes',
            },
            {
                name: 'What are AI Agents?',
                url: 'https://www.youtube.com/watch?v=F8NKVhkZZWI',
                duration: '12 minutes',
            },
            {
                name: 'LLM vs Agents',
                url: 'https://www.youtube.com/watch?v=I9z-nrk9cw0',
                duration: '8 minutes',
            },
            {
                name: 'Optimizing AI Models',
                url: 'https://www.youtube.com/watch?v=zYGDpG-pTho',
                duration: '13 minutes',
            },
            {
                name: 'MCP (Model Context Protocol) Explained',
                url: 'https://www.youtube.com/watch?v=7j1t3UZA1TY&t',
                duration: '13 minutes',
            },
            {
                name: 'What is RAG (Retrieval-Augmented Generation)?',
                url: 'https://www.youtube.com/watch?v=T-D1OfcDW1M',
                duration: '7 minutes',
            },
            {
                name: 'What are embeddings?',
                url: 'https://www.youtube.com/watch?v=wgfSDrqYMJ4',
                duration: '8 minutes',
            },
            {
                name: 'Vector Databases Explained',
                url: 'https://www.youtube.com/watch?v=gl1r1XV0SLw',
                duration: '10 minutes',
            },
            {
                name: 'Building Effective Agents',
                url: 'https://www.anthropic.com/engineering/building-effective-agents',
                duration: '5 minutes',
            },
            {
                name: 'AI vs ML',
                url: 'https://www.youtube.com/watch?v=qYNweeDHiyU',
                duration: '10 minutes',
            },
            {   name: 'Claude 101 - Foundations of AI with Claude',
                url: 'https://anthropic.skilljar.com/claude-101',
                duration: '1 hour',
            },
            {
                name: 'Prompt Engineering Overview',
                url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview',
                duration: ''
            },
            {
                name: 'Prompting Techniques Guide',
                url: 'https://www.promptingguide.ai/',
                duration: ''
            },
        ]
    },
    'aws-beginner': {
        title: 'AWS Track - Beginner',
        subtitle: 'Build and deploy simple AI solutions',
        concepts: [
            'Fundamentals of Generative AI',
            'Responsible AI',
            'Security, compliance, and governance',
            'From LLMS to Agents',
            'Customizing Agentic Solutions',
            'Implementing Agentic AI Frameworks',
        ],
        tools: [
            'AWS Bedrock',
            'Agentcore',
        ],
        deliverables: [
            'Understand what machine learning and generative ai is',
            'Dive into AWS AI/ML offerings such as Amazon SageMaker and Amazon Bedrock',
        ],
        training: [
            {
                name: 'Intro to MCP',
                url: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol',
                duration: '1 hour',
            },
            {
                name: 'Advanced MCP',
                url: 'https://anthropic.skilljar.com/model-context-protocol-advanced-topics',
                duration: '1 hour',
            },
            {
                name: 'Course: Fundamentals of Generative AI',
                url: 'https://skillbuilder.aws/learn/FKXM21R555/fundamentals-of-generative-ai/ZFX96NREH4',
                duration: '3 hours'
            },
            {
                name: 'AWS AI Practitioner Learning Plan',
                url: 'https://skillbuilder.aws/learning-plan/G8ENMJ5QBE/aws-artificial-intelligence-practitioner-learning-plan/SU2A1EJM1A',
                duration: '8 hours'
            },
            {
                name: 'Tutorial: Deploy any AI agent with AgentCore',
                url: 'https://www.youtube.com/watch?v=N7FGbBq1mI4',
                duration: '15 minutes',
            },
            {
                name: 'Tutorial: Bedrock Running in Lambda',
                url: 'https://www.youtube.com/watch?v=7PK4zdUgAt0',
                duration: '10 minutes',
            },
                        {
                name: 'Amazon Bedrock Agent Core Getting Started',
                url: 'https://skillbuilder.aws/learn/SXMNDA9AJ1/amazon-bedrock-agentcore-getting-started/6SGJD8ZV9A',
                duration: '1 hour'
            },
            {
                name: 'Documentation: Amazon Bedrock',
                url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html',
            }
        ]
    },
    'aws-intermediate': {
        title: 'AWS Track - Intermediate',
        subtitle: 'Design enterprise-grade AI solutions',
        concepts: [
            'Multi-turn conversations, streaming responses, and structured data extraction',
            'Automated development workflows and parallelized task execution',
            'RAG systems with text chunking, embeddings, and hybrid search',
            'Fine-tuning',
            'Embeddings with vector database'
        ],
        tools: [
            'Amazon Bedrock',
            'Amazon SageMaker',
            'Amazon Simple Storage Service',
            'LangChain',
            'AWS Identity and Access Management',
            'AWS Lambda',
        ],
        deliverables: [
            'Custom fine-tuned models',
            'Multi-agent solutions',
            'Implement safeguards and responsible AI policies'
        ],
        training: [
            {
                name: 'Course: Agentic AI Foundations',
                url: 'https://skillbuilder.aws/learning-plan/HDZPWG63J3/agentic-ai-foundations/R4E9CC77T7',
                duration: '6 hours'
            },
            {
                url: 'https://anthropic.skilljar.com/claude-in-amazon-bedrock',
                name: 'Getting Started with Claude in Amazon Bedrock',
                duration: '8 hour'
            },
            {
                name: 'Building Generative AI Applications Using Amazon Bedrock',
                url: 'https://skillbuilder.aws/learn/TM4ZAXTGEZ/building-generative-ai-applications-using-amazon-bedrock/WM6Z6ZHU7K',
                duration: '4 hours'
            },
            {
                name: 'Generative AI Learning Plan for Developers',
                url: 'https://skillbuilder.aws/learning-plan/5C9XQBTXBB/generative-ai-learning-plan-for-developers-includes-labs/EGATKJP13J',
                duration: '21 hours'
            },
            {
                name: 'Digital Classroom - Developing Generative AI Applications',
                url: 'https://skillbuilder.aws/learn/7UWY7BAE4X/digital-classroom--developing-generative-ai-applications-on-aws/4FBWZ9EK8X',
                duration: '16 hours'
            },
        ]
    },
    'aws-expert': {
        title: 'AWS Track - Expert',
        subtitle: 'Architect complex AI systems',
        concepts: [
            'Foundation model integration',
            'Multimodal data handling',
            'Responsible AI & governance',
            'Cost optimization & performance efficiency',
            'AI evaluation & testing',
            'Hallucination detection',
        ],
        tools: [
            'Amazon Bedrock',
            'AWS Lambda',
            'AWS Step Functions',
            'SageMaker Model Cards',
            'AWS Glue Data Catalog',
        ],
        deliverables: [
            'Enterprise AI architectures',
            'Agentic AI workflows',
            'Secure and governed AI systems',
            'Cost‑efficient and monitored AI pipelines',
            'Evaluation frameworks & QA processes',
        ],
        training: [
            {
                name: 'AWS Generative AI Developer Advanced Learning Plan',
                url: 'https://skillbuilder.aws/learning-plan/BGTH16YCTU/aws-generative-ai-developer-advanced-learning-plan-includes-labs/ZDN46CX881',
                duration: '45 hours'
            }
        ]
    },
    'azure-beginner': {
        title: 'Azure Track - Beginner',
        subtitle: 'Learn core AI concepts and Azure Services',
        concepts: [
            '(LLMs), prompts, and AI agents',
            'Natural language processing (NLP)',
            'Text analysis',
            'Speech recognition and synthesis',
            'Computer vision concepts',
        ],
        tools: [
            'Azure Foundry',
            'Azure Vision service',
            'Azure Language text analysis features,',
        ],
        deliverables: [
            'Microsoft Certification - Azure AI Fundamentals',
        ],
        training: [
            {
                name: 'Intro to MCP',
                url: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol',
                duration: '1 hour',
            },
            {
                name: 'Advanced MCP',
                url: 'https://anthropic.skilljar.com/model-context-protocol-advanced-topics',
                duration: '1 hour',
            },
            {
                name: 'AI Concepts Overview',
                url: 'https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/',
                duration: '1 hour'
            },
            {
                name: 'Get Started with Microsoft Foundry',
                url: 'https://learn.microsoft.com/en-us/training/modules/get-started-ai-in-foundry/',
                duration: '1 hour'
            },
            {
                name: 'Introduction to Generative AI and Agents',
                url: 'https://learn.microsoft.com/en-us/training/modules/fundamentals-generative-ai/',
                duration: '1 hour'
            },
            {
                name: 'Get Started with Generative AI in Microsoft Foundry',
                url: 'https://learn.microsoft.com/en-us/training/modules/get-started-generative-ai-azure/',
                duration: '1 hour'
            },
            {
                name: 'Text Analysis Concepts',
                url: 'https://learn.microsoft.com/en-us/training/modules/introduction-language/',
                duration: '30 minutes'
            },
            {
                name: 'Get Started with Text Analysis in Microsoft Foundry',
                url: 'https://learn.microsoft.com/en-us/training/modules/get-started-language-azure/',
                duration: '45 minutes'
            },
            {
                name: 'Introduction to AI Speech Concepts',
                url: 'https://learn.microsoft.com/en-us/training/modules/introduction-ai-speech/',
                duration: '30 minutes'
            },
            {
                name: 'Introduction to Computer Vision Concepts',
                url: 'https://learn.microsoft.com/en-us/training/modules/introduction-computer-vision/',
                duration: '30 minutes'
            },
            {
                name: 'Get Started with Computer Vision in Microsoft Foundry',
                url: 'https://learn.microsoft.com/en-us/training/modules/get-started-computer-vision-azure/',
                duration: '1 hour'
            },
            {
                name: 'AI-Powered Information Extraction Concepts',
                url: 'https://learn.microsoft.com/en-us/training/modules/introduction-information-extraction/',
                duration: '30 minutes'
            },
            {
                name: 'Get Started with AI-Powered Information Extraction',
                url: 'https://learn.microsoft.com/en-us/training/modules/ai-information-extraction/',
                duration: '1 hour'
            },
            {
                name: '🏆 Certification: Azure AI Fundamentals (AI-900)',
                url: 'https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/',
                duration: 'Certification'
            }
        ]
    },
    'azure-intermediate': {
        title: 'Azure Track - Intermediate',
        subtitle: 'Design enterprise-grade AI solutions',
        concepts: [
            'Developing generative AI applications',
            'Implementing computer vision solutions',
            'Implementing information extraction solutions',
            'Using REST APIs and SDKs',
            'Language analysis in AI systems',
        ],
        tools: [
            'Azure Foundry',
            'Semantic Kernel',
            'Azure AI Services (e.g., vision, language, information extraction services)',
            'C#', 'Python',
            'REST‑based APIs',
            'Azure SDKs',
        ],
        deliverables: [
            'Generative AI–enabled solutions',
            'Computer vision–based features',
            'Information extraction pipelines',
            'Language analysis components',
            'Microsoft Certification - Azure AI Engineer Associate'
        ],
        training: [
            {
                name: 'Develop Generative AI Apps in Azure',
                url: 'https://learn.microsoft.com/en-us/training/paths/create-custom-copilots-ai-studio/',
                duration: '7 hours'
            },
            {
                name: 'Develop AI Agents on Azure',
                url: 'https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-on-azure/',
                duration: '10 hours'
            },
            {
                name: 'Develop Natural Language Solutions in Azure',
                url: 'https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure-ai/',
                duration: '9 hours'
            },
            {
                name: 'Develop Computer Vision Solutions in Azure',
                url: 'https://learn.microsoft.com/en-us/training/paths/create-computer-vision-solutions-azure-ai/',
                duration: '7 hours'
            },
            {
                name: 'Develop AI Information Extraction Solutions',
                url: 'https://learn.microsoft.com/en-us/training/paths/ai-extract-information/',
                duration: '4 hours'
            },
            {
                name: 'Create an AI Agent (Applied Skills)',
                url: 'https://learn.microsoft.com/en-us/credentials/applied-skills/create-an-ai-agent/',
                duration: '1 hour'
            },
            {
                name: 'Build a Generative AI Chat App (Applied Skills)',
                url: 'https://learn.microsoft.com/en-us/credentials/applied-skills/build-a-generative-ai-chat-app/',
                duration: '1 hour'
            },
            {
                name: 'Develop Generative AI Apps with Semantic Kernel',
                url: 'https://learn.microsoft.com/en-us/credentials/applied-skills/develop-ai-agents-using-microsoft-azure-openai-and-semantic-kernel/',
                duration: '3 hours'
            },
            {
                name: 'Implement Knowledge Mining with AI Search',
                url: 'https://learn.microsoft.com/en-us/credentials/applied-skills/implement-knowledge-mining-with-azure-ai-search/',
                duration: '6 hours'
            },
            {
                name: 'Build a Natural Language Processing Solution',
                url: 'https://learn.microsoft.com/en-us/credentials/applied-skills/build-natural-language-solution-azure-ai/',
                duration: '9 hours'
            },
            {
                name: '🏆 Certification: Azure AI Engineer Associate',
                url: 'https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/',
                duration: 'Certification'
            }
        ]
    },
    'azure-expert': {
        title: 'Azure Track - Expert',
        subtitle: 'Architect complex AI systems',
        concepts: [
            'Enterprise-scale AI patterns',
            'Hybrid and multi-cloud AI',
            'AI governance automation',
            'Advanced cost optimization',
            'Performance optimization at scale'
        ],
        tools: [
            'TODO'
        ],
        deliverables: [
            'Enterprise AI architecture',
            'End-to-end AI solution architecture'
        ],
        training: [
            {
                name: 'Advanced Azure AI solutions and architectures',
                url: '#',
                duration: 'Coming soon'
            }
        ]
    },
    'business-beginner': {
        title: 'Business Track - Beginner',
        subtitle: 'AI for Sales & Pursuits',
        concepts: [
            'AI terminology (LLM, RAG, fine-tuning, agents)',
            'AI use cases by industry and function',
            'ROI and business value of AI',
            'AI risks and ethical considerations',
            'Customer journey with AI'
        ],
        tools: [
            'ChatGPT, Claude, Copilot (user level)',
            'Demo environments',
            'AI presentation templates',
            'AI ROI calculators',
            'Case study library'
        ],
        deliverables: [
            'Identify client AI opportunities',
            'Articulate business benefits',
            'Handle objections and concerns',
            'Scope AI projects',
            'Create compelling presentations'
        ],
        training: [
            {
                name: 'Generative AI for Executives',
                url: 'https://skillbuilder.aws/learn/9EBNY921AD/generative-ai-for-executives/YF6GW2BT1E',
                duration: '50 minutes'
            }
        ]
    },
    'business-intermediate': {
        title: 'Business Track - Intermediate',
        subtitle: 'AI Strategy & Leadership',
        concepts: [
            'AI governance and compliance',
            'Build vs buy decisions',
            'AI partner ecosystems',
            'AI implementation roadmaps',
            'Success metrics and KPIs',
            'Change management for AI adoption'
        ],
        tools: [
            'TCO modeling tools',
            'Risk assessment frameworks',
            'AI maturity assessments',
            'Executive dashboards',
            'Proposal templates'
        ],
        deliverables: [
            'Lead AI strategy sessions',
            'Design governance frameworks',
            'Develop business cases',
            'Negotiate AI contracts',
            'Conduct executive briefings'
        ],
        training: [
            {
                name: 'Additional training coming soon',
                url: '#',
                duration: 'TBD'
            }
        ]
    },
    'business-expert': {
        title: 'Business Track - Expert',
        subtitle: 'AI Transformation Leadership',
        concepts: [
            'AI transformation leadership',
            'Industry-specific AI solutions',
            'AI M&A and partnerships',
            'Future of work with AI',
            'Ethical AI leadership',
            'AI innovation strategies'
        ],
        tools: [
            'Executive AI simulations',
            'Industry benchmarking tools',
            'Innovation labs and proofs of concept',
            'Advisory board frameworks',
            'Thought leadership platforms'
        ],
        deliverables: [
            'Lead C-suite AI strategy',
            'Drive major AI deals ($1M+)',
            'Speak at conferences',
            'Build AI practices',
            'Mentor teams on AI sales'
        ],
        training: [
            {
                name: 'Advanced training coming soon',
                url: '#',
                duration: 'TBD'
            }
        ]
    }
};
