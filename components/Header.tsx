import { Link2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
type Props = {
	name: string
	url: string
}
const data: Props[] = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'About',
		url: '/about',
	},
	{
		name: 'Blog',
		url: '/blog',
	},
]
const Header = () => {
	return (
		<header className='py-4'>
			<div className='container mx-auto'>
				<nav className='flex items-center justify-between py-2'>
				<Link href={'/'}>
				<h1 className='text-[1rem] font-bold text-teal-600'>
						NextLEARNING.com
					</h1>
				</Link>
					<ul className='flex items-center justify-center gap-4'>
						{data.map((item, index) => (
							<li key={index} className='flex'>
								<Link
									className='text-[1rem] font-normal text-neutral-900 transition duration-300 hover:bg-teal-600 rounded-2xl p-4 hover:text-rose-600'
									href={item.url}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
