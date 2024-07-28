import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

type Props = {
	params: {
		id: string
	}
}
async function getData(id: string) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		next: {
			revalidate: 60,
		},
	})
	return res.json()
}
export async function generateMetadata({
	params: { id },
}: Props): Promise<Metadata> {
	const postsId = await getData(id)
	return {
		title: `${postsId.title} | ${id}`,
	}
}
export default async function BlogId({ params: { id } }: Props) {
	const postsId = await getData(id)
	return (
		<div className='flex flex-col gap-5 justify-center items-center min-h-screen'>
			<h1 className='text-2xl text-teal-600 font-bold '>{postsId.title}</h1>
			<p>{postsId.body}</p>
			<Link href={'/blog'}>
				<button className='bg-teal-500 text-[1rem] font-bold py-2 px-5 rounded-[.5rem] text-slate-200 transition-all duration-300 active:scale-100 hover:scale-110'>Back</button>
			</Link>
		</div>
	)
}
