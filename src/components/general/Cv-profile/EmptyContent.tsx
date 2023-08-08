import Icon from 'utils/Icon';

interface IEmptyContent {
  description: string;
  IconSize?: string;
}

const EmptyContent = ({ description, IconSize }: IEmptyContent) => {
  const iconWidth: string = IconSize ? IconSize : '400';
  const iconHeight: string = IconSize ? IconSize : '400';

  return (
    <>
      <section className='flex flex-col items-center justify-center flex-grow  gap-4'>
        <div>
          <Icon
            name='alienPlants'
            svgProp={{
              className: `w-[170px] h-[150px] md:w-[${iconWidth}px] md:h-[${iconHeight}px]`,
            }}
          />
        </div>

        <button className=' px-4  bg-primary-1 rounded-[15px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
          <span className='font-[500] text-xs md:text-sm leading-[24px] tracking-[0.4px] text-white'>
            Add {description || 'UPGRADE'}
          </span>
          <Icon
            name='addThreadIcon'
            svgProp={{
              className:
                'text-primary-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
            }}
          />
        </button>
      </section>
    </>
  );
};

export default EmptyContent;
