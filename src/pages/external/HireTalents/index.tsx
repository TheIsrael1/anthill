import { LazyLoadImage } from 'react-lazy-load-image-component';
import Icon from 'utils/Icon';
import avatar from 'assets/image/avatarBig.png';
import { Popover, PopoverContent, PopoverTrigger } from 'components/shadcn/popover';
import { useNavigate } from 'react-router-dom';

type skillTypes = 'HTML' | 'REACT';

const skills: skillTypes[] = ['HTML', 'REACT'];

const skillClassNames: Record<skillTypes, string> = {
  HTML: 'text-primary-1 bg-primary-1/[0.12]',
  REACT: 'text-info-1 bg-info-light',
};

const HireTalents = () => {
  const navigate = useNavigate();

  return (
    <main className='flex flex-col w-full py-[2.5rem] gap-[2.5rem]  container px-container-base lg:px-container-lg'>
      <div
        onClick={() => navigate(-1)}
        className='flex items-center w-max gap-[1rem] text-secondary-14 hover:text-primary-1 cursor-pointer transition-colors duration-300 ease-in-out'
      >
        <Icon svgProp={{ width: 24, height: 24 }} name='arrowBack' />
        <h5 className='font-[800] text-[32px] leading-[43px]'>Hire Talents!</h5>
      </div>
      <div className='flex-col w-full gap-4'>
        <div className='flex items-center gap-[1.5rem]'>
          <div className='flex items-center flex-grow w-full shadow-6 px-[1.6rem] py-[.75rem] rounded-[8px]'>
            <Icon
              name='searchIcon'
              svgProp={{ className: 'text-secondary-16', width: 20, height: 20 }}
            />
            <input
              className='flex-grow  form-input border-0 focus:!ring-0 placeholder:text-secondary-15/40'
              placeholder='Search by Keywords, names or roles'
            />
          </div>
        </div>
        {/* Filters here */}
      </div>
      <div className='grid gap-[1.5rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {[...Array(10)]?.map((_, idx) => (
          <div
            key={idx}
            className='h-[21.625rem] shadow-7 rounded-[8px] py-[2rem] flex flex-col gap-[1.5rem]'
          >
            <div className='relative flex items-start w-full'>
              <div className='flex justify-center flex-grow w-full'>
                <div className='w-[100px] h-[100px] overflow-hidden'>
                  <LazyLoadImage className='w-full h-full' src={avatar} effect='blur' />
                </div>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <div className='absolute h-[30px] w-[30px] rounded-[50px] cursor-pointer hover:bg-slate-100 grid place-items-center right-1 active:bg-slate-200 transition-colors duration-300 ease-in-out'>
                    <Icon name='verticalDot' />
                  </div>
                </PopoverTrigger>
                <PopoverContent className='p-4 w-max'>Options.</PopoverContent>
              </Popover>
            </div>
            <div className='flex flex-col items-center w-full'>
              <div className='flex items-center justify-center gap-1 '>
                <h6 className='font-[500] text-[20px] leading-[32px] text-textColor-primary'>
                  Eugenia Parsons
                </h6>
                <Icon name='tickBadge' svgProp={{ width: 20, height: 20 }} />
              </div>
              <span className='leading-[24px] tracking-[0.15px] text-primary-9/60'>Developer</span>
            </div>
            <div className='flex justify-center gap-4'>
              {skills?.map((i, idx) => (
                <div
                  key={idx}
                  className={`px-[10px] py-[3px] grid place-items-center rounded-[20px] text-[13px] leading-[18px] tracking-[0.16px] ${skillClassNames[i]}`}
                >
                  {i}
                </div>
              ))}
            </div>
            <div className='flex items-center justify-center gap-4'>
              <button className='px-4 py-2 flex items-center gap-2 text-primary-1 border border-primary-1 hover:border-transparent rounded-[6px] hover:shadow-3 hover:bg-primary-1 hover:text-white transition-colors duration-300 ease-in-out'>
                <Icon name='personAdd' />
                <span className='font-[500] text-[14px] leading-[24px] tracking-[0.4px] '>
                  CHECK OUT CV
                </span>
              </button>
              <button className='rounded-[6px] px-2 h-full border border-secondary-1 text-secondary-1 hover:text-white hover:bg-primary-1 hover:border-transparent transition-colors duration-300 ease-in-out'>
                <Icon name='envelope' />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>{/* Pagination component */}</div>
    </main>
  );
};

export default HireTalents;
