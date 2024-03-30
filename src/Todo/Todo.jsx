import React, { useState } from 'react';
import TaskAction from './AddTask/TaskAction';
import AddTask from './AddTask/AddTask';
import { addNewDataToLocalStorage, getDataFromLocalStorage } from '../Functions/Localstorage';


const Todo = () => {
   const [TaskData,setTaskData] = useState([...getDataFromLocalStorage()])
   const [openModal, setOpenModal] = useState(false);
   console.log(TaskData)

   

   const AddingTask = (e,task) => {
    e.preventDefault()
    setOpenModal(false)
    addNewDataToLocalStorage(task)
     console.log(task)
   }
   
    return (
        <div className='bg-[#161420] h-screen pt-10 md:px-20 sm:px-8 px-2 text-white '>
          <TaskAction setOpenModal={setOpenModal}></TaskAction>
          <AddTask AddingTask={AddingTask} openModal={openModal} setOpenModal={setOpenModal}></AddTask>
            </div>

    );
};

export default Todo;