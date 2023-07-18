import Icon from 'utils/Icon';

interface IFunkyPagesHero {
  title: string;
  description: string;
  customBgClass?: string;
}

const FunkyPagesHero = ({ description, title, customBgClass }: IFunkyPagesHero) => {
  return (
    <div className='w-full min-h-[10rem] h-full rounded-[16px] relative overflow-hidden'>
      <div className={`absolute w-full h-full bg-primary-1 ${customBgClass ? customBgClass : ``}`}>
        <Icon name='funkyPagesHero' />
      </div>
      <div className='absolute flex justify-center items-center md:items-start w-full h-full px-2'>
        <div className='w-max h-max mt-8 md:mt-[4.1875rem] z-[1]  flex flex-col items-center'>
          <h4 className='relative text-white font-[700] text-[32px] leading-[40px] tracking-[0.15px] text-center'>
            {title}
            <div className='absolute -top-[1.5rem] -left-[1.5rem]'>
              <Icon name='funkyPagesTextTop' />
            </div>
          </h4>
          <p className=' text-primary-10 font-[300] text-[14px] leading-[21px] text-center'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunkyPagesHero;
