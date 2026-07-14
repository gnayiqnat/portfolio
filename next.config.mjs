/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	allowedDevOrigins: ['192.168.0.188'],
	env: {
		BASE_URL: process.env.BASE_URL,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: '/**',
			},
		],
		qualities: [25, 50, 75],
	},
};

export default nextConfig;
