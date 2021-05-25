import React from 'react'

export const ProjectDetails = () => {
	return (
		<div className='content-container section-border-y-grey py-6 xl:w-5/12 xl:py-12 xl:mr-12'>
			<h2 className='heading-text inline-block md:mb-0 xl:mb-6 '>Bookmark</h2>
			<p className='normal-text md:float-right md:w-1/2 md:px-6 xl:float-none xl:pl-0 xl:w-full '>
				This project required me to build a fully responsive landing page to the designs provided. I
				used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity,
				such as the features section.
			</p>
			<div className='py-6  '>
				<p className='accent-text'>Interaction Design / Front End Development</p>
				<p className='accent-text'>HTML / CSS / JS</p>
			</div>
			<button className='primary-button  '>Visit Website</button>
		</div>
	)
}
