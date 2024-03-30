import React, { useEffect, useState } from 'react';
import TaskAction from './AddTask/TaskAction';
import AddTask from './AddTask/AddTask';
import { addNewDataToLocalStorage, getDataFromLocalStorage } from '../Functions/Localstorage';
import TaskCard from './TaskCard/TaskCard';


const Todo = () => {
   const [TaskData,setTaskData] = useState([...getDataFromLocalStorage()])
   const [openModal, setOpenModal] = useState(false);
   const [someHappend,setSomeHappend] = useState(false)
   console.log(TaskData)

   useEffect(()=>{
      const data = getDataFromLocalStorage()
      setTaskData(data)
   },[openModal,someHappend])

   const AddingTask = (e,task) => {
    e.preventDefault()
    setOpenModal(false)
    addNewDataToLocalStorage(task)
     console.log(task)
   }
   const UpdateStatus = (id)=>{
     const dataexisting = [...getDataFromLocalStorage()]
     const newData =  dataexisting.map((item,idx)=>{
           if(item.taskId == id){
            return {...item,Status:'Completed'}
           }
           return item
         })

         localStorage.setItem('tasks',JSON.stringify([...newData]))
         setSomeHappend(!someHappend)

   }
   
    return (
        <div className='bg-[#161420] h-screen pt-10 md:px-20 sm:px-8 px-2 text-white '>
          <TaskAction someHappend={someHappend} setSomeHappend={setSomeHappend} setOpenModal={setOpenModal}></TaskAction>
          <AddTask AddingTask={AddingTask} openModal={openModal} setOpenModal={setOpenModal}></AddTask>
          <TaskCard UpdateStatus={UpdateStatus}  someHappend={someHappend} setSomeHappend={setSomeHappend} TaskData={TaskData}></TaskCard>
          
            </div>

    );
};

export default Todo;