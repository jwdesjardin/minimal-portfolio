import React from 'react'
import Image from 'next/image'

export const ProjectCard = ({
	direction,
	title,
	desc,
	imgURL,
}: {
	direction: 'right' | 'left'
	title: string
	desc: string
	imgURL: string
}) => {
	const leftClasses = 'flex-center md:flex-row content-container mb-20'
	const rightClasses = 'flex-center md:flex-row-reverse content-container mb-20'

	const leftContentClasses =
		'flex flex-col items-start section-border-y-grey py-6 my-6 md:w-1/2 md:py-8 md:ml-16 '

	const rightContentClasses =
		'flex flex-col items-start section-border-y-grey py-6 my-6 md:w-1/2 md:py-8 md:mr-16'

	return (
		<section className={direction === 'left' ? leftClasses : rightClasses}>
			<div className='flex justify-center items-center md:w-1/2 flex-shrink-0'>
				<Image src={imgURL} alt='' height='500' width='540' />
			</div>
			<div className={direction === 'left' ? leftContentClasses : rightContentClasses}>
				<h2 className='heading-text mb-6 '>{title}</h2>
				<p className='normal-text mb-6 xl:max-w-sm'>{desc}</p>
				<button className='primary-button'>View Project</button>
			</div>
		</section>
	)
}
