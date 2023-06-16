import { navLinks as majorNavLinks, navTitleTypes } from 'components/partials/external-nav';
import { useNavigate } from 'react-router-dom';
import { ItitleLinks, routePathTypes } from 'types';

const NonAuthMenu = ({ close }: { close: () => void }) => {
  const nav = useNavigate();

  const navigate = (i: string) => {
    close();
    nav(i);
  };

  const navLinks: ItitleLinks<
    navTitleTypes | 'Hire Talent' | 'Login' | 'Sign Up',
    routePathTypes
  >[] = [
    ...majorNavLinks,
    {
      title: 'Hire Talent',
      link: 'hire-talent',
    },
    {
      title: 'Login',
      link: 'login',
    },
    {
      title: 'Sign Up',
      link: 'create-account',
    },
  ];

  return (
    <div className='flex-col w-full h-full'>
      {navLinks?.map((i, idx) => (
        <div
          onClick={() => navigate(`/${i?.link}`)}
          key={idx}
          className='p-4 font-[400] text-[16px] text-secondary-12 rounded-[8px] hover:bg-primary-6 hover:text-primary-1 transition-all duration-300 ease-in-out cursor-pointer'
        >
          {i?.title}
        </div>
      ))}
    </div>
  );
};

export default NonAuthMenu;
