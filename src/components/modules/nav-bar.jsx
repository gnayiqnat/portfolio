import Link from 'next/link';

export default function NavBar() {
	return (
		<>
			<div className='fixed px-10 w-full h-19 backdrop-blur-md flex  justify-center sm:justify-between items-center bg-background/30 border-b z-99'>
				<Link href='/'>
					<span className=' font-barcode text-4xl text-gray-700'>TAN QI YANG</span>
				</Link>
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
