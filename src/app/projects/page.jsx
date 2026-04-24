import MotionOpacityAnimation from '@/components/animations/motion-opacity';
import ProjectSection from '@/components/sections/projects';
import ReactLenis from 'lenis/react';

export default function Projects() {
	return (
		<div className='w-full flex justify-center'>
			<ReactLenis />
			<MotionOpacityAnimation duration='0.5' delay='0'>
				<ProjectSection />
			</MotionOpacityAnimation>
		</div>
	);
}
