import { Dialog, DialogContent, DialogTrigger, DialogFooter } from 'components/shadcn/dialog';

import { useState } from 'react';

import AddUserInfoForm from './addUserInfoForm';

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
            <AddUserInfoForm setModalOpen={setModalOpen} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserInfoModal;
