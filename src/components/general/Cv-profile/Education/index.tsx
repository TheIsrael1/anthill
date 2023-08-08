import EmptyContent from '../EmptyContent';
import { useState } from 'react';
import Icon from 'utils/Icon';
const EducationSectionCvProfile = () => {
  const [data, setData] = useState<string[]>(['test']);
  if (data.length <= 0) {
    return (
      <section className='bg-white p-8 rounded-md'>
        <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px]'>Education</h4>
        <EmptyContent description='Education' />
      </section>
    );
  } else {
    return (
      <section className='bg-white p-8 rounded-md'>
        <div className='flex justify-between items-center'>
          <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px]'>
            Education
          </h4>
          <button className=' px-5  py-1 bg-primary-1 rounded-full flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
            <span className='font-light text-sm leading-[24px] tracking-[0.4px] text-white'>
              Add
            </span>
            <Icon
              name='editPen'
              svgProp={{
                className:
                  'text-primary-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
              }}
            />
          </button>
        </div>

        <section className='flex flex-col gap-10 py-8'>
          <div className='flex justify-between items-start gap-4'>
            <div className='flex flex-col gap-2 '>
              <div className='flex gap-4 items-center'>
                <h3 className='font-semibold text-sm'>Massachussets Institute of Technology</h3>
              </div>

              <p className='text-sm opacity-50'>Cinematographer</p>
              <p className='text-sm opacity-50'>Oct 02. 2022- July 02. 2024</p>
            </div>
            <button className=' self-end px-2 py-1 bg-none  border-blue-500 border-b-2  flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
              <span className='font-light text-primary-1 text-sm leading-[24px]tracking-[0.4px'>
                Edit
              </span>
              <Icon
                name='editPenBlue'
                svgProp={{
                  className:
                    '  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
            </button>
          </div>
          <div className='flex justify-between items-start gap-4'>
            <div className='flex flex-col gap-2 '>
              <div className='flex gap-4 items-center'>
                <h3 className='font-semibold text-sm'>Massachussets Institute of Technology</h3>
              </div>

              <p className='text-sm opacity-50'>Cinematographer</p>
              <p className='text-sm opacity-50'>Oct 02. 2022- July 02. 2024</p>
            </div>
            <button className='self-end px-2 py-1 bg-none  border-blue-500 border-b-2  flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
              <span className='font-light text-primary-1 text-sm leading-[24px]tracking-[0.4px'>
                Edit
              </span>
              <Icon
                name='editPenBlue'
                svgProp={{
                  className:
                    '  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
            </button>
          </div>
        </section>
      </section>
    );
  }
};

export default EducationSectionCvProfile;
