export const profile = {
	name: 'Yiming (Polo) Huang',
	title: 'Senior Data Engineer',
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
			role: 'Senior Data Engineer',
			type: 'Full-time',
			location: 'Taipei, Taiwan',
			period: 'Mar 2023 - Present',
			description:
				'Managed 100+ production Airflow pipelines processing 500GB+ data for financial reporting and MLOps. Built internal backend systems (FastAPI, Docker, K8s) serving 500+ users. Architected LLM-driven compliance agents using LangGraph with 99.5% task accuracy. Streamlined business workflows via internal platforms, reducing manual effort by 90%.',
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
