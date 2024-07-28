import Link from 'next/link'
import React from 'react'

async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: {
			revalidate: 60,
		},
	})

	if (!res.ok) throw new Error('Failed to fetch data')
	return res.json()
}

export default async function Blog() {
	const posts = await getData()
	return (
		<>
			<h1>BLOG PAGE</h1>
			<ul className='flex flex-col gap-4'>
				{posts &&
					posts.map((item: any, index: number) => (
						<Link key={index} href={`/blog/${item.id}`}>
							<li className='text-3xl text-teal-600 shadow-2xl shadow-slate-700 h-[100px] p-4 hover:text-fuchsia-600'>
								{item.title}
							</li>
						</Link>
					))}
			</ul>
		</>
	)
}
