import Icon from 'utils/Icon';

interface ILinksFilter {
  tabs: { title: string; link: string; sublinks: { title: string; link: string }[] }[];
}

const LinksFilter = ({ tabs }: ILinksFilter) => {
  return (
    <div className='flex text-[14px] md:text-base flex-col gap-1 h-max w-full  rounded-[12px] overflow-hidden shadow-3'>
      {tabs?.map((i, idx) => (
        <div
          key={idx}
          className='px-[1.5rem] py-[1.125rem] flex flex-wrap items-center gap-2 shadow-3 bg-white'
        >
          <div className='flex items-center gap-2'>
            <Icon name='linkFilterIcon' />
            <span className='text-primary-9 leading-[24px] tracking-[0.15px] cursor-pointer hover:underline hover:text-primary-1 transition-all duration-100 ease-in-out'>
              {i?.title}
              {i?.sublinks?.length ? `:` : ``}
            </span>
          </div>
          <div className='flex flex-wrap items-center gap-1'>
            {i?.sublinks?.map((j, idx) => (
              <span
                key={idx}
                className='text-primary-9  leading-[24px] tracking-[0.15px] cursor-pointer hover:underline hover:text-primary-1 transition-all duration-100 ease-in-ou'
              >
                {j?.title}
                {idx !== i?.sublinks?.length - 1 ? `,` : ``}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinksFilter;
