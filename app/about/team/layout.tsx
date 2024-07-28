import Link from 'next/link'
import React from 'react'

type Props = {
	children: React.ReactNode
}

export default function Teamlayout({children}: Props) {
	return (
		<div className='flex flex-col gap-4 items-center'>
			{children}
			<ul className='flex flex-col items-start gap-4'>
				<li><Link href={'/about/team/member1'}>Member 1</Link></li>
				<li><Link href={'/about/team/member2'}>Member 2</Link></li>
			</ul>
		</div>
	)
}

 