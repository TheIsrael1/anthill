import { Avatar, AvatarFallback, AvatarImage } from 'components/shadcn/ui/avatar';
import Icon from 'utils/Icon';
export default function UserInfoEditSection() {
  return (
    <section className='flex justify-between bg-white rounded-md p-4 px-8 items-center'>
      <div className='flex items-start gap-2'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>Elizabeth Olsen</h3>
          <p className='text-sm opacity-50'>what do you do?</p>
        </div>
      </div>
      <button className=' px-5  py-1 bg-primary-1 rounded-full flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
        <span className='font-light text-sm leading-[24px] tracking-[0.4px] text-white'>Edit</span>
        <Icon
          name='editPen'
          svgProp={{
            className:
              'text-primary-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
          }}
        />
      </button>
    </section>
  );
}
