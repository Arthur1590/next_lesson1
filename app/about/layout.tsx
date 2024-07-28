import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
	title: 'Next Test | About layout',
	description: 'Next lesson 1',
}

type Props = {
	children: React.ReactNode
}
export default function AboutLayout({ children }: Props) {
	return (
		<div className='flex flex-col items-start gap-4'>
			<h1 className='bg-gradient-to-tr from-rose-700 to-orange-400  text-3xl font-bold'>
				About layout {'=>'}{' '}
			</h1>
			{children}

			<ul className='flex gap-4 justify-center items-center'>
				<li className='hover:underline'>
					<Link href={'/'}>Home</Link>
				</li>
				<li className='hover:underline'>
					<Link href={'/about'}>About</Link>
				</li>
				<li className='hover:underline'>
					<Link href={'/about/team'}>Team</Link>
				</li>
				<li className='hover:underline'>
					<Link href={'/about/works'}>Works</Link>
				</li>
				<li className='hover:underline'>
					<Link href={'/about/contacts'}>Contacts</Link>
				</li>
			</ul>
		</div>
	)
}
