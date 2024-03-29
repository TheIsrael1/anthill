import CustomInput from 'components/shadcn/CustomInput';
import { Switch } from 'components/shadcn/switch';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Icon from 'utils/Icon';
import { shimmer, toBase64 } from 'utils/general/shimmer';
import masterCard from 'assets/image/mastercard.png';

const BillingAndPlan = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-white w-100 shadow-3 px-5 py-7 rounded-md text-[16px] md:text-[17px] lg:text-[18px]'>
        <p className='text-gray-600 font-semibold'>Current Plan</p>
        <div className='flex flex-col lg:flex-row mt-5 w-full gap-y-4 lg:gap-y-0'>
          <div className='flex flex-col gap-y-4 lg:w-[50%]'>
            <span className='flex flex-col'>
              <p className='text-gray-600 font-semibold text-[14px] md:text-[15px] lg:text-[16px]'>
                Your Current Plan is Basic
              </p>
              <p className='mt-1 text-gray-400 font-semibold text-[13px] md:text-[13px] lg:text-[14px]'>
                A simple start for everyone
              </p>
            </span>
            <span className='flex flex-col'>
              <p className='text-gray-600 font-semibold text-[14px] md:text-[15px] lg:text-[16px]'>
                Active until Dec 09, 2021
              </p>
              <p className='mt-1 text-gray-400 font-semibold text-[13px] md:text-[13px] lg:text-[14px]'>
                We will send you a notification upon Subscription expiration
              </p>
            </span>
            <span className='flex flex-col'>
              <span className='flex'>
                <p className='text-gray-600 font-semibold text-[14px] md:text-[15px] lg:text-[16px]'>
                  ₦20 000Per Month
                </p>
                <p className='flex items-center rounded-full px-3 ms-1 md:ms-2 bg-primary-light text-primary-1 text-[12px] md:text-[13px] lg:text-[13px]'>
                  POPULAR
                </p>
              </span>
              <p className='mt-1 text-gray-400 font-semibold text-[13px] md:text-[13px] lg:text-[14px]'>
                Standard plan for small to medium businesses
              </p>
            </span>
          </div>
          <div className='flex flex-col gap-y-4 lg:w-[50%] mt-2 lg:mt-0'>
            <span className='flex flex-col'>
              <span className='relative bg-amber-100 px-3 py-4 rounded-md'>
                <span className='absolute top-[10px] bg-amber-300 w-[40px] h-[40px] rounded-full'>
                  <span className='absolute top-[5px] left-[5px] rounded-full flex justify-center items-center pb-[1.5px] bg-amber-500 w-[30px] h-[30px]'>
                    <Icon name='cautionIcon' />
                  </span>
                </span>
                <span className='flex ps-12 mt-[-6px] justify-between'>
                  <span className=''>
                    <p className='text-amber-500 font-semibold text-[14px] md:text-[15px] lg:text-[16px]'>
                      We need your attention!
                    </p>
                    <p className='text-amber-400 font-semibold text-[13px] md:text-[13px] lg:text-[14px]'>
                      Your plan requires update
                    </p>
                  </span>
                  <span>
                    <Icon name='cancelIcon' />
                  </span>
                </span>
              </span>
            </span>
            <span className='flex flex-col'>
              <span className='flex justify-between'>
                <p className='text-gray-600 font-semibold text-[12px] md:text-[13px] lg:text-[14px]'>
                  Day
                </p>
                <p className='text-gray-600 font-semibold text-[12px] md:text-[13px] lg:text-[14px]'>
                  24 of 30days
                </p>
              </span>
              <div className='w-full bg-gray-200 rounded-full h-2.5 '>
                <div className='bg-primary-1 h-2.5 rounded-full' style={{ width: '75%' }}></div>
              </div>
              <p className='mt-1 text-gray-400 font-semibold text-[12px] md:text-[13px] lg:text-[14px]'>
                6 days remaining until your plan requires update
              </p>
            </span>
          </div>
        </div>
        <div className='flex gap-x-2 md:gap-x-4 mt-7'>
          <button className='w-max py-[0.3rem] px-[1.1rem] md:px-[1.5rem] bg-primary-1 rounded-[8px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ease-in-out duration-300 group'>
            <span className='leading-[28px] tracking-[0.15px] text-white text-[13px] md:text-[14px] lg:text-[16px]'>
              SAVE CHANGES
            </span>
          </button>
          <button className='w-max py-[0.3rem] px-[1.1rem] md:px-[1.5rem] border border-gray-200 bg-white text-gray-500 rounded-[8px] flex items-center justify-center gap-2 hover:bg-gray-100 hover:opacity-90 transition-all ease-in-out duration-300 group'>
            <span className='leading-[28px] tracking-[0.15px] text-[13px] md:text-[14px] lg:text-[16px]'>
              RESET
            </span>
          </button>
        </div>
      </div>
      <div className='bg-white mt-7 w-100 shadow-3 px-5 py-7 rounded-md text-[16px] md:text-[17px] lg:text-[18px]'>
        <p className='text-gray-600 font-semibold'>Payment Methods</p>
        <div className='flex flex-col lg:flex-row mt-5 w-full gap-y-4 md:gap-y-0'>
          <div className='flex flex-col mb-5 lg:mb-0 gap-y-4 lg:w-[50%]'>
            <div className='flex'>
              <div className='flex items-center mb-4 me-3'>
                <input
                  id='credit'
                  type='radio'
                  value=''
                  name='credit'
                  className='w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-none'
                />
                <label
                  htmlFor='credit'
                  className='ml-[5px] md:ml-2 text-[12px] md:text-[13px] lg:text-[14px] text-gray-500'
                >
                  Credit/Debit/ATM Card
                </label>
              </div>
              <div className='flex items-center mb-4'>
                <input
                  id='paypal'
                  type='radio'
                  value=''
                  name='paypal'
                  className='w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2'
                />
                <label
                  htmlFor='paypal'
                  className='ml-[5px] md:ml-2 text-[12px] md:text-[14px] text-gray-500'
                >
                  Paypal Account
                </label>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center mb-4'>
                <CustomInput label='Card Number' type='number' className='w-[100%] lg:w-[90%]' />
              </div>
              <div className='flex flex-col md:flex-row items-center mb-4 w-[100%] lg:w-[90%] gap-x-4'>
                <div className='w-[100%] md:w-[120%] mb-4'>
                  <CustomInput label='Name' type='text' className='w-[100%]' />
                </div>
                <div className='w-[100%] md:w-[70%] mb-4'>
                  <CustomInput label='Expiry Date' type='text' className='w-[100%] ' />
                </div>
                <div className='w-[100%] md:w-[70%] md:mb-4'>
                  <CustomInput label='CVV code' type='password' className='w-[100%]' />
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <Switch />
              <p className='ml-[5px] md:ml-2 text-[12px] md:text-[14px] text-gray-500'>
                Save card for future billing?
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-y-4 lg:w-[50%] mt-2 lg:mt-0'>
            <p className='text-gray-600 font-semibold text-[14px] md:text-[15px] lg:text-[16px]'>
              My cards
            </p>
            <div className='flex flex-col bg-gray-100 px-4 py-4 rounded-md'>
              <div className='flex justify-between flex-col md:flex-row'>
                <div>
                  <div>
                    <LazyLoadImage
                      src={masterCard}
                      alt='avatar'
                      className='w-max h-max transition-transform duration-300 ease-in-out bg-top bg-cover group-hover:scale-105'
                      placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    />
                  </div>
                  <div>
                    <p className='text-gray-600 mt-1 font-semibold text-[13px] md:text-[14px] lg:text-[15px]'>
                      Tom McBride
                    </p>
                    <p className='text-gray-400 mt-1 font-semibold text-[12px] md:text-[12px] lg:text-[13px]'>
                      **** *** **** 9865
                    </p>
                  </div>
                </div>
                <div className='flex flex-col flex-col-reverse md:flex-col'>
                  <div className='flex'>
                    <button className='w-max mr-3 py-[0.3rem] px-[1.1rem] md:px-[1.5rem] bg-gray-100 border border-primary-1 rounded-[8px] flex items-center justify-center gap-2 hover:bg-purple-100 hover:opacity-90 transition-all ease-in-out duration-300 group'>
                      <span className='leading-[28px] tracking-[0.15px] text-primary-1 text-[13px] md:text-[14px] lg:text-[16px]'>
                        EDIT
                      </span>
                    </button>
                    <button className='w-max py-[0.3rem] px-[1.1rem] md:px-[1.5rem] border border-gray-200 bg-gray-100 text-gray-500 rounded-[8px] flex items-center justify-center gap-2 hover:bg-gray-200 hover:opacity-90 transition-all ease-in-out duration-300 group'>
                      <span className='leading-[28px] tracking-[0.15px] text-[13px] md:text-[14px] lg:text-[16px]'>
                        DELETE
                      </span>
                    </button>
                  </div>
                  <div className='flex mb-3 md:mb-0  md:justify-end mt-1'>
                    <p className='text-gray-400 mt-1 font-semibold text-[12px] md:text-[12px] lg:text-[13px]'>
                      Card expires at 12/24
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-x-2 md:gap-x-4 mt-7'>
          <button className='w-max py-[0.3rem] px-[1.1rem] md:px-[1.5rem] bg-primary-1 rounded-[8px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ease-in-out duration-300 group'>
            <span className='leading-[28px] tracking-[0.15px] text-white text-[13px] md:text-[14px] lg:text-[16px]'>
              SAVE CHANGES
            </span>
          </button>
          <button className='w-max py-[0.3rem] px-[1.1rem] md:px-[1.5rem] border border-gray-200 bg-white text-gray-500 rounded-[8px] flex items-center justify-center gap-2 hover:bg-gray-100 hover:opacity-90 transition-all ease-in-out duration-300 group'>
            <span className='leading-[28px] tracking-[0.15px] text-[13px] md:text-[14px] lg:text-[16px]'>
              RESET
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingAndPlan;
