import type React from "react";
import { useState, useRef, useEffect } from "react";

export interface IDropdownProps {
  options: string[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Dropdown({ options, setFilter }: IDropdownProps) {
  const [dropdownList, setDropdownList] = useState<string[]>([...options]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInputValue(e.target.value);
    setDropdownList(options.filter((str) => str.includes(e.target.value)));
  };

  const onClickBtnHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setFilter(e.currentTarget.value);
    setInputValue(e.currentTarget.value);
    setIsDropdownVisible(false);
  };
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        ref={dropdownRef} 
        className="dropdown flex flex-col">
        <input
          className="border rounded"
          placeholder="Filter values"
          onClick={() => setIsDropdownVisible(true)}
          onChange={(e) => onChangeHandler(e)}
          value={inputValue}
        />
        {isDropdownVisible &&
          dropdownList.map((option, index) => (
            <button
              className="border rounded"
              key={index}
              value={option}
              onClick={(e) => onClickBtnHandler(e)}
            >
              {option}
            </button>
          ))}
      </div>
    </>
  );
}
