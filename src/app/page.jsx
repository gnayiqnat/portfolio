import ScrollTopButton from '@/components/modules/scroll-to-top-button';
import AboutSection from '@/components/sections/about';
import BlogSection from '@/components/sections/blog';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/sections/footer';
import HeroSection from '@/components/sections/hero.jsx';
import ProjectSection from '@/components/sections/projects';
import TechstackSection from '@/components/sections/techstack';

export default function Home() {
	return (
		<>
			{' '}
			<div className='w-full flex flex-col justify-center items-center gap-10 sm:gap-15'>
				<HeroSection />
				<ProjectSection />
				<ContactSection />
				<TechstackSection />
				<AboutSection />
				<Footer />
				<ScrollTopButton />
			</div>
		</>
	);
}
