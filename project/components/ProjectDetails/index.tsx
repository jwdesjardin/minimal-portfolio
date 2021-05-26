import Link from 'next/link'
import React from 'react'

export const ProjectDetails = ({
	title,
	description,
	topics,
	stack,
	codeURL,
	demoURL,
}: {
	title: string
	description: string
	topics: string[]
	stack: string[]
	codeURL: string
	demoURL: string
}) => {
	const stringConcatenator = (array: string[]) => {
		return array.reduce((a, c) => (a += c + ' / '), '').slice(0, -2)
	}

	const topicsString = stringConcatenator(topics)
	const stackString = stringConcatenator(stack)

	return (
		<div className='content-container section-border-y-grey py-6 xl:w-5/12 xl:py-12 xl:mr-12'>
			<h2 className='heading-text inline-block md:mb-0 xl:mb-6 '>{title}</h2>
			<p className='normal-text md:float-right md:w-1/2 md:px-6 xl:float-none xl:pl-0 xl:w-full '>
				{description}
			</p>
			<div className='py-6  '>
				<p className='accent-text'>{stackString}</p>
				<p className='accent-text'>{topicsString}</p>
			</div>
			<Link href={demoURL}>
				<button className='primary-button'>View Demo</button>
			</Link>
			<Link href={codeURL}>
				<button className='secondary-button'>View Code</button>
			</Link>
		</div>
	)
}
