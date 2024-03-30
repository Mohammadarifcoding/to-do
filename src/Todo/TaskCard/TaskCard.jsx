import React from 'react';
import { FaTrash } from "react-icons/fa6";
import { DeleteDataFormLocalStorage } from '../../Functions/Localstorage';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
const TaskCard = ({TaskData,someHappend,setSomeHappend,UpdateStatus}) => {
    
    return (
        <div className='max-w-[1200px] flex flex-wrap gap-5 mx-auto mt-5'>
            {TaskData.map(item => (
                <div  key={item.taskId} className={`${item?.Status == 'Completed' ? 'bg-blue-700 text-white':'bg-white text-black '}   min-w-[270px]  p-4 rounded-md`}>
                 <div className='flex justify-between'>
                 <h2 className='text-lg font-semibold'>{item?.title}</h2>
                    <div className='flex gap-2'>
                        <div onClick={()=>{DeleteDataFormLocalStorage(item.taskId),setSomeHappend(!someHappend)}} className='text-red-600 p-2 hover:bg-red-100 rounded-md cursor-pointer '><FaTrash></FaTrash></div>
                        <div onClick={()=>{UpdateStatus(item.taskId),setSomeHappend(!someHappend)}} className={` ${item?.Status == 'Completed' ? 'hidden':'text-green-600 hover:bg-green-100'}   p-2 hover:bg-green-100 rounded-md cursor-pointer `}><IoCheckmarkDoneCircle></IoCheckmarkDoneCircle></div>
                    </div>
                    </div> 
                  <p className={` ${item?.Status == 'Completed' ? 'text-gray-200' :'text-gray-500'} mt-2 `}>{item?.description}</p>
                  <div className='flex gap-2 mt-3'>
                  {item?.tags.map((tag,idx) => (
                    <div key={idx} className='p-1 px-2 rounded-full border border-gray-400 w-fit'>
               {tag}
                    </div>
                  ))}
                  </div>
                   <div className='mt-3 font-medium' >
                   Priority : {item.prioty}
                   </div>
                </div>
            ))}
        </div>
    );
};

export default TaskCard;