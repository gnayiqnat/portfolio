import Footer from '@/components/sections/footer';

export const metadata = {
	robots: {
		index: false,
		follow: true,
		nocache: false,
		googleBot: {
			index: false,
			follow: true,
		},
	},
};

export default function PrivacyPage() {
	return (
		<>
			<div className='w-full max-w-4xl flex flex-col gap-20 mt-30 p-5 md:p-10 text-lg'>
				<div>
					<h1 className='text-4xl font-bold'>--Privacy Policy---</h1>
					<p>
						<em>Last updated: 11 August 2026</em>
					</p>
				</div>

				<p>
					This Privacy Policy explains how <strong> Tan Qi Yang</strong> ("we", "us",
					or "our") collects, uses, and protects information when you visit
					<strong> tanqiyang.com</strong> (the "Website").
					<br />
					<br />
					We aim to collect as little personal information as reasonably necessary to
					operate this portfolio and blog.
				</p>

				<div>
					<h2 className='text-3xl font-bold'>1. Information We Collect</h2>
					<br />
					<h3 className='text-2xl font-bold'>Contact Form</h3>
					<br />
					<p>If you contact us through the Website, you may provide:</p>
					<ul className='font-bold'>
						<li>- Your name</li>
						<li>- Your email address</li>
						<li>- The contents of your message</li>
						<li>- Any other information you voluntarily provide</li>
					</ul>
					<br />
					<p>
						We use this information to read, respond to, and manage your inquiry.
					</p>
					<br />
					<p>
						We do not operate our own database for storing contact form submissions.
						Instead, submissions are processed by Web3Forms and forwarded to our
						designated email address.
					</p>
					<br />
					<p>
						Please avoid submitting sensitive personal information through the contact
						form.
					</p>
					<br />
					<br />
					<h3 className='text-2xl font-bold'>Website Analytics</h3>
					<br />
					<p>
						We use Umami Cloud to understand how visitors use the Website and to
						improve its content and performance.
					</p>
					<br />
					<p>
						Umami is a privacy-focused analytics service. Its standard analytics does
						not use cookies or collect personal information intended to identify
						individual visitors.
					</p>
					<br />
					<p>Analytics information may include:</p>
					<ul className='font-bold'>
						<li>- Pages viewed</li>
						<li>- Referring websites or URLs</li>
						<li>- Browser and operating system</li>
						<li>- Device type</li>
						<li>- Approximate country or location</li>
						<li>- General website usage information</li>
					</ul>
					<br />
					<p>
						We use this information only for general website analytics and
						improvement.
					</p>
				</div>
				<div>
					<h2 className='text-3xl font-bold'>2. Third-Party Services</h2>
					<br />
					<p>We use the following third-party services to operate the Website:</p>
					<br />
					<ul>
						<li>
							<strong>Vercel</strong> — Website hosting and delivery.
						</li>
						<li>
							<strong>Umami Cloud</strong> — Privacy-focused website analytics.
						</li>
						<li>
							<strong>Sanity CMS</strong>- Content management system and database for
							our blog.
						</li>
						<li>
							<strong>Web3Forms</strong> — Processing and forwarding contact form
							submissions.
						</li>
						<li>
							<strong>Proton Mail</strong> — Receiving and managing messages submitted
							through the contact form.
						</li>
						<li>
							<strong>Cloudflare</strong> — DNS management for our domain.
						</li>
					</ul>
					<br />
					<p>
						These providers may process information on our behalf as necessary to
						provide their services. Some of these services process or store
						information on servers located outside Malaysia. By submitting information
						through our contact form, you explicitly consent to the transfer, storage,
						and processing of your data outside of Malaysia.
					</p>
					<br />
					<br />
					<h3 className='text-2xl font-bold'>Cloudflare</h3>
					<br />
					<p>
						Cloudflare is used only for DNS management. Our Website's DNS records are
						configured as DNS-only rather than proxied through Cloudflare.
					</p>
					<br />
					<p>
						Cloudflare therefore does not act as the CDN or HTTP proxy for normal
						Website traffic.
					</p>
				</div>

				<div>
					<h2 className='text-3xl font-bold'>3. How We Use Personal Information</h2>
					<br />
					<p>We may use information you provide to:</p>
					<br />
					<ul className='font-bold'>
						<li>- Respond to your messages or inquiries.</li>
						<li>- Communicate with you when necessary.</li>
						<li>- Operate and maintain the Website.</li>
						<li>- Protect the Website against spam, abuse, and security threats.</li>
						<li>- Understand general Website usage and improve the Website.</li>
					</ul>
					<br />
					<p>We do not sell your personal information.</p>
					<br />
					<p>
						We do not use information submitted through the contact form for unrelated
						marketing purposes.
					</p>
				</div>

				<div>
					<h2 className='text-3xl font-bold'>4. Cookies</h2>
					<br />
					<p>
						The Website does not intentionally use cookies for advertising or
						cross-site tracking.
					</p>
					<br />
					<p>
						Our analytics service, Umami Cloud, does not require cookies for its
						standard analytics functionality.
					</p>
					<br />
					<p>
						Third-party services may use their own technical mechanisms where
						necessary to provide their services.
					</p>
				</div>

				<div>
					<h2 className='text-3xl font-bold'>5. Data Retention</h2>
					<br />
					<p>
						We keep personal information only for as long as reasonably necessary for
						the purpose for which it was collected.
					</p>
					<br />
					<p>
						Contact form messages may remain in our email account for as long as
						reasonably necessary to respond to and manage the inquiry.
					</p>
					<br />
					<p>
						Web3Forms may also temporarily retain contact form submissions according
						to its own retention practices. At the time of writing, Web3Forms states
						that submissions are stored for 30 days on its free plans and one year on
						its Pro plans.
					</p>
					<br />
					<p>
						Analytics data is retained by Umami Cloud according to the applicable
						Umami Cloud service and plan.
					</p>
					<br />
					<p>
						Where personal information is no longer reasonably required, we will take
						reasonable steps to delete or anonymise it.
					</p>
				</div>

				<div>
					<h2 className='text-3xl font-bold'>
						6. Disclosure of Personal Information
					</h2>
					<br />
					<p>
						We may disclose personal information to the third-party service providers
						described in this Privacy Policy where necessary for them to provide their
						services.
					</p>
					<br />
					<p>
						We may also disclose information where required or permitted by applicable
						Malaysian law, regulation, legal process, or governmental request.
					</p>
					<br />
					<p>We do not sell personal information to third parties.</p>
				</div>
				<div>
					<h2 className='text-3xl font-bold'>7. Your Rights</h2>
					<br />
					<p>
						Where applicable under Malaysian law, you may have rights regarding your
						personal information, including the right to:
					</p>
					<br />
					<ul className='font-bold'>
						<li>- Request access to personal information we hold about you.</li>
						<li>- Request correction of inaccurate or incomplete information.</li>
						<li>
							- Request that we stop or limit certain processing where applicable.
						</li>
						<li>- Withdraw consent where processing is based on consent.</li>
						<li>
							- Make an inquiry or complaint regarding our handling of your personal
							information.
						</li>
					</ul>
					<br />
					<p>
						If you would like to exercise a privacy-related right, please contact us
						using the email address below.
					</p>
				</div>

				<div>
					<h2 className='text-3xl font-bold'>8. Security</h2>
					<br />
					<p>
						We take reasonable technical and organisational measures to protect
						personal information against unauthorised access, disclosure, alteration,
						loss, or misuse.
					</p>
					<br />
					<p>
						However, no method of transmitting or storing information over the
						Internet is completely secure, and we cannot guarantee absolute security.
					</p>
				</div>

				<div>
					<h2 className='text-3xl font-bold'>9. Children's Privacy</h2>
					<br />
					<p>
						This Website is not specifically directed toward children, and we do not
						knowingly collect personal information from children.
					</p>
					<br />
					<p>
						If you believe that a child has provided personal information to us,
						please contact us so that we can take appropriate steps to delete it.
					</p>
				</div>
				<div>
					<h2 className='text-3xl font-bold'>10. Changes to This Privacy Policy</h2>
					<br />
					<p>We may update this Privacy Policy from time to time.</p>
					<br />
					<p>
						Any changes will be published on this page, together with an updated "Last
						updated" date.
					</p>
				</div>

				<div>
					<h2 className='text-3xl font-bold'>11. Contact Us</h2>
					<br />
					<p>
						If you have any questions about this Privacy Policy or how your personal
						information is handled, please contact:
					</p>
					<br />
					<p>
						<strong>[Tan Qi Yang]</strong>
						<br />
						Email:{' '}
						<a className='underline' href='mailto:privacy@tanqiyang.com'>
							privacy@tanqiyang.com
						</a>
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}
