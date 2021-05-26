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

import { Projects, ProjectData } from '../data'

import { GetStaticProps, InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			projects: Projects,
		},
	}
}

export default function Home({ projects }) {
	const data: ProjectData = projects[0]

	return (
		<div className=''>
			<Head>
				<title>Projects</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='w-full'>
				<Navbar></Navbar>
				<ProjectHero imgURL={data.heroImage}></ProjectHero>
				<section className='content-container xl:flex xl:items-start'>
					<ProjectDetails
						title={data.title}
						description={data.description}
						topics={data.development_topics}
						stack={data.stack}
						codeURL={data.code_url}
						demoURL={data.demo_url}
					></ProjectDetails>
					<ProjectContent images={data.images} background={data.background}></ProjectContent>
				</section>
				<Navigation></Navigation>
				<Interested></Interested>
				<Footer></Footer>
			</main>
		</div>
	)
}
