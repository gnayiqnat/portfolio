/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const ContentSecurityPolicy = `
    default-src 'none';
    script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''} https://*.umami.is https://web3forms.com https://hcaptcha.com https://*.hcaptcha.com https://*.sanity-cdn.com;
    frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com;
		style-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com;
    img-src 'self' blob: data: https://cdn.sanity.io https://*.hcaptcha.com;
    font-src 'self' https://*.sanity.io;
    object-src 'none';
    base-uri 'self';
    connect-src 'self' https://gateway.umami.is https://hcaptcha.com https://*.hcaptcha.com https://api.web3forms.com https://*.sanity.io wss://*.api.sanity.io https://sanity-cdn.com;
    form-action 'self' https://api.web3forms.com;
    frame-ancestors 'none'; 
    upgrade-insecure-requests;
`;

const securityHeaders = [
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\s+/g, ' ').trim(),
	},
	{
		key: 'X-Frame-Options',
		value: 'DENY',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()',
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload',
	},
];

const nextConfig = {
	reactStrictMode: true,
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
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
		];
	},
	experimental: {
		sri: {
			algorithm: 'sha256',
		},
	},
};

export default nextConfig;
