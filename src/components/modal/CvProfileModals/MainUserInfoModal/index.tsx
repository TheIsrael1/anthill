import { Dialog, DialogContent, DialogTrigger, DialogFooter } from 'components/shadcn/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';

import { useState } from 'react';

interface Iprop {
  trigger: JSX.Element;
  triggerClassName?: string;
  title?: string;
}

const MainUserAddInfoModal = ({ trigger, triggerClassName, title }: Iprop) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Dialog onOpenChange={(i) => setModalOpen(i)} open={modalOpen}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogContent className='h-screen bg-white max-w-full overflow-x-hidden md:h-[92vh]  sm:w-[90vw] md:!max-w-[1200px] pt-[3rem] px-6 lg:px-[2rem] overflow-auto'>
        <div className='flex flex-col w-full '>
          <h4 className='font-[500] text-sm md:text-lg leading-[28px] tracking-[0.17px] text-primary-9/[0.87] mb-[1rem]'>
            {title || 'Add bio'}
          </h4>
          <div className=' w-full gap-[0.87rem]'>
            <Tabs defaultValue='account' className=''>
              <TabsList className='grid w-full grid-cols-5 gap-5 my-4'>
                <TabsTrigger value='account' className='bg-slate-500 text-white'>
                  Account
                </TabsTrigger>
                <TabsTrigger value='password' className='bg-pink-400 text-black'>
                  Password
                </TabsTrigger>
                <TabsTrigger value='list' className='bg-red-400 text-black'>
                  list
                </TabsTrigger>
              </TabsList>
              <TabsContent value='account' className='h-4/6 my-8 '>
                <div className='bg-red-500 flex justify-center items-center  h-full py-[10rem]'>
                  <Button>Save password</Button>
                </div>
              </TabsContent>
              <TabsContent value='password' className='h-4/6 my-8'>
                <div className='bg-blue-600 flex justify-center items-center h-full py-[10rem] '>
                  <Button>Save changes</Button>
                </div>
              </TabsContent>
              <TabsContent value='list' className='h-4/6 my-8'>
                <div className='bg-green-600 flex justify-center items-center h-full py-[10rem] '>
                  <Button>Save changes</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MainUserAddInfoModal;
