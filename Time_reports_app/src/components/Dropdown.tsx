import type React from "react";
import { useState } from "react";

export interface IDropdownProps {
    options: string[];
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Dropdown ({options, setFilter}: IDropdownProps) {
  const [dropdownList, setDropdownList] = useState<string[]>([...options]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  const onChangeHandler =(e:React.ChangeEvent<HTMLInputElement>):void => {
    e.preventDefault()
    setInputValue(e.target.value)
    setDropdownList(options.filter(str => str.includes(e.target.value)))
  }
  
  const onClickBtnHandler=(e:React.MouseEvent<HTMLButtonElement>):void =>{
    e.preventDefault()
    setFilter(e.currentTarget.value)
    setInputValue(e.currentTarget.value)
    setIsDropdownVisible(false)
  }
  
  document.addEventListener("mousedown", (e)=>{
    const target = e.target as HTMLInputElement | HTMLButtonElement;
    if (target.parentNode && (target.parentNode as HTMLElement).className.includes('dropdown') === false){
      setIsDropdownVisible(false)
    }
  });

  return (
    <>
        <div className="dropdown flex flex-col">
          <input className="border rounded" placeholder="Filter values" onClick={()=> setIsDropdownVisible(true)} onChange={(e)=>onChangeHandler(e)} value={inputValue}/>
            {isDropdownVisible && dropdownList.map((option, index)=>(          
              <button className="border rounded" key={index} value={option} onClick={(e)=>onClickBtnHandler(e)}>{option}</button>
            ))}
        </div>
    </>
  );
}
