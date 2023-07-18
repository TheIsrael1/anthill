import { LazyLoadImage } from 'react-lazy-load-image-component';
import heroImg from 'assets/image/heroImg.png?format=webp&w=560&h=528&imagetools';
import heroImgSmall from 'assets/image/heroImg.png?format=webp&w=380&h=360&imagetools';
import filmImg from 'assets/image/heyyou.png?format=webp&w=240&h=153&imagetools';
import blogImg from 'assets/image/blogImg.png?format=webp&w=330&h=280&imagetools';
import dpIcon from 'assets/image/demoDp.jpg?format=webp&imagetools';
import questionImage from 'assets/image/questionImg.png?format=webp&w=640&h=640&imagetools';
import questionImageSmall from 'assets/image/questionImg.png?format=webp&w=380&h=380&imagetools';
import Balancer from 'react-wrap-balancer';
import Icon from 'utils/Icon';
import CONSTANTS from 'constant';
import BlogCard from 'components/general/BlogCard';
import BtsCard from 'components/general/BtsCard';
import BgTransitionSpan from 'components/animation/bg-transitions-span';
import { useNavigate } from 'react-router-dom';
import movie1 from 'assets/image/house-of-secrets.jpg?format=webp&w=240&h=153&imagetools';
import movie2 from 'assets/image/hey-you.jpg?format=webp&w=240&h=153&imagetools';
import movie3 from 'assets/image/king-of-thieves.jpg?format=webp&w=240&h=153&imagetools';
import movie4 from 'assets/image/the-man-for-the-job.jpg?format=webp&w=240&h=153&imagetools';
import { shimmer, toBase64 } from 'utils/general/shimmer';

