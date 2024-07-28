import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Next Test | home',
	description: 'Next lesson 1',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				<main className='main overflow-hidden min-h-screen mx-auto container'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
