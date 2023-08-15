import Icon from 'utils/Icon';
import profilePicture from 'assets/image/profilePicture.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { shimmer, toBase64 } from 'utils/general/shimmer';
import useStore from 'store';

const Profile = () => {
  const { data } = useStore((store) => store.authDetails);
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <div className='w-full relative overflow-hidden bg-white border  rounded-lg shadow-3'>
        <Icon name='profileCover' />
        <div className='flex'>
          <div className='p-[1px] w-25 bg-white rounded-lg  absolute bottom-[15px] left-[20px]'>
            <LazyLoadImage
              src={profilePicture}
              alt=''
              className='w-full h-full transition-transform duration-300 ease-in-out bg-top bg-cover group-hover:scale-105'
              placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            />
          </div>
          <div className='p-5 ps-40'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-500'>
              {data?.first_name} {data?.last_name}
            </h5>
            <ul className='flex gap-x-4'>
              <li className='flex items-center'>
                <span>
                  <Icon name='colorFillIcon' />
                </span>
                <p className='flex text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400 ms-1'>
                  UX designer
                </p>
              </li>
              <li className='flex items-center'>
                <span>
                  <Icon name='outlinedLocation' />
                </span>
                <p className='flex text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400 ms-1'>
                  Vatican City
                </p>
              </li>
              <li className='flex items-center'>
                <span>
                  <Icon name='calenderIcon' />
                </span>
                <p className='flex text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400 ms-1'>
                  Joined April 2021
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
      <div className='mt-7'>
        <div className='block w-full p-6 bg-white rounded-lg shadow-3'>
          <div>
            <p className='mb-2 text-[12px] lg:text-[13px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400'>
              ABOUT
            </p>
            <ul className='flex flex-col gap-y-2'>
              <li className='flex text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400'>
                <span className=']pe-3'>
                  <Icon name='profileIcon' />
                </span>
                <p className='ms-3'>
                  <label className='font-bold me-2'>Full Name:</label> {data?.first_name}{' '}
                  {data?.last_name}
                </p>
              </li>
              <li className='flex text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400'>
                <span className=']pe-3'>
                  <Icon name='checkIcon' />
                </span>
                <p className='ms-3'>
                  <label className='font-bold me-2'>Status:</label>Active
                </p>
              </li>
              <li className='flex text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400'>
                <span className=']pe-3'>
                  <Icon name='outlinedStar' />
                </span>
                <p className='ms-3'>
                  <label className='font-bold me-2'>Role:</label>Developer
                </p>
              </li>
              <li className='flex text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400'>
                <span className=']pe-3'>
                  <Icon name='flagIcon' />
                </span>
                <p className='ms-3'>
                  <label className='font-bold me-2'>Country:</label>USA
                </p>
              </li>
              <li className='flex text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400'>
                <span className=']pe-3'>
                  <Icon name='languageIcon' />
                </span>
                <p className='ms-3'>
                  <label className='font-bold me-2'>Language:</label>English
                </p>
              </li>
            </ul>
          </div>
          <div className='mt-7'>
            <p className='mb-2 text-[12px] lg:text-[13px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400'>
              CONTACT
            </p>
            <ul className='flex flex-col gap-y-2'>
              <li className='flex text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400'>
                <span className=']pe-3'>
                  <Icon name='phoneIcon' />
                </span>
                <p className='ms-3'>
                  <label className='font-bold me-2'>Contact:</label>(123) 456-7890
                </p>
              </li>
              <li className='flex text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400'>
                <span className=']pe-3'>
                  <Icon name='skypeIcon' />
                </span>
                <p className='ms-3'>
                  <label className='font-bold me-2'>Skype:</label>John.doe
                </p>
              </li>
              <li className='flex text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap text-gray-400'>
                <span className=']pe-3'>
                  <Icon name='envelope' />
                </span>
                <p className='ms-3'>
                  <label className='font-bold me-2'>Email:</label>John.doe@example.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
