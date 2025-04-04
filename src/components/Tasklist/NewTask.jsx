import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="w-[300px] h-full bg-red-400 text-white p-4 rounded-lg flex-shrink-0">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded-2xl">{data.category}</h3>
                <h4 className="text-xs">{data.date}</h4>
            </div>
            <h2 className=" mt-5  text-xl font-semibold my-2">{data.title}</h2>
            <p className="text-sm">{data.description}</p>

            <div className='flex justify-between mt-5'>
                <button className='bg-green-500 py-1 px-2 '>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask