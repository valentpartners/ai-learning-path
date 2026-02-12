// Content data for each level
const contentData = {
    'foundation': {
        title: 'AI Fundamentals',
        subtitle: 'Common Base for All Tracks',
        concepts: [
            'AI vs ML vs Deep Learning distinctions',
            'Supervised, unsupervised, and reinforcement learning basics',
            'Large Language Models (LLMs) overview',
            'Prompt engineering fundamentals',
            'AI ethics and responsible AI principles'
        ],
        tools: [
            'ChatGPT, Claude (hands-on experience)',
            'Azure AI Studio basics',
            'AWS Bedrock console navigation',
            'Basic API concepts'
        ],
        deliverables: [
            'Execute basic prompts',
            'Understand use case identification',
            'Recognize AI capabilities and limitations'
        ],
        training: [
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
            {
                name: 'Building Effective Agents',
                url: 'https://www.anthropic.com/engineering/building-effective-agents',
                duration: ''
            },
            {
                name: 'Intro to MCP',
                url: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol',
                duration: ''
            },
            {
                name: 'Advanced MCP',
                url: 'https://anthropic.skilljar.com/model-context-protocol-advanced-topics',
                duration: ''
            }
        ]
    },
    'aws-beginner': {
        title: 'AWS Track - Beginner',
        subtitle: 'Build and deploy simple AI solutions',
        concepts: [
            'Bedrock runtime APIs',
            'Knowledge Bases for RAG',
            'Guardrails implementation',
            'Agents for Bedrock',
            'Model selection criteria (cost, latency, performance)'
        ],
        tools: [
            'Boto3 (AWS Python SDK)',
            'AWS Lambda for AI',
            'Amazon Kendra',
            'OpenSearch Serverless',
            'Bedrock Playground'
        ],
        deliverables: [
            'Build Bedrock chatbot',
            'Implement RAG with Knowledge Bases',
            'Create serverless AI application'
        ],
        training: [
            {
                name: 'Fundamentals of Generative AI',
                url: 'https://skillbuilder.aws/learn/FKXM21R555/fundamentals-of-generative-ai/ZFX96NREH4',
                duration: '3 hours'
            },
            {
                name: 'Agentic AI Foundations',
                url: 'https://skillbuilder.aws/learning-plan/HDZPWG63J3/agentic-ai-foundations/R4E9CC77T7',
                duration: '6 hours'
            }
        ]
    },
    'aws-intermediate': {
        title: 'AWS Track - Intermediate',
        subtitle: 'Design enterprise-grade AI solutions',
        concepts: [
            'Model customization (fine-tuning)',
            'Multi-agent orchestration',
            'Bedrock Studio workflows',
            'Advanced guardrails and evaluation',
            'Security and compliance (data residency, PII handling)'
        ],
        tools: [
            'SageMaker integration',
            'LangChain with Bedrock',
            'Step Functions for orchestration',
            'CloudWatch for monitoring',
            'MLOps basics (versioning, monitoring)'
        ],
        deliverables: [
            'Custom fine-tuned models',
            'Multi-agent solutions',
            'Production monitoring setup'
        ],
        training: [
            {
                name: 'AWS AI Practitioner Learning Plan',
                url: 'https://skillbuilder.aws/learning-plan/G8ENMJ5QBE/aws-artificial-intelligence-practitioner-learning-plan/SU2A1EJM1A',
                duration: '8 hours'
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
            {
                name: 'Amazon Bedrock Agent Core Getting Started',
                url: 'https://skillbuilder.aws/learn/SXMNDA9AJ1/amazon-bedrock-agentcore-getting-started/6SGJD8ZV9A',
                duration: '1 hour'
            }
        ]
    },
    'aws-expert': {
        title: 'AWS Track - Expert',
        subtitle: 'Architect complex AI systems',
        concepts: [
            'Advanced model optimization',
            'Multi-region AI architectures',
            'AI cost optimization strategies',
            'Security and compliance at scale',
            'AI governance frameworks'
        ],
        tools: [
            'Custom models on SageMaker',
            'AWS Control Tower for AI governance',
            'FinOps for AI',
            'Advanced observability (X-Ray, CloudTrail)',
            'Infrastructure as Code for AI (Terraform)'
        ],
        deliverables: [
            'Enterprise AI architecture',
            'AWS AI Center of Excellence design',
            'Thought leadership content',
            'Custom models for specific domains'
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
        subtitle: 'Build and deploy simple AI solutions',
        concepts: [
            'Azure OpenAI API integration',
            'Azure AI Search for RAG',
            'Prompt Flow',
            'Content Safety filters',
            'Model selection criteria'
        ],
        tools: [
            'Azure SDK for Python',
            'Azure Functions for AI',
            'Azure AI Search',
            'Document Intelligence',
            'Azure OpenAI Playground'
        ],
        deliverables: [
            'Build Azure OpenAI chatbot',
            'Implement RAG solution',
            'Deploy AI Functions'
        ],
        training: [
            {
                name: 'Introduction to AI in Azure',
                url: 'https://learn.microsoft.com/en-us/training/paths/introduction-to-ai-in-azure/',
                duration: '11 hours'
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
            'Fine-tuning Azure OpenAI models',
            'Multi-agent patterns',
            'AI Studio project management',
            'Evaluation and benchmarking',
            'AI orchestration patterns'
        ],
        tools: [
            'Azure ML pipelines',
            'Semantic Kernel',
            'Azure Monitor for AI',
            'Responsible AI dashboard',
            'Prompt flow and experimentation tools'
        ],
        deliverables: [
            'Custom Azure OpenAI models',
            'Complex Prompt Flow solutions',
            'Enterprise deployment patterns'
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
            'Azure ML advanced features',
            'Azure Arc for AI',
            'Azure Policy for AI governance',
            'Cost Management analytics',
            'Infrastructure as Code (Bicep)'
        ],
        deliverables: [
            'Enterprise AI architecture',
            'Azure AI Center of Excellence design',
            'Thought leadership content',
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

// Sidebar functionality
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeSidebar = document.getElementById('close-sidebar');
const sidebarTitle = document.getElementById('sidebar-title');
const sidebarContent = document.getElementById('sidebar-content');

function openSidebar(level) {
    const data = contentData[level];
    if (!data) return;

    sidebarTitle.textContent = data.title;
    
    let content = `<p class="sidebar-subtitle">${data.subtitle}</p>`;
    
    // Concepts Section
    content += '<div class="collapsible-section">';
    content += '<div class="section-header" onclick="toggleSection(this)">';
    content += '<span class="toggle-icon">▼</span>';
    content += '<h3>Concepts</h3>';
    content += '</div>';
    content += '<div class="section-content active">';
    content += '<ul>';
    data.concepts.forEach(item => {
        content += `<li>${item}</li>`;
    });
    content += '</ul>';
    content += '</div>';
    content += '</div>';
    
    // Tools & Technologies Section
    content += '<div class="collapsible-section">';
    content += '<div class="section-header" onclick="toggleSection(this)">';
    content += '<span class="toggle-icon">▼</span>';
    content += '<h3>Tools & Technologies</h3>';
    content += '</div>';
    content += '<div class="section-content active">';
    content += '<ul>';
    data.tools.forEach(item => {
        content += `<li>${item}</li>`;
    });
    content += '</ul>';
    content += '</div>';
    content += '</div>';
    
    // Deliverables Section
    content += '<div class="collapsible-section">';
    content += '<div class="section-header" onclick="toggleSection(this)">';
    content += '<span class="toggle-icon">▼</span>';
    content += '<h3>Deliverables</h3>';
    content += '</div>';
    content += '<div class="section-content active">';
    content += '<ul>';
    data.deliverables.forEach(item => {
        content += `<li>${item}</li>`;
    });
    content += '</ul>';
    content += '</div>';
    content += '</div>';
    
    // Training Links Section
    if (data.training && data.training.length > 0) {
        content += '<div class="collapsible-section">';
        content += '<div class="section-header" onclick="toggleSection(this)">';
        content += '<span class="toggle-icon">▼</span>';
        content += '<h3>Training Resources</h3>';
        content += '</div>';
        content += '<div class="section-content active">';
        content += '<div class="training-links">';
        data.training.forEach(training => {
            content += '<div class="training-item">';
            if (training.url === '#') {
                content += `<span class="training-name">${training.name}</span>`;
            } else {
                content += `<a href="${training.url}" target="_blank" class="training-link">${training.name}</a>`;
            }
            if (training.duration) {
                content += `<span class="training-duration">${training.duration}</span>`;
            }
            content += '</div>';
        });
        content += '</div>';
        content += '</div>';
        content += '</div>';
    }
    
    sidebarContent.innerHTML = content;
    sidebar.classList.add('active');
    overlay.classList.add('active');
}

function toggleSection(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.textContent = '▶';
    } else {
        content.classList.add('active');
        icon.textContent = '▼';
    }
    
    // Ensure smooth animation by redrawing
    void content.offsetHeight;
}

function closeSidebarFunc() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Add click handlers
document.querySelectorAll('.clickable').forEach(element => {
    element.addEventListener('click', function() {
        const level = this.getAttribute('data-level');
        openSidebar(level);
    });
});

closeSidebar.addEventListener('click', closeSidebarFunc);
overlay.addEventListener('click', closeSidebarFunc);

// Toggle all sections expand/collapse
function toggleAllSections(expandAll) {
    const sections = document.querySelectorAll('.section-content');
    const btn = document.getElementById('toggle-all-btn');
    
    sections.forEach(section => {
        if (expandAll) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
    
    // Update icon for all toggle icons
    const icons = document.querySelectorAll('.toggle-icon');
    icons.forEach(icon => {
        icon.textContent = expandAll ? '▼' : '▶';
    });
    
    // Update button text
    btn.textContent = expandAll ? 'Collapse All' : 'Expand All';
}

// Add listener to toggle all button
document.getElementById('toggle-all-btn').addEventListener('click', function() {
    const allExpanded = document.querySelector('.section-content:not(.active)') === null;
    toggleAllSections(!allExpanded);
});

// Optional: Add hover effect
document.querySelectorAll('.clickable').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.opacity = '0.8';
    });
    element.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
});