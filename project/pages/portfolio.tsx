import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { ProjectCard } from '../components/ProjectCard'
import { Interested } from '../components/Interested'
import { Footer } from '../components/Footer'
import React from 'react'
import { HeadComponent, Layout } from '../components/Layout'

import { Projects } from '../data'
import { InferGetStaticPropsType } from 'next'
export async function getStaticProps() {
	return {
		props: {
			projects: Projects,
		},
	}
}

export default function Portfolio({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout>
			<HeadComponent title='Portfolio'></HeadComponent>
			{/* 8px spacer */}
			<div className='h-1'></div>
			{projects.map((project, idx) => (
				<ProjectCard
					key={project.slug}
					direction={idx % 2 === 0 ? 'left' : 'right'}
					imgURL={project.previewImage}
					title={project.title}
					desc={project.description}
				></ProjectCard>
			))}

			<Interested></Interested>
		</Layout>
	)
}
