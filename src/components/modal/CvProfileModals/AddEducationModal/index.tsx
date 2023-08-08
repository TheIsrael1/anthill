import { Dialog, DialogContent, DialogTrigger, DialogFooter } from 'components/shadcn/dialog';
import { Input } from 'components/shadcn/input';
import { availableSubs, subTypes } from 'pages/onboarding/SelectPlan';
import { useState } from 'react';
import useStore from 'store';
import { planTypes } from 'types';
import Icon from 'utils/Icon';

interface IManageSubscriptions {
  trigger: JSX.Element;
  triggerClassName?: string;
  title?: string;
}

const AddEducationModal = ({ trigger, triggerClassName, title }: IManageSubscriptions) => {
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
      <DialogContent className='h-screen bg-white max-w-full overflow-x-hidden md:h-5/6  sm:w-[65vw] md:!max-w-[1000px] pt-[3rem] px-6 lg:px-[2rem] overflow-auto'>
        <div className='flex flex-col w-full '>
          <h4 className='font-[500] text-sm md:text-lg leading-[28px] tracking-[0.17px] text-primary-9/[0.87] mb-[1.72rem]'>
            {title || 'Add Education'}
          </h4>
          <div className='flex flex-col w-full gap-[0.87rem]'>
            <form>
              <section className='grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 border-t-2 border-b-2 pt-10 pb-[3rem] sm:pb-[4rem] md:pb-[2rem] lg:pb-[7rem] mb-4 sm:mb-4 md:mb-1 lg:mb-1 '>
                <Input
                  placeholder='Card Number'
                  className='placeholder:text-primary-9/[0.38] w-full'
                />
                <Input
                  placeholder='Card Number'
                  className='placeholder:text-primary-9/[0.38] w-full'
                />
                <Input
                  placeholder='Card Number'
                  className='placeholder:text-primary-9/[0.38] w-full'
                />
                <Input
                  placeholder='Card Number'
                  className='placeholder:text-primary-9/[0.38] w-full'
                />
                <Input
                  placeholder='Card Number'
                  className='placeholder:text-primary-9/[0.38] w-full'
                />
                <Input
                  placeholder='Card Number'
                  className='placeholder:text-primary-9/[0.38] w-full'
                />
              </section>
            </form>
            <DialogFooter>
              <div className='flex items-center justify-end w-full gap-4'>
                <button
                  onClick={() => setModalOpen(false)}
                  className='w-max px-[0.87rem] h-[38px] shadow-9 bg-white rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
                >
                  <span className='font-[500] text-xs leading-[24px] tracking-[0.4px] text-primary-1 whitespace-nowrap'>
                    {`Cancel`.toUpperCase()}
                  </span>
                </button>
                <button
                  //     onClick={() => doSubSelection()}
                  className='w-[130px] h-[38px] bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
                >
                  <span className='font-[500] text-xs  leading-[24px] tracking-[0.4px] text-white'>
                    {`Save Changes`.toUpperCase()}
                  </span>
                </button>
              </div>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddEducationModal;
