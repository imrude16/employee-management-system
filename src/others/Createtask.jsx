import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Createtask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [tasktittle, settasktittle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')



    const submitHandler = (e) => {
        e.preventDefault();

        // Create a new task object
        const newTask = {
            title: tasktittle,
            date: taskDate,
            assignTo: assignTo,
            category: category,
            description: taskDescription,
            active: false,
            new_task: true,
            failed_task: false,
            completed_task: false
        };


        // Create a new userData array with updated tasks
        const updatedUserData = userData.map(user => {
            if (user.firstname === assignTo) {
                return {
                    ...user,
                    task: [...user.task, newTask], // Add new task
                    task_count: {
                        ...user.task_count,
                        new_task: user.task_count.new_task + 1
                    }
                };
            }
            return user;
        });

        setUserData(updatedUserData); // Update the state properly

        // Clear form fields
        settasktittle('');
        settaskDate('');
        setassignTo('');
        setcategory('');
        settaskDescription('');
    };



    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded '>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex  flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm mb-0.5'>Task Tittle</h3>
                        <input value={tasktittle}
                            onChange={(e) => {
                                settasktittle(e.target.value)
                            }}

                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>

                    <div>
                        <h3 className='text-sm mb-0.5'>Date</h3>
                        <input value={taskDate}
                            onChange={(e) => {
                                settaskDate(e.target.value)
                            }}

                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4' type="date" />
                    </div>

                    <div>
                        <h3 className='text-sm mb-0.5'>Assign to</h3>
                        <input value={assignTo}
                            onChange={(e) => {
                                setassignTo(e.target.value)
                            }}

                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
                    </div>

                    <div>
                        <h3 className='text-sm mb-0.5'>Category</h3>
                        <input value={category}
                            onChange={(e) => {
                                setcategory(e.target.value)
                            }}

                            className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4' type="text" placeholder='Design , Devlopement ,etc.' />
                    </div>

                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-lg mb-0.5'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            settaskDescription(e.target.value)
                        }}

                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400'></textarea>
                    <button className='bg-green-500 py-1 px-3 hover:bg-green-600 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default Createtask