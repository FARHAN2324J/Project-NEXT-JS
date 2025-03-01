// pages/_app.tsx
import type { AppProps } from 'next/app';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  

  const is404 = router.pathname === '/404';

  return (
    <>
      {!is404 && <Navbar />}
      <Component {...pageProps} />
      {!is404 && <Footer />}
    </>
  );
}

export default MyApp;

