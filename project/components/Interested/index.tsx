import Link from 'next/link'
import React from 'react'

export const Interested = () => {
	return (
		<div className='content-container flex-center md:flex-row mt-16 md:mt-20 mb-20 md:mb-24 xl:mb-36'>
			<h2 className='heading-text md:w-1/2 xl:w-1/3 px-0 text-center xl:px-0  md:flex-shrink-0 mb-10 '>
				Interested in doing a project together?
			</h2>
			{/* grey box divider */}
			<div className='h-1 bg-myGrey-300 w-full mx-6 hidden md:block'></div>
			<Link href='/contact'>
				<button className='primary-button flex-shrink-0'>Contact Me</button>
			</Link>
		</div>
	)
}
