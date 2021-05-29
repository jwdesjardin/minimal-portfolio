import Head from 'next/head'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { ReactElement, ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }): ReactElement => {
	return (
		<div className=''>
			<Navbar></Navbar>
			<main>{children}</main>
			<Footer></Footer>
		</div>
	)
}

export const HeadComponent = ({ title }: { title: string }) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel='icon' href='/images/favicon-32x32.png' />
		</Head>
	)
}
