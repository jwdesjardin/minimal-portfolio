import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { ProjectCard } from '../components/ProjectCard'
import { Interested } from '../components/Interested'
import { Footer } from '../components/Footer'

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className=''>
				<Navbar></Navbar>
				<ProjectCard></ProjectCard>
				<Interested></Interested>
				<Footer></Footer>
			</main>
		</div>
	)
}
