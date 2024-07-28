import Link from 'next/link'

export default function Works() {
	return (
		<div>
			<h1>Works page</h1>
			<Link href={'/about'} className='text-pink-600 text-2xl font-bold'>Get back</Link>
		</div>
	)
}