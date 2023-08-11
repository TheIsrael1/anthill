import { useState } from 'react';

const CustomInput: React.FC = () => {
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
        <div className="relative mt-4">
            <label
                className={`absolute left-2 transition-all duration-300 ${
                    isFocused || inputValue ? 'top-0 text-primary' : 'top-2'
                } pointer-events-none text-gray-600`}
            >
                Label
            </label>
            <input
                className={`w-full p-3 border ${
                    isFocused || inputValue ? 'border-primary' : 'border-gray-300'
                } rounded-md outline-none focus:border-primary transition-all duration-300`}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </div>
    );
};

export default CustomInput;
