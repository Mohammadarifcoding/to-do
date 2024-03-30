import React, { useState } from 'react';

const AddTask = ({AddingTask,openModal, setOpenModal}) => {
    const [task,setTask] = useState({
        taskId:crypto.randomUUID(),
        title:'',
        description :'',
        tags :[],
        prioty :'',
        Status:'Pending'
    })
    

    console.log(task)
    return (
        <div>
        <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex text-black items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-white/10`}>
          <div onClick={(e_) => e_.stopPropagation()} className={`text- absolute max-w-2xl min-w-[300px] rounded-lg bg-white p-5 drop-shadow-lg dark:bg-black dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
               Add New Task
                </h2>

                <form onSubmit={(e)=>{AddingTask(e,task)}} className="space-y-3 text-white lg:space-y-5">
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="title">Title</label>
                        <input
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="title"
                            id="title"
                            value={task.title}
                            onChange={(e)=>{setTask({...task,title:e.target.value})}}
                            required
                        />
                    </div>

                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                            type="text"
                            name="description"
                            id="description"
                            required
                            value={task.description}
                            onChange={(e)=>{setTask({...task,description:e.target.value})}}
                        ></textarea>
                    </div>

                    <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="tags">Tags</label>
                            <input
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                name="tags"
                                id="tags"
                                required
                                onChange={(e)=>{setTask({...task,tags:[e.target.value.slice(',')]})}}
                            />
                        </div>

                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="priority">Priority</label>
                            <select
                                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                name="priority"
                                id="priority"
                                required
                                onChange={(e)=>{setTask({...task,prioty:e.target.value})}}
                            >
                                <option value="">Select Priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between pt-5">
              <button type='submit'  className="me-2 rounded-sm bg-green-700 px-6 py-[6px] text-white">Ok</button>
              <button onClick={() => setOpenModal(false)} className="rounded-sm border border-red-600 px-6 py-[6px] text-red-600 duration-150 hover:bg-red-600 hover:text-white">Cancel</button>
            </div>
                </form>

           
          </div>
        </div>
      </div>
    );
};

export default AddTask;