import React from 'react'
import { HamburgerSVG, LogoSVG } from '../Icons'
import Link from 'next/link'

export const Navbar = () => {
	return (
		<div className='flex justify-between items-center py-8 content-container'>
			<LogoSVG></LogoSVG>

			<div className='hidden md:flex justify-between w-1/2 xl:w-1/3 items-center uppercase '>
				<Link href='/home'>Home</Link>
				<Link href='/projects'>Portfolio</Link>
				<Link href='/contact'>Contact Me</Link>
			</div>

			<div className='block md:hidden'>
				<HamburgerSVG></HamburgerSVG>
			</div>
		</div>
	)
}
