import { POSTS_QUERY } from '@/sanity/lib/queries';
import BlogCard from '../modules/blog-card';
import CardCustom from '../animations/motion-card';
import { client } from '@/sanity/lib/client';
import { LuExternalLink } from 'react-icons/lu';
import BorderButtonLink from '../modules/border-button-link';

export default async function BlogSection() {
	const { data: posts = [] } = await client.fetch(POSTS_QUERY);

	return (
		<>
			<CardCustom id='blog'>
				<h2
					className={` text-xl md:text-2xl font-jetbrains font-light text-foreground`}
				>
					{`->~== { blog } ==~<-`}
				</h2>
				{/* <h3 className='px-0 sm:px-8 font-jetbrains max-w-125 opacity-50 text-center text-balance'>
				</h3> */}
				<div className='mt-5 flex flex-col gap-3 max-w-160'>
					{posts.map((post) => (
						<BlogCard
							key={post._id}
							title={post.title}
							categories={post.categories && post.categories}
							publishedAt={post.publishedAt}
							imgSrc={post.mainImage && post.mainImage}
							imgAlt={post.mainImage && post.mainImage}
							slug={post.slug.current}
						/>
					))}
					<div className='w-full flex justify-center mt-7'>
						<BorderButtonLink
							type='large'
							text='VIEW ALL POSTS'
							url='/blog'
							icon={<LuExternalLink />}
						/>
					</div>
				</div>
			</CardCustom>
		</>
	);
}
