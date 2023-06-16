import ManageSubscriptions from 'components/modal/ManageSubscriptions';
import CONSTANTS from 'constant';
import usePlan from 'hooks/business-logic/usePlan';
import { useMemo } from 'react';
import useStore from 'store';
import { routePathTypes } from 'types';
import Icon from 'utils/Icon';

interface IPlanGuard {
  page: routePathTypes;
  children: JSX.Element;
}

const PlanGuard = ({ children, page }: IPlanGuard) => {
  const currUserPlan = useStore((state) => state?.plan);
  const { isAllowed } = usePlan({ currUserPlan });

  const allowed = useMemo(() => {
    const pagePlan = CONSTANTS.PLAN_PERMISSIONS[page];
    return isAllowed(pagePlan);
  }, [isAllowed, page]);

  return allowed ? (
    children
  ) : (
    <section className='flex flex-col items-center justify-center flex-grow w-full gap-4'>
      <div>
        <Icon name='alienPlants' />
      </div>
      <p className='text-primary-1 text-[14px] leading-[20px] tracking-[0.15px]'>
        Upgrade to the Nollywood {CONSTANTS.PLAN_PERMISSIONS[page]} plan to access this.
      </p>{' '}
      <ManageSubscriptions
        trigger={
          <button className='w-[130px] h-[38px] bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
            <span className='font-[500] text-[14px] leading-[24px] tracking-[0.4px] text-white'>
              UPGRADE
            </span>
            <Icon
              name='arrowTo'
              svgProp={{
                className:
                  'text-white group-hover:translate-x-1 transition-transform duration-300 ease-in-out',
              }}
            />
          </button>
        }
      />
    </section>
  );
};

export default PlanGuard;
