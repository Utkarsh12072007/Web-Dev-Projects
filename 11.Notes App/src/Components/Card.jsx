import React from 'react'
import dayjs from 'dayjs'
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function Card({color,content,isFav,HandleContent,index,HandleDelete,ID,toggleFav}) {
    const currentDate = dayjs().format('MMMM D,YYYY')
  return (
    <div className={`w-48 min-h-52 ${color} overflow-hidden rounded-xl flex hover:ring-[3.5px] hover:ring-slate-300 focus-within:shadow-lg transition-all duration-300 pt-[4px]`}>
        <div className=''>
            <textarea value={content} onChange={(e) =>HandleContent(e.target.value,ID)} type="text" placeholder='Note Here...' className={`w-[100%] h-[75%] ${color} outline-none px-3 py-2 resize-none font-medium placeholder:text-zinc-900 placeholder:opacity-60`}/>
            <p className='px-2 py-1 font-semibold ml-2  '>{currentDate}</p>
        </div>
        <div className='flex flex-col justify-between pt-[6px] pb-[19px] pr-3'>
            <div onClick={()=>toggleFav(ID)} className='cursor-pointer'>
              {isFav ? <FaStar size={24} className="text-amber-400 drop-shadow-lg transition duration-700 ease-in-out" /> :<CiStar size={24} className='transition duration-700 ease-in-out'></CiStar>}
            </div>
           <RiDeleteBin6Line onClick={() => HandleDelete(ID)} size={22} style={{ color: 'red',}}></RiDeleteBin6Line>
        </div>
    </div>
  )
}

export default Card