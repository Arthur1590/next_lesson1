'use client'

export default function Error({error}: {error: Error}) {
	return (
		<h1 className='text-rose-700 text-4xl font-extrabold flex items-center justify-center min-h-screen'> Oops! {error.message}</h1>
	)
}