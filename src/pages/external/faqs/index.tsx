import { useState } from 'react';
import Icon from 'utils/Icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/shadcn/accordion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import pricingGirl from 'assets/image/pricingGirl.png';
import { faqs } from 'content/faq';

export type faqTypes =
  | 'Payment & pricing'
  | 'Cancellation & Refund'
  | 'My subscriptions'
  | 'general';

const faqHeaderTokens: Record<faqTypes, { title: string; description: string; icon: JSX.Element }> =
  {
    'Cancellation & Refund': {
      description: 'Cancellation & Refund',
      title: 'Cancellation',
      icon: <Icon name='faqCancel' />,
    },
    'My subscriptions': {
      description: 'My subscriptions',
      title: 'Subscriptions',
      icon: <Icon name='faqSub' />,
    },
    'Payment & pricing': {
      description: 'Payment methods',
      title: 'Payment & pricing',
      icon: <Icon name='faqPay' />,
    },
    general: { description: '', title: 'General', icon: <Icon name='faqGen' /> },
  };

const FaqFilters: { title: faqTypes; icon: JSX.Element }[] = [
  { title: `general`, icon: faqHeaderTokens['general']?.icon },
  { title: `Payment & pricing`, icon: faqHeaderTokens['Payment & pricing']?.icon },
  { title: `Cancellation & Refund`, icon: faqHeaderTokens['Cancellation & Refund']?.icon },
  { title: `My subscriptions`, icon: faqHeaderTokens['My subscriptions']?.icon },
];

