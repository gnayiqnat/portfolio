import BlogCard from '@/components/modules/blog-card';
import { sanityFetch } from '@/sanity/lib/live';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';

export default async function IndexPage() {
	const { data: posts } = await sanityFetch({
		query: POSTS_QUERY,
		params: { limit: 12 },
	});

	return (
		<main className='mt-30 container mx-auto min-h-screen max-w-5xl p-8 sm:px-32 md:px-48 lg:px-20'>
			<div className=''>
				<h1 className='text-4xl font-bold mb-8'>Posts</h1>{' '}
				<div className='h-16'>
					<Link href='/'>&larr; Return to Home</Link>
				</div>
				<hr />
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
	);
}
