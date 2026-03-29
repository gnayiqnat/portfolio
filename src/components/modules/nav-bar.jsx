import Link from "next/link";

export default function NavBar() {
	return (
		<>
			<div className='px-10 w-full h-30 flex  justify-center sm:justify-between items-center bg-transparent'>
				<Link href='/'>
					<span className='font-barcode text-4xl'>TAN QI YANG</span>
				</Link>
        <span> </span>
      </div>
		</>
	);
}
