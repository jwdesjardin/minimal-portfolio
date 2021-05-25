import Link from 'next/link'

import { Box, chakra, Container } from '@chakra-ui/react'

import React from 'react'
import { HamburgerSVG, LogoSVG } from './Icons'

export const Navbar = () => {
	const Logo = chakra(LogoSVG)
	const Hamburger = chakra(HamburgerSVG)

	return (
		<Container maxW='60rem'>
			<Box d='flex' justifyContent='space-between' alignItems='center' w='full' p={[4, 6, 8]}>
				<Logo></Logo>

				<Box d={['none', 'flex']} w='300px' justifyContent='space-between'>
					<Link href='/home'>Home</Link>
					<Link href='/projects'>Portfolio</Link>
					<Link href='/contact'>Contact Me</Link>
				</Box>

				<Box d={['inline', 'none']}>
					<Hamburger></Hamburger>
				</Box>
			</Box>
		</Container>
	)
}
