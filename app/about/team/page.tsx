import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Next Test | team page',
	description: 'Next lesson 1',
}
export default function Team() {
	return (
		<div>
			<h1>Team</h1>
			<Link href={'/about'} className='text-pink-600 text-2xl font-bold'>
				Get back
			</Link>
		</div>
	)
}
