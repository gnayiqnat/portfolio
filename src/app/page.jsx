import AboutSection from '@/components/sections/about';
import BlogSection from '@/components/sections/blog';
import ContactSection from '@/components/sections/contact';
import HeroSection from '@/components/sections/hero.jsx';
import ProjectSection from '@/components/sections/projects';
import TechstackSection from '@/components/sections/techstack';
import { ReactLenis } from 'lenis/react';

export default function Home() {
	return (
		<>
			<ReactLenis root options={{ autoRaf: true }} />
			<HeroSection />
			<BlogSection />
      <ProjectSection />
      <ContactSection />
      <TechstackSection />
      <AboutSection />
		</>
	);
}
