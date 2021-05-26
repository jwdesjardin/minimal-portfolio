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
			<ProjectCard></ProjectCard>
			<Interested></Interested>
		</Layout>
	)
}
