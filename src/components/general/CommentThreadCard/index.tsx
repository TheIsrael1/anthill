import Icon from 'utils/Icon';
import { Avatar, AvatarFallback, AvatarImage } from 'components/shadcn/ui/avatar';
import demoCustomer from 'assets/image/demo-customer.jfif';

const CommentThreadCard = () => {
  return (
    <div className='h-max min-h-[16.5rem] w-full rounded-[0.375rem] bg-white p-[1.5rem] flex flex-col'>
      <div className='flex items-center gap-4 mb-4'>
        <div className='h-[2.5rem] w-[2.5rem] bg-slate-300 overflow-hidden rounded-[8px] '>
          <img src={demoCustomer} className='w-full h-full bg-cover bg-center' />
        </div>
        <div className='flex flex-col'>
          <h6 className='leading-[1.5rem] tracking-[0.00938rem] text-primary-9'>Elizabeth Ojo</h6>
          <span className='text-[14px] text-primary-9/60 leading-[1.25rem] tracking-[0.00938rem]'>
            6 hrs ago
          </span>
        </div>
      </div>
      <p className='text-secondary-9/60 text-[14px] sm:text-[16px] leading-[1.5rem] tracking-[0.00938rem] mb-[1.5rem]'>
        Hello fellow filmmakers! I'm brand new to the world of filmmaking and I'm looking to invest
        in a camera for my upcoming projects. I've been doing a lot of research online, but I'm
        feeling a bit overwhelmed by the sheer number of options out there. I'm trying to decide
        between a DSLR, mirrorless, or cinema camera, but I'm not quite sure what the differences
        are between them or which one would be the best choice for me.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-[3rem]'>
        <div className='w-full sm:w-max flex items-center gap-[0.5rem]'>
          <button
            className='grid place-items-center rounded-[0.25rem] border border-primary-1 h-[2.5rem] px-[0.375rem] cursor-pointer
          hover:bg-primary-1/[0.1] transition-colors duration-300 ease-in-out group active:bg-white
          '
          >
            <Icon
              name='BookmarkIcon'
              svgProp={{
                className:
                  'text-primary-9 group-hover:-translate-y-[2px] transition-transform ease-in-out duration-300',
              }}
            />
          </button>
          <button className='flex items-center gap-[0.5rem] px-4 h-[2.5rem] bg-primary-1 rounded-[0.25rem] hover:opacity-90 active:opacity-100 transition-opacity ease-in-out duration-300 '>
            <Icon name='threadResponseIcon' />
            <span className='text-white text-[14px] leading-[1.5rem] tracking-[0.00938rem]'>
              Add Response
            </span>
          </button>
        </div>
        <div className='flex items-center w-full sm:w-max gap-2 px-[14px]'>
          <div className='flex items-center'>
            {[...Array(3)]?.map((_, idx) => (
              <Avatar
                key={idx}
                className={`ml-[-14px] z-[${idx + 2}] border-2 border-white w-[1.8rem] h-[1.8rem]`}
              >
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className='text-primary-9/[0.38] text-[14px] font-[500] leading-[1.3rem] tracking-[0.00625rem]'>
            14 people commented
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentThreadCard;
