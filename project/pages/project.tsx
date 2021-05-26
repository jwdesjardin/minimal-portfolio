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

import ProjectData from '../data'

import { GetStaticProps, InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			data: ProjectData,
		},
	}
}

export default function Home({ data }) {
	console.log(data)
	return (
		<div className=''>
			<Head>
				<title>Projects</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='w-full'>
				<Navbar></Navbar>
				<ProjectHero></ProjectHero>
				<section className='content-container xl:flex xl:items-start'>
					<ProjectDetails></ProjectDetails>
					<ProjectContent></ProjectContent>
				</section>
				<Navigation></Navigation>
				<Interested></Interested>
				<Footer></Footer>
			</main>
		</div>
	)
}
