'use client'
import { useLenis } from 'lenis/react';


export default function TableOfContents({ headings }) {
	if (headings.length === 0) return null;
	const lenis = useLenis();

	return (
		<nav className='mt-5 mb-8 border-2 rounded-md flex flex-col pr-2 p-5 md:pl-8 gap-2 bg-foreground/1'>
			<span>
				<h2 className='text-xl sm:text-2xl mt-1 font-bold text-foreground/80'>
					{'Table of Contents'}
				</h2>
				<p className='font-bold sm:text-xl'>-----------------------</p>
			</span>
			<ul className='sm:pl-3 pr-4'>
				{headings.map((heading) => (
					<li
						key={heading.slug}
						className={`flex flex-row gap-2 text-foreground/60 text-xl my-1 ${heading.level === 'h3' ? 'ml-7' : 'ml-0'}`}
					>
						{'- '}
						<p
							onClick={() => {
								lenis?.scrollTo(`#${heading.slug}`);
							}}
							className={`hover:underline cursor-pointer text-base sm:text-lg`}
						>
							{heading.text}
						</p>
					</li>
				))}
			</ul>
		</nav>
	);
}
