import NavBar from '@/components/modules/nav-bar';
import Footer from '@/components/sections/footer';

export default function AboutLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className='mt-33'>
        {children}
        <Footer />
      </div>
    </>
  );
}
