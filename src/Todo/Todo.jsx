import React, { useState } from 'react';
import TaskAction from './AddTask/TaskAction';
import AddTask from './AddTask/AddTask';


const Todo = () => {
   const [TaskData,setTaskData] = useState([...JSON.parse(localStorage.getItem('tasks'))])
   const [openModal, setOpenModal] = useState(false);
   console.log(TaskData)

   const AddingTask = () => {

   }
   
    return (
        <div className='bg-[#161420] h-screen pt-10 md:px-20 sm:px-8 px-2 text-white '>
          <TaskAction setOpenModal={setOpenModal}></TaskAction>
          <AddTask AddingTask={AddingTask} openModal={openModal} setOpenModal={setOpenModal}></AddTask>
            </div>

    );
};

export default Todo;