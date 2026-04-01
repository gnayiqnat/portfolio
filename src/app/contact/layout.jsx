import Footer from '@/components/sections/footer';

export default function ContactLayout({ children }) {
  return (
    <>
      <div className='mt-33 w-full'>
        {children}
        <Footer />
      </div>
    </>
  );
}
