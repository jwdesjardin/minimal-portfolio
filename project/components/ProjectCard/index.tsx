import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

// export const ProjectCard = () => {
// 	return (
// 		<section className={styles.container}>
// 			<div className={styles.imagebox}>
// 				<Image
// 					src='/images/portfolio/mobile/image-portfolio-manage.jpg'
// 					alt=''
// 					height='314'
// 					width='339'
// 				/>
// 			</div>
// 			<div className={styles.content}>
// 				<h2>Manage</h2>
// 				<p>
// 					This project required me to build a fully responsive landing page to the designs provided.
// 					I used HTML5, along with CSS Grid and JavaScript for the areas that required
// 					interactivity, such as the testimonial slider.
// 				</p>
// 				<button>View Project</button>
// 			</div>
// 		</section>
// 	)
// }
export const ProjectCard = () => {
	return (
		<section className='flex flex-col md:flex-row items-center justify-center container'>
			<div className='flex justify-center items-center md:w-1/2 flex-shrink-0'>
				<img
					src='/images/portfolio/desktop/image-portfolio-manage.jpg'
					alt=''
					height='500'
					width='540'
				/>
			</div>
			<div className='flex flex-col items-start border-b-2 border-t-2 border-grey py-4 my-6 md:w-1/2 md:py-8 md:ml-16'>
				<h2 className='text-5xl py-4 font-serif font-bold'>Manage</h2>
				<p className='pt-2 font-sans text-sm leading-8'>
					This project required me to build a fully responsive landing page to the designs provided.
					I used HTML5, along with CSS Grid and JavaScript for the areas that required
					interactivity, such as the testimonial slider.
				</p>
				<button className='border-myGrey-900 px-6 py-3 my-4 border-2 uppercase'>
					View Project
				</button>
			</div>
		</section>
	)
}
