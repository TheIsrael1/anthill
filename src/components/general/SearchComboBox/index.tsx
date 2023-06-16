import Icon from 'utils/Icon';

const SearchComboBox = ({}) => {
  return (
    <div className='h-[56px] md:h-[64px] w-full bg-white rounded-[12px] shadow-3  px-[2.125rem] py-[1.375rem]'>
      <div className='flex items-center w-full h-full'>
        <Icon name='searchIcon' svgProp={{ className: 'text-primary-9' }} />
        <div className='flex-grow'>
          <input
            className='w-full form-input border-0 focus:!ring-0 placeholder:text-textColor-disabled'
            placeholder='Search'
          />
        </div>
      </div>
    </div>
  );
};

export default SearchComboBox;
