import EmptyContent from '../EmptyContent';
import { useState } from 'react';
import AddPersonalInfoModal from 'components/modal/CvProfileModals/AddPersonalInfoModal';

import Icon from 'utils/Icon';
const PersonalInformationSection = () => {
  const [data, setData] = useState(['test']);
  if (data.length <= 0) {
    return (
      <section className='bg-white p-8 rounded-md'>
        <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px]'>
          Personal Information
        </h4>
        <EmptyContent
          description='Personal Information'
          modal={
            <AddPersonalInfoModal
              title='Add Personal Information'
              trigger={
                <button className=' px-4  bg-primary-1 rounded-[15px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
                  <span className='font-[500] text-xs md:text-sm leading-[24px] tracking-[0.4px] text-white'>
                    Add Personal Information
                  </span>
                  <Icon
                    name='addThreadIcon'
                    svgProp={{
                      className:
                        'text-primary-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                    }}
                  />
                </button>
              }
            />
          }
        />
      </section>
    );
  } else {
    return (
      <section className='bg-white p-8 rounded-md'>
        <div className='flex justify-between items-center'>
          <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px]'>
            Personal Information
          </h4>
          <AddPersonalInfoModal
            title='Edit Personal Information'
            trigger={
              <button className=' px-5  py-1 bg-primary-1 rounded-full flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
                <span className='font-light text-sm leading-[24px] tracking-[0.4px] text-white'>
                  Edit
                </span>
                <Icon
                  name='editPen'
                  svgProp={{
                    className:
                      'text-primary-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                  }}
                />
              </button>
            }
          />
        </div>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-10 border-b-2 py-8'>
          <div className='flex items-start gap-4  col-span-1'>
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
              <h3 className='font-normal text-sm'>elizabethojo@gmail.com</h3>
              <p className='text-sm opacity-50'>Email</p>
            </div>
          </div>
          <div className='flex items-start gap-4  col-span-1'>
            <div className='px-2 py-3 rounded-2xl bg-gray-100'>
              <Icon
                name='mail'
                svgProp={{
                  className:
                    '  rounded-2xl w-6  text-lg  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
            </div>
            <div className='flex flex-col '>
              <h3 className='font-normal text-sm'>+234 813 123 4567</h3>
              <p className='text-sm opacity-50'>Phone</p>
            </div>
          </div>
          <div className='flex items-start gap-4  col-span-1'>
            <div className='px-2 py-3 rounded-2xl bg-gray-100'>
              <Icon
                name='mail'
                svgProp={{
                  className:
                    '  rounded-2xl w-6  text-lg  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
            </div>
            <div className='flex flex-col '>
              <h3 className='font-normal text-sm'>18th of August, 1967</h3>
              <p className='text-sm opacity-50'>Date of Birth</p>
            </div>
          </div>
          <div className='flex items-start gap-4  col-span-1'>
            <div className='px-2 py-3 rounded-2xl bg-gray-100'>
              <Icon
                name='mail'
                svgProp={{
                  className:
                    '  rounded-2xl w-6  text-lg  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
            </div>
            <div className='flex flex-col '>
              <h3 className='font-normal text-sm'>@rachellee</h3>
              <p className='text-sm opacity-50'>linkedin</p>
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-10 py-8'>
          <div className='flex items-start gap-4'>
            <div className='px-2 py-3 rounded-2xl bg-gray-100'>
              <Icon
                name='mail'
                svgProp={{
                  className:
                    '  rounded-2xl w-6  text-lg  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
            </div>
            <div className='flex flex-col '>
              <h3 className='font-normal text-sm'>Jos</h3>
              <p className='text-sm opacity-50'>Location</p>
            </div>
          </div>
          <div className='flex items-start gap-4  col-span-1'>
            <div className='px-2 py-3 rounded-2xl bg-gray-100'>
              <Icon
                name='mail'
                svgProp={{
                  className:
                    '  rounded-2xl w-6  text-lg  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                }}
              />
            </div>
            <div className='flex flex-col '>
              <h3 className='font-normal text-sm'>@rachellee</h3>
              <p className='text-sm opacity-50'>Twitter link</p>
            </div>
          </div>
        </section>
      </section>
    );
  }
};

export default PersonalInformationSection;
