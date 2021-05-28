import React, { useState } from 'react'
import { HamburgerSVG, LogoSVG } from '../Icons'
import Link from 'next/link'

export const Navbar = () => {
	const [menu, toggleMenu] = useState(false)

	return (
		<header className='flex justify-between items-center py-8 content-container'>
			<LogoSVG></LogoSVG>

			<div className='hidden md:flex justify-between w-1/3 xl:w-1/4 items-center uppercase text-xxs'>
				<Link href='/home'>Home</Link>
				<Link href='/portfolio'>Portfolio</Link>
				<Link href='/contact'>Contact Me</Link>
			</div>

			<div className='block md:hidden' onClick={() => toggleMenu(!menu)}>
				<HamburgerSVG></HamburgerSVG>
			</div>

			{menu && (
				<>
					<div className='menu md:hidden' onClick={() => toggleMenu(false)}>
						<Link href='/home'>
							<div className='menu-button link-text'>Home</div>
						</Link>
						<Link href='/portfolio'>
							<div className='menu-button link-text'>Portfolio</div>
						</Link>
						<Link href='/contact'>
							<div className='menu-button link-text'>Contact Me</div>
						</Link>
					</div>
					{/* close overlay */}
					<div
						id='overlay'
						className='fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-25 z-30'
						onClick={(e) => {
							toggleMenu(false)
						}}
					></div>
				</>
			)}
		</header>
	)
}
