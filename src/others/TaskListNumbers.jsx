import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='mt-10 flex screen justify-between gap-5'>
        <div className='rounded-xl py-6 px-8 w-[45%] bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.task_count.new_task}</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl py-6 px-8 w-[45%] bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.task_count.completed_task}</h2>
            <h3 className='text-2xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl py-6 px-8 w-[45%] bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.task_count.active}</h2>
            <h3 className='text-2xl font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl py-6 px-8 w-[45%] bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.task_count.failed_task}</h2>
            <h3 className='text-2xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
