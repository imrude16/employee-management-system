import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

const [userData] = useContext(AuthContext)



    return (

        <div className='bg-[#1c1c1c] p-5  mt-5 rounded h-60'>
            <div className='bg-green-400 mb-2 py-2 px-4 justify-between rounded  flex'>
                <h2 className='w-1/5 text-lg font-medium ' >Employee Name</h2>
                <h3 className='w-1/5 text-lg font-medium ' >New Task</h3>
                <h5 className='w-1/5 text-lg font-medium ' >Active Task</h5>
                <h5 className='w-1/5 text-lg font-medium ' >Completed</h5>
                <h5 className='w-1/5 text-lg font-medium ' >Failed</h5>
            </div>

            <div  id='alltask' className='h-[80%] overflow-auto'>
                {userData.map(function (elem, idx) {

                    return <div key={idx} className='bg-gray-400 border-2  mb-2 py-2 px-4 justify-between rounded  flex'>
                        <h2 className='text-lg font-medium w-1/5' >{elem.firstname}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-700' >{elem.task_count.active}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-green-700 ' >{elem.task_count.new_task}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-700 ' >{elem.task_count.completed_task}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-700' >{elem.task_count.failed_task}</h5>
                    </div>

                })}

            </div>
        </div>
    )
}

export default AllTask