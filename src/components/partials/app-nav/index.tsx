import Icon from 'utils/Icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'components/shadcn/dropdown-menu';
import { ItitleLinks, routePathTypes } from 'types';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';
import Menu from '../Menu';

export type IDropNavTitles = 'Profile' | 'Chat' | 'Settings' | 'Subscription' | 'FAQ' | 'Logout';

interface extendedRoutesInterface extends ItitleLinks<IDropNavTitles, routePathTypes> {
  icons: JSX.Element;
}

interface IDropNavLinks {
  level1: extendedRoutesInterface[];
  level2: extendedRoutesInterface[];
  level3: extendedRoutesInterface[];
}

export const menuLinks: IDropNavLinks = {
  level1: [
    { icons: <Icon name='profileIcon' />, link: `profile`, title: `Profile` },
    { icons: <Icon name='chatIcon' />, link: `chat`, title: `Chat` },
  ],
  level2: [
    { icons: <Icon name='settingIcon' />, link: `settings`, title: `Settings` },
    { icons: <Icon name='cashIcon' />, link: `subscriptions`, title: `Subscription` },
    { icons: <Icon name='infoIcon' />, link: `faqs`, title: `FAQ` },
  ],
  level3: [{ icons: <Icon name='exitIcon' />, link: `logout`, title: `Logout` }],
};

const AppNav = () => {
  const navigate = useNavigate();

  // const { width } = useWindowSize();

  const tags = useMemo(() => {
    const chatCount = 2;
    return {
      Chat: chatCount ? (
        <div className='bg-danger-1 w-[20px] h-[20px] grid place-items-center rounded-[64px] text-[12px] leading-[20px] tracking-[0.14px] text-white'>
          {chatCount}
        </div>
      ) : (
        <></>
      ),
    } as Record<IDropNavTitles, JSX.Element>;
  }, []);

  return (
    <>
      <nav
        className={` containter w-full  sticky right-0 left-0  md:pt-[0.75rem] md:px-container-base h-max md:h-[4rem] transition-all duration-300 ease-in-out border-b border-b-extraColor-borderBottom-3 md:border-0`}
      >
        <div className='w-full  h-full hidden md:flex justify-between  py-[0.75rem] md:px-container-base shadow-4 rounded-[8px]'>
          <div className='flex items-center flex-grow'>
            <Icon name='searchIcon' svgProp={{ className: 'text-primary-9' }} />
            <input
              className='flex-grow mx-2 form-input border-0 focus:!ring-0 placeholder:text-textColor-disabled'
              placeholder='Search (Ctrl+/)'
            />
          </div>
          <div className='flex items-center gap-[1.125rem]'>
            <Icon name='notificationIcon' />

            <DropdownMenu>
              <DropdownMenuTrigger className='focus:ring-0 active:ring-0 focus-within:ring-0 focus-within:outline-0'>
                <Icon name='demoDp' />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-white shadow-5  mr-[1.5rem] w-[14.375rem]'>
                <DropdownMenuLabel className='flex gap-[0.625rem] items-center !py-[0.875rem] !px-[1.25rem]'>
                  <Icon name='demoDp' />
                  <div className='flex flex-col text-[14px] tracking-[0.15px]'>
                    <h6 className='text-textColor-primary font-[600] font-inter'>John Doe</h6>
                    <span className='text-textColor-disabled font-[400] text-[12px] leading-[14px] tracking-[0.4px]'>
                      User
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className='border-b border-b-extraColor-divider' />
                {menuLinks['level1']?.map((i, idx) => (
                  <DropdownMenuItem
                    onClick={() => navigate(`/${i?.link}`)}
                    key={idx}
                    className='!py-[0.75rem] !px-[1.25rem] text-textColor-primary text-[14px] leading-[21px] tracking-[0.15px] flex items-center gap-[0.75rem] cursor-pointer'
                  >
                    <div className='flex items-center'>{i?.icons}</div>
                    <div className='flex justify-between flex-grow'>
                      {' '}
                      <span>{i?.title}</span>
                      {tags[i?.title]}
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className='border-b border-b-extraColor-divider' />

                {menuLinks['level2']?.map((i, idx) => (
                  <DropdownMenuItem
                    onClick={() => navigate(`/${i?.link}`)}
                    key={idx}
                    className='!py-[0.75rem] !px-[1.25rem] text-textColor-primary text-[14px] leading-[21px] tracking-[0.15px] flex items-center gap-[0.75rem] cursor-pointer'
                  >
                    <div className='flex items-center'>{i?.icons}</div>
                    <div className='flex justify-between flex-grow'>
                      {' '}
                      <span>{i?.title}</span>
                      <div> {tags[i?.title]}</div>
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className='border-b border-b-extraColor-divider' />

                {menuLinks['level3']?.map((i, idx) => (
                  <DropdownMenuItem
                    onClick={() => navigate(`/${i?.link}`)}
                    key={idx}
                    className='!py-[0.75rem] !px-[1.25rem] text-textColor-primary text-[14px] leading-[21px] tracking-[0.15px] flex items-center gap-[0.75rem] cursor-pointer'
                  >
                    <div className='flex items-center'>{i?.icons}</div>
                    <span>{i?.title}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className='w-full  flex md:hidden px-container-base justify-between items-center py-[1.875rem] '>
          <div
            className='flex items-center gap-[0.39rem] md:gap-[0.625rem] cursor-pointer'
            onClick={() => navigate(`/`)}
          >
            <Icon
              name='filmReel'
              svgProp={{ className: 'w-[20px] h-[20px] md:w-auto md:h-auto' }}
            />
            <h4 className='font-[600] md:font-[500] text-[16px] md:text-[24px] leading-[20px] md:leading-[24px] tracking-[0.15px] text-primary-8'>
              Nollywood Filmmaker.com
            </h4>
          </div>
          <div className='flex items-center'>
            <Menu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNav;
