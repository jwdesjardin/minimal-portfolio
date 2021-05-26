import React from 'react'

export const ProjectHero = ({ imgURL }: { imgURL: string }) => {
	return (
		<section className='content-container pt-0 md:pt-24 pb-10 xl:pb-24 '>
			<img src={imgURL} alt='' />
		</section>
	)
}
