import React from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { Interested } from '../components/Interested'
import { HeadComponent, Layout } from '../components/Layout'

import { InferGetStaticPropsType } from 'next'
import { Projects } from '../data'

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
			<div className='h-1 md:h-10'></div>
			{projects.map((project, idx) => (
				<ProjectCard
					key={project.slug}
					direction={idx % 2 === 0 ? 'left' : 'right'}
					imgURL={project.previewImage}
					title={project.title}
					desc={project.description}
					slug={project.slug}
				></ProjectCard>
			))}

			<Interested></Interested>
		</Layout>
	)
}
