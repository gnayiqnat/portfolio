import { MotionOpacityAnimation } from '@/components/animations/motion-card';
import BlogCard from '@/components/modules/blog-card';
import { sanityFetch } from '@/sanity/lib/live';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';
import { ReactLenis } from 'lenis/react';

export default async function IndexPage() {
	const { data: posts } = await sanityFetch({
		query: POSTS_QUERY,
		params: { limit: 12 },
	});

	return (
		<>
			{' '}
			<ReactLenis root />
			<MotionOpacityAnimation duration='0.5' delay='0'>
				<main className='pt-22 mt-5 container mx-auto min-h-screen max-w-6xl flex flex-col gap-7 p-8 sm:px-32 md:px-48 lg:px-20'>
					<div className='pb-3 text-lg text-foreground/40'>
						<Link className='hover:underline' href='/'>
							HOME
						</Link>{' '}
						{'> '}
						<Link className='hover:underline text-foreground/80' href='/blog'>
							BLOG
						</Link>
					</div>
					<ul className='grid lg:grid-cols-2 gap-4'>
						{posts.map((post, index) => (
							<li key={post._id} className='lg:first:row-span-2'>
								<BlogCard
									title={post.title}
									categories={post.categories && post.categories}
									publishedAt={post.publishedAt}
									imgSrc={post.mainImage && post.mainImage}
									imgAlt={post.mainImage && post.mainImage}
									slug={post.slug.current}
									isFeatured={index === 0}
								/>
							</li>
						))}
					</ul>
				</main>
			</MotionOpacityAnimation>
		</>
	);
}
