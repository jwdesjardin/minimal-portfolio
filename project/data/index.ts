export interface ProjectData {
	slug: string
	heroImage: string
	images: string[]
	title: string
	description: string
	development_topics: string[]
	stack: string[]
	code_url?: string
	demo_url?: string
	background: string[]
}

export const Projects: ProjectData[] = [
	{
		slug: 'manage',
		heroImage: '/images/detail/desktop/image-manage-hero.jpg',
		images: [
			'/images/detail/desktop/image-manage-preview-1@2x.jpg',
			'/images/detail/desktop/image-manage-preview-2@2x.jpg',
		],
		title: 'Manage',
		description: `This project required me to build a fully responsive landing page to the designs 
    provided. I used HTML5, along with CSS Grid and JavaScript for the areas that 
    required interactivity, such as the testimonial slider.`,
		development_topics: ['Interaction Design', 'Front End Development'],
		stack: ['HTML', 'CSS', 'JS'],
		code_url: '',
		demo_url: '',
		background: [
			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: 'bookmark',
		heroImage: '/images/detail/desktop/image-bookmark-hero.jpg',
		images: [
			'/images/detail/desktop/image-bookmark-preview-1@2x.jpg',
			'/images/detail/desktop/image-bookmark-preview-2@2x.jpg',
		],
		title: 'Bookmark',
		description: `This project required me to build a fully responsive landing page to the designs provided. I
    used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity,
    such as the features section.`,
		development_topics: ['Interaction Design', 'Front End Development'],
		stack: ['HTML', 'CSS', 'JS'],
		code_url: '',
		demo_url: '',
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that enables
    you to practice building websites to a design and project brief. Each challenge includes
    mobile and desktop designs to show how the website should look at different screen sizes.
    Creating these projects has helped me refine my workflow and solve real-world coding
    problems. I’ve learned something new with each project, helping me to improve and adapt my
    style.`,
		],
	},
	{
		slug: 'insure',
		heroImage: '/images/detail/desktop/image-insure-hero.jpg',
		images: [
			'/images/detail/desktop/image-insure-preview-1@2x.jpg',
			'/images/detail/desktop/image-insure-preview-2@2x.jpg',
		],
		title: 'Insure',
		description: `This was a small project which mostly consisted of HTML and CSS. I built a 
    fully-responsive landing page. The only JavaScript this project required was 
    to enable the toggling of the mobile navigation.`,
		development_topics: ['Interaction Design', 'Front End Development'],
		stack: ['HTML', 'CSS', 'JS'],
		code_url: '',
		demo_url: '',
		background: [
			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: 'fylo',
		heroImage: '/images/detail/desktop/image-fylo-hero.jpg',
		images: [
			'/images/detail/desktop/image-fylo-preview-1@2x.jpg',
			'/images/detail/desktop/image-fylo-preview-2@2x.jpg',
		],
		title: 'Fylo',
		description: `This project was built in pure HTML and CSS. I had mobile and desktop designs to 
    work to and built it so that it was fully-responsive. I took a mobile-first approach 
    and used modern CSS like Flexbox and Grid for layout purposes.`,
		development_topics: ['Interaction Design', 'Front End Development'],
		stack: ['HTML', 'CSS', 'JS'],
		code_url: '',
		demo_url: '',
		background: [
			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
]
