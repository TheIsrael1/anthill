import CONSTANTS from 'constant';
import { useNavigate } from 'react-router-dom';

const PreFooter = () => {
  const navigate = useNavigate();

  return (
    <section className='w-full bg-primary-13 py-[3.625rem]'>
      <div className='container flex flex-col items-center px-container-base lg:px-container-lg'>
        <button className='px-6 py-2  bg-white rounded-[160px] text-primary-1 font-[500] leading-[24px] text-[16px] tracking-[0.15px] mb-[0.75rem]'>
          Start Now!
        </button>
        <h4 className='font-[800] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] -tracking-[0.5px] text-primary-9 max-w-[592px] text-center mb-4'>
          Create an Account on Nollywood Filmmaker to get Started!
        </h4>
        <p className='max-w-[673px] text-center leading-[24px] tracking-[0.15px] text-secondary-1 mb-[1.5rem]'>
          Learn from the experts in writing, directing, producing, and editing. Discover the secrets
          of successful filmmaking and bring your stories to life on the big screen.
        </p>
        <button
          onClick={() => navigate(`/${CONSTANTS.ROUTES['create-account']}`)}
          className='py-[1.25rem] px-[2.5rem] w-[19.81rem] text-[18px] leading-[24px] bg-primary-1 text-white rounded-[8px] shadow-1 hover:opacity-90 transition-opacity duration-300 ease-in-out'
        >
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default PreFooter;
