import { faqTypes } from 'pages/external/faqs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'components/shadcn/ui/table';
import CONSTANTS from 'constant';
import { Check } from 'lucide-react';

interface faqInterface {
  title: string;
  body: string | JSX.Element;
}

export const faqs: Record<faqTypes, faqInterface[]> = {
  'Payment & pricing': [
    {
      title: `Is Nollywood Filmmaker free?`,
      body: `No, Nollywood Filmmaker is a subscription based platform. However, the first
        month is free for Pro and Master subscriptions.`,
    },
    {
      title: `What are the payment plans?`,
      body: (
        <div className='flex flex-col gap-4'>
          <p className='font-bold'>- Find our pricings below</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'></TableHead>
                <TableHead className='font-bold'>Nollywood Student</TableHead>
                <TableHead className='font-bold'>Nollywood Professional</TableHead>
                <TableHead className='font-bold text-end'>Nollywood Master</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>NAIRA</TableCell>
                <TableCell>
                  N5,000/month <br />
                  N50,000/year
                </TableCell>
                <TableCell>
                  N10,000/month <br />
                  N100,000/year
                </TableCell>
                <TableCell className='text-end'>
                  N50,000/month <br /> N500,000/year
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-medium'>DOLLAR</TableCell>
                <TableCell>
                  $10/month <br />
                  $100/year
                </TableCell>
                <TableCell>
                  $30/month <br />
                  $300/year
                </TableCell>
                <TableCell className='text-end'>
                  $50/month <br />
                  $500/year
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className='font-bold'>- You can upgrade and cancel subscriptions any time</p>
        </div>
      ),
    },
  ],
  'Cancellation & Refund': [
    {
      title: `Can I cancel my subscription or apply for a refund?`,
      body: `Yes, you can cancel your subscription, however, there will be no refunds.`,
    },
    {
      title: `What happens if I don’t use the platform in a month or more within my 1 year
    subscription plan?`,
      body: `Nothing, ma/sir.`,
    },
  ],
  general: [
    {
      title: `What is Nollywood Filmmaker all about?`,
      body: `It is a community for filmmakers and/or aspiring filmmakers to learn the art
    and science of filmmaking, interact with other industry professionals and grow
    into a successful filmmaker`,
    },
    {
      title: `Can I be a part of the community from outside Lagos/Nigeria?`,
      body: `Yes, you can. We have an Online Interactive Training and General and
    Professional Support Forums. There are the Live Masterclasses/Workshops that
    you can plan to attend or access via zoom. We also have a yearly 2-day
    bootcamp but this is only available for Master Subscribers.`,
    },
    {
      title: `Is Nollywood Filmmaker open to actors or just crew?`,
      body: `Yes, it is open to actors who are interested in understanding how the art of
    filmmaking works from behind the camera.`,
    },
    {
      title: `How do I reset my password?`,
      body: (
        <div className='flex flex-col gap-4'>
          <p>
            - To reset your password, please visit the{' '}
            <span className='font-bold hover:underline'>
              <a href={`/${CONSTANTS.ROUTES.login}`}>Sign In</a>
            </span>{' '}
            link in the upper right corner of the Nollywood Filmmaker page.
          </p>
          <p>
            Click Forgot Password? at the bottom of the login box, then enter the email address
            associated with your Nollywood Filmmaker account and click Submit.
          </p>
          <p>
            - An email with a link will be sent to your inbox. Please check your spam or junk folder
            if you do not see the email in your inbox.
          </p>
        </div>
      ),
    },
    {
      title: `Does subscribing give me access to work on Anthill Studios’ productions?`,
      body: `Except there is an open call, being a subscriber on the platform is not an
    automatic pass to working with Anthill Studios.`,
    },
    { title: `Is this a blog?`, body: `No, it is a community for filmmakers.` },
    {
      title: `How can I contribute to the blog?`,
      body: `You can make your contributions on the General Forum, a platform available to
    all signed up members.`,
    },
    {
      title: `What’s the difference between the General Forum and the Professional Support Forum?`,
      body: `This General Forum is open to every signed up member and they can interact
    with each other while the Professional Support Forum is for strictly Pro and
    Master subscribers and the professionals answering their questions will be
    highlighted. Those on the Professional Support Forum also have access to
    engage pro and master subscribers directly.`,
    },
    {
      title: `How do I secure a Direct Chat with Niyi?`,
      body: `This feature is only available to Master subscribers. To secure a Direct Chat
    with NIyi, you need to upgrade your subscription.`,
    },
    {
      title: `How can I be a part of the Live Masterclasses/Workshops and Bootcamps?`,
      body: (
        <div className='flex flex-col gap-4'>
          <p>- Firstly, you must be a Masters Subscriber.</p>
          <p>
            The Live Masterclasses/Workshops are regular physical training where master subscribers
            can meet Niyi Akinmolayan and other professionals. Those that can't attend will have
            access to watch via zoom.
          </p>
          <p>- The Bootcamps are yearly 2-day events available only for Master Subscribers.</p>
        </div>
      ),
    },
    {
      title: `Where can I find advertised service openings on the website?`,
      body: `Advertised openings can be found on advert section of the dashboard`,
    },
    {
      title: `How do I upload, update and/or replace my CV?`,
      body: (
        <p>
          Go to the{' '}
          <span className='font-bold hover:underline'>
            <a href={`/app/${CONSTANTS.ROUTES['cv-profile']}`}>CV Profile</a>
          </span>{' '}
          section
        </p>
      ),
    },
    { title: `Can I download my CV generated on the Nollywood Filmmaker website?`, body: `Yes` },
    {
      title: `How do I advertise a job alert?`,
      body: (
        <div className='flex flex-col gap-4-'>
          <p>This feature is only available to Master subscribers</p>
          <p>
            Go to the{' '}
            <span className='font-bold hover:underline'>
              <a href={`/app/${CONSTANTS.ROUTES['service-ad']}`}>advertise a service</a>
            </span>{' '}
            section
          </p>
        </div>
      ),
    },
    {
      title: `How do I apply for a job?`,
      body: (
        <p>
          Go to the{' '}
          <span className='font-bold hover:underline'>
            <a href={`/app/${CONSTANTS.ROUTES['dashboard']}?key=advert`}>advert section</a>
          </span>{' '}
          of the dashboard to see job openings.
        </p>
      ),
    },
    {
      title: `Where do I see the most recent job listings on the site?`,
      body: (
        <p>
          Go to the{' '}
          <span className='font-bold hover:underline'>
            <a href={`/app/${CONSTANTS.ROUTES['dashboard']}?key=advert`}>advert section</a>
          </span>{' '}
          of the dashboard to see job openings.
        </p>
      ),
    },
    {
      title: `What happens when I apply for a job posted on nollywoodfilmmaker.com?`,
      body: `The advertiser reviews your application and would you contact you if they’d
    like to work with you.`,
    },
    {
      title: `If I get a job through Nollywood Filmmaker, will you collect a cut of my pay or
    commission?`,
      body: `No, Nollywood Filmmaker will not be asking for any commission or percentage
      of your pay. `,
    },
    {
      title: `What do I need to know about jobs advertised on Nollywood Filmmaker?`,
      body: (
        <div className='flex flex-col gap-4'>
          <p>- Jobs posted on Nollywood Filmmaker are advertised by NWFM Masters Subscribers.</p>
          <p>
            - Advertised jobs are independent of the Nollywood Filmmaker platform in that your terms
            of employment are solely dependent on the employer
          </p>
        </div>
      ),
    },
    {
      title: `What level of qualifications do I need to apply for a job on Nollywood Filmmaker`,
      body: `Your qualifications will be verified via your uploaded CV`,
    },
    {
      title: `Tips on improving my visibility on the job search/crew hire page?`,
      body: (
        <div className='flex flex-col gap-4'>
          <p>
            To optimize your visibility on the job search/crew hire page, ensure that your profile
            is corrected filled and update.{' '}
          </p>
          <p>Fill out or upload your resume</p>
        </div>
      ),
    },
    {
      title: `What are the details that need to be specified on my job listing?`,
      body: `Job description, remuneration and location`,
    },
    {
      title: `Can I apply for a job on Nollywood Filmmaker if I don’t have an account or subscribed?`,
      body: (
        <p>
          No, you can’t. This feature is only open to subcribed users. You can enjoy this privilege
          by subscribing{' '}
          <span>
            <a href={`/${CONSTANTS.ROUTES.pricing}`}>here</a>
          </span>{' '}
        </p>
      ),
    },
    {
      title: `Why is it important that I keep my profile updated?`,
      body: `This optimises your visibility when you apply for a job on the platform. It also
    give the hirer the chance to check out your portfolio and most recent jobs.`,
    },
    {
      title: `As a producer or production company, why should I use your platform to recruit industry
    professionals?`,
      body: `Because Nollywood Filmmaker is the hub to find the professionals within the
      industry in one place`,
    },
    { title: `Is my detail safe on Nollywood Filmmaker?`, body: `Absolutely.` },
    { title: `Can I share job listings from Nollywood Filmmaker?`, body: ` Yes.` },
    {
      title: `Are the classes physical or virtual?`,
      body: `The Online Interactive Trainings are virtual classes while the Live
    Masterclasses/Workshops and Bootcamps are physical training. However,
    those unable to attend the Masterclasses/Workshops will have access to watch
    via zoom.`,
    },
    {
      title: `Is there a certificate issued from partaking in any of the Nollywood Filmmaker
    classes/trainings?`,
      body: `Yes, there will be certificates for the Live Masterclasses and Bootcamps ONLY`,
    },
  ],
  'My subscriptions': [
    {
      title: `What exactly am I paying for?`,
      body: (
        <div className='flex flex-col gap-4'>
          <p className='font-bold'>- SUBSCRIPTION FEATURES</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='font-bold'>Features</TableHead>
                <TableHead className='font-bold text-start'>Nollywood Student</TableHead>
                <TableHead className='font-bold text-start'>Nollywood Professional</TableHead>
                <TableHead className='font-bold text-start'>Nollywood Master</TableHead>
              </TableRow>
            </TableHeader>
            {(
              [
                { feat: `Weekly Blog`, stu: true, pro: true, master: true },
                { feat: `Anthill BTS`, stu: true, pro: true, master: true },
                { feat: `General Forum`, stu: true, pro: true, master: true },
                { feat: `Download Assets/Templates`, stu: true, pro: true, master: true },
                { feat: `Online Interactive Training`, stu: false, pro: true, master: true },
                { feat: `Professional Support Forum`, stu: false, pro: true, master: true },
                { feat: `Profile Page with CV`, stu: false, pro: true, master: true },
                { feat: `Live Masterclasses/Workshops`, stu: false, pro: false, master: true },
                { feat: `Bootcamps`, stu: false, pro: false, master: true },
                { feat: `Production Consultancy`, stu: false, pro: false, master: true },
                { feat: `Advertise a Service`, stu: false, pro: false, master: true },
                {
                  feat: `Direct Chat with Niyi
              Akinmolayan`,
                  stu: false,
                  pro: false,
                  master: true,
                },
              ] as {
                feat: string;
                stu: boolean;
                pro: boolean;
                master: boolean;
              }[]
            )?.map((i, idx) => (
              <TableRow key={idx}>
                <TableCell className='font-medium'>{i?.feat}</TableCell>
                <TableCell className='text-start'>
                  {i?.stu ? <Check className='w-4 h-4' /> : `-`}
                </TableCell>
                <TableCell className='text-start'>
                  {i?.pro ? <Check className='w-4 h-4' /> : `-`}
                </TableCell>
                <TableCell className='text-start'>
                  {i?.master ? <Check className='w-4 h-4' /> : `-`}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </div>
      ),
    },
    {
      title: `How do I subscribe?`,
      body: (
        <p>
          Click{' '}
          <span>
            <a href={`/${CONSTANTS.ROUTES.pricing}`}>here</a>
          </span>{' '}
          to view subscription plans
        </p>
      ),
    },
    {
      title: `How do I renew my subscription?`,
      body: (
        <p>
          Click{' '}
          <span>
            <a href={`/${CONSTANTS.ROUTES.pricing}`}>here</a>
          </span>{' '}
          to renew your subscription
        </p>
      ),
    },
    {
      title: `Can I upgrade from one plan to another? / How do I switch my payment plan along the
    line?`,
      body: `Yes, you can upgrade and cancel subscriptions any time`,
    },
  ],
};
