import Footer from '@/components/sections/footer';

export default function AboutLayout({ children }) {
  return (
    <>
      <div className='mt-33'>
        {children}
        <Footer />
      </div>
    </>
  );
}
