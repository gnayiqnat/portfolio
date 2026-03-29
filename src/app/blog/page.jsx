import { sanityFetch } from '@/sanity/lib/live';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';

export default async function IndexPage() {
	const { data: posts } = await sanityFetch({
		query: POSTS_QUERY,
		params: { limit: 12 },
	});

	return (
		<main className='container mx-auto min-h-screen max-w-3xl p-8'>
			<h1 className='text-4xl font-bold mb-8'>Posts</h1>{' '}
			<div className='h-16'>
				<Link href='/'>&larr; Return to Home</Link>
			</div>
			<hr />
			<ul className='flex flex-col gap-y-4'>
				{posts.map((post) => (
					<li className='hover:underline' key={post._id}>
						<Link href={`/blog/${post.slug.current}`}>
							<h2 className='text-xl font-semibold'>{post.title}</h2>
							<p>{new Date(post.publishedAt).toLocaleDateString()}</p>
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
