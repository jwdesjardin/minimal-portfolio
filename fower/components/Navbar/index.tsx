import Link from 'next/link'

import { Box } from '@fower/react'
import { styled } from '@fower/styled'
import React from 'react'
import { HamburgerSVG, LogoSVG } from '../Icons'

export const Navbar = () => {
	const Logo = styled(LogoSVG)
	const Hamburger = styled(HamburgerSVG)

	return (
		<Box flex toBetween toCenterY>
			<Logo></Logo>

			<Box hidden flex--md textSM textLG--sm text4XL--md text6XL--lg>
				<Link href='/home'>Home</Link>
				<Link href='/projects'>Portfolio</Link>
				<Link href='/contact'>Contact Me</Link>
			</Box>

			<Hamburger block hidden--md></Hamburger>
		</Box>
	)
}
