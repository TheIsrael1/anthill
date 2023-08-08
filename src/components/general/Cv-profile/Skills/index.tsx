import EmptyContent from '../EmptyContent';

import Icon from 'utils/Icon';
import { useState } from 'react';
const SkillSectionCvProfile = () => {
  const [data, setData] = useState<string[]>(['test']);
  if (data.length <= 0) {
    return (
      <section className='bg-white p-8 rounded-md'>
        <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px]'>Experience</h4>
        <EmptyContent description='Skills' IconSize='150' />
      </section>
    );
  } else {
    return (
      <div className='flex flex-col gap-4'>
        <section className='bg-white p-8 pb-1 pt-3 rounded-md'>
          <div className='flex justify-between items-center'>
            <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px]'>Skills</h4>
            <button className=' p-2 bg-primary-1 rounded-full flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
              <Icon
                name='editPen'
                svgProp={{
                  className:
                    'text-primary-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
            </button>
          </div>

          <section className='flex flex-col gap-4 py-8 justify-start'>
            <h4 className='font-light border rounded-lg px-3 py-2 text-xs md:text-sm w-fit'>
              Cinematography
            </h4>
            <h4 className='font-light border rounded-lg px-3 py-2 text-xs md:text-sm w-fit'>
              Cinematography
            </h4>
            <h4 className='font-light border rounded-lg px-3 py-2 text-xs md:text-sm w-fit'>
              Cinematography
            </h4>
          </section>
        </section>
        <button className='w-full p-2 bg-primary-1 rounded-md flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
          <span className='font-light text-white text-sm leading-[24px] tracking-[0.4px]'>
            Share
          </span>
        </button>
      </div>
    );
  }
};

export default SkillSectionCvProfile;
