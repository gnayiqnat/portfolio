export default function sitemap() {
	return [
		{
			url: 'https://tanqiyang.com',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://tanqiyang.com/blog',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://tanqiyang.com/projects',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.3,
		},
		{
			url: 'https://tanqiyang.com/contact',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.4,
		},
		{
			url: 'https://tanqiyang.com/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		},
	];
}
