import { Dialog, DialogContent, DialogTrigger } from 'components/shadcn/dialog';
import { Input } from 'components/shadcn/input';
import { availableSubs, subTypes } from 'pages/onboarding/SelectPlan';
import { useState } from 'react';
import useStore from 'store';
import { planTypes } from 'types';
import Icon from 'utils/Icon';

interface IManageSubscriptions {
  trigger: JSX.Element;
  triggerClassName?: string;
}

const ManageSubscriptions = ({ trigger, triggerClassName }: IManageSubscriptions) => {
  const currUserPlan = useStore((state) => state?.plan);
  const setCurrUserPlan = useStore((state) => state?.setPlan);

  const defaultSelected: Record<planTypes, subTypes> = {
    starter: 'Nollywood Student',
    student: 'Nollywood Student',
    professional: 'Nollywood Professional',
    master: 'Nollywood Master',
  };

  const [selectedPlan, setSelectedPlan] = useState<subTypes>(defaultSelected[currUserPlan]);
  const [modalOpen, setModalOpen] = useState(false);

  const doSubSelection = () => {
    const newPlan = Object.entries(defaultSelected)?.find(([_, v]) => v === selectedPlan);
    const res = newPlan?.[0] as unknown as planTypes;
    setCurrUserPlan(res);
    setModalOpen(false);
  };

  return (
    <Dialog onOpenChange={(i) => setModalOpen(i)} open={modalOpen}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogContent className='h-screen bg-white max-w-full overflow-x-hidden md:h-max  sm:w-[80vw] md:!max-w-[1000px] py-[7.91rem] px-12 lg:px-[6.29rem] overflow-auto'>
        <div className='flex flex-col w-full h-full '>
          <h4 className='font-[500] text-[23.61px] leading-[28px] tracking-[0.17px] text-primary-9/[0.87] mb-[1.72rem]'>
            Manage Subscription
          </h4>
          <div className='flex flex-col w-full gap-[0.87rem]'>
            <div className='flex flex-col'>
              <h5 className='text-primary-9/[0.87] font-[500] text-[16.67px] leading-[22px]'>
                Select Plan
              </h5>
              <p className='text-primary-9/[0.60] text-[11.11px] tracking-[0.1px] leading-[17px] '>
                Select plan as per your requirement
              </p>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-[1.25rem] mx-auto'>
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
            <div className='flex flex-col'>
              <h5 className='text-primary-9/[0.87] font-[500] text-[16.67px] leading-[22px]'>
                Payment Information
              </h5>
              <p className='text-primary-9/[0.60] text-[11.11px] tracking-[0.1px] leading-[17px] '>
                Enter your card information
              </p>
            </div>
            <Input placeholder='Card Number' className='placeholder:text-primary-9/[0.38] w-full' />
            <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-[0.87rem]'>
              <div className='w-full'>
                <Input
                  placeholder='Name on Card'
                  className='placeholder:text-primary-9/[0.38] w-full'
                />
              </div>
              <div className='grid grid-cols-2 gap-[0.87rem]'>
                <Input placeholder='Expiry' className='placeholder:text-primary-9/[0.38] w-full' />
                <Input placeholder='CVV' className='placeholder:text-primary-9/[0.38] w-full' />
              </div>
            </div>
            <div className='flex items-center justify-between w-full gap-4'>
              <button
                onClick={() => setModalOpen(false)}
                className='w-max px-[0.87rem] h-[38px] shadow-9 bg-white rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <span className='font-[500] text-[14px] leading-[24px] tracking-[0.4px] text-primary-1 whitespace-nowrap'>
                  {`Subscribe later`.toUpperCase()}
                </span>
                <Icon
                  name='arrowTo'
                  svgProp={{
                    className:
                      'text-primary-1 group-hover:translate-x-1 transition-transform duration-300 ease-in-out',
                  }}
                />
              </button>
              <button
                onClick={() => doSubSelection()}
                className='w-[130px] h-[38px] bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <span className='font-[500] text-[14px] leading-[24px] tracking-[0.4px] text-white'>
                  CONTINUE
                </span>
                <Icon
                  name='arrowTo'
                  svgProp={{
                    className:
                      'text-white group-hover:translate-x-1 transition-transform duration-300 ease-in-out',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ManageSubscriptions;
