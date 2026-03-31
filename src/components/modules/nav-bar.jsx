import Link from 'next/link';
import ScrollProgressBar from '../animations/scroll-progress-bar';

export default function NavBar() {
	return (
		<>
			<div className='fixed w-full flex flex-col  z-99'>
				<div className='px-10 h-19 backdrop-blur-md flex justify-center sm:justify-between items-center bg-background/30 border-b'>
					<Link href='/'>
						<span className=' font-barcode text-4xl text-gray-700'>TAN QI YANG</span>
					</Link>
				</div>
				<ScrollProgressBar />
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
