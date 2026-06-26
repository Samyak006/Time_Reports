import type React from "react";

export interface IDropdownProps {
    options: string[];
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Dropdown ({options, setFilter}: IDropdownProps) {
  return (
    <>
        <select onChange={(e)=> setFilter(e.currentTarget.value)}>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    </>
  );
}
