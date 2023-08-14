import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./selectTrigger"

interface CustomProps {
  label: string;
  options: string[]; // Array of option values
  className?: string;
}

const CustomSelectTrigger: React.FC<CustomProps> = ({ label, options }) => {

  return (
    
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder={label}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option, i) => (
              <SelectItem key={i} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
  );
}

export default CustomSelectTrigger;
