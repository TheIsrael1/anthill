import { LazyLoadImage } from 'react-lazy-load-image-component';
import playingBoy from 'assets/image/playing-boy.png?format=webp&imagetools';
import Icon from 'utils/Icon';
import { useNavigate } from 'react-router-dom';
import CONSTANTS from 'constant';

const VerifyEmail = () => {
  const navigate = useNavigate();

  //   TODO: contents of this page will be dymanic based on key search param
  // case 1: email verification after sign up
  // case 2: email reset password link after forgot-password action

  return (
    <div className='flex items-center w-full h-full'>
      <div className='items-center justify-center hidden h-full overflow-hidden   md:flex bg-primary-15 xl:min-w-[850px] flex-grow-0 flex-shrink-1 basis-auto'>
        <div className='min-w-[700px] min-h-[669.86px] transition-all ease-in-out duration-300'>
          <LazyLoadImage
            className='w-full h-full bg-current'
            src={playingBoy}
            effect='blur'
            alt=''
          />
        </div>
      </div>
      <div className='w-full md:max-w-[calc(96px+494px)] mx-auto bg-white px-4 md:px-[3rem]'>
        <div className='flex flex-col items-start justify-center w-full mx-auto'>
          <div
            className='flex items-center cursor-pointer mb-[2.125rem]'
            onClick={() => navigate(`/`)}
          >
            <Icon name='nfmLogo' svgProp={{ width: 40, height: 40 }} />
            <h4 className='font-[700] text-[22px] whitespace-nowrap   md:text-[28px] leading-[24px] tracking-[0.15px] text-primary-9/[0.87]'>
              Nollywood Filmmaker.com
            </h4>
          </div>
          <div className='flex flex-col w-full mb-[1.5rem]'>
            <h5 className='text-primary-9/[0.87] font-inter text-[24px] leading-[32px] font-[700] tracking-[0.18px]'>
              Verify your email ✉️
            </h5>
            <p className='text-primary-9/[0.60] leading-[24px] tracking-[0.15px]'>
              Account activation link sent to your email address: john.doe@email.com Please follow
              the link inside to continue.
            </p>
          </div>
          <div className='flex flex-col w-full gap-4 mb-[1.25rem]'>
            <button
              onClick={() => navigate(`/app/${CONSTANTS.ROUTES['blogs']}?key=forgot-password`)}
              className='w-full py-2 text-white bg-primary-1 shadow-3 rounded-[8px] font-[500] text-[15px] hover:opacity-90 transition-opacity duration-300 ease-in-out mb-[1.75rem]'
            >
              <span className='leading-[0.46px]'>Skip for now</span>
            </button>
            <button
              onClick={() => navigate(`/${CONSTANTS.ROUTES['login']}`)}
              className='place-self-center flex items-center gap-1  text-[14px] leading-[21px] tracking-[0.15px] cursor-pointer'
            >
              <span className='text-secondary-9'>Didn't get the mail? </span>
              <span className=' text-primary-1  hover:underline'> Resend</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
