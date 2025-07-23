import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
function SideBar({handleClick}) {
  const [rotated, setRotated] = useState(false);
  const [color,setColor] = useState(false);
  const toggleRotate = () => {
    setRotated((prev) => !prev);
    setTimeout(()=>{
        setColor(prev => !prev);
    },290)
  };
  
  return (
    <div className="w-[13%] h-screen flex flex-col items-center border-r-[1px] border-solid fixed top-0 left-0">
      <h1 className=" font-semibold mt-5 text-lg text-[#e6e4e4]">Docket</h1>
      <button
        onClick={toggleRotate}
        className={`mt-[50%]  bg-black rounded-full w-fit p-[10px] transition-transform duration-500  ${
          rotated ? "rotate-bounce p-3" : "rotate-[-180deg]"
        }`}
      >
        <BsPlusLg
          size={20}
          strokeWidth={1}
          style={{ color: "white" }}
        ></BsPlusLg>
      </button>
      {color ? (
        <div className="flex flex-col mt-10 gap-4">
          <div onClick={()=>handleClick('bg-sky-200')} style={{ cursor: 'pointer' }} className="bg-sky-200 rounded-full w-5 h-5 active:translate-y-[0.3px] active:translate-x-[0.3px]"></div>
          <div onClick={()=>handleClick('bg-zinc-200')} style={{ cursor: 'pointer' }} className="bg-zinc-100 rounded-full w-5 h-5 active:translate-y-[0.3px] active:translate-x-[0.3px]"></div>
          <div onClick={()=>handleClick('bg-emerald-100')} style={{ cursor: 'pointer' }} className="bg-emerald-100 rounded-full w-5 h-5 active:translate-y-[0.3px] active:translate-x-[0.3px]"></div>
          <div onClick={()=>handleClick('bg-lime-100')} style={{ cursor: 'pointer' }} className="bg-lime-100 rounded-full w-5 h-5 transition-transform duration-500 active:translate-y-[0.3px] active:translate-x-[0.3px]"></div>
          <div onClick={()=>handleClick('bg-orange-100')} style={{ cursor: 'pointer' }} className="bg-orange-100 rounded-full w-5 h-5 transition-transform duration-500 active:translate-y-[0.3px] active:translate-x-[0.3px]"></div>
          <div onClick={()=>handleClick('bg-teal-200')} style={{ cursor: 'pointer' }} className="bg-teal-200 rounded-full w-5 h-5 transition-transform duration-500 active:translate-y-[0.3px] active:translate-x-[0.3px]"></div>
          <div onClick={()=>handleClick('bg-purple-200')} style={{ cursor: 'pointer' }} className="bg-purple-200 rounded-full w-5 h-5"></div>
        </div>
      ) : null}
    </div>
  );
}

export default SideBar;
