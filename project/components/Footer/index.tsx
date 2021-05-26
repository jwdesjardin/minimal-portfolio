import Link from 'next/link'
import React from 'react'
import { LogoSVG } from '../Icons'
import SocialLinks from '../SocialLinks'

export const Footer = () => {
	return (
		<footer className='bg-myGrey-900 py-14 md:py-2'>
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
				<SocialLinks fillColor='#fff'></SocialLinks>
			</div>
		</footer>
	)
}
