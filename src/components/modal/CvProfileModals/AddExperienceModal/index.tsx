import { Dialog, DialogContent, DialogTrigger, DialogFooter } from 'components/shadcn/dialog';
import { Input } from 'components/shadcn/input';
import { availableSubs, subTypes } from 'pages/onboarding/SelectPlan';
import { useState } from 'react';
import useStore from 'store';
import { planTypes } from 'types';
import Icon from 'utils/Icon';
import AddExperienceForm from './addExperienceForm';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/shadcn/ui/select';
interface IManageSubscriptions {
  trigger: JSX.Element;
  triggerClassName?: string;
  title?: string;
}

const AddExperienceModal = ({ trigger, triggerClassName, title }: IManageSubscriptions) => {
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
            {title || 'Add Experience'}
          </h4>
          <div className='flex flex-col w-full gap-[0.87rem]'>
            <AddExperienceForm setModalOpen={setModalOpen} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddExperienceModal;
