import Link from 'next/link'
import React from 'react'
import { GithubSVG, LinkedinSVG, TwitterSVG } from '../Icons'

const SocialLinks = ({ fillColor = '#33323D' }: { fillColor?: string }): React.ReactElement => {
	return (
		<div className='flex items-center'>
			<Link href='https://github.com/jwdesjardin'>
				<GithubSVG className='mr-4 cursor-pointer' fillColor={fillColor}></GithubSVG>
			</Link>
			<Link href='https://twitter.com/joey_desjardin'>
				<TwitterSVG className='mr-4 cursor-pointer' fillColor={fillColor}></TwitterSVG>
			</Link>
			<Link href='https://www.linkedin.com/in/joey-desjardin/'>
				<LinkedinSVG className='cursor-pointer' fillColor={fillColor}></LinkedinSVG>
			</Link>
		</div>
	)
}

export default SocialLinks
