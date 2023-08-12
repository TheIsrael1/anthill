import { Dialog, DialogContent, DialogTrigger, DialogFooter } from 'components/shadcn/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';
import Icon from 'utils/Icon';

import { useState } from 'react';
import { da } from 'date-fns/locale';

interface Iprop {
  trigger: JSX.Element;
  triggerClassName?: string;
  title?: string;
}

const MainUserAddInfoModal = ({ trigger, triggerClassName, title }: Iprop) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('Information');
  const [iconName, setIconName] = useState('stepMarkChecked' as any);
  const [data, setData] = useState<string[]>([
    'Information',
    'Resume',
    'Experiences',
    'Education',
    'Projects',
  ]);
  const [iconList, setIconList] = useState([
    'stepMarkChecked',
    'stepMarkFalse',
    'stepMarkEmpty',
  ] as any);
  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Dialog onOpenChange={(i) => setModalOpen(i)} open={modalOpen}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogContent className='h-screen bg-white max-w-full overflow-x-hidden md:h-[92vh]  sm:w-[90vw] md:!max-w-[1200px] lg:pt-[1.5rem] px-6 lg:px-[2rem] overflow-auto'>
        <div className=' w-full gap-[0.87rem]'>
          <Tabs defaultValue='account' value={activeTab} className=''>
            <TabsList className='hidden lg:flex justify-around w-full   bg-white my-4  '>
              <TabsTrigger
                value='Information'
                onClick={() => switchTab(data[0])}
                className='items-start gap-1 rounded-lg'
              >
                <Icon
                  name={iconList[0]}
                  svgProp={{
                    className:
                      ' self-center w-6 rounded-2xl px-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                  }}
                />
                <h3 className='text-3xl'>01</h3>
                <div className='flex flex-col justify-start items-start '>
                  <h3 className='text-sm'>Information</h3>
                  <h4 className='text-[0.65rem] text-gray-400'>Personal Info</h4>
                </div>
              </TabsTrigger>
              <Icon
                name='connector'
                svgProp={{
                  className:
                    '  rounded-2xl px-1  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
              <TabsTrigger
                value='Resume'
                onClick={() => switchTab(data[1])}
                className='items-start gap-1 rounded-lg'
              >
                <Icon
                  name={iconList[0]}
                  svgProp={{
                    className:
                      ' self-center w-6 rounded-2xl px-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                  }}
                />
                <h3 className='text-3xl'>02</h3>
                <div className='flex flex-col justify-start items-start '>
                  <h3 className='text-sm'>Resume</h3>
                  <h4 className='text-[0.65rem] text-gray-400'>Upload Resume</h4>
                </div>
              </TabsTrigger>
              <Icon
                name='connector'
                svgProp={{
                  className:
                    '  rounded-2xl px-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
              <TabsTrigger
                onClick={() => switchTab(data[2])}
                value='Experiences'
                className='items-start gap-1 rounded-lg'
              >
                <Icon
                  name={iconList[0]}
                  svgProp={{
                    className:
                      ' self-center w-6 rounded-2xl px-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                  }}
                />
                <h3 className='text-3xl'>03</h3>
                <div className='flex flex-col justify-start items-start '>
                  <h3 className='text-sm'>Experiences</h3>

                  <h4 className='text-[0.65rem] text-gray-400'>Experiences</h4>
                </div>
              </TabsTrigger>
              <Icon
                name='connector'
                svgProp={{
                  className:
                    '  rounded-2xl px-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
              <TabsTrigger
                onClick={() => switchTab(data[3])}
                value='Education'
                className='items-start gap-1 rounded-lg'
              >
                <Icon
                  name={iconList[0]}
                  svgProp={{
                    className:
                      ' self-center w-6 rounded-2xl px-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                  }}
                />
                <h3 className='text-3xl'>04</h3>
                <div className='flex flex-col justify-start items-start '>
                  <h3 className='text-sm'>Eduction</h3>

                  <h4 className='text-[0.65rem] text-gray-400'>Education Details</h4>
                </div>
              </TabsTrigger>
              <Icon
                name='connector'
                svgProp={{
                  className:
                    '  rounded-2xl px-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
              <TabsTrigger
                onClick={() => switchTab(data[4])}
                value='Projects'
                className='items-start gap-1 rounded-lg'
              >
                <Icon
                  name={iconList[0]}
                  svgProp={{
                    className:
                      ' self-center w-6 rounded-2xl px-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                  }}
                />
                <h3 className='text-3xl'>05</h3>
                <div className='flex flex-col justify-start items-start '>
                  <h3 className='text-sm'>Projects</h3>
                  <h4 className='text-[0.65rem] text-gray-400'> Projects Details</h4>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value='Information' className='h-[70vh] mt-8  mx-8'>
              <div className='bg-red-500 flex justify-center items-center  h-full py-[10rem]'>
                <p>Information</p>
                <Button
                  onClick={() => {
                    switchTab(data[1]);
                  }}
                >
                  Save changes
                </Button>
              </div>
            </TabsContent>
            <TabsContent value='Resume' className='h-[70vh] mt-8  mx-8'>
              <div className='bg-blue-600 flex flex-col justify-center items-center h-full py-[10rem] '>
                <Button
                  onClick={() => {
                    switchTab(data[0]);
                  }}
                >
                  Prev
                </Button>
                <p>Resume</p>
                <Button
                  onClick={() => {
                    switchTab(data[2]);
                  }}
                >
                  Save changes
                </Button>
              </div>
            </TabsContent>
            <TabsContent value='Experiences' className='h-[70vh] mt-8  mx-8'>
              <div className='bg-green-600 flex flex-col justify-center items-center h-full py-[10rem] '>
                <Button
                  onClick={() => {
                    switchTab(data[1]);
                  }}
                >
                  Prev
                </Button>
                <p>Experiences</p>
                <Button
                  onClick={() => {
                    switchTab(data[3]);
                  }}
                >
                  Save changes
                </Button>
              </div>
            </TabsContent>
            <TabsContent value='Education' className='h-[70vh] mt-8  mx-8'>
              <div className='bg-yellow-600 flex-col flex justify-center items-center h-full py-[10rem] '>
                <Button
                  onClick={() => {
                    switchTab(data[2]);
                  }}
                >
                  Prev
                </Button>
                <p>Education</p>
                <Button
                  onClick={() => {
                    switchTab(data[4]);
                  }}
                >
                  Save changes
                </Button>
              </div>
            </TabsContent>
            <TabsContent value='Projects' className='h-[70vh] mt-8  mx-8'>
              <div className='bg-orange-600 flex justify-center flex-col items-center h-full py-[10rem] '>
                <Button
                  onClick={() => {
                    switchTab(data[3]);
                  }}
                >
                  Prev
                </Button>
                <p>Projects</p>
                <Button
                  onClick={() => {
                    setModalOpen(false);
                    switchTab(data[0]);
                  }}
                >
                  Save changes
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MainUserAddInfoModal;
