import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PillTabs from 'components/general/PillTabs';
import SearchComboBox from 'components/general/SearchComboBox';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import demoBlogImg from 'assets/image/blogImg.png';
import demoDp from 'assets/image/demoDp.jpg';
import BlogCard from 'components/general/BlogCard';

type filterTypes =
  | 'All'
  | 'Production'
  | 'Post-production'
  | 'Distribution and Marketing'
  | 'Animation';

const generalFilters: filterTypes[] = [
  'All',
  'Production',
  'Post-production',
  'Distribution and Marketing',
  'Animation',
];

const Blogs = () => {
  const [currFilter, setCurrFilter] = useState<filterTypes>('All');

  return (
    <div className='flex flex-col my-[1.125rem] container px-container-base lg:px-container-lg'>
      <FunkyPagesHero title='Blogs' description='' customBgClass={`!bg-primary-18`} />
      <div className='w-full max-w-[800px] relative mx-auto my-[1.5rem] md:my-0 md:mb-[1.75rem] md:-top-[1.5rem]'>
        <SearchComboBox />
      </div>
      <div className='flex justify-center w-full mb-[2.25rem]'>
        <PillTabs
          tabs={generalFilters}
          currActive={currFilter}
          onSelect={(i) => setCurrFilter(i)}
        />
      </div>
      <div className='w-full flex flex-col gap-[2.5rem] mb-[7.69rem]'>
        <div className='flex flex-col items-center gap-8 lg:flex-row'>
          <div className='w-full max-w-[497px] h-[360px] rounded-[8px] overflow-hidden'>
            <LazyLoadImage className='w-full h-full' src={demoBlogImg} effect='blur' alt='' />
          </div>
          <div className='flex flex-col justify-center gap-4'>
            <span className='text-primary-1 font-[600] text-[14px] leading-[21px] tracking-[0.1px] '>
              Production
            </span>
            <h5 className='font-[700] text-[32px] text-primary-9 leading-[43px] md:max-w-[360px]'>
              "From Script to Screen: The Filmmaking Process"
            </h5>
            <p className='font-[300] text-[14px] text-secondary-2 leading-[21px] tracking-[0.15px] md:max-w-[643px]'>
              Filmmaking is an art form that requires a combination of technical skills and
              creativity. As a filmmaker, it's essential to understand the different aspects of the
              craft to bring your vision to life. In this blog post ...
            </p>
            <div className='flex items-center gap-4'>
              <div className='w-[56px] h-[56px] rounded-[50px] overflow-hidden'>
                <LazyLoadImage className='w-full h-full' src={demoDp} effect='blur' alt='' />
              </div>
              <div className='flex flex-col justify-center gap-1'>
                <h6 className='font-[600] leading-[21px] text-primary-9'>Mohammad Reza</h6>
                <span className='font-[300] text-secondary-2 text-[14px] leading-[21px] tracking-[0.15px]'>
                  18 April, 2022
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[1.375rem] gap-y-[2.69rem]'>
          {[...Array(6)]?.map((_, idx) => (
            <div key={idx} className='w-full h-full'>
              <BlogCard
                authorImg={demoDp}
                authorName={`Mohammad Reza`}
                authorRole={`Editor, Polar Studios`}
                blogImage={demoBlogImg}
                category={`Production`}
                date={`18 April, 2022`}
                description={`
                Filmmaking is an art form that requires a combination of technical skills and creativity.
                As a filmmaker, it's essential to understand...
                `}
                title={` "From Script to Screen: The Filmmaking Process"`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
