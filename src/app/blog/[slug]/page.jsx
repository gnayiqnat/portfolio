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
import MotionOpacityAnimation from '@/components/animations/motion-opacity';

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

// PortableText Components
const components = {
	block: {
		normal: ({ children }) => <p className='text-lg text-foreground/93'>{children}</p>,
	},
	types: {
		image: ({ value }) => {
			if (!value?.asset?._ref) return null;
			return (
				<div className='flex flex-col gap-2'>
					<Image
						src={urlFor(value.asset._ref).width(800).auto('format').url()}
						alt={value.alt}
						width={800}
						height={450}
						className='rounded-lg'
					/>
					<p className='text-gray-500 ml-2'>{value.alt}</p>
				</div>
			);
		},
	},
};
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
					<main className='container mx-auto gap-6 p-8 sm:px-12 pt-30 max-w-7xl'>
						{' '}
						<div className='pb-3 text-base sm:text-lg text-foreground/40'>
							<Link className='hover:underline' href='/'>
								HOME
							</Link>{' '}
							{'> '}
							<Link className='hover:underline' href='/blog'>
								BLOG
							</Link>{' '}
							{'> '}
							<span className='hover:underline uppercase cursor-pointer text-foreground/80 break-all'>
								{slug}
							</span>
						</div>
						<div className='flex flex-col gap-4'>
							<div className='py-10 flex flex-col gap-3'>
								<div className='flex flex-row gap-2'>
									{post.categories &&
										post.categories.map((category, index) => (
											<Chip
												key={index}
												size='lg'
												className='text-base px-1.5 rounded-xs font-jetbrains bg-gray-100 dark:bg-background/70  text-foreground/60 dark:border dark:border-gray-700 uppercase'
											>
												{category.title}
											</Chip>
										))}
								</div>
								<h1 className='text-2xl/7  sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:text-balance break-all text-foreground/95'>
									{post.title}
								</h1>
								<div className='flex flex-col gap-3 text-foreground/45'>
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
								<PortableText value={post.body} components={components} />
							</div>
							<div className='flex flex-col items-center px-2 py-10 gap-3'>
								<h2 className={` text-xl md:text-2xl font-jetbrains font-light text-foreground/60`}>
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
