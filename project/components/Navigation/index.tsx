import React from 'react'
import { ArrowLeftSVG, ArrowRightSVG } from '../Icons'

export const Navigation = () => {
	return (
		<div className='content-container section-border-y-grey flex flex-row'>
			<div className='w-1/2 border-r-2 border-myGrey-300 pb-6 md:pb-8 md:flex md:items-center  md:flex-row'>
				<div className='my-6 md:mr-8'>
					<ArrowLeftSVG></ArrowLeftSVG>
				</div>
				<div className='md:mt-8'>
					<h2 className='heading-text-thin-md'>Manage</h2>
					<p className='medium-text text-gray-400'>Previous Project</p>
				</div>
			</div>
			<div className='flex flex-col items-end ml-auto text-right pb-6 md:pb-8 md:flex md:items-center  md:flex-row-reverse'>
				<div className='my-6 md:ml-8'>
					<ArrowRightSVG></ArrowRightSVG>
				</div>
				<div className='md:mt-8'>
					<h2 className='heading-text-thin-md'>Insure</h2>
					<p className='medium-text text-gray-400'>Next Project</p>
				</div>
			</div>
		</div>
	)
}
