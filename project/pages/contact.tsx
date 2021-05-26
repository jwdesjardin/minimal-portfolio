import Head from 'next/head'
import React from 'react'
import { Navbar } from '../components/Navbar'

// ProjectHero
import { ProjectHero } from '../components/ProjectHero'
import { ProjectDetails } from '../components/ProjectDetails'
import { ProjectContent } from '../components/ProjectContent'
// ProjectDetails
// ProjectContent
// Navigation

import { Interested } from '../components/Interested'
import { Footer } from '../components/Footer'
import Navigation from '../components/Navigation'
import SocialLinks from '../components/SocialLinks'

export default function Contact() {
	return (
		<div className=''>
			<Head>
				<title>Contact Me</title>
				<link rel='icon' href='/images/favicon-32x32.png' />
			</Head>

			<main className='w-full'>
				<Navbar></Navbar>

				{/* Get in touch */}
				<section className='content-container section-border-y-grey py-8 xl:py-10 mt-2 md:mt-12 mb-8 xl:flex'>
					<h2 className='heading-text mb-6 xl:w-5/12'>Get in Touch</h2>
					<div className='xl:w-7/12'>
						<p className='normal-text  mb-6  '>
							I’d love to hear about what you’re working on and how I could help. I’m currently
							looking for a new role and am open to a wide range of opportunities. My preference
							would be to find a position in a company in London. But I’m also happy to hear about
							opportunites that don’t fit that description. I’m a hard-working and positive person
							who will always approach each task with a sense of purpose and attention to detail.
							Please do feel free to check out my online profiles below and get in touch using the
							form.
						</p>
						<SocialLinks fillColor='#33323D'></SocialLinks>
					</div>
				</section>

				<Footer></Footer>
			</main>
		</div>
	)
}
