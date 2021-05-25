import React from 'react'

export const ProjectContent = () => {
	return (
		<div className='py-12 xl:w-7/12 xl:pl-12'>
			<h2 className='heading-text-thin mb-6'>Project Background</h2>
			<p className='normal-text mb-10 '>
				This project was a front-end challenge from Frontend Mentor. It’s a platform that enables
				you to practice building websites to a design and project brief. Each challenge includes
				mobile and desktop designs to show how the website should look at different screen sizes.
				Creating these projects has helped me refine my workflow and solve real-world coding
				problems. I’ve learned something new with each project, helping me to improve and adapt my
				style.
			</p>
			<h2 className='heading-text-thin mb-10'>Static Previews</h2>
			<img className='mb-8' src='/images/detail/desktop/image-bookmark-preview-1@2x.jpg' alt='' />
			<img src='/images/detail/desktop/image-bookmark-preview-2@2x.jpg' alt='' />
		</div>
	)
}
