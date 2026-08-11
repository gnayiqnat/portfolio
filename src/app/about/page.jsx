import AboutSection from '@/components/sections/about';
import TechstackSection from '@/components/sections/techstack';

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

export default function AboutPage() {
	return (
		<div className='w-full flex flex-col gap-5 justify-center items-center'>
			<TechstackSection />
			<AboutSection />
		</div>
	);
}
