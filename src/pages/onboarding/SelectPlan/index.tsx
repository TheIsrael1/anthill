import { LazyLoadImage } from 'react-lazy-load-image-component';
import sittingLady from 'assets/image/sittingLady.png?format=webp&w=350&h=552.18&imagetools';
import { Input } from 'components/shadcn/input';
import Icon from 'utils/Icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger } from 'components/shadcn/dialog';
import CONSTANTS from 'constant';

export type subTypes = 'Nollywood Student' | 'Nollywood Professional' | 'Nollywood Master';

interface planInterface {
  plan: subTypes;
  description: string;
  price: string;
}

export const availableSubs: planInterface[] = [
  { plan: 'Nollywood Student', description: 'For newbies in the industry', price: '5,000' },
  {
    plan: 'Nollywood Professional',
    description: 'For mid-levels in the Industry',
    price: '20,000',
  },
  { plan: 'Nollywood Master', description: 'For Seniors in the Industry', price: '50,000' },
];

const SelectPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState<subTypes>('Nollywood Student');
  const navigate = useNavigate();

  return (
    <div className='flex items-center w-full h-full'>
      <div className='items-center justify-end hidden h-full overflow-hidden md:flex bg-primary-15 xl:min-w-[450px] flex-grow-0 flex-shrink-1 basis-auto'>
        <div className='min-w-[350px] min-h-[552.18px] transition-all ease-in-out duration-300'>
          <LazyLoadImage
            className='w-full h-full bg-current'
            src={sittingLady}
            effect='blur'
            alt=''
          />
        </div>
      </div>
      <div className='w-full h-full py-8 md:flex md:items-center   md:max-w-[calc(700px)] mx-auto px-4 bg-white'>
        <div className='flex flex-col items-start justify-center w-full mx-auto '>
          <h5 className='text-primary-9/[0.87] font-[500] text-[24px] leading-[32px]'>
            Select Plan
          </h5>
          <p className='text-primary-9/[0.60] tracking-[0.15px] leading-[24px] mb-[1.25rem] '>
            Select plan as per your requirement
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-[1.25rem] mb-[2.5rem] mx-auto'>
            {availableSubs?.map((i, idx) => (
              <div
                key={idx}
                className='flex flex-col gap-2 p-4 rounded-[8px] border border-primary-9/[0.12] cursor-pointer
                hover:border-primary-1 transition-colors duration-300 ease-in-out
                '
                onClick={() => setSelectedPlan(i?.plan)}
              >
                <h6 className='text-center text-primary-9/[0.87] font-[500] text-[16.67px] leading-[22px]'>
                  {i?.plan}
                </h6>
                <span className='text-center text-primary-9/[0.6] text-[9.72px] leading-[15px]'>
                  {i?.description}
                </span>
                <div className='flex justify-center h-max '>
                  <span
                    className={`${
                      i?.plan === 'Nollywood Master' ? 'text-danger-3' : 'text-primary-1'
                    }  text-[9.72px] leading-[15px] tracking-[0.15px] self-start`}
                  >
                    ₦
                  </span>
                  <span
                    className={` ${
                      i?.plan === 'Nollywood Master' ? 'text-danger-3' : 'text-primary-1'
                    } font-[500] text-[23.61px] leading-[29px] tracking-[0.17px] font-inter `}
                  >
                    {i?.price}
                  </span>
                  <span className='self-end  text-primary-9/60 text-[14px] leading-[21px] tracking-[0.15px]'>
                    /month
                  </span>
                </div>
                <div className='flex justify-center my-[1.2rem]'>
                  <div
                    className={`w-[15px] h-[15px] rounded-[50px] ${
                      i?.plan === selectedPlan
                        ? `border-4 border-primary-1 shadow-8`
                        : `border border-primary-9/[0.38]`
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
          <h5 className='text-primary-9/[0.87] font-[500] text-[24px] leading-[32px]'>
            Payment Information
          </h5>
          <p className='text-primary-9/[0.60] tracking-[0.15px] leading-[24px] mb-[1.25rem] '>
            Enter your card information
          </p>
          <div className='flex flex-col gap-[1.25rem] w-full'>
            <Input placeholder='Card Number' className='placeholder:text-primary-9/[0.38] w-full' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[1.25rem]'>
              <Input
                placeholder='Name on Card'
                className='placeholder:text-primary-9/[0.38] w-full'
              />
              <div className='grid grid-cols-2 gap-[1.25rem]'>
                <Input placeholder='Expiry' className='placeholder:text-primary-9/[0.38] w-full' />
                <Input placeholder='CVV' className='placeholder:text-primary-9/[0.38] w-full' />
              </div>
            </div>
            <div className='flex justify-end'>
              <Dialog>
                <DialogTrigger>
                  <button className='w-[130px] h-[38px] mb-8 bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
                    <span className='font-[500] text-[14px] leading-[24px] tracking-[0.4px] text-white'>
                      PAY NOW
                    </span>
                    <Icon
                      name='arrowTo'
                      svgProp={{
                        className:
                          'text-white group-hover:translate-x-1 transition-transform duration-300 ease-in-out',
                      }}
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className='h-screen bg-white sm:h-max sm:w-[80vw] !max-w-[1120px]'>
                  <div className='w-full h-full pt-[6.56rem] pb-[5.31rem] flex flex-col items-center gap-[1.5rem]'>
                    <div className='w-full flex justify-center mb-[1.25rem]'>
                      <Icon name='bigSmile' />
                    </div>
                    <h5 className='max-w-[469px] text-center text-secondary-17 font-[500] text-[24px] leading-[32px] font-mukta'>
                      You have successfully subscribed to “Nollywood Professional”
                    </h5>
                    <p
                      className='text-primary-9/60 text-[14px] leading-[21px] tracking-[0.15px]
                       max-w-[544px] text-center'
                    >
                      Enjoy all splendid benefits that come with being a Nollywood professional! You
                      have the first 14 days free and you can cancel at anytime!
                    </p>
                    <button
                      onClick={() => navigate(`/app/${CONSTANTS.ROUTES.dashboard}`)}
                      className='w-full bg-primary-1 text-white py-4 rounded-[4px] max-w-[560px] leading-[20px] tracking-[0.15px] hover:opacity-90 transition-opacity duration-300 ease-in-out'
                    >
                      Go to Dashboard
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
