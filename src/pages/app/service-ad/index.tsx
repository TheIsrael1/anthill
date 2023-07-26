import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PillTabs from 'components/general/PillTabs';
import PlanGuard from 'guards/PlanGuard';
import { useState } from 'react';
import adPlaceholder from 'assets/image/advertPlaceholder.png?format=webp&imagetools';
import AdvertCard from 'components/general/AdvertCard';
import Icon from 'utils/Icon';

type filterTypes = 'Your Ads' | 'Expired  Ads';

const generalFilters: filterTypes[] = ['Your Ads', 'Expired  Ads'];

const ServiceAd = () => {
  const [currFilter, setCurrFilter] = useState<filterTypes>('Your Ads');

  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero
        description='Put out an Ad for a service and find interested candidates!'
        title='Advertise a Service'
      />
      <PlanGuard page='service-ad'>
        <>
          <div className='flex justify-center w-full my-[2.5rem]'>
            <PillTabs
              tabs={generalFilters}
              currActive={currFilter}
              onSelect={(i) => setCurrFilter(i)}
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-[1.5rem] gap-y-[2.5rem]'>
            <div className='flex flex-col justify-between w-full cursor-pointer h-max group'>
              <div className='flex flex-col'>
                <div
                  className='relative w-full h-[16.93rem] mb-[1rem] rounded-[8px] border-b-4 overflow-hidden
                 bg-white grid place-items-center transition-all ease-in-out duration-300
                  '
                >
                  <Icon name='bigPlus' />
                </div>
                <div className='flex items-center justify-between w-full mb-4'>
                  <span className='text-primary-1 text-[14px] leading-[21px] tracking-[0.1px] font-[600] '>
                    Create a new Ad
                  </span>
                  <span className='text-secondary-2 text-[14px] leading-[21px] tracking-[0.1px] font-[300] '></span>
                </div>
                <h5 className='mb-4 text-primary-12 text-[20px] leading-[27px] font-[700]'>
                  Blank
                </h5>
              </div>
            </div>
            {[...Array(3)]?.map((_, idx) => (
              <div key={idx} className='w-full h-full'>
                <AdvertCard
                  adImage={adPlaceholder}
                  description={`Filmmaking is an art form that requires a combination of technical skills and...`}
                  location='Landmark, Lokoja'
                  price='N10 000'
                  title='We need a Cinematographer for a Shoot in Lokoja!'
                />
              </div>
            ))}
          </div>
        </>
      </PlanGuard>
    </div>
  );
};

export default ServiceAd;
