import EmptyContent from '../EmptyContent';
import Icon from 'utils/Icon';
import { useState } from 'react';

const ExperienceSectionCvProfile = () => {
  const [data, setData] = useState<string[]>(['test']);
  if (data.length <= 0) {
    return (
      <section className='bg-white p-8 rounded-md'>
        <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px]'>Experience</h4>
        <EmptyContent description='Experience' />
      </section>
    );
  } else {
    return (
      <section className='bg-white p-8 rounded-md'>
        <div className='flex justify-between items-center'>
          <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px]'>
            Experience
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
                <h3 className='font-semibold text-sm'>TrendyO.com</h3>
                <h3 className='font-normal text-xs text-primary-1 bg-blue-50 rounded-lg px-2 py-1'>
                  full time
                </h3>
              </div>
              <div className='flex gap-2  flex-col md:flex-row'>
                <p className='text-sm opacity-50'>Cinematographer</p>
                <p className='text-sm opacity-50'>2 years</p>
                <p className='text-sm opacity-50'>Oct 02. 2022- July 02. 2024</p>
              </div>
            </div>
            <button className=' px-2 py-1 bg-none  border-blue-500 border-b-2  flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
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
                <h3 className='font-semibold text-sm'>TrendyO.com</h3>
                <h3 className='font-normal text-xs text-primary-1 bg-blue-50 rounded-lg px-2 py-1'>
                  full time
                </h3>
              </div>
              <div className='flex gap-2 flex-col md:flex-row'>
                <p className='text-sm opacity-50 '>Cinematographer</p>
                <p className='text-sm opacity-50'>2 years</p>
                <p className='text-sm opacity-50'>Oct 02. 2022- July 02. 2024</p>
              </div>
            </div>
            <button className=' px-2 py-1 bg-none  border-blue-500 border-b-2  flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
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

export default ExperienceSectionCvProfile;
