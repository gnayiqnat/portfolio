import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/live';
import { PortableText } from 'next-sanity';
import Link from 'next/link';

// Queries
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  publishedAt,
  mainImage
}`;
const SLUG_QUERY = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;

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

	if (!post) {
		return (
			<main className='p-8'>
				<h1>Post not found</h1>
			</main>
		);
	}

	return (
		<main className='container mx-auto grid grid-cols-1 gap-6 p-12'>
			<h1 className='text-4xl font-bold text-balance'>{post.title}</h1>
			<hr />
			<h2>{post.publishedAt}</h2>
			<PortableText value={post.body} />
			<Link href='/blog'>&larr; Return to index</Link>
		</main>
	);
}
