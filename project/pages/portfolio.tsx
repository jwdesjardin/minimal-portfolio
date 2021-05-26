import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { ProjectCard } from '../components/ProjectCard'
import { Interested } from '../components/Interested'
import { Footer } from '../components/Footer'
import React from 'react'
import { HeadComponent, Layout } from '../components/Layout'

export default function Portfolio() {
	return (
		<Layout>
			<HeadComponent title='Portfolio'></HeadComponent>
			{/* 8px spacer */}
			<div className='h-1'></div>
			<ProjectCard
				direction='left'
				imgURL='/images/portfolio/desktop/image-portfolio-manage.jpg'
				title='Manage'
				desc='This project required me to build a fully responsive landing page to the designs provided. 
        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
        such as the testimonial slider.'
			></ProjectCard>
			<ProjectCard
				direction='right'
				imgURL='/images/portfolio/desktop/image-portfolio-bookmark.jpg'
				title='Bookmark'
				desc='This project required me to build a fully responsive landing page to the designs provided. I 
        used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such 
        as the features section.'
			></ProjectCard>
			<ProjectCard
				direction='left'
				imgURL='/images/portfolio/desktop/image-portfolio-insure.jpg'
				title='Insure'
				desc='This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive 
        landing page. The only JavaScript this project required was to enable the toggling of the 
        mobile navigation.'
			></ProjectCard>
			<ProjectCard
				direction='right'
				imgURL='/images/portfolio/desktop/image-portfolio-fylo.jpg'
				title='Fylo'
				desc='This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and 
        built it so that it was fully-responsive. I took a mobile-first approach and used modern 
        CSS like Flexbox and Grid for layout purposes.'
			></ProjectCard>
			<Interested></Interested>
		</Layout>
	)
}
