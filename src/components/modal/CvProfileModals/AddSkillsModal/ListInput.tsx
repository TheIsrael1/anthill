import React, { useState, useCallback } from 'react';
import { Input } from 'components/shadcn/input';
interface IProps {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}
const ListInput = ({ items, setItems }: IProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setItems((prevItems) => [...prevItems, inputValue.trim()]);
      setInputValue(''); // Reset input field after adding
    }
  };

  const handleRemove = useCallback(
    (index: number) => {
      setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    },
    [setItems],
  );

  return (
    <div>
      <div className='relative'>
        <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
          Skills
        </label>

        <Input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder='Input a skill and press enter to save'
          className='placeholder:text-secondary-1 placeholder:text-xs w-full  border-gray-300 rounded-md p-2 py-4 pl-3 text-secondary-3 w-full'
        />
      </div>

      <div className='flex flex-wrap my-4 gap-2'>
        {items.map((item, index) => (
          <div key={index}>
            <button
              type='button'
              onClick={() => handleRemove(index)}
              className=' text-[0.5rem] md:text-[0.75rem] leading-[24px] tracking-[0.4px] text-gray-600 px-4 py-1 rounded-lg border  flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
            >
              <span>{item} </span>
              <span>|</span>
              <span>X</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListInput;
