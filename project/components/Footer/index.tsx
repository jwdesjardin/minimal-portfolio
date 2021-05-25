import Link from 'next/link'
import React from 'react'
import { GithubSVG, LinkedinSVG, LogoSVG, TwitterSVG } from '../Icons'

export const Footer = () => {
	return (
		<div className='bg-myGrey-900 flex flex-col md:flex-row items-center justify-center py-14 md:py-2 md:justify-between px-6'>
			<div className='flex flex-col items-center justify-between md:flex-row'>
				<LogoSVG fillColor='#fff' className='my-4 '></LogoSVG>
				<div className='flex flex-col md:flex-row items-center justify-between text-white uppercase h-24 md:h-auto'>
					<Link href='/home'>Home</Link>
					<Link href='/projects'>Portfolio</Link>
					<Link href='/contact'>Contact Me</Link>
				</div>
			</div>
			<div className='flex py-4'>
				<Link href='#'>
					<GithubSVG className='mr-4' fillColor='#fff'></GithubSVG>
				</Link>
				<Link href='#'>
					<TwitterSVG className='mr-4' fillColor='#fff'></TwitterSVG>
				</Link>
				<Link href='#'>
					<LinkedinSVG className='mr-4' fillColor='#fff'></LinkedinSVG>
				</Link>
			</div>
		</div>
	)
}
