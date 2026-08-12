import BlogCard from '@/components/modules/blog-card';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { FaRssSquare } from 'react-icons/fa';
import BorderButtonCopy from '@/components/modules/border-button-action';
import { Toast } from '@heroui/react';

export default async function IndexPage() {
	const posts = await client.fetch(
		POSTS_QUERY,
		{ limit: 12 },
		{ next: { revalidate: 60 } },
	);

	return (
		<>
			{' '}
			<main className='pt-22 mt-5 container mx-auto max-w-6xl flex flex-col gap-7 p-8 sm:px-32 md:px-48 lg:px-20'>
				{' '}
				<div className='flex flex-col lg:flex-row justify-between lg:items-end gap-5  ml-5 pb-3 text-foreground/40'>
					<p className='text-2xl md:text-3xl pt-5 text-foreground/80'>
						-- BLOG ---------
					</p>
					<BorderButtonCopy
						url='https://tanqiyang.com/blog/feed.xml'
						text='Copy RSS Link'
						successText='Copied RSS Link'
						successDescription='RSS link copied to clipboard'
						icon={<FaRssSquare />}
					/>
				</div>
				<ul className='grid lg:grid-cols-2 gap-4'>
					{posts?.map((post, index) => (
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
		</>
	);
}
