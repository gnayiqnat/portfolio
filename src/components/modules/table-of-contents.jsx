'use client';
import { useLenis } from 'lenis/react';
import { useEffect, useState } from 'react';

export default function TableOfContents({ headings }) {
	if (headings.length === 0) return null;
	const lenis = useLenis();
	const [activeSlug, setActiveSlug] = useState(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const intersecting = entries.filter((entry) => entry.isIntersecting);
				if (intersecting.length > 0) {
					// Pick the heading closest to the top of the viewport
					const closest = intersecting.reduce((a, b) =>
						a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
					);
					setActiveSlug(closest.target.id);
				}
			},
			{ rootMargin: '0px 0px -50% 0px', threshold: 0 },
		);

		headings.forEach(({ slug }) => {
			const element = document.getElementById(slug);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, [headings]);

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
						className={`flex flex-row gap-2 text-xl my-1 ${heading.level === 'h3' ? 'ml-7' : 'ml-0'}`}
					>
						{activeSlug === heading.slug ? '> ' : '- '}
						<p
							onClick={() => {
								lenis?.scrollTo(`#${heading.slug}`);
							}}
							className={`hover:underline cursor-pointer text-base sm:text-lg ${
								activeSlug === heading.slug
									? 'font-black text-foreground/90'
									: 'text-foreground/60'
							}`}
						>
							{heading.text}
						</p>
					</li>
				))}
			</ul>
		</nav>
	);
}
