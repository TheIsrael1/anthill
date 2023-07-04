import FunkyPagesHero from 'components/general/FunkyPagesHero';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { planTypes } from 'types';
import Icon from 'utils/Icon';
import pricingGirl from 'assets/image/pricingGirl.png';

const Pricing = () => {
  const planPartials: Record<
    planTypes,
    { title: string; description: string; price: string; benefits: string[] }
  > = {
    starter: {
      title: `Free Starter Pack`,
      benefits: [`Weekly Blog`],
      description: `A simple start for everyone`,
      price: `0`,
    },
    student: {
      title: `Nollywood Student`,
      benefits: [`Weekly Blog`, `Anthill BTS`, `General Forum`, `Download Assets/Templates`],
      description: `Solution for big organizations`,
      price: `5,000`,
    },
    professional: {
      title: `Nollywood Pro`,
      benefits: [
        `Nollywood student benefits`,
        `Online Interactive Training`,
        `Professional Support Forum`,
        `Profile Page with CV`,
      ],
      description: `For small to medium businesses`,
      price: `20,000`,
    },
    master: {
      title: `Nollywood Master`,
      benefits: [
        `All Nollywood Pro benefits`,
        `Masterclasses/Workshops`,
        `Production Consultancy`,
        `Advertise a Service`,
        `Direct Chat with a Professional `,
      ],
      description: `Solution for big organizations`,
      price: `50,000`,
    },
  };

  return (
    <div className='w-full items-center flex flex-col my-[1.125rem] container px-container-base lg:px-container-lg'>
      <FunkyPagesHero title='Pricing Plans' description='' />
      <p className='mt-[1.5rem] md:mt-[5rem] mb-[3rem] text-primary-9/60 max-w-[544px] text-[14px] leading-[21px] tracking-[0.15px] text-center w-full'>
        All plans include advanced tools and features to boost your experience. Choose the best plan
        to fit your needs.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[1.5rem] mb-[5rem]'>
        <div className='flex flex-col items-center rounded-[8px] px-[1.5rem] border border-primary-9/[0.12] hover:border-primary-18 pt-[3.75rem] gap-[1.25rem] cursor-pointer transition-colors ease-in-out duration-300'>
          <Icon name='pricingStarter' />
          <div className='flex flex-col items-center gap-[.375rem]'>
            <h5 className='font-[500] text-primary-9/[0.87] text-[24px] leading-[32px]'>
              {planPartials['starter']?.title}
            </h5>
            <p className='text-[14px] text-primary-9/60 leading-[21px] tracking-[0.15px]'>
              {planPartials['starter']?.description}
            </p>
          </div>
          <div className='flex justify-center'>
            <span className='text-[14px] tracking-[0.15px] text-primary-9/60 leading-[21px] self-start'>
              ₦
            </span>
            <span className='text-primary-1 font-[500] text-[48px] leading-[56px] '>
              {planPartials['starter']?.price}
            </span>
            <span className='self-end text-[14px] tracking-[0.15px] text-primary-9/60 leading-[21px]'>
              /month
            </span>
          </div>
          <div className='flex flex-col w-full gap-4'>
            {planPartials['starter']?.benefits?.map((i, idx) => (
              <div key={idx} className='w-full flex items-center justify-start gap-[.625rem]'>
                <Icon name='listButton' svgProp={{ className: 'text-primary-9' }} />
                <span className='text-primary-9/60 text-[14px] leading-[21px] tracking-[0.15]'>
                  {i}
                </span>
              </div>
            ))}
          </div>
          <div className='w-full h-[2.375rem] flex items-center justify-center rounded-[6px] border border-success-7/50 hover:bg-success-7/[0.05] group mb-[1.5rem] mt-auto transition-all duration-300 ease-in-out'>
            <span className=' text-success-1 font-[500] text-[14px] leading-[24px] tracking-[0.4px] '>
              {`Your Current Plan`?.toUpperCase()}
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center rounded-[8px] px-[1.5rem] border border-primary-9/[0.12] hover:border-primary-18 pt-[3.75rem] gap-[1.25rem] cursor-pointer transition-colors ease-in-out duration-300'>
          <Icon name='pricingStudent' />
          <div className='flex flex-col items-center gap-[.375rem]'>
            <h5 className='font-[500] text-primary-9/[0.87] text-[24px] leading-[32px]'>
              {planPartials['student']?.title}
            </h5>
            <p className='text-[14px] text-primary-9/60 leading-[21px] tracking-[0.15px]'>
              {planPartials['student']?.description}
            </p>
          </div>
          <div className='flex justify-center'>
            <span className='text-[14px] tracking-[0.15px] text-primary-9/60 leading-[21px] self-start'>
              ₦
            </span>
            <span className='text-primary-1 font-[500] text-[48px] leading-[56px] '>
              {planPartials['student']?.price}
            </span>
            <span className='self-end text-[14px] tracking-[0.15px] text-primary-9/60 leading-[21px]'>
              /month
            </span>
          </div>
          <div className='flex flex-col w-full gap-4'>
            {planPartials['student']?.benefits?.map((i, idx) => (
              <div key={idx} className='w-full flex items-center justify-start gap-[.625rem]'>
                <Icon name='listButton' svgProp={{ className: 'text-primary-9' }} />
                <span className='text-primary-9/60 text-[14px] leading-[21px] tracking-[0.15]'>
                  {i}
                </span>
              </div>
            ))}
          </div>
          <div className='w-full h-[2.375rem] flex items-center justify-center rounded-[6px] border border-primary-1/50 hover:bg-primary-1/[0.05] group mb-[1.5rem] mt-auto transition-all duration-300 ease-in-out'>
            <span className=' text-primary-1 font-[500] text-[14px] leading-[24px] tracking-[0.4px] '>
              {`Upgrade`?.toUpperCase()}
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center rounded-[8px] px-[1.5rem] border border-primary-9/[0.12] hover:border-primary-18 pt-[3.75rem] gap-[1.25rem] cursor-pointer transition-colors ease-in-out duration-300'>
          <Icon name='pricingPro' />
          <div className='flex flex-col items-center gap-[.375rem]'>
            <h5 className='font-[500] text-primary-9/[0.87] text-[24px] leading-[32px]'>
              {planPartials['professional']?.title}
            </h5>
            <p className='text-[14px] text-primary-9/60 leading-[21px] tracking-[0.15px]'>
              {planPartials['professional']?.description}
            </p>
          </div>
          <div className='flex justify-center'>
            <span className='text-[14px] tracking-[0.15px] text-primary-9/60 leading-[21px] self-start'>
              ₦
            </span>
            <span className='text-primary-1 font-[500] text-[48px] leading-[56px] '>
              {planPartials['professional']?.price}
            </span>
            <span className='self-end text-[14px] tracking-[0.15px] text-primary-9/60 leading-[21px]'>
              /month
            </span>
          </div>
          <div className='flex flex-col w-full gap-4'>
            {planPartials['professional']?.benefits?.map((i, idx) => (
              <div key={idx} className='w-full flex items-center justify-start gap-[.625rem]'>
                <Icon name='listButton' svgProp={{ className: 'text-primary-9' }} />
                <span className='text-primary-9/60 text-[14px] leading-[21px] tracking-[0.15]'>
                  {i}
                </span>
              </div>
            ))}
          </div>
          <div className='w-full h-[2.375rem] flex items-center justify-center rounded-[6px] border border-primary-1/50 hover:bg-primary-1/[0.05] group mb-[1.5rem] mt-auto transition-all duration-300 ease-in-out'>
            <span className=' text-primary-1 font-[500] text-[14px] leading-[24px] tracking-[0.4px] '>
              {`Upgrade`?.toUpperCase()}
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center rounded-[8px] px-[1.5rem] border border-primary-9/[0.12] hover:border-primary-18 pt-[3.75rem] gap-[1.25rem] cursor-pointer transition-colors ease-in-out duration-300'>
          <Icon name='pricingMaster' />
          <div className='flex flex-col items-center gap-[.375rem]'>
            <h5 className='font-[500] text-primary-9/[0.87] text-[24px] leading-[32px]'>
              {planPartials['master']?.title}
            </h5>
            <p className='text-[14px] text-primary-9/60 leading-[21px] tracking-[0.15px]'>
              {planPartials['master']?.description}
            </p>
          </div>
          <div className='flex justify-center'>
            <span className='text-[14px] tracking-[0.15px] text-primary-9/60 leading-[21px] self-start'>
              ₦
            </span>
            <span className='text-danger-3 font-[500] text-[48px] leading-[56px] '>
              {planPartials['master']?.price}
            </span>
            <span className='self-end text-[14px] tracking-[0.15px] text-primary-9/60 leading-[21px]'>
              /month
            </span>
          </div>
          <div className='flex flex-col w-full gap-4'>
            {planPartials['master']?.benefits?.map((i, idx) => (
              <div key={idx} className='w-full flex items-center justify-start gap-[.625rem]'>
                <Icon name='listButton' svgProp={{ className: 'text-primary-9' }} />
                <span className='text-primary-9/60 text-[14px] leading-[21px] tracking-[0.15]'>
                  {i}
                </span>
              </div>
            ))}
          </div>
          <div className='w-full h-[2.375rem] flex items-center justify-center rounded-[6px] border border-primary-1/50 hover:bg-primary-1/[0.05] group mb-[1.5rem] mt-auto transition-all duration-300 ease-in-out'>
            <span className=' text-danger-3 font-[500] text-[14px] leading-[24px] tracking-[0.4px] '>
              {`Upgrade`?.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
      <div className='relative w-full h-auto bg-primary-1/[0.04] py-[2.8rem] lg:px-[8.75rem]'>
        <h5 className='text-primary-1 font-[500] text-[24px] leading-[32px] font-inter mb-[0.625rem]'>
          Still not convinced? Start with a 14-day FREE trial!
        </h5>
        <p className='text-[14px] leading-[21px] tracking-[0.15px] text-primary-9/60'>
          You will get full access to all the features for 14 days.
        </p>
        <div className='bottom-0 h-auto md:left-[8.75rem] md:mt-4 py-[5rem] lg:py-0 xl:left-auto lg:right-[15.44rem]  relative xl:absolute w-[23.94rem] lg:h-[17rem]'>
          <LazyLoadImage src={pricingGirl} alt='' effect='blur' className='w-full h-full' />
        </div>
        <button className='mt-[2.47rem] px-[1.25rem] py-[7px] bg-primary-1 rounded-[6px] shadow-3 hover:opacity-90 transition-opacity duration-300 ease-in-out'>
          <span className='font-[500] text-[14px] leading-[24px] tracking-[0.4px] text-white'>
            {`Start 14-day free trial`?.toUpperCase()}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pricing;
