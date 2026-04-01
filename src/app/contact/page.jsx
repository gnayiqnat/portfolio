import MotionCardAnimation from '@/components/animations/motion-card';
import ContactSection from '@/components/sections/contact';

export default function ContactPage() {
	return (
		<div className='h-fit w-11/12 mx-auto flex flex-col  lg:flex-row gap-6 justify-center items-center'>
			<ContactSection />
			<MotionCardAnimation>
				<div className='h-full'>ada</div>
			</MotionCardAnimation>
		</div>
	);
}
