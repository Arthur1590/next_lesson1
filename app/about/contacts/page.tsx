import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Next Test | contacts page',
	description: 'Next lesson 1',
}

export default function Contacts() {
	return (
		<div>
			<h1>contacts page</h1>
			<Link href={'/about'} className='text-pink-600 text-2xl font-bold'>Get back</Link>
		</div>
	)
}