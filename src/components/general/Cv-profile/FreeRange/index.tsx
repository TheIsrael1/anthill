import { Avatar, AvatarFallback, AvatarImage } from 'components/shadcn/ui/avatar';
import Icon from 'utils/Icon';
export default function FreeRangeSectionCvProfile() {
  return (
    <div className=' bg-white p-6 pt-1 rounded-md '>
      <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px] mb-4'>
        Free Range
      </h4>
      <section className='flex justify-between items-center gap-4'>
        <div className='flex items-start gap-2 '>
          <p className='text-sm opacity-50'>No price range has been added here</p>
        </div>
        <button className='px-8  py-1 bg-primary-1 rounded-full flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
          <span className='font-light text-sm leading-[24px] tracking-[0.4px] text-white'>
            Edit
          </span>
        </button>
      </section>
    </div>
  );
}
