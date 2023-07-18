interface IPillTabs<T> {
  tabs: T[];
  onSelect: (i: T) => void;
  currActive: T;
}

const PillTabs = <T,>({ currActive, onSelect, tabs }: IPillTabs<T>) => {
  return (
    <div className='relative grid w-full'>
      <div className='grid justify-center max-w-full'>
        <div className='w-full px-2 overflow-auto no-scrollbar whitespace-nowrap'>
          {tabs?.map((i, idx) => (
            <button
              key={idx}
              className={`${
                i === currActive
                  ? `bg-primary-1 text-white`
                  : `bg-transparent text-secondary-2 hover:text-primary-1`
              } inline rounded-[160px] w-max px-4 lg:px-[1.5rem]  h-[1.5rem] lg:h-[2.5rem] items-center transition-all ease-in-out`}
              onClick={() => onSelect(i)}
            >
              <span className='text-[13px] lg:text-[16px] leading-[24px] tracking-[0.15px] whitespace-nowrap'>{`${i}`}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PillTabs;
