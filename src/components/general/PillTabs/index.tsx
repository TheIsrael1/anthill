interface IPillTabs<T> {
  tabs: T[];
  onSelect: (i: T) => void;
  currActive: T;
}

const PillTabs = <T,>({ currActive, onSelect, tabs }: IPillTabs<T>) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-1'>
      {tabs?.map((i, idx) => (
        <button
          key={idx}
          className={`${
            i === currActive
              ? `bg-primary-1 text-white`
              : `bg-transparent text-secondary-2 hover:text-primary-1`
          } rounded-[160px] w-max px-[2.5rem] h-[2.5rem] transition-all ease-in-out`}
          onClick={() => onSelect(i)}
        >
          <span className='leading-[24px] tracking-[0.15px] whitespace-nowrap'>{`${i}`}</span>
        </button>
      ))}
    </div>
  );
};

export default PillTabs;
