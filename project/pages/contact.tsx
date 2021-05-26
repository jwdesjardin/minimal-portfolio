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

export default function Contact() {
	return (
		<div className=''>
			<Head>
				<title>Contact Me</title>
				<link rel='icon' href='/images/favicon-32x32.png' />
			</Head>

			<main className='w-full'>
				<Navbar></Navbar>

				<Footer></Footer>
			</main>
		</div>
	)
}
