import MotionOpacityAnimation from '@/components/animations/motion-opacity';
import ProjectSection from '@/components/sections/projects';
import ReactLenis from 'lenis/react';

export default function Projects() {
	return (
		<>
			<ReactLenis />
			<MotionOpacityAnimation duration='0.5' delay='0'>
				<div className='w-full flex justify-center'>
					<ProjectSection />
				</div>
			</MotionOpacityAnimation>
		</>
	);
}
