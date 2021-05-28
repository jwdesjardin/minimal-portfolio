import React from 'react'
import Image from 'next/image'

export const ProjectHero = ({ imgURL }: { imgURL: string }) => {
	return (
		<section className='content-container pt-0 md:pt-16 pb-10 xl:pb-24 '>
			<Image src={imgURL} alt='' height='500' width='1110' />
		</section>
	)
}
