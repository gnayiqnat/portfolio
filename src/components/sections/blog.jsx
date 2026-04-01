import { POSTS_QUERY } from '@/sanity/lib/queries';
import MotionCardAnimation from '../animations/motion-card';
import BlogCard from '../modules/blog-card';
import { sanityFetch } from '@/sanity/lib/live';

export default async function BlogSection() {
	const { data: posts } = await sanityFetch({
		query: POSTS_QUERY,
		params: { limit: 3 },
	});

	return (
		<>
			<MotionCardAnimation>
				<h2 id='blog' className={` text-xl md:text-2xl font-jetbrains font-light text-foreground`}>
					{`->~== { blog } ==~<-`}
				</h2>
				{/* <h3 className='px-0 sm:px-8 font-jetbrains max-w-125 opacity-50 text-center text-balance'>
				</h3> */}
				<div className='mt-5 flex flex-col gap-3 max-w-160'>
					{posts.map((post) => (
						<BlogCard
							key={post._id}
							title={post.title}
							categories={post.categories &&  post.categories}
							publishedAt={post.publishedAt}
							imgSrc={post.mainImage && post.mainImage}
							imgAlt={post.mainImage && post.mainImage}
							slug={post.slug.current}
						/>
					))}
				</div>
			</MotionCardAnimation>
		</>
	);
}
