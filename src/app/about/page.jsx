import MotionOpacityAnimation from '@/components/animations/motion-opacity';
import AboutSection from '@/components/sections/about';
import TechstackSection from '@/components/sections/techstack';
import ReactLenis from 'lenis/react';

export default function AboutPage() {
	return (
		<MotionOpacityAnimation duration='0.5' delay='0'>
			<div className='w-full flex flex-col gap-5 justify-center items-center'>
				<ReactLenis />
				<TechstackSection />
				<AboutSection />
			</div>
		</MotionOpacityAnimation>
	);
}
