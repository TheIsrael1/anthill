import React, { useState } from 'react';
import { Input } from './input';

interface CustomInputProps {
    label: string;
    type: string;
    className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, type, className, ...props }) => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="relative flex w-full">
            <label
                className={`absolute left-2 transition-all duration-300 ${
                    isFocused || inputValue ? 'top-[-4px] bg-white text-primary' : 'top-[13px]'
                } pointer-events-none  leading-3 font-[300] text-[14px] text-secondary-2 tracking-[0.15px]`}
            >
                {label}
            </label>
            <Input
                className={`w-full p-3 border ${
                    isFocused || inputValue ? 'border-primary' : 'border-gray-300'
                } rounded-md outline-none focus:border-primary transition-all duration-300 ${className}`}
                type={type}
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...props} // Pass other input props
            />
        </div>
    );
};

export default CustomInput;
