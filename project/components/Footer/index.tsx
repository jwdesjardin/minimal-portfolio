import Link from 'next/link'
import React from 'react'
import { GithubSVG, LinkedinSVG, LogoSVG, TwitterSVG } from '../Icons'

export const Footer = () => {
	return (
		<div className='bg-myGrey-900 py-14 md:py-2'>
			<div className='content-container flex-center md:flex-row md:justify-between'>
				<div className='flex flex-col md:flex-row w-full '>
					<div className='flex-center mb-10 md:mb-0 md:mr-8 xl:mr-14'>
						<LogoSVG className='' fillColor='#fff'></LogoSVG>
					</div>
					<div className='flex-center md:flex-row justify-between text-white uppercase font-sans text-xxs mb-10 md:my-6 '>
						<Link href='/home'>
							<p className='mb-8 md:mb-0 md:mr-8 xl:mr-10'>Home</p>
						</Link>
						<Link href='/projects'>
							<p className='mb-8 md:mb-0 md:mr-8 xl:mr-10'>Portfolio</p>
						</Link>
						<Link href='/contact'>
							<p className=''>Contact Me</p>
						</Link>
					</div>
				</div>
				<div className='flex items-center'>
					<Link href='#'>
						<GithubSVG className='mr-4' fillColor='#fff'></GithubSVG>
					</Link>
					<Link href='#'>
						<TwitterSVG className='mr-4' fillColor='#fff'></TwitterSVG>
					</Link>
					<Link href='#'>
						<LinkedinSVG fillColor='#fff'></LinkedinSVG>
					</Link>
				</div>
			</div>
		</div>
	)
}
