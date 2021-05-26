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
							<a className='mb-8 md:mb-0 md:mr-8 xl:mr-10'>Home</a>
						</Link>
						<Link href='/portfolio'>
							<a className='mb-8 md:mb-0 md:mr-8 xl:mr-10'>Portfolio</a>
						</Link>
						<Link href='/contact'>
							<a className=''>Contact Me</a>
						</Link>
					</div>
				</div>
				<div className='flex items-center'>
					<Link href='https://github.com/jwdesjardin'>
						<GithubSVG className='mr-4 cursor-pointer' fillColor='#fff'></GithubSVG>
					</Link>
					<Link href='https://twitter.com/joey_desjardin'>
						<TwitterSVG className='mr-4 cursor-pointer' fillColor='#fff'></TwitterSVG>
					</Link>
					<Link href='https://www.linkedin.com/in/joey-desjardin/'>
						<LinkedinSVG className='cursor-pointer' fillColor='#fff'></LinkedinSVG>
					</Link>
				</div>
			</div>
		</div>
	)
}
