import { sanityFetch } from '@/sanity/lib/live';
import { PortableText } from 'next-sanity';
import Link from 'next/link';

// 1. GROQ Query to fetch a single post by its slug
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  publishedAt,
  mainImage
}`;

export default async function PostPage({ params }) {
	// 2. Access the 'slug' from the URL parameters
	const { slug } = await params;

	// 3. Fetch the specific post data from Sanity
	const { data: post } = await sanityFetch({
		query: `*[_type == "post" && defined(slug.current)][0]{
  title,
  body,
  publishedAt,
  mainImage
}`,
		params: await params,
	});

	// 4. Handle case where the post is not found
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
