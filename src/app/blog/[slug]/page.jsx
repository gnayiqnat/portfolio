import { MotionOpacityAnimation } from '@/components/animations/motion-card';
import BlogCard from '@/components/modules/blog-card';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { POST_QUERY, POSTS_QUERY, SLUG_QUERY } from '@/sanity/lib/queries';
import { Chip } from '@heroui/react';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { ReactLenis } from 'lenis/react';
import Link from 'next/link';
import ScrollToTop from '@/components/providers/scrollToTop';

// Queries

// Revalidate after 60 seconds
export const revalidate = 60;

//
export async function generateStaticParams() {
	const slugs = await client.fetch(SLUG_QUERY);

	return slugs.map((post) => ({
		slug: post.slug,
	}));
}

//
export default async function PostPage({ params }) {
	const { slug } = await params;

	const { data: post } = await sanityFetch({
		query: POST_QUERY,
		params: { slug },
		perspective: 'published',
		stega: false,
	});
	const { data: posts } = await sanityFetch({
		query: POSTS_QUERY,
		params: { limit: 4 },
	});

	if (!post) {
		return (
			<main className='p-8'>
				<h1>Post not found</h1>
			</main>
		);
	}

	return (
		<>
			{' '}
			<ScrollToTop>
				<ReactLenis root />
				<MotionOpacityAnimation duration='0.5' delay='0'>
					<main className='container mx-auto gap-6 p-8 sm:p-12 max-w-7xl'>
						{' '}
						<div className='pb-3 text-lg text-gray-400'>
							<Link className='hover:underline' href='/'>
								HOME
							</Link>{' '}
							{'> '}
							<Link className='hover:underline' href='/blog'>
								BLOG
							</Link>{' '}
							{'> '}
							<Link
								className='hover:underline uppercase text-gray-700'
								href='/'
							>
								{slug}
							</Link>
						</div>
						<div className='flex flex-col gap-4'>
							<div className='py-10 flex flex-col gap-3'>
								<div className='flex flex-row gap-2'>
									{post.categories &&
										post.categories.map((category, index) => (
											<Chip
												key={index}
												size='lg'
												className='text-base px-1.5 rounded-xs font-jetbrains bg-gray-100 text-gray-500 border-none border-gray-100 uppercase'
											>
												{category.title}
											</Chip>
										))}
								</div>
								<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-balance'>
									{post.title}
								</h1>
								<div className='flex flex-col gap-3'>
									<h2>{post.publishedAt}</h2>
								</div>
							</div>
						</div>
						<div className='grid lg:grid-cols-3 gap-8'>
							<div className='lg:col-span-2 flex flex-col gap-8'>
								{post.mainImage && (
									<div className='flex flex-col gap-2'>
										<div className='relative h-90 w-full shrink-0 overflow-hidden rounded-md'>
											<Image
												className='pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none'
												src={urlFor(post.mainImage.asset._ref).url()}
												alt={post.mainImage.alt}
												fill={true}
											/>
										</div>{' '}
										<p className='text-gray-500 ml-2'>{post.mainImage.alt}</p>
									</div>
								)}
								<PortableText className='text-lg' value={post.body} />
							</div>
							<div className='flex flex-col items-center px-2 py-10 gap-3'>
								<h2 className={` text-xl md:text-2xl font-jetbrains font-light`}>
									{`-= { latest } =-`}
								</h2>
								<ul className='p-3 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-5 lg:gap-y-2'>
									{posts.map((post) => (
										<li key={post._id}>
											<BlogCard
												title={post.title}
												categories={post.categories && post.categories}
												publishedAt={post.publishedAt}
												imgSrc={post.mainImage && post.mainImage}
												imgAlt={post.mainImage && post.mainImage}
												slug={post.slug.current}
												isFeatured={false}
											/>
										</li>
									))}
								</ul>
							</div>
						</div>
					</main>
				</MotionOpacityAnimation>
			</ScrollToTop>
		</>
	);
}
