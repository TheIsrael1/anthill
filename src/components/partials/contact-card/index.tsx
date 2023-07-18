import { Input } from 'components/shadcn/input';
import { Label } from 'components/shadcn/label';
import { Textarea } from 'components/shadcn/textarea';

const ContactCard = () => {
  return (
    <section className='mt-[2.5rem] py-[5.625rem] flex flex-col'>
      <h4 className='max-w-[511px] text-primary-20 font-[800] text-[34px] mb-[3.5rem] leading-[38px]'>
        We’d love to hear from you!
      </h4>
      <div className='flex flex-col gap-[1.5rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]'>
          <div className='flex flex-col gap-[0.75rem]'>
            <Label htmlFor='email' className='text-secondary-24 leading-[18px]'>
              Your Name
            </Label>
            <Input
              className='from-input placeholder:text-secondary-24 focus:border-0 focus:ring-0 bg-white h-[64px] rounded-[8px] border border-secondary-25'
              type='email'
              id='email'
              placeholder='Jane Doe'
            />
          </div>
          <div className='flex flex-col gap-[0.75rem]'>
            <Label htmlFor='email' className='text-secondary-24 leading-[18px]'>
              Your Email
            </Label>
            <Input
              className='from-input placeholder:text-secondary-24 focus:border-0 focus:ring-0 bg-white h-[64px] rounded-[8px] border border-secondary-25'
              type='email'
              id='email'
              placeholder='janedoe@gmail.com'
            />
          </div>
        </div>
        <div className='flex flex-col gap-[0.75rem]'>
          <Label htmlFor='email' className='text-secondary-24 leading-[18px]'>
            Your Message
          </Label>
          <Textarea
            rows={10}
            placeholder='Start typing here...'
            className='from-input placeholder:text-secondary-24 focus:border-0 focus:ring-0 bg-white rounded-[8px] border border-secondary-25'
          />
        </div>
        <div className='flex justify-end w-full'>
          <button className='text-white bg-primary-1 rounded-[8px] shadow-1 py-[1.25rem] px-[2.5rem] hover:opacity-90 duration-300 ease-in-out'>
            <span className='font-[500] text-[18px] leading-[24px] tracking-[0.15px]'>
              Send Message
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
