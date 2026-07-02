import type React from "react";
import { useState, useRef, useEffect } from "react";
import type IClient from "../Interface/IClient";

export interface IDropdownProps {
  styles: string;
  options: IClient[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Dropdown({ styles, options, setFilter }: IDropdownProps) {
  const [dropdownList, setDropdownList] = useState<IClient[]>([...options]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInputValue(e.target.value);
    setDropdownList(options.filter((str) => str.clientId.includes(e.target.value)|| str.name.includes(e.target.value)));
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
    <div className={`${styles} relative px-30`}>
      <div
        ref={dropdownRef} 
        className="absolute left-0">
        <input
          className="border rounded"
          placeholder="Filter values"
          onClick={() => setIsDropdownVisible(true)}
          onChange={(e) => onChangeHandler(e)}
          value={inputValue}
        />
        <div className="flex flex-col overflow-y-auto">
        {isDropdownVisible &&
          dropdownList.map((option, index) => (
            <button
              className="border rounded"
              key={index}
              value={option.clientId}
              onClick={(e) => onClickBtnHandler(e)}
            >
              {option.name}
            </button>
          ))}
          </div>
      </div>
      </div>
    </>
  );
}
