import React from 'react';
import { DeleteAllData } from '../../Functions/Localstorage';

const TaskAction = ({setOpenModal,someHappend,setSomeHappend}) => {
    return (
        <div className='bg-[#393E46] max-w-[700px] flex gap-3 mx-auto p-3 rounded-sm'>
        <button onClick={() => setOpenModal(true)} className='bg-sky-600 hover:bg-sky-700 text-sm px-4 py-2 rounded-lg '>Add Task</button>
        <button  onClick={()=>{setSomeHappend(!someHappend),DeleteAllData()}} className='bg-red-600 hover:bg-red-700 text-sm px-4 py-2 rounded-lg '>Delete All</button>
     </div>
    );
};

export default TaskAction;