import ManageSubscriptions from 'components/modal/ManageSubscriptions';
import CONSTANTS from 'constant';
import usePlan from 'hooks/business-logic/usePlan';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useStore from 'store';
import { ItitleLinks, planTypes, routePathTypes } from 'types';
import Icon from 'utils/Icon';

type ISideNavTitles =
  | 'Blogs'
  | 'General Forums'
  | 'Professional Forums'
  | 'Behind The Scenes'
  | 'Assets and Templates'
  | 'CV Profile'
  | 'Consultancy'
  | 'Advertise a Service'
  | 'Online Training'
  | 'Master Classes'
  | 'Bi-annual Bootcamps';

interface extendedRouteInterface extends ItitleLinks<ISideNavTitles, routePathTypes> {
  icons: JSX.Element;
  plan: planTypes;
}

interface ISideNavLinks {
  discussions: extendedRouteInterface[];
  features: extendedRouteInterface[];
  trainings: extendedRouteInterface[];
}

export const sideNavLinks: ISideNavLinks = {
  discussions: [
    {
      link: 'blogs',
      title: 'Blogs',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='fileIcon'
        />
      ),
      plan: CONSTANTS.PLAN_PERMISSIONS['blogs'],
    },
    {
      link: 'general-forums',
      title: 'General Forums',
      icons: (
        <Icon
          name='gForumIcon'
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
        />
      ),
      plan: CONSTANTS.PLAN_PERMISSIONS['general-forums'],
    },
    {
      link: 'professional-forums',
      title: 'Professional Forums',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='pForumIcon'
        />
      ),
      plan: CONSTANTS.PLAN_PERMISSIONS['professional-forums'],
    },
  ],
  features: [
    {
      link: 'bts',
      title: 'Behind The Scenes',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='btsIcon'
        />
      ),
      plan: CONSTANTS.PLAN_PERMISSIONS['bts'],
    },
    {
      link: 'assets-templates',
      title: 'Assets and Templates',
      icons: (
        <Icon
          name='palleteIcon'
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
        />
      ),
      plan: CONSTANTS.PLAN_PERMISSIONS['assets-templates'],
    },
    {
      link: 'cv-profile',
      title: 'CV Profile',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='cvIcon'
        />
      ),
      plan: CONSTANTS.PLAN_PERMISSIONS['cv-profile'],
    },
    {
      link: 'consultancy',
      title: 'Consultancy',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='consultancyIcon'
        />
      ),
      plan: CONSTANTS.PLAN_PERMISSIONS['consultancy'],
    },
    {
      link: 'service-ad',
      title: 'Advertise a Service',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='bigTIcon'
        />
      ),
      plan: CONSTANTS.PLAN_PERMISSIONS['service-ad'],
    },
  ],
  trainings: [
    {
      link: 'online-training',
      title: 'Online Training',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='onlineTrainingIcon'
        />
      ),
      plan: CONSTANTS.PLAN_PERMISSIONS['online-training'],
    },
    {
      link: 'master-classes',
      title: 'Master Classes',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='masterClassesIcon'
        />
      ),
      plan: CONSTANTS.PLAN_PERMISSIONS['master-classes'],
    },
    {
      link: 'bootcamps',
      title: 'Bi-annual Bootcamps',
      icons: (
        <Icon
          svgProp={{
            width: 22.75,
            height: 22.75,
            className: 'text-current',
          }}
          name='threeDotIcon'
        />
      ),
      plan: CONSTANTS.PLAN_PERMISSIONS['bootcamps'],
    },
  ],
};

export const planTokens: Record<planTypes, { name: string; icon: JSX.Element }> = {
  starter: {
    icon: <Icon svgProp={{ width: 32, height: 32 }} name='studentIcon' />,
    name: 'Nollywood Starter',
  },
  master: {
    icon: <Icon svgProp={{ width: 32, height: 32 }} name='masterCrown' />,
    name: 'Nollywood Master',
  },
  professional: {
    icon: <Icon svgProp={{ width: 32, height: 32 }} name='masterCrown' />,
    name: 'Nollywood Pro',
  },
  student: {
    icon: <Icon svgProp={{ width: 32, height: 32 }} name='studentIcon' />,
    name: 'Nollywood Student',
  },
};

const SideNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const currentUserPlan = useStore((state) => state.plan);
  const navigate = useNavigate();

  const { isAllowed } = usePlan({ currUserPlan: currentUserPlan });

  const location = useLocation();

  return (
    <div
      className={`sticky top-0 bottom-0 ${
        navOpen ? ` w-[260px]` : `w-[86px]`
      } h-full shadow-3 py-[1.65rem] flex flex-col relative transition-[width] duration-300 ease-in-out`}
    >
      <button
        onClick={() => setNavOpen((prev) => !prev)}
        className='absolute -right-[11px] top-[2rem] h-[22px] w-[22px] rounded-[30px] bg-primary-1 ring-[7px] ring-primary-15 z-10'
      />
      <div className='pb-[2.5rem]'>
        <div
          onClick={() => navigate(`/app/dashboard`)}
          className='flex items-center gap-[0.625rem] px-[1.66rem] cursor-pointer'
        >
          <div className='flex items-center'>
            <Icon name='nfmLogo' svgProp={{ width: 34.75, height: 34.75 }} />
          </div>
          <h4
            className={`font-[700] text-[28px] orig leading-[24px] tracking-[0.15px] text-textColor-primary ${
              navOpen ? `opacity-100` : `scale-0 opacity-0`
            }  duration-300`}
          >
            Filmmaker
          </h4>
        </div>
      </div>
      <div className='flex flex-col gap-[1.125rem] flex-grow overflow-y-auto overflow-x-hidden no-scrollbar'>
        <div className='px-4 '>
          <div
            onClick={() => navigate(`/app/${CONSTANTS.ROUTES.dashboard}`)}
            className={`flex gap-[0.625rem] items-center px-4 py-[0.625rem] hover:bg-primary-light 
            ${
              isAllowed(`student`) ? `text-secondary-9` : `text-secondary-13`
            } hover:text-primary-1 ${
              location?.pathname === `/app/${CONSTANTS.ROUTES.dashboard}`
                ? `!bg-primary-light !text-primary-1`
                : ``
            }
            cursor-pointer rounded-[6px] transition duration-300 group`}
          >
            <div className='flex items-center'>
              {!isAllowed(`student`) ? (
                <Icon
                  svgProp={{
                    width: 22.75,
                    height: 22.75,
                  }}
                  name='padLock'
                />
              ) : (
                <Icon
                  name='dashboardIcon'
                  svgProp={{
                    width: 22.75,
                    height: 22.75,
                  }}
                />
              )}
            </div>
            <h6
              className={`font-[400] text-[16px] leading-[24px] tracking-[0.15px] 
          ${navOpen ? `opacity-100` : `scale-0 opacity-0`}
          duration-300`}
            >
              Dashboard
            </h6>
          </div>
        </div>
        <div
          className={`flex relative ${
            navOpen ? `opacity-100` : `opacity-0`
          } transition-opacity duration-300`}
        >
          <div className='absolute left-0 w-4 border border-action-disabledBg top-1/3' />
          <div className='px-8 text-textColor-disabled font-[400] text-[12px] leading-[14px] tracking-[0.4px]'>
            {`Discussions`?.toUpperCase()}
          </div>
        </div>
        <div className='flex flex-col mb-[1.125rem]'>
          {sideNavLinks['discussions']?.map((i, idx) => (
            <div className='px-4' key={idx}>
              <div
                onClick={() => navigate(`/app/${i?.link}`)}
                className={`flex gap-[0.625rem] items-center px-4 py-[0.625rem] hover:bg-primary-light cursor-pointer rounded-[6px]
                ${isAllowed(i?.plan) ? `text-secondary-9` : `text-secondary-13`} 
                ${
                  location?.pathname === `/app/${i?.link}`
                    ? `!bg-primary-light !text-primary-1`
                    : ``
                }
                hover:text-primary-1
                transition duration-300 group`}
              >
                <div className='flex items-center'>
                  {!isAllowed(i?.plan) ? (
                    <Icon
                      svgProp={{
                        width: 22.75,
                        height: 22.75,
                      }}
                      name='padLock'
                    />
                  ) : (
                    i?.icons
                  )}
                </div>
                <h6
                  className={`font-[400] text-[16px] leading-[24px] tracking-[0.15px]  whitespace-nowrap
              ${navOpen ? `opacity-100` : `scale-0 opacity-0`}
              duration-300`}
                >
                  {i?.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`flex relative ${
            navOpen ? `opacity-100` : `opacity-0`
          } transition-opacity duration-300`}
        >
          <div className='absolute left-0 w-4 border border-action-disabledBg top-1/3' />
          <div className='px-8 text-textColor-disabled font-[400] text-[12px] leading-[14px] tracking-[0.4px]'>
            {`FEATURES`?.toUpperCase()}
          </div>
        </div>
        <div className='flex flex-col  mb-[1.125rem]'>
          {sideNavLinks['features']?.map((i, idx) => (
            <div className='px-4' key={idx}>
              <div
                onClick={() => navigate(`/app/${i?.link}`)}
                className={`flex gap-[0.625rem] items-center px-4 py-[0.625rem] hover:bg-primary-light cursor-pointer rounded-[6px]
                ${isAllowed(i?.plan) ? `text-secondary-9` : `text-secondary-13`} 
                ${
                  location?.pathname === `/app/${i?.link}`
                    ? `!bg-primary-light !text-primary-1`
                    : ``
                }
                hover:text-primary-1
                transition duration-300 group`}
              >
                <div className='flex items-center'>
                  {!isAllowed(i?.plan) ? (
                    <Icon
                      svgProp={{
                        width: 22.75,
                        height: 22.75,
                      }}
                      name='padLock'
                    />
                  ) : (
                    i?.icons
                  )}
                </div>
                <h6
                  className={`font-[400] text-[16px] leading-[24px] tracking-[0.15px]   whitespace-nowrap
              ${navOpen ? `opacity-100` : `scale-0 opacity-0`}
              duration-300`}
                >
                  {i?.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`flex relative ${
            navOpen ? `opacity-100` : `opacity-0`
          } transition-opacity duration-300`}
        >
          <div className='absolute left-0 w-4 border border-action-disabledBg top-1/3' />
          <div className='px-8 text-textColor-disabled font-[400] text-[12px] leading-[14px] tracking-[0.4px]'>
            {`trainings`?.toUpperCase()}
          </div>
        </div>
        <div className='flex flex-col  mb-[1.125rem]'>
          {sideNavLinks['trainings']?.map((i, idx) => (
            <div className='px-4' key={idx}>
              <div
                onClick={() => navigate(`/app/${i?.link}`)}
                className={`flex gap-[0.625rem] items-center px-4 py-[0.625rem] hover:bg-primary-light cursor-pointer rounded-[6px] transition
                ${isAllowed(i?.plan) ? `text-secondary-9` : `text-secondary-13`} 
                ${
                  location?.pathname === `/app/${i?.link}`
                    ? `!bg-primary-light !text-primary-1`
                    : ``
                }
                hover:text-primary-1
                duration-300 group`}
              >
                <div className='flex items-center'>
                  {' '}
                  {!isAllowed(i?.plan) ? (
                    <Icon
                      svgProp={{
                        width: 22.75,
                        height: 22.75,
                      }}
                      name='padLock'
                    />
                  ) : (
                    i?.icons
                  )}
                </div>
                <h6
                  className={`font-[400] text-[16px] leading-[24px] tracking-[0.15px]  whitespace-nowrap
              ${navOpen ? `opacity-100` : `scale-0 opacity-0`}
              duration-300`}
                >
                  {i?.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`flex relative ${
            navOpen ? `opacity-100` : `opacity-0`
          } transition-opacity duration-300`}
        >
          <div className='absolute left-0 w-4 border border-action-disabledBg top-1/3' />
          <div className='px-8 text-textColor-disabled font-[400] text-[12px] leading-[14px] tracking-[0.4px]'>
            {`SUBSCRIPTION`?.toUpperCase()}
          </div>
        </div>
        <div className='w-full px-4 '>
          <div
            className={`w-full h-[60px] px-3  text-white bg-primary-1 rounded-[8px] transition duration-300 group cursor-pointer`}
          >
            <ManageSubscriptions
              triggerClassName='w-full h-full'
              trigger={
                <div className='flex w-full h-full items-center gap-[0.8rem]'>
                  <div className='flex items-center'>{planTokens[currentUserPlan]?.icon}</div>
                  <h6
                    className={`font-[600] text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap ${
                      navOpen ? `opacity-100` : `scale-0 opacity-0`
                    } duration-300`}
                  >
                    {planTokens[currentUserPlan]?.name}
                  </h6>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
