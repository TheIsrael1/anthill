import { ExternalNav } from 'components/partials/external-nav';
import Footer from 'components/partials/footer';
import PreFooter from 'components/partials/pre-footer';
import { useOutlet } from 'react-router-dom';

const ExternalLayout = () => {
  const outlet = useOutlet();

  return (
    <main className='w-full h-auto relative'>
      <ExternalNav />
      {outlet}
      <PreFooter />
      <Footer />
    </main>
  );
};

export default ExternalLayout;
