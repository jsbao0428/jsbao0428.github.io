export interface Project {
	title: string;
	category: string;
	description: string;
	image: string;
	link?: string;
}

export const projects: Project[] = [
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
	}
];
