import NavBar from '@/components/modules/nav-bar';
import Footer from '@/components/sections/footer';
import { SanityLive } from '@/sanity/lib/live';

export default function BlogLayout({ children }) {
	return (
		<>
			<NavBar />
      {children}
			<SanityLive />
			<Footer />	
		</>
	);
}
