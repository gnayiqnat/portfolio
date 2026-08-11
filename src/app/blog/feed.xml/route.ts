import { Feed } from 'feed';
import { client } from '@/sanity/lib/client';
import { RSS_QUERY } from '@/sanity/lib/queries';

export const revalidate = 3600;

export async function GET() {
	const SITE_URL = 'https://tanqiyang.com';

	const posts = await client.fetch(RSS_QUERY, {limit: 100});

	const feed = new Feed({
		title: `Tan Qi Yang's Blog`,
		description: 'I do stuff.',
		id: SITE_URL,
		link: SITE_URL,
		language: 'en',
		favicon: `${SITE_URL}/favicon.ico`,
		copyright: `© ${new Date().getFullYear()} Tan Qi Yang. Content licensed under CC BY-NC-ND 4.0.`,
		updated: posts[0] ? new Date(posts[0].publishedAt) : new Date(),
		feedLinks: {
			rss2: `${SITE_URL}/feed.xml`,
		},
	});

	posts.forEach((post: any) => {
		feed.addItem({
			title: post.metaTitle,
			id: `${SITE_URL}/blog/${post.slug.current}`,
			link: `${SITE_URL}/blog/${post.slug.current}`,
			description: post.metaDescription,
			date: new Date(post.publishedAt),
			author: [
				{
					name: post.authorName || 'Tan Qi Yang',
				},
			],
		});
	});

	// 4. Return the response with the correct XML content-type
	return new Response(feed.rss2(), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
		},
	});
}
