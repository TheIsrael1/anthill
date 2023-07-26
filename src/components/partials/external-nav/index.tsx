import { useLocation, useNavigate } from 'react-router-dom';
import { ItitleLinks, routePathTypes } from 'types';
import Icon from 'utils/Icon';
import Menu from '../Menu';
import CONSTANTS from 'constant';
import BgTransitionSpan from 'components/animation/bg-transitions-span';
import CoolUnderline from 'components/animation/cool-underline';

export type navTitleTypes = 'Home' | 'Pricing' | 'Blogs' | 'FAQs' | 'About Us';

export const navLinks: ItitleLinks<navTitleTypes, routePathTypes>[] = [
  {
    link: '',
    title: 'Home',
  },
  {
    link: 'pricing',
    title: 'Pricing',
  },
  {
    link: 'blogs',
    title: 'Blogs',
  },
  {
    link: 'faqs',
    title: 'FAQs',
  },
  {
    link: 'about',
    title: 'About Us',
  },
];

export const ExternalNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log('loc', location?.pathname);

  return (
    <nav className='container sticky top-0 left-0 right-0 z-10 w-full bg-white border-b px-container-base lg:px-container-lg border-extraColor-borderBottom-3 md:border-0'>
      <div className='w-full  flex justify-between items-center py-[1.375rem] md:pt-[2rem] md:py-[.5rem] md:border-b md:border-extraColor-borderBottom-1 transition-all ease-in-out duration-300'>
        <div className='flex items-center gap-[6rem]'>
          <div className='flex items-center  cursor-pointer' onClick={() => navigate(`/`)}>
            <Icon
              name='nfmLogo'
              svgProp={{ className: 'w-[28px] h-[28px] md:w-[50px] md:h-[50px]' }}
            />
            <h4 className='font-[600] md:font-[500] text-[16px] md:text-[24px] leading-[20px] md:leading-[24px] tracking-[0.15px] text-primary-8'>
              Nollywood Filmmaker
            </h4>
          </div>
          <div className='items-center gap-[2.5rem] hidden xl:flex'>
            {navLinks?.map((i, idx) => (
              <div
                key={idx}
                onClick={() => navigate(i?.link)}
                className='relative py-1 transition-all cursor-pointer group w-max'
              >
                <span
                  className={` group-hover:text-primary-1 ${
                    `/${i?.link}` === location?.pathname ? `text-primary-1` : `text-secondary-1`
                  } transition-colors duration-300 ease-in-out font-[400] text-[16px] leading-[24px] tracking-[0.15px]`}
                >
                  {i?.title}
                </span>
                <CoolUnderline fixed={`/${i?.link}` === location?.pathname} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-4 '>
          <button
            onClick={() => navigate(CONSTANTS.ROUTES.login)}
            className='relative py-2 px-6 rounded-[160px] text-[16px] leading-[24px] tracking-[0.15px] text-primary-9 border border-primary-1 hidden md:inline-flex  hover:text-white transition-colors duration-300 ease-in-out overflow-hidden group'
          >
            <BgTransitionSpan className='-mx-6 -mt-2  bg-primary-1 rounded-[120px]' />
            <span className='relative'> Log In</span>
          </button>
          <button
            onClick={() => navigate(CONSTANTS.ROUTES['create-account'])}
            className='py-2 px-6 rounded-[160px] text-[16px] leading-[24px] tracking-[0.15px] text-white bg-primary-1 hidden md:flex hover:opacity-90 transition-opacity duration-300 ease-in-out'
          >
            Sign Up
          </button>
          <div className='flex items-center xl:hidden'>
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
};
