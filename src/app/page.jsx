import AboutSection from '@/components/sections/about';
import BlogSection from '@/components/sections/blog';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/sections/footer';
import HeroSection from '@/components/sections/hero.jsx';
import ProjectSection from '@/components/sections/projects';
import TechstackSection from '@/components/sections/techstack';
import { ReactLenis } from 'lenis/react';
import Script from 'next/script';

export default function Home() {
	return (
		<>
			{' '}
			<ReactLenis root options={{ autoRaf: true }} />
			<div className='w-full flex flex-col justify-center items-center gap-10 sm:gap-15'>
				<HeroSection />
				<BlogSection />
				<ProjectSection />
				<ContactSection />
				<TechstackSection />
				<AboutSection />
				<Footer />
			</div>
			{/* --- analytics --- */}
			<Script
				src='https://cloud.umami.is/script.js'
				data-website-id='82499b45-9a5c-4e62-9e94-6df3c5106f92'
			/>
		</>
	);
}
