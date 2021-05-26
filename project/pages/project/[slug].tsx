import Head from 'next/head'
import React from 'react'
import { Navbar } from '../../components/Navbar'

// ProjectHero
import { ProjectHero } from '../../components/ProjectHero'
import { ProjectDetails } from '../../components/ProjectDetails'
import { ProjectContent } from '../../components/ProjectContent'
// ProjectDetails
// ProjectContent
// Navigation

import { Interested } from '../../components/Interested'
import { Footer } from '../../components/Footer'
import Navigation from '../../components/Navigation'

import { Projects } from '../../data'

import { InferGetStaticPropsType } from 'next'

export async function getStaticProps({ params }) {
	const data = Projects.find((project) => project.slug === params.slug)

	return {
		props: {
			data,
		},
	}
}

export async function getStaticPaths() {
	const paths = Projects.map((project) => ({
		params: { slug: project.slug },
	}))

	return { paths, fallback: false }
}

export default function Project({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
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
