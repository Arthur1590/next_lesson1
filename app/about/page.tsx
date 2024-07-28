import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Next Test | About',
	description: 'Next lesson 1',
}
export default function About() {
	return (
		<div className='flex flex-col items-start gap-5'>
			<h1 className='text-pink-600 text-[10rem] font-extrabold'>
				Select sub-item
			</h1>
		</div>
	)
}
