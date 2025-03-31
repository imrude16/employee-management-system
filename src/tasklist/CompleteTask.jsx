import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className=' p-5 flex-shrink-0 h-full w-[330px] bg-blue-400 rounded-xl'>
            <div className='flex  justify-between items-center'>
                <h3 className='bg-red-400 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title} </h2>
            <p className='text-sm mt-2'>{data.description}</p>

            <div className='mt-4 flex justify-center'>
                <button className='bg-transparent border-[2px] border-gray-300 py-1 px-6 text-sm rounded  font-semibold'>Completed</button>
            </div>

        </div>
    )
}

export default CompleteTask