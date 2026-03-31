'use client'

import Link from 'next/link';
import ScrollProgressBar from '../animations/scroll-progress-bar';
import { usePathname } from 'next/navigation';

export default function NavBar() {
	const pathname = usePathname()

	return (
		<>
			<div className='fixed w-full flex flex-col  z-99'>
				<div className='px-10 h-19 backdrop-blur-2xl flex justify-center sm:justify-between items-center bg-background/40 border-b'>
					<Link href='/'>
						<span className=' font-barcode text-4xl text-gray-700'>TAN QI YANG</span>
					</Link>
				</div>
				{pathname.includes('/blog/') && <ScrollProgressBar />}
			</div>
		</>
	);
}

/*

<div className='px-10 w-full h-23 flex  justify-center sm:justify-between items-center bg-transparent border-b'>
				<Link href='/'>
					<span className='font-barcode text-4xl text-gray-700'>TAN QI YANG</span>
				</Link>
      </div>
 */
