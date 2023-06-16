import ManageSubscriptions from 'components/modal/ManageSubscriptions';
import { IDropNavTitles, menuLinks } from 'components/partials/app-nav';
import { planTokens, sideNavLinks } from 'components/partials/side-nav';
import { DropdownMenuSeparator } from 'components/shadcn/dropdown-menu';
import CONSTANTS from 'constant';
import usePlan from 'hooks/business-logic/usePlan';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from 'store';
import Icon from 'utils/Icon';

const AuthMenu = ({ close }: { close: () => void }) => {
  const nav = useNavigate();
  const currentUserPlan = useStore((state) => state.plan);

  const navigate = (i: string) => {
    close();
    nav(i);
  };
  const { isAllowed } = usePlan({ currUserPlan: currentUserPlan });

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
    <div className='flex flex-col w-full h-full gap-[2.125rem]'>
      <div
        onClick={() => navigate(`/app/${CONSTANTS.ROUTES.dashboard}`)}
        className={`flex items-center gap-[0.625rem] p-4  rounded-[8px] group hover:bg-primary-6  hover:text-primary-1 transition-all
         duration-300 ease-in-out cursor-pointer
         ${isAllowed(`student`) ? `text-secondary-9` : `text-secondary-13`}
         `}
      >
        {!isAllowed(`student`) ? (
          <Icon
            name='padLock'
            svgProp={{
              width: 20,
              height: 20,
              className: 'group-hover:text-primary-1',
            }}
          />
        ) : (
          <Icon
            name='dashboardIcon'
            svgProp={{
              width: 20,
              height: 20,
              className: 'group-hover:text-primary-1',
            }}
          />
        )}
        <span className='font-[400] text-[16px] leading-[20px]'>{`Dashboard`}</span>
      </div>
      <div className={`flex relative  transition-opacity duration-300`}>
        <div className='absolute left-0 w-4 border border-action-disabledBg top-[40%]' />
        <div className='px-8 text-textColor-disabled font-[400] text-[12px] leading-[14px] tracking-[0.4px]'>
          {`Discussions`?.toUpperCase()}
        </div>
      </div>
      <div className='flex flex-col'>
        {sideNavLinks['discussions']?.map((i, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/app/${i?.link}`)}
            className={`flex items-center gap-[0.625rem] p-4  rounded-[8px] group hover:bg-primary-6  ${
              isAllowed(i?.plan) ? `text-secondary-9` : `text-secondary-13`
            } hover:text-primary-1 transition-all cursor-pointer`}
          >
            {!isAllowed(i?.plan) ? (
              <Icon
                svgProp={{
                  width: 20,
                  height: 20,
                }}
                name='padLock'
              />
            ) : (
              i?.icons
            )}
            <span className='font-[400] text-[16px] leading-[20px]'>{i?.title}</span>
          </div>
        ))}
      </div>
      <div className={`flex relative  transition-opacity duration-300`}>
        <div className='absolute left-0 w-4 border border-action-disabledBg top-[40%]' />
        <div className='px-8 text-textColor-disabled font-[400] text-[12px] leading-[14px] tracking-[0.4px]'>
          {`FEATURES`?.toUpperCase()}
        </div>
      </div>
      <div className='flex flex-col'>
        {sideNavLinks['features']?.map((i, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/app/${i?.link}`)}
            className={`flex items-center gap-[0.625rem] p-4  rounded-[8px] group hover:bg-primary-6  ${
              isAllowed(i?.plan) ? `text-secondary-9` : `text-secondary-13`
            } hover:text-primary-1 transition-all cursor-pointer`}
          >
            {!isAllowed(i?.plan) ? (
              <Icon
                svgProp={{
                  width: 20,
                  height: 20,
                }}
                name='padLock'
              />
            ) : (
              i?.icons
            )}
            <span className='font-[400] text-[16px] leading-[20px]'>{i?.title}</span>
          </div>
        ))}
      </div>
      <div className={`flex relative  transition-opacity duration-300`}>
        <div className='absolute left-0 w-4 border border-action-disabledBg top-[40%]' />
        <div className='px-8 text-textColor-disabled font-[400] text-[12px] leading-[14px] tracking-[0.4px]'>
          {`trainings`?.toUpperCase()}
        </div>
      </div>
      <div className='flex flex-col'>
        {sideNavLinks['trainings']?.map((i, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/app/${i?.link}`)}
            className={`flex items-center gap-[0.625rem] p-4  rounded-[8px] group hover:bg-primary-6  ${
              isAllowed(i?.plan) ? `text-secondary-9` : `text-secondary-13`
            } hover:text-primary-1 transition-all cursor-pointer`}
          >
            {!isAllowed(i?.plan) ? (
              <Icon
                svgProp={{
                  width: 20,
                  height: 20,
                }}
                name='padLock'
              />
            ) : (
              i?.icons
            )}
            <span className='font-[400] text-[16px] leading-[20px]'>{i?.title}</span>
          </div>
        ))}
      </div>
      <DropdownMenuSeparator className='border-b-2 border-extraColor-borderBottom-2' />
      <div className='flex flex-col '>
        <div className='flex items-center gap-2 px-4 mb-4'>
          <div className='w-max h-max rounded-[50px] border border-extraColor-borderBottom-2'>
            <Icon name='demoDp' />
          </div>
          <div className='flex flex-col text-[14px] tracking-[0.15px]'>
            <h6 className='text-textColor-primary font-[600] font-inter'>John Doe</h6>
            <span className='text-textColor-disabled font-[400] text-[12px] leading-[14px] tracking-[0.4px]'>
              User
            </span>
          </div>
        </div>
        {menuLinks['level1']?.map((i, idx) => (
          <div
            onClick={() => navigate(`/app/${i?.link}`)}
            key={idx}
            className='flex gap-[0.63rem] p-4 text-secondary-13  hover:text-textColor-primary text-[14px] leading-[21px] tracking-[0.15px] items-center cursor-pointer transition-colors duration-300 ease-in-out'
          >
            <div className='flex items-center'>{i?.icons}</div>
            <div className='flex justify-between flex-grow'>
              {' '}
              <span>{i?.title}</span>
              {tags[i?.title]}
            </div>
          </div>
        ))}
        {menuLinks['level2']
          ?.filter((i) => i?.title === 'Settings')
          ?.map((i, idx) => (
            <div
              onClick={() => navigate(`/app/${i?.link}`)}
              key={idx}
              className='flex gap-[0.63rem] p-4 text-secondary-13  hover:text-textColor-primary text-[14px] leading-[21px] tracking-[0.15px] items-center cursor-pointer transition-colors duration-300 ease-in-out'
            >
              <div className='flex items-center'>{i?.icons}</div>
              <div className='flex justify-between flex-grow'>
                {' '}
                <span>{i?.title}</span>
                {tags[i?.title]}
              </div>
            </div>
          ))}
        {menuLinks['level3']?.map((i, idx) => (
          <div
            onClick={() => navigate(`/app/${i?.link}`)}
            key={idx}
            className='flex gap-[0.63rem] p-4 hover:text-danger-1 text-danger-2 text-[14px] leading-[21px] tracking-[0.15px] items-center cursor-pointer transition-colors duration-300 ease-in-out'
          >
            <div className='flex items-center'>{i?.icons}</div>
            <div className='flex justify-between flex-grow'>
              {' '}
              <span>{i?.title}</span>
              {tags[i?.title]}
            </div>
          </div>
        ))}
      </div>
      <div className={`flex relative  transition-opacity duration-300`}>
        <div className='absolute left-0 w-4 border border-action-disabledBg top-[40%]' />
        <div className='px-8 text-textColor-disabled font-[400] text-[12px] leading-[14px] tracking-[0.4px]'>
          {`SUBSCRIPTION`?.toUpperCase()}
        </div>
      </div>
      <div className='w-full px-4'>
        <ManageSubscriptions
          trigger={
            <button
              className={`w-full h-[60px] px-3 flex items-center gap-[0.8rem] text-white bg-primary-1 rounded-[8px] transition duration-300 group cursor-pointer`}
            >
              <div className='flex items-center'>{planTokens[currentUserPlan]?.icon}</div>
              <h6
                className={`font-[600] text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap duration-300`}
              >
                {planTokens[currentUserPlan]?.name}
              </h6>
            </button>
          }
        />
      </div>
    </div>
  );
};

export default AuthMenu;
