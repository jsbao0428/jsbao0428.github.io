export interface Project {
	title: string;
	category: string;
	description: string;
	image: string;
	link?: string;
}

export const projects: Project[] = [
	{
		title: 'Autonomous Code Repair Agent',
		category: 'AI / Developer Tooling',
		description:
			'An autonomous coding-agent system that diagnoses reported bugs, implements fixes in isolated worktrees, runs deterministic verification and independent review, and delivers validated GitLab merge requests with resumable execution and safety gates.',
		image:
			'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80'
	},
	{
		title: 'LLM Compliance Agent',
		category: 'AI / LangGraph',
		description:
			'Graph-based multi-agent system using LangGraph to automate regulatory notice processing, product delisting, and alert generation. Handles 200+ daily government emails with 99.5% accuracy.',
		image:
			'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80'
	},
	{
		title: 'Similar Product Search Platform',
		category: 'ML / Data Pipeline',
		description:
			'Large-scale product similarity search serving 15M products using multi-modal embeddings (VGG + Sentence-BERT) with Faiss ANN indexing, enabling 10s-level batch retrieval.',
		image:
			'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80'
	},
	{
		title: 'Internal Backend Platform',
		category: 'Backend / FastAPI',
		description:
			'RESTful APIs built with FastAPI serving 500+ users across finance workflows. Features Google OAuth SSO, RBAC, Docker/K8s deployment, and ELK-based centralized logging.',
		image:
			'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
	},
	{
		title: 'AI SRE',
		category: 'AI / SRE / LangGraph',
		description:
			'A multi-agent Kubernetes incident response system that correlates alerts, performs RCA and safety analysis, routes human approvals, and executes policy-gated remediation with post-check verification.',
		image:
			'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
	},
	{
		title: 'BSMI & LLM Fine-Tuning',
		category: 'AI / Qwen2.5-VL / LoRA',
		description:
			'An end-to-end vision-language pipeline that LoRA fine-tunes Qwen2.5-VL-7B to match product images against BSMI certification text, then scales GPU inference to produce threshold-based pass, ban, and review decisions.',
		image:
			'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'
	}
];
