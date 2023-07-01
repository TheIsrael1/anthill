import Icon from 'utils/Icon';

interface InputAddComboBoxInterface {
  placeholder: string;
}

const InputAddComboBox = ({ placeholder }: InputAddComboBoxInterface) => {
  return (
    <div className='h-[56px] md:h-[64px] w-full bg-white rounded-[12px] shadow-3  px-[2.125rem] py-[1.375rem]'>
      <div className='flex items-center w-full h-full'>
        <div className='flex-grow'>
          <input
            className='w-full form-input border-0 focus:!ring-0 placeholder:text-textColor-disabled'
            placeholder={placeholder}
          />
        </div>
        <Icon
          name='addThreadIcon'
          svgProp={{
            className:
              'text-primary-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
          }}
        />
      </div>
    </div>
  );
};

export default InputAddComboBox;
