import Head from 'next/head'
import { Navbar } from '../components/Navbar'

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className=''>
				<Navbar></Navbar>
			</main>
		</div>
	)
}
