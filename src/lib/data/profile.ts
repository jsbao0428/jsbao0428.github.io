export const profile = {
	name: 'Yiming (Polo) Huang',
	title: 'Forward Deployed Engineer',
	location: 'Taipei, Taiwan',
	avatar: '/avatar.jpg',
	stats: [
		{ value: '6+', label: 'Years Exp.' },
		{ value: '100+', label: 'Pipelines' },
		{ value: '500+', label: 'Users Served' }
	],
	skills: [
		'Data Engineering',
		'Backend Development',
		'MLOps',
		'Python',
		'FastAPI',
		'Airflow',
		'Docker',
		'Kubernetes',
		'LLM / AI Agents',
		'LangGraph',
		'CI/CD',
		'ELK Stack'
	],
	experience: [
		{
			company: 'Shopee',
			role: 'Forward Deployed Engineer',
			type: 'Full-time',
			location: 'Taipei, Taiwan',
			period: 'Mar 2023 - Present',
			description:
				'Partner with internal teams to turn ambiguous operational challenges into production-ready AI systems. Designed and built an autonomous code-repair agent that takes reported bugs from intake and RCA through isolated implementation, deterministic verification, independent review, and GitLab delivery, with resumable execution and policy-based safety gates. Own solutions end to end—from discovery and architecture to rollout, observability, and continuous improvement—while delivering agentic and data platforms across LangGraph, FastAPI, Airflow, and Kubernetes.',
			current: true
		},
		{
			company: 'Shopee',
			role: 'Machine Learning Engineer',
			type: 'Full-time',
			location: 'Taipei, Taiwan',
			period: 'Sep 2019 - Feb 2023',
			description:
				'Designed a large-scale Similar Product Search platform serving 15M products using multi-modal embeddings (VGG + Sentence-BERT) with Faiss ANN indexing. Built an Image Copy Detection System (ResNet) achieving 95% accuracy. Engineered distributed crawling and task systems (Celery, RabbitMQ), reducing processing time by 90%.',
			current: false
		},
		{
			company: 'Shopee',
			role: 'Data Science Intern',
			type: 'Internship',
			location: 'Taipei, Taiwan',
			period: 'Sep 2018 - Sep 2019',
			description:
				'Built automated data reporting pipelines for daily user traffic insights. Developed high-volume web crawlers collecting ~3M competitor records daily. Performed data cleaning and feature analysis, reducing model training cost by ~50%.',
			current: false
		}
	],
	contacts: [
		{ icon: 'mail', label: 'toy042897@gmail.com', copyValue: 'toy042897@gmail.com' },
		{ icon: 'open_in_new', label: 'LinkedIn', href: 'https://www.linkedin.com/in/jsbao', external: true },
		{ icon: 'code', label: 'GitHub', href: 'https://github.com/jsbao0428', external: true }
	],
	highlights: [
		{ title: 'Speaker (Talk & Tutorial)', event: '2022 PyCon APAC', period: 'Sep 2022', href: 'https://tw.pycon.org/2022/zh-hant/conference/talk/237' },
		{ title: 'Lecturer', event: 'Happy Coding Online Course', period: '2020' }
	],
	education: [
		{
			degree: 'B.S. Big Data Management',
			school: 'Soochow University',
			period: '2015 - 2019'
		}
	]
};
