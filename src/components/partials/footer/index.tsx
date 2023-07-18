import CONSTANTS from 'constant';
import { useNavigate } from 'react-router-dom';
import { ItitleLinks, routePathTypes } from 'types';
import Icon from 'utils/Icon';

type IfooterTitles =
  | 'Production'
  | 'Post production'
  | 'Distribution and Marketing'
  | 'Animation'
  | 'Behind the scenes clips'
  | 'Interviews'
  | 'How-tos'
  | 'Sign up'
  | 'Log in'
  | 'Home'
  | 'Pricing'
  | 'FAQs'
  | 'About Us';

interface IfooterLinks {
  Blogs: ItitleLinks<IfooterTitles, string>[];
  BTS: ItitleLinks<IfooterTitles, string>[];
  Links: ItitleLinks<IfooterTitles, routePathTypes>[];
}

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks: IfooterLinks = {
    Blogs: [
      {
        link: 'production',
        title: 'Production',
      },
      {
        link: 'post-production',
        title: 'Post production',
      },
      {
        link: 'distribution-and-marketing',
        title: 'Distribution and Marketing',
      },
      {
        link: 'animation',
        title: 'Animation',
      },
    ],
    BTS: [
      {
        link: 'behind-the-scenes-clips',
        title: 'Behind the scenes clips',
      },
      {
        link: 'interviews',
        title: 'Interviews',
      },
      {
        link: 'how-tos',
        title: 'How-tos',
      },
    ],
    Links: [
      {
        link: 'create-account',
        title: 'Sign up',
      },
      {
        link: 'login',
        title: 'Log in',
      },
      {
        link: '',
        title: 'Home',
      },
      {
        link: 'pricing',
        title: 'Pricing',
      },
      {
        link: 'faqs',
        title: 'FAQs',
      },
      {
        link: 'about',
        title: 'About Us',
      },
    ],
  };

  return (
    <footer className='w-full pt-[5.125rem] bg-primary-14'>
      <div className='container flex flex-col w-full px-container-base lg:px-container-lg'>
        <div className='flex items-center gap-[0.625rem] mb-[4.125rem]  md:mb-[0.875rem]'>
          <Icon name='filmReel' svgProp={{ width: 22.75, height: 22.75 }} />
          <h4 className='font-[700] text-[16px] md:text-[24px] leading-[24px] tracking-[0.15px] text-white'>
            Nollywood Filmmaker.com
          </h4>
        </div>
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-x-[8rem]'>
          <div className='flex flex-col gap-4 pt-[calc(74px-0.875rem)]'>
            <h3 className='max-w-[340px] text-secondary-7 font-[800] text-[40px] leading-[48px] -tracking-[0.5px]'>
              Ready to get started?!
            </h3>
            <p className='font-[400] text-[16px] leading-[24px] tracking-[0.15px] text-secondary-8 max-w-[478px]'>
              Subscribe to our newsletter to stay updated with the filmmaking industry. And nope, we
              won’t spam your inbox. Promise!
            </p>
            <div className='w-full max-w-[36rem] h-[4.5rem] bg-white rounded-[8px] p-[0.75rem] flex items-center justify-between'>
              <input className='form-input flex-grow border-0 focus:!ring-0' />
              <button className='h-full w-[10.45rem] bg-primary-1 text-white rounded-[8px] font-[500] text-[14px] sm:text-[18px] leading-[24px] tracking-[0.15px] '>
                Subscribe
              </button>
            </div>
          </div>
          <div className='flex flex-col flex-wrap justify-between gap-8 md:flex-row'>
            <div className='flex flex-col items-start'>
              <h6 className='text-white mb-[1.5rem] font-[700] text-[16px] leading-[24px] tracking-[0.15px]'>
                Blogs
              </h6>
              <ul className='flex flex-col gap-4'>
                {footerLinks['Blogs']?.map((i, idx) => (
                  <li
                    onClick={() => navigate(`/${CONSTANTS?.ROUTES['blogs']}?category=${i?.link}`)}
                    key={idx}
                    className='whitespace-nowrap text-secondary-7 font-[400] text-[16px] leading-[24px] tracking-[0.15px] cursor-pointer hover:text-white transition-colors duration-300 ease-in-out'
                  >
                    {i?.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col items-start'>
              <h6 className='text-white mb-[1.5rem] font-[700] text-[16px] leading-[24px] tracking-[0.15px]'>
                BTS
              </h6>
              <ul className='flex flex-col gap-4'>
                {footerLinks['BTS']?.map((i, idx) => (
                  <li
                    onClick={() => navigate(`/${i?.link}`)}
                    key={idx}
                    className='whitespace-nowrap text-secondary-7 font-[400] text-[16px] leading-[24px] tracking-[0.15px] cursor-pointer hover:text-white transition-colors duration-300 ease-in-out'
                  >
                    {i?.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col items-start'>
              <h6 className='text-white mb-[1.5rem] font-[700] text-[16px] leading-[24px] tracking-[0.15px]'>
                Links
              </h6>
              <ul className='flex flex-col gap-4'>
                {footerLinks['Links']?.map((i, idx) => (
                  <li
                    onClick={() => navigate(`/${i?.link}`)}
                    key={idx}
                    className='whitespace-nowrap text-secondary-7 font-[400] text-[16px] leading-[24px] tracking-[0.15px] cursor-pointer hover:text-white transition-colors duration-300 ease-in-out'
                  >
                    {i?.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className='h-[4.5rem] md:h-[5.1875rem] bg-primary-16 mt-[9.375rem] px-container-base lg:px-container-lg
      flex items-center justify-between
      '
      >
        <span className='text-secondary-7 text-[12px] leading-[14px] tracking-[0.4px]'>
          © 2023 Nollywood Filmmaker
        </span>
        <div className='flex items-center gap-[1.67rem]'>
          <Icon name='facebookIcon' />
          <Icon name='instaIcon' />
          <Icon name='twitterIcon' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
