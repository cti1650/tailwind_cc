import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <div className='container max-w-screen-md mx-auto text-sans'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
