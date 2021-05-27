import React from 'react'
import Image from 'next/image'

export const ProjectContent = ({
	background,
	images,
}: {
	background: string[]
	images: string[]
}) => {
	return (
		<div className='py-12 xl:w-7/12 xl:pl-12'>
			<h2 className='heading-text-thin mb-6'>Project Background</h2>
			<div className='mb-10'>
				{background.map((text, idx) => (
					<p key={idx} className='normal-text'>
						{text}
					</p>
				))}
			</div>

			<h2 className='heading-text-thin mb-10'>Static Previews</h2>
			{images.map((image, idx) => (
				<div key={idx} className='mb-8'>
					<Image src={image} width='635' height='400' />
				</div>
			))}
		</div>
	)
}
