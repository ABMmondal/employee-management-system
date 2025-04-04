import React from "react";

const TaskListNum = ({userData}) => {
  return (
    <div className="p-4  flex flex-col items-center ">
      <div className="flex gap-4 w-full  overflow-x-auto">
        {/* New Task */}
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md flex flex-col items-center w-95">
          <p className="text-2xl font-bold">{userData.taskCount.newTask}</p>
          <p className="text-sm">New Task</p>
        </div>


        {/* Accepted */}
        <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-md flex flex-col items-center w-95">
          <p className="text-2xl font-bold">{userData.taskCount.active}</p>
          <p className="text-sm">Active</p>
        </div>
        {/* Completed */}
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md flex flex-col items-center w-95">
          <p className="text-2xl font-bold">{userData.taskCount.complete}</p>
          <p className="text-sm">Completed</p>
        </div>

        {/* Failed */}
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md flex flex-col items-center w-95">
          <p className="text-2xl font-bold">{userData.taskCount.failed}</p>
          <p className="text-sm">Failed</p>
        </div>
      </div>
    </div>
  );
};

export default TaskListNum;
