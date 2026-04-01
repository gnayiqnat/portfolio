import NavBar from '@/components/modules/nav-bar';
import Footer from '@/components/sections/footer';

export default function ContactLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className='mt-33 w-full'>
        {children}
        <Footer />
      </div>
    </>
  );
}
