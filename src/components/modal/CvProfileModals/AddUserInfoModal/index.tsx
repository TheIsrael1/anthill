import { Dialog, DialogContent, DialogTrigger, DialogFooter } from 'components/shadcn/dialog';
import { Input } from 'components/shadcn/input';
import { availableSubs, subTypes } from 'pages/onboarding/SelectPlan';
import { useState } from 'react';
import useStore from 'store';
import { planTypes } from 'types';
import Icon from 'utils/Icon';
import profilePicture from 'assets/image/profilePicture.png';

interface Iprop {
  trigger: JSX.Element;
  triggerClassName?: string;
  title?: string;
}

const AddUserInfoModal = ({ trigger, triggerClassName, title }: Iprop) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Dialog onOpenChange={(i) => setModalOpen(i)} open={modalOpen}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogContent className='h-screen bg-white max-w-full overflow-x-hidden md:h-5/6  sm:w-[65vw] md:!max-w-[1000px] pt-[3rem] px-6 lg:px-[2rem] overflow-auto'>
        <div className='flex flex-col w-full '>
          <h4 className='font-[500] text-sm md:text-lg leading-[28px] tracking-[0.17px] text-primary-9/[0.87] mb-[1rem]'>
            {title || 'Add bio'}
          </h4>
          <div className='flex flex-col w-full gap-[0.87rem]'>
            <form>
              <section className='flex flex-col gap-6 border-t-[1px] border-b-[1px] pt-6 pb-[3rem] sm:pb-[4rem] md:pb-[2rem] lg:pb-[3rem] mb-4 sm:mb-4 md:mb-1 lg:mb-1 '>
                <div className='flex items-center gap-2'>
                  <div className='p-[1px] w-[7rem]   bg-white rounded-lg '>
                    <img
                      src='https://github.com/shadcn.png'
                      alt=''
                      className='w-full h-full rounded-lg transition-transform duration-300 ease-in-out bg-top bg-cover group-hover:scale-105'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center  w-full gap-4'>
                      <button
                        type='button'
                        className='px-2 py-1 bg-primary-1 rounded-[6px] font-extralight flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
                      >
                        <span className='font-extralight text-[0.7rem]  leading-[24px] tracking-[0.4px] text-white'>
                          {`Upload New Photo`.toUpperCase()}
                        </span>
                      </button>
                      <button
                        type='button'
                        className='w-max px-[0.87rem] py-1 border-red-300 border shadow-9 bg-white rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
                      >
                        <span className='font-extralight text-[0.7rem] leading-[24px] tracking-[0.4px] text-error-3  whitespace-nowrap'>
                          {`reset`.toUpperCase()}
                        </span>
                      </button>
                    </div>

                    <p className='text-[0.6rem] text-gray-400'>
                      Allowed JPG, GIF or PNG. Max size of 800K
                    </p>
                  </div>
                </div>

                <div className='relative'>
                  <Input className='placeholder:text-primary-9/[0.38] w-full  border-gray-300 rounded-md p-2 py-4 pl-3 text-secondary-3 w-full' />

                  <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                    Full Name
                  </label>
                </div>
                <div className='relative'>
                  <Input className='placeholder:text-primary-9/[0.38] w-full  border-gray-300 rounded-md p-2 pl-3  py-4  text-secondary-3 w-full' />

                  <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                    Bio
                  </label>
                </div>
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

export default AddUserInfoModal;