const fromTheMakersOf = [movie1, movie4, movie3, movie2];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col w-full h-auto'>
      <section className='w-full container  xl:px-container-lg flex flex-col md:flex-row md:justify-between md:gap-[8.125rem] mb-[4.5rem]'>
        <div className='pr-container-base md:pr-0 pl-container-base  lg:pl-container-lg xl:pl-0 flex flex-col items-start pt-[6rem] md:pt-[6.5rem]  max-w-full md:max-w-[590px] flex-grow-0 flex-shrink-1 basis-auto'>
          <div className='py-2 px-6 rounded-[160px] bg-primary-10 font-[500] text-[14px] md:text-[16px] leading-[16px] md:leading-[24px] tracking-[0.1px] md:tracking-[0.15px] text-primary-1 md-[1.5rem] md:mb-[2rem]'>
            Filmmaking
          </div>
          <h1 className='font-[700] text-[52px]  md:text-[56px] leading-[68px]  md:leading-[72px] -tracking-[0.5px] text-primary-11 mb-[1.5rem] md:mb-[2rem]'>
            <Balancer>
              Be the <br /> next successful Nollywood{' '}
              <span className='text-primary-2'> Filmmaker!</span>
            </Balancer>
          </h1>
          <p className='text-[16px] leading-[24px] tracking-[0.15px] text-secondary-1 mb-[2.5rem]'>
            Unlock your potential as a successful Nollywood filmmaker with access to the right tools
            and resources Anthill Studios and other industry professionals have to offer!
          </p>
          <div className='flex items-center gap-4 mb-4'>
            <button
              onClick={() => navigate(`/${CONSTANTS.ROUTES['create-account']}`)}
              className='py-[1rem] md:py-[1.25rem] px-[2rem] md:px-[2.5rem] text-white bg-primary-1 rounded-[8px] text-[14px] md:text-[18px] leading-[24px] font-[500] tracking-[0.15px] shadow-1 hover:opacity-90 transition-opacity duration-300 ease-in-out'
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate(`/${CONSTANTS.ROUTES['hire-talent']}`)}
              className='overflow-hidden w-max inline-flex relative py-[1rem] md:py-[1.25rem] px-[2rem] md:px-[2.5rem] text-primary-1 hover:text-white transition-colors duration-300 ease-in-out bg-white rounded-[8px] text-[14px] md:text-[18px] leading-[24px] font-[500] tracking-[0.15px] shadow-2 group'
            >
              <BgTransitionSpan className='-mx-[2rem] md:-mx-[2.5rem] -mt-[1rem] md:-mt-[1.25rem]  bg-primary-1 rounded-[8px]' />
              <span className='relative'>Hire Talents</span>
            </button>
          </div>
          <p className='text-primary-1 text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] tracking-[0.15px]'>
            From the makers of Mikolo, The House of Secrets, The Man for the Job, King of Thieves,
            Elevator Baby, et al.
          </p>
        </div>
        <div className='relative flex mx-auto  justify-center max-w-full md:max-w-[calc(100%-590px)] flex-grow-0 flex-shrink-1 basis-auto mt-[5.5rem] overflow-hidden'>
          <LazyLoadImage
            effect='blur'
            className='hidden transition-all md:flex'
            alt=''
            src={heroImg}
          />
          <LazyLoadImage
            effect='blur'
            className='transition-all md:hidden'
            alt=''
            src={heroImgSmall}
          />
        </div>
      </section>
      <section className='w-full container  px-container-base lg:px-container-lg flex flex-col items-center gap-[2.5rem] mb-[6.5rem]'>
        <h4 className='text-[16px] md:text-[24px] font-[700] leading-[40px] -tracking-[0.5px] text-primary-11 text-center'>
          Learn from the makers of
        </h4>
        <div className='grid items-center justify-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
          {fromTheMakersOf?.map((i, idx) => (
            <div
              key={idx}
              className='w-[240px] h-[160px] rounded-[8px] border-b-4 border-warning-1 overflow-hidden'
            >
              <LazyLoadImage
                placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                alt=''
                src={i}
                className='w-full h-full bg-top bg-cover'
              />
            </div>
          ))}
        </div>
      </section>
      <section className='w-full container flex  flex-col items-center gap-[3rem] mb-[8.06rem]'>
        <div className='flex flex-col items-center gap-4 px-container-base lg:px-container-lg'>
          <div className='flex justify-center items-center gap-[2px]'>
            <span className='h-1 w-1 rounded-[50px] bg-primary-1'></span>
            <span className='w-[2.5rem] h-[2px] bg-primary-1 rounded-[24px]'></span>
          </div>
          <h4 className='font-[800] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] -tracking-[0.5px] text-primary-9 text-center'>
            Explore the most popular blogs this week!
          </h4>
          <p className='max-w-[620px] font-[400] text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-center tracking-[0.5px] text-secondary-1'>
            Find out what's hot in the world of Filmmaking this week. Discover the most popular and
            engaging blogs that cover a variety immersing of topics!
          </p>
        </div>
        <div className='flex w-full gap-4 overflow-auto no-scrollbar pl-container-base lg:pl-container-lg'>
          {[...Array(6)]?.map((_, idx) => (
            <div key={idx} className='min-w-[20rem]'>
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
        <div className='px-container-base lg:px-container-lg w-full flex justify-end gap-[0.6875rem] items-center group text-primary-1 cursor-pointer'>
          <span className='font-[500] text-[18px] leading-[24px] tracking-[0.15px] group-hover:underline transition-all ease-in-out'>
            View in full
          </span>
          <Icon name='externalLink' svgProp={{ width: 18, height: 18 }} />
        </div>
      </section>
      <section className='w-full container flex  flex-col items-center gap-[3rem] mb-[8.06rem] px-container-base lg:px-container-lg'>
        <div className='flex flex-col items-center gap-4 px-container-base lg:px-container-lg'>
          <div className='flex justify-center items-center gap-[2px]'>
            <span className='h-1 w-1 rounded-[50px] bg-primary-1'></span>
            <span className='w-[2.5rem] h-[2px] bg-primary-1 rounded-[24px]'></span>
          </div>
          <h4 className='font-[800] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] -tracking-[0.5px] text-primary-9 text-center'>
            Explore the BTS of blockbuster movies!
          </h4>
          <p className='max-w-[620px] font-[400] text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-center tracking-[0.5px] text-secondary-1'>
            Explore the world of filmmaking and go behind the scenes to uncover the magic that
            brings these epic stories to life on the big screen.
          </p>
        </div>
        <div className='flex w-full gap-4 overflow-auto no-scrollbar pl-container-base lg:pl-container-lg'>
          {[...Array(3)]?.map((_, idx) => (
            <div key={idx} className='min-w-[25.69rem]'>
              <BtsCard
                btsImage={filmImg}
                category={`BTS Clips`}
                title={`The Making of Elevator Baby`}
                description={` Explore BTS of the hit “Elevator Baby”`}
              />
            </div>
          ))}
        </div>
      </section>
      <section className='w-full container flex  flex-col items-center gap-[3rem] mb-[8.06rem]'>
        <div className='flex flex-col items-center gap-4 px-container-base lg:px-container-lg mb-[2.5rem]'>
          <div className='flex justify-center items-center gap-[2px]'>
            <span className='h-1 w-1 rounded-[50px] bg-primary-1'></span>
            <span className='w-[2.5rem] h-[2px] bg-primary-1 rounded-[24px]'></span>
            <span className='text-[12px] text-primary-1 tracking-[0.15px] font-[500]'>
              How it works
            </span>
            <span className='w-[2.5rem] h-[2px] bg-primary-1 rounded-[24px]'></span>
            <span className='h-1 w-1 rounded-[50px] bg-primary-1'></span>
          </div>
          <h4 className='font-[800] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] -tracking-[0.5px] text-primary-9 text-center '>
            Learn to make Film with Nollywood Filmmaker.com
          </h4>
          <p className='max-w-[1064px] font-[400] text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-center tracking-[0.5px] text-secondary-1'>
            Learn from the experts in writing, directing, producing, vfx, cinematography, music and
            sound design, Marketing and distribution and editing. Discover the secrets of successful
            filmmaking and bring your stories to life on the big screen.
          </p>
        </div>
        <div className='container flex flex-col w-full xl:px-container-lg md:flex-row md:justify-between'>
          <div className='relative flex justify-center max-w-full md:max-w-[calc(100%-600px)] flex-grow-0 flex-shrink-1 basis-auto  overflow-hidden'>
            <LazyLoadImage
              effect='blur'
              className='hidden transition-all md:flex'
              alt=''
              src={questionImage}
            />
            <LazyLoadImage
              effect='blur'
              className='transition-all md:hidden'
              alt=''
              src={questionImageSmall}
            />
          </div>
          <div className='pr-container-base  pl-container-base  md:pr-0 lg:pr-container-lg xl:pr-0  flex flex-col items-start  max-w-full md:max-w-[600px] flex-grow-0 flex-shrink-1 basis-auto'>
            <div className='flex flex-col w-full h-full gap-8'>
              {[
                {
                  tagClassName: `bg-primary-10 text-primary-1`,
                  linkClassName: `text-primary-1`,
                  title: `Create an Account now`,
                  body: `Unlock your potential as a filmmaker with Nollywood Filmmaker.com. Create an account and gain access to a wealth of resources and training from experienced professionals. `,
                  linkTitle: `Create an  Account!`,
                  link: CONSTANTS.ROUTES['create-account'],
                },
                {
                  tagClassName: `bg-primary-17 text-primary-18`,
                  linkClassName: `text-primary-18`,
                  title: `Upgrade your account!`,
                  body: `Unlock even more benefits and take your filmmaking skills to the next level by upgrading your account on Nollywood Filmmaker.com. Get access to exclusive content, advanced training, and personalized support from industry experts.  `,
                  linkTitle: `View subscription options`,
                  link: CONSTANTS.ROUTES['pricing'],
                },
                {
                  tagClassName: `bg-info-8 text-info-9`,
                  title: `Explore and Enjoy!`,
                  body: `Experience the magic of filmmaking with Nollywood Filmmaker.com. Join us now and enjoy the journey towards mastering the art of storytelling through film. `,
                },
              ]?.map((i, idx) => (
                <div key={idx}>
                  <div
                    className={`px-[1.5rem] py-2 flex items-center justify-center rounded-[160px] text-[16px] leading-[24px] tracking-[0.15px]
                    ${i?.tagClassName}
                    mb-4 w-max`}
                  >
                    {`0${idx + 1}.`}
                  </div>
                  <h5 className='font-[700] text-[20px] leading-[28px] -tracking-[0.5px] text-primary-9 mb-[0.75rem]'>
                    {i?.title}
                  </h5>
                  <p className='text-secondary-1 font-[400] text-[16px] leading-[24px] tracking-[0.15px] mb-[1.25rem]'>
                    {i?.body}
                  </p>
                  {i.linkTitle ? (
                    <div
                      onClick={() => navigate(`/${i?.link}`)}
                      className={`flex items-center gap-[0.69rem] cursor-pointer transition-all hover:underline duration-300 ease-in-out ${i?.linkClassName}`}
                    >
                      <span className='text-[18px] '>{i?.linkTitle}</span>
                      <Icon
                        name='externalLinkIcon'
                        svgProp={{
                          width: 18,
                          height: 18,
                        }}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
