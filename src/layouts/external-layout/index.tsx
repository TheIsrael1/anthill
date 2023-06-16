import ScrollToTop from 'components/animation/scroll-to-top';
import { ExternalNav } from 'components/partials/external-nav';
import Footer from 'components/partials/footer';
import PreFooter from 'components/partials/pre-footer';
import { useOutlet } from 'react-router-dom';

const ExternalLayout = () => {
  const outlet = useOutlet();

  return (
    <main className='relative w-full h-auto'>
      <ScrollToTop />
      <ExternalNav />
      {outlet}
      <PreFooter />
      <Footer />
    </main>
  );
};

export default ExternalLayout;
