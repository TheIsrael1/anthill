import { Dialog, DialogContent, DialogTrigger, DialogFooter } from 'components/shadcn/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';
import Icon from 'utils/Icon';
import InformationTab from './InformationTab';
import { useState } from 'react';
import { da } from 'date-fns/locale';
import ResumeTab from './ResumeTab';
import ExperiencesTab from './ExperiencesTab';
import EducationTab from './EducationTab';
import ProjectsTab from './ProjectsTab';

interface Iprop {
  trigger: JSX.Element;
  triggerClassName?: string;
  title?: string;
}

const MainUserAddInfoModal = ({ trigger, triggerClassName, title }: Iprop) => {
  const [showForms, setShowForms] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('Information');
  const [iconName, setIconName] = useState('stepMarkChecked' as any);
  const [completed, setCompleted] = useState<string[]>([]);
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
  const handleComplete = (tab: string) => {
    setCompleted([...completed, tab]);
  };
  const checkIcon = (tab: string) => {
    if (tab === activeTab) {
      return iconList[2];
    }
    if (completed.includes(tab)) {
      return iconList[0];
    } else {
      return iconList[1];
    }
  };
  if (!showForms) {
    return (
      <Dialog onOpenChange={(i) => setModalOpen(i)} open={modalOpen}>
        <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
        <DialogContent className='h-screen bg-white max-w-full overflow-x-hidden md:h-[92vh]  sm:w-[70vw] md:!max-w-[1200px] lg:pt-[1.5rem] px-6 lg:px-[2rem] overflow-auto'>
          <div className=' flex flex-col items-center justify-center w-full gap-6 '>
            <div></div>
            <Icon name='noCvProfileIcon' svgProp={{ className: 'w-[50%] md:w-[90%]' }} />
            <h2 className='text-xl max-w-md font-semibold text-center'>
              Would you like to take a moment to create a custom CV profile?
            </h2>
            <h3 className='text-gray-500 text-sm max-w-lg text-center'>
              This would help you be easily discoverable to other filmmakers for networking or
              project purposes!
            </h3>
            <div className='flex  items-center justify-between w-full gap-4'>
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
                type='button'
                className='w-max py-2 px-3 border-primary-1 border shadow-9 bg-white rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <span className='font-[500] text-xs leading-[24px] tracking-[0.4px]   whitespace-nowrap'>
                  No, I’ll create it later
                </span>
              </button>
              <button
                onClick={() => setShowForms(true)}
                type='button'
                className='px-10 py-2 bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <span className='font-[500] text-xs  leading-[24px] tracking-[0.4px] text-white'>
                  Yes Continue
                </span>
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Dialog onOpenChange={(i) => setModalOpen(i)} open={modalOpen}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogContent className='h-screen bg-white max-w-full overflow-x-hidden md:h-[92vh]  sm:w-[90vw] md:!max-w-[1200px] lg:pt-[1.5rem] px-6 lg:px-[2rem] overflow-auto'>
        <div className=' w-full gap-[0.87rem]'>
          <Tabs defaultValue='account' value={activeTab} className=''>
            <TabsList className='hidden lg:flex justify-around w-full   bg-white my-4  '>
              <TabsTrigger
                value={data[0]}
                onClick={() => switchTab(data[0])}
                className='items-start gap-1 rounded-lg'
              >
                <Icon
                  name={checkIcon(data[0])}
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
                value={data[1]}
                disabled={
                  completed.includes(data[1]) ? false : activeTab === data[1] ? false : true
                }
                onClick={() => switchTab(data[1])}
                className='items-start gap-1 rounded-lg'
              >
                <Icon
                  name={checkIcon(data[1])}
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
                value={data[2]}
                disabled={
                  completed.includes(data[2]) ? false : activeTab === data[2] ? false : true
                }
                className='items-start gap-1 rounded-lg'
              >
                <Icon
                  name={checkIcon(data[2])}
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
                disabled={
                  completed.includes(data[3]) ? false : activeTab === data[3] ? false : true
                }
                value={data[3]}
                className='items-start gap-1 rounded-lg'
              >
                <Icon
                  name={checkIcon(data[3])}
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
                disabled={
                  completed.includes(data[4]) ? false : activeTab === data[4] ? false : true
                }
                value={data[4]}
                className='items-start gap-1 rounded-lg'
              >
                <Icon
                  name={checkIcon(data[4])}
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

            <InformationTab switchTab={switchTab} data={data} handleComplete={handleComplete} />
            <ResumeTab switchTab={switchTab} data={data} handleComplete={handleComplete} />
            <ExperiencesTab switchTab={switchTab} data={data} handleComplete={handleComplete} />
            <EducationTab switchTab={switchTab} data={data} handleComplete={handleComplete} />
            <ProjectsTab
              switchTab={switchTab}
              data={data}
              setModalOpen={setModalOpen}
              handleComplete={handleComplete}
              setCompleted={setCompleted}
            />
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MainUserAddInfoModal;
