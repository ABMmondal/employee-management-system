import React, {  useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authdata =useContext(AuthContext)
    
  return (
    <div className="overflow-x-auto bg-gray-900 p-4">
      <table className="w-full border-collapse border border-cyan-600 shadow-lg">
        <thead>
          <tr className="bg-gray-900 text-white ">
            <th className="border bg-cyan-800  border-cyan-600 p-3">Employee Name</th>
            <th className="border   bg-cyan-800  border-cyan-600 p-3">New Task</th>
            <th className="border  bg-cyan-800  border-cyan-600 p-3">Active Task</th>
            <th className="border  bg-cyan-800  border-cyan-600 p-3">Completed Task</th>
            <th className="border  bg-cyan-800  border-cyan-600 p-3">Failed Task</th>
          </tr>
        </thead>
        <tbody>

          {authdata.employees.map(function(e, idx){
            return(
                <tr key={idx} className="text-center border border-cyan-600 text-white ">
                <td className="border border-cyan-600 p-3">{e.name}</td>
                <td className="border border-cyan-600 p-3">{e.taskCount.newTask}</td>
                <td className="border border-cyan-600 p-3">{e.taskCount.active}</td>
                <td className="border border-cyan-600 p-3">{e.taskCount.complete}</td>
                <td className="border border-cyan-600 p-3">{e.taskCount.failed}</td>
              </tr>
               )
             })}
        </tbody>
      </table>
    </div>

    
    // <div id='alltasks' className='bg-gray-900 h-auto  px-7 py-4  '>
    //     <div  className='bg-gray-800 py-2 px-4 mb-2 rounded-lg text-white grid grid-cols-5 gap-5'>
    //                 <h2>Employee Name</h2>
    //                 <h2>New Task</h2>
    //                 <h2>Activ Task</h2>
    //                 <h2>Completed Task</h2>
    //                 <h2>Faild Task</h2>

    //             </div>
    //     {authdata.employees.map(function(e, idx){
    //         return(
    //             <div key={idx} className='bg-gray-800 py-2 px-4 mb-2 rounded-lg text-white flex justify-between items-center'>
    //                 <h2>{e.name}</h2>
    //                 <h3>Make a UI Design</h3>
    //                 <h5>status</h5>
    //             </div>
    //         )
    //     })}
    // </div>
  )
}

export default AllTask