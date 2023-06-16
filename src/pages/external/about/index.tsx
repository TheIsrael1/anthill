import FunkyPagesHero from 'components/general/FunkyPagesHero';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Icon from 'utils/Icon';
import niyi from 'assets/image/niyi.png?format=webp&imagetools';
import ContactCard from 'components/partials/contact-card';

const About = () => {
  const scrollToElement = (i: string) => {
    const element = document.getElementById(i);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  return (
    <>
      <div className='flex flex-col gap-[5rem] my-[1.125rem] container px-container-base lg:px-container-lg'>
        <FunkyPagesHero title='About Us' description='' />
        <section className='flex w-full gap-[8rem]' id='our-story'>
          <div className='w-full max-w-[777px] flex flex-col gap-[1.5rem]'>
            <h5 className='text-secondary-14 font-[600] text-[40px] leading-[47px]'>Our Story</h5>
            {[
              `We are a community of Nollywood filmmakers, enthusiasts, and industry experts who are
            passionate about the unique cultural identity of Nigerian cinema - Our community is
            made up of like-minded individuals who are dedicated to promoting and preserving the
            rich cultural heritage of Nigerian cinema.`,
              ` Our goal is to provide aspiring and established creatives with the resources they need
            to succeed in this dynamic industry - We believe that by providing access to valuable
            resources and training programs, we can help our members unlock their full potential and
            achieve their career goals.`,
              ` Join us on this exciting journey and become a part of a community dedicated to
            supporting the growth and success of Nigerian cinema - We welcome anyone who shares our
            passion for Nollywood and is committed to contributing to the growth and success of this
            vibrant industry.`,
            ]?.map((i, idx) => (
              <p key={idx} className='text-secondary-18 leading-[24px] tracking-[0.005em]'>
                {i}
              </p>
            ))}
          </div>
          <div className='hidden xl:flex flex-col pl-[1.5rem] border-l border-l-black'>
            <span className='mb-[2.5rem] underline text-secondary-19 leading-[32px]'>Jump to</span>
            <div className='flex flex-col gap-[1.5rem]'>
              {[
                { title: `Our Story`, link: `our-story` },
                { title: `Mission, Vision & Values`, link: `mission` },
                { title: `Who we are!`, link: `who-are-we` },
                { title: `Contact Us`, link: `contact-us` },
              ]?.map((i, idx) => (
                <div
                  onClick={() => scrollToElement(i?.link)}
                  key={idx}
                  className='flex items-center gap-4 cursor-pointer group'
                >
                  <span className='text-secondary-20 font-[300] text-[16px] group-hover:text-primary-1 transition-colors duration-300 ease-in-out'>{`0${
                    idx + 1
                  }`}</span>
                  <span className='text-secondary-21 font-[300] text-[18px] group-hover:text-primary-1 transition-colors duration-300 ease-in-out'>
                    {i?.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className='relative flex flex-col items-center pt-[6.86rem] pb-[3.31rem]'
          id='mission'
        >
          <div className='absolute top-0 right-[164px]'>
            <Icon name='missionDesignAsset' />
          </div>
          <div className='absolute top-[87px] left-[162px] hidden xl:flex'>
            <Icon name='missionDesignAsset2' />
          </div>
          <h4 className='mb-[0.95rem] text-primary-20 font-[600] text-[40px] leading-[61px]'>
            Our Mission, Vision and Values
          </h4>
          <p className='max-w-[526.39px] text-secondary-21 leading-[27px]/80 mb-[3.7rem] text-center'>
            We help customers book hotel rooms online, provide comprehensive help and support to our
            clients.
          </p>

          <div className='relative w-full h-max'>
            <div className='absolute w-full h-full'>
              <div className='relative w-full  max-w-[950.53px] h-full mx-auto bg-primary-21'></div>
            </div>
            <div className='relative flex flex-wrap py-[3.31rem] items-center justify-center w-full h-full gap-[1.42rem]'>
              {[
                {
                  title: `Our Mission`,
                  body: `To grow knowledge and wealth in Africa and her people.`,
                  icon: <Icon name='missionIcon' svgProp={{ className: 'text-info-11' }} />,
                },
                {
                  title: `Our Vision`,
                  body: `To become the biggest provider of travel information and reservation in Africa.`,
                  icon: <Icon name='visionIcon' svgProp={{ className: 'text-info-11' }} />,
                },
                {
                  title: `Our Values`,
                  body: `We are an online travel agency specializing in hotel bookings in Nigeria. We provide support, recommendations, and easy booking processes to ensure clients have a good stay.`,
                  icon: <Icon name='valuesIcon' svgProp={{ className: 'text-info-11' }} />,
                },
              ]?.map((i, idx) => (
                <div
                  key={idx}
                  className='flex flex-col py-[3.31rem] px-[1.89rem] max-w-[410.89px] bg-white rounded-[15px] border border-extraColor-borderBottom-4/[0.02] h-[272.66px] gap-[7.57px]'
                >
                  <div className='w-[37.87px] min-h-[37.87px] grid place-items-center rounded-[8px] bg-info-11/[0.25]'>
                    {i?.icon}
                  </div>
                  <h5 className='text-primary-20 font-[500] text-[24px] leading-[38px] '>
                    {i?.title}
                  </h5>
                  <p className='leading-[27px] text-secondary-22'>{i?.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-[2.5rem]' id='who-are-we'>
          <div className='flex flex-col items-center w-full gap-4'>
            <div className='flex justify-center items-center gap-[2px]'>
              <span className='h-1 w-1 rounded-[50px] bg-primary-1'></span>
              <span className='w-[2.5rem] h-[2px] bg-primary-1 rounded-[24px]'></span>
            </div>
            <h4 className='font-[800] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] -tracking-[0.5px] text-primary-9 text-center'>
              Who we are?
            </h4>
            <p className='max-w-[620px] font-[400] text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-center tracking-[0.5px] text-secondary-1'>
              We explore the niitty gritties of filmmaking and go behind the scenes to uncover the
              magic that brings these epic stories to life on the big screen.
            </p>
          </div>
          <div className='grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {[...Array(4)]?.map((_, idx) => (
              <div key={idx} className='flex flex-col items-center gap-4'>
                <div className='h-[120px] w-[120px] rounded-[50px] overflow-hidden'>
                  <LazyLoadImage src={niyi} className='w-full h-full bg-center bg-cover' />
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <h6 className='text-primary-20 font-[500] text-[24px] leading-[38px] '>
                    Niyi Akinmolayan
                  </h6>
                  <span className='leading-[27px] text-secondary-22'>
                    CEO & Founder of Anthill Studios
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section
        id='contact-us'
        className='container w-full bg-secondary-23 px-container-base md:px-container-lg'
      >
        <ContactCard />
      </section>
    </>
  );
};

export default About;
