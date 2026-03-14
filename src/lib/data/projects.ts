export interface Project {
	title: string;
	category: string;
	description: string;
	image: string;
	link?: string;
}

export const projects: Project[] = [
	{
		title: 'Eco-Friendly App',
		category: 'Mobile App Design',
		description:
			'A sustainable living companion helping users track carbon footprint and discover green alternatives.',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuD9GbjNIWcfw9QBq6X1Z4bonFTmuICN4zF2fYjPm4AaJwoQijJRsi2zQebvBFbkm-3Hr0Ia9siJoV0LQKPN4XdIWJpK_KuBoITG4WYTP-gqEDyPXVaIBYWiba6j3ctK0UUg2NAVCldEiWPKLP5FIVm1zYrGIOzJxnQrMwyYpaiPizJlSk3-UbHZ77B2IWjUNZiOiBjsPERKlzoW7XYxw1NlC9bj7kiSLI0cxkF_qy3JCvz5CdsLPy_OfGQP1Cr2YZpjFlTrE4IKgz0'
	},
	{
		title: 'Visionary Brand',
		category: 'Branding & Identity',
		description:
			'Complete visual identity system for an AI-driven tech startup focusing on clarity and futurism.',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuBII4aA8MZUO0MXXZvNLYkp6T_UOYFEllOJVUWQt2Dce4yoxw9NaruuYran5ewyCFAHgiOh1zYCYChB4-8yxXkolGRA4pma7nup93VG33d6EXi352DKOQprQnupv-1CIXH9RIJmA2TP-CMSavUCAu2UxyBrzMEFsj50fCA8C8DdAuE2NtK6oZvm1RRAo0YusNX_6QC39st0SrZe1PsJYJteWjq7j02bHuAU96I4MylJ_IfKnkf9LK5otdIUwyyTSaSiCEKcLiJLHjw'
	},
	{
		title: 'Nova Analytics',
		category: 'Web Application',
		description:
			'Designing complex data visualization into a simple and intuitive analytics platform.',
		image:
			'https://lh3.googleusercontent.com/aida-public/AB6AXuAXNeOKCB4me49zXdeM8gNppgp7YwMgSWHUwTN2facYqykyGtMEXuQXe5X50u-gyadlzsxGUSyliVQC24ib5LVUzUuBBHHeu3I2SeRyIV2TwWFCl8Dptk2Y3nNvSNw1MDPx54MauSEwLpC2D6kiVV8EUq9QRgeUe_yvUOPuOAsXH-Iti2AvYkAs_CSqP0F9PM9ym2kTNyqRZv8sbauaZeK5MesGx5Hqe_J8n_6o7MCVFH1fXrSC3NyJnajXginmy8wuR1Nk29Akk6A'
	}
];
