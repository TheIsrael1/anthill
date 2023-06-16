import { LazyLoadImage } from 'react-lazy-load-image-component';
import Icon from 'utils/Icon';
import demoDp from 'assets/image/demoDp.jpg';
import blogImgBig from 'assets/image/blogImageBig.png?format=webp&imagetools';
import BlogCard from 'components/general/BlogCard';
import blogImg from 'assets/image/blogImg.png?format=webp&w=330&h=280&imagetools';
import dpIcon from 'assets/image/demoDp.jpg?format=webp&imagetools';
import { useNavigate } from 'react-router-dom';

const SingleBlogExternal = () => {
  const navigate = useNavigate();

  return (
    <main className='container flex flex-col w-full h-full'>
      <div className='w-full min-h-[16.5rem] pb-[7.44rem] md:pb-[4.875rem] bg-primary-19 px-container-base lg:px-container-lg'>
        <div className='flex gap-[1.69rem] flex-col lg:flex-row justify-between'>
          <div className='flex flex-col mt-[2rem]'>
            <div
              onClick={() => navigate(-1)}
              className='p-1 w-max rounded-[50px] bg-transparent hover:bg-white/10 cursor-pointer transition-colors duration-300 ease-in-out active:bg-black/10 mb-4'
            >
              <Icon name='arrowBack' svgProp={{ className: 'text-white' }} />
            </div>
            <span className='font-[600] text-[14px] leading-[21px] tracking-[0.1px] text-info-1 mb-[0.75rem]'>
              #Production
            </span>
            <h5 className='text-white font-[800] text-[24px] md:text-[32px] leading-[32px] md:leading-[43px] max-w-[680px]'>
              "From Script to Screen: The Filmmaking Process"
            </h5>
          </div>
          <div className='flex items-end gap-4'>
            <div className='w-[48px] h-[48px] overflow-hidden rounded-[50px]'>
              <LazyLoadImage src={demoDp} className='w-full h-full origin-center' effect='blur' />
            </div>
            <div className='flex flex-col gap-1'>
              <h6 className='font-[600] leading-[21px] text-white'>Anthill Studios</h6>
              <p className='font-[300] text-[14px] leading-[21px] tracking-[0.15px] text-secondary-2'>
                18 April, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex flex-col px-container-base lg:px-container-lg '>
        <div className='relative flex flex-col mb-[2.5rem] max-h-[35rem] w-full -mt-[calc(264px-211px)] lg:px-[3.125rem]  '>
          <div className='w-full h-max overflow-hidden rounded-[16px]'>
            <LazyLoadImage src={blogImgBig} effect='blur' className='w-full h-full origin-center' />
          </div>
          <div className='relative lg:absolute top-0 right-0 mt-4  lg:mt-[calc(12.69rem-10px)] flex lg:flex-col gap-4  lg:gap-[2.56rem]'>
            <div className='flex flex-col items-center gap-2 cursor-pointer group'>
              <Icon
                name='shareIcon'
                svgProp={{
                  className:
                    'text-primary-9 group-hover:text-primary-1 transition-colors duration-300 ease-in-out',
                }}
              />
              <span className='hidden md:flex font-[300] text-[12px] leading-[21px] tracking-[0.15px] text-secondary-2 group-hover:text-primary-1 transition-colors duration-300 ease-in-out'>
                Share
              </span>
            </div>
            <div className='flex flex-col items-center gap-2 cursor-pointer group'>
              <Icon
                name='thumb'
                svgProp={{
                  className:
                    'text-primary-9 group-hover:text-primary-1 transition-colors duration-300 ease-in-out',
                }}
              />
              <span className='hidden md:flex font-[300] text-[12px] leading-[21px] tracking-[0.15px] text-secondary-2 group-hover:text-primary-1 transition-colors duration-300 ease-in-out'>
                Like
              </span>
            </div>
          </div>
        </div>
        <div className='absolute'></div>
        <p className='mt-[2.5rem] text-primary-9/[0.85] leading-[32px] tracking-[0.15px]'>
          Filmmaking is an art form that requires a combination of technical skills and creativity.
          As a filmmaker, it's essential to understand the different aspects of the craft to bring
          your vision to life. In this blog post, we'll be sharing some tips and tricks from a pro
          to help you elevate your filmmaking game. Pre-production is key Before you start shooting,
          it's crucial to have a solid plan in place. This includes developing a script, creating
          storyboards, scouting locations, and casting actors. By doing this, you'll have a clear
          vision of what you want to achieve, and it will help you stay on track during production.
          Pay attention to lighting Lighting is one of the most critical elements in filmmaking. It
          can set the mood, convey emotions, and create depth and texture. When lighting your
          scenes, consider the time of day, the location, and the tone you want to convey. Use
          natural light whenever possible, but don't be afraid to add artificial lighting to achieve
          the desired effect. Sound is equally important Sound is often overlooked in filmmaking,
          but it's just as crucial as visuals. Poor sound quality can ruin a scene, so it's
          important to invest in good microphones and audio equipment. Always test your sound before
          shooting, and consider using sound effects and music to enhance the overall experience.
          Experiment with camera angles and movement Don't be afraid to experiment with different
          camera angles and movement to create dynamic shots. Use a tripod for stable shots, but
          also consider using handheld shots or incorporating movement to add energy and excitement
          to your scenes. Post-production can make or break your film Post-production is where your
          film comes together, and it's essential to take the time to get it right. This includes
          editing your footage, color grading, adding sound effects and music, and mastering the
          final product. Don't rush through this process, as it can make or break your film.
        </p>
        <p className='text-center py-[5rem] font-[600] text-[24px] leading-[24px] tracking-[0.15px] text-primary-8'>
          Thanks for Reading!
        </p>
        <div className='flex justify-start items-center gap-[0.57rem] text-primary-1 mb-[1.5rem]'>
          <Icon name='gearIcon' />
          <span className='leading-[28px] tracking-[0.15px]'>Similar Articles</span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[1.5rem] gap-y-[2.5rem] mb-[6.94rem]'>
          {[...Array(4)]?.map((_, idx) => (
            <div key={idx} className='w-full h-full'>
              <BlogCard
                authorImg={dpIcon}
                authorName={`Mohammad Reza`}
                authorRole={`Editor, Polar Studios`}
                blogImage={blogImg}
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
    </main>
  );
};

export default SingleBlogExternal;
