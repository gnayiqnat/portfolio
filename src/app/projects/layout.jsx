import Footer from '@/components/sections/footer';

export default function ProjectLayout({ children }) {
	return (
		<>
			<div className='mt-33'>
				{children}
				<Footer />
			</div>
		</>
	);
}
