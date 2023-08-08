import { Avatar, AvatarFallback, AvatarImage } from 'components/shadcn/ui/avatar';
import Icon from 'utils/Icon';
import AddResumeModal from 'components/modal/CvProfileModals/AddResumeModal';
export default function ResumeSectionCvProfile() {
  return (
    <div className=' bg-white p-6 pt-1 rounded-md '>
      <h4 className='relative font-[700] text-sm   leading-[40px] tracking-[0.15px] mb-4'>
        Resume
      </h4>
      <section className='flex justify-between gap-4  items-center'>
        <div className='flex items-center gap-2'>
          <div className='px-2 py-3 rounded-2xl bg-gray-100'>
            <Icon
              name='mail'
              svgProp={{
                className:
                  '  rounded-2xl w-6  text-lg  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
              }}
            />
          </div>

          <div className='flex flex-col'>
            <p className='text-sm opacity-50'>No Resume has been uploaded yet</p>
          </div>
        </div>
        <AddResumeModal
          title='Upload Resume'
          trigger={
            <button className=' px-5  py-1 bg-primary-1 rounded-full flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
              <span className='font-light text-sm leading-[24px] tracking-[0.4px] text-white'>
                Upload
              </span>
            </button>
          }
        />
      </section>
    </div>
  );
}
