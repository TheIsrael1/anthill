import ScrollToTop from 'components/animation/scroll-to-top';
import AppNav from 'components/partials/app-nav';
import SideNav from 'components/partials/side-nav';
import { useOutlet } from 'react-router-dom';

const AppLayout = () => {
  const outlet = useOutlet();

  return (
    <div className='flex w-full h-full '>
      <ScrollToTop />
      <aside className='hidden h-full w-max md:flex z-[1] overflow-visible'>
        <SideNav />
      </aside>
      <main className='flex flex-col flex-grow'>
        <AppNav />
        <section className='w-full h-full overflow-auto'>{outlet}</section>
      </main>
    </div>
  );
};

export default AppLayout;
