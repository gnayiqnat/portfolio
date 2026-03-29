/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		BASE_URL: process.env.BASE_URL,
	},
	images: {
		remotePatterns: [new URL('https://cdn.sanity.io/**')],
	},
};

export default nextConfig;
