import { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
	title: 'Next Test | member2 page',
	description: 'Next lesson 1',
}
export default function Member2() {
	return (
		<div>
			<h1>Member 2</h1>
			<Link href={'/about/team'} className='text-pink-600 text-2xl font-bold'>Get back</Link>

		</div>
	)
}