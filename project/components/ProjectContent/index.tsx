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
		<div className='pt-12 pb-8 xl:w-7/12 xl:pl-12 xl:pt-0'>
			<h2 className='heading-text-thin-md mb-6'>Project Background</h2>
			<div className='mb-10'>
				{background.map((text, idx) => (
					<p key={idx} className='normal-text'>
						{text}
					</p>
				))}
			</div>

			<h2 className='heading-text-thin-md mb-10'>Static Previews</h2>
			{images.map((image, idx) => (
				<div key={idx} className='mb-8'>
					<Image src={image} width='689' height='434' />
				</div>
			))}
		</div>
	)
}