const Faq = () => {
  const [currFaq, setCurrFaq] = useState<faqTypes>('Payment & pricing');

  return (
    <main className='container px-container-base lg:px-container-lg mt-[2.625rem] flex flex-col'>
      <div className='w-full h-[20rem] rounded-[8px]  relative overflow-hidden mb-[1.5rem]'>
        <div className='absolute flex justify-center w-full h-full bg-primary-1/10 sm:bg-transparent'>
          <Icon name='faqBanner' svgProp={{ className: 'hidden sm:flex' }} />
        </div>
        <div className='absolute flex justify-center w-full h-full'>
          <div className='flex flex-col items-center justify-center w-full h-full gap-[1.125rem] px-4'>
            <h5 className='text-primary-9/[0.87] font-inter font-[600] text-[24px] leading-[32px]'>
              Hello, how can we help?
            </h5>
            <div className='flex items-center p-4 bg-white rounded-[6px] border border-primary-9/[0.22] w-full max-w-[450px] h-[54px]'>
              <div className='flex items-center'>
                <Icon name='searchIcon' svgProp={{ className: 'text-primary-9/[0.54]' }} />
              </div>
              <input
                placeholder='Ask a question....'
                className='right-0 flex-grow border-0 focus:!ring-0 form-input placeholder:text-primary-9/60'
              />
            </div>
            <p className='text-primary-9/60 text-[14px] leading-[21px] text-center tracking-[0.15px]'>
              or choose a category to quickly find the help you need.
            </p>
          </div>
        </div>
      </div>
      <div className='flex gap-[1.5rem] flex-col lg:flex-row'>
        <div className='flex max-w-full lg:flex-col gap-1 w-max lg:min-w-[300px] whitespace-nowrap overflow-x-auto no-scrollbar'>
          {FaqFilters?.map((i, idx) => (
            <div
              key={idx}
              onClick={() => setCurrFaq(i?.title)}
              className={`flex items-center gap-2 p-2 w-max lg:w-full group text-secondary-1 cursor-pointer hover:bg-primary-1 hover:text-white transition-colors duration-300 ease-in-out rounded-[6px] ${
                currFaq === i?.title ? `bg-primary-1 text-white` : ``
              }`}
            >
              {i?.icon}
              <span className={`font-[500] text-[14px] leading-[24px] tracking-[0.4px]`}>
                {`${i?.title}`?.toUpperCase()}
              </span>
            </div>
          ))}
          <div className='hidden lg:flex mt-8 w-[220px] h-[156.22px]'>
            <LazyLoadImage
              src={pricingGirl}
              alt=''
              effect='blur'
              className='w-full h-full overflow-hidden bg-center bg-cover'
            />
          </div>
        </div>
        <div className='flex flex-col flex-grow'>
          <div className='flex items-center gap-4 mb-[1.19rem]'>
            <div className='flex items-center text-primary-1 justify-center w-[42px] h-[42px] rounded-[6px] bg-primary-1/[0.16]'>
              {faqHeaderTokens[currFaq]?.icon}
            </div>
            <div className='flex flex-col justify-center'>
              <h6 className='text-primary-9/[0.87] font-[500] text-[20px] tracking-[0.15px]'>
                {faqHeaderTokens[currFaq]?.title}
              </h6>
              <span className='text-[14px] text-primary-9/60 tracking-[0.15px]'>
                {' '}
                {faqHeaderTokens[currFaq]?.description}
              </span>
            </div>
          </div>
          <Accordion type='single' collapsible className='w-full'>
            {faqs[currFaq]?.map((i, idx) => (
              <AccordionItem
                key={idx}
                value={i?.title}
                className='no-underline shadow-3 rounded-[6px] mb-2'
              >
                <AccordionTrigger className='py-[0.84rem] px-[1.25rem] text-start text-primary-9/[0.87] leading-[24px] tracking-[0.15px]'>
                  {i?.title}
                </AccordionTrigger>
                <AccordionContent className='py-[1.22rem] px-[1.25rem] text-start text-primary-9/60 leading-[24px] tracking-[0.15px] max-w-full overflow-auto no-scrollbar'>
                  {i?.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className='w-full mt-[3.125rem] flex flex-col items-center'>
        <div className='py-[3px] px-[10px] rounded-[4px] bg-primary-1/[0.12] mb-[0.8rem]'>
          <span className='text-[13px] leading-[18px] text-primary-1 tracking-[0.16px]'>
            QUESTION
          </span>
        </div>
        <h6 className='font-[500] text-[20px] leading-[32px] tracking-[0.15px] text-primary-9/[0.87] mb-[0.625rem]'>
          You still have a question?
        </h6>
        <p className='mb-[2.125rem] text-[14px] leading-[21px] tracking-[0.15px] text-primary-9/60 text-center'>
          If you cannot find a question in our FAQ, you can always contact us. We will answer to you
          shortly!
        </p>
        <div className='flex justify-center items-center flex-col md:flex-row gap-[1.5rem] mb-[9rem]'>
          <div className='w-full flex flex-col items-center  max-w-[464px] lg:min-w-[464px] p-[1.5rem] gap-[0.75rem] bg-primary-9/[0.04] rounded-[8px]'>
            <div className='bg-primary-1/[0.12] rounded-[8px] flex items-center justify-center h-[42px] w-[42px]'>
              <Icon name='phoneIcon' svgProp={{ className: 'text-primary-1' }} />
            </div>
            <h6 className='font-[500] text-[20px] leading-[32px] tracking-[0.15px] text-primary-9/[0.87]'>
              + (234) 810 548 2568
            </h6>
            <p className='text-[14px] leading-[21px] tracking-[0.15px] text-primary-9/60'>
              We are always happy to help!
            </p>
          </div>
          <div className='w-full flex flex-col items-center  max-w-[464px] lg:min-w-[464px] p-[1.5rem] gap-[0.75rem] bg-primary-9/[0.04] rounded-[8px]'>
            <div className='bg-primary-1/[0.12] rounded-[8px] flex items-center justify-center h-[42px] w-[42px]'>
              <Icon name='envelope' svgProp={{ className: 'text-primary-1' }} />
            </div>
            <h6 className='font-[500] text-[20px] leading-[32px] tracking-[0.15px] text-primary-9/[0.87]'>
              Nollywoodfilmmaker@gmail.com
            </h6>
            <p className='text-[14px] leading-[21px] tracking-[0.15px] text-primary-9/60'>
              Best way to get answer faster!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;
