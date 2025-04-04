import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FaildTask from "./FaildTask";
import { data } from "react-router-dom";


const TaskList = ({userData}) => {
  return (
    <div
      id="tasklists"
      className= " scrollbar-hide bg-amber-800 p-4 h-[55%] flex gap-5 w-full overflow-x-auto items-center justify-start flex-nowrap"
    >
     {userData.tasks.map((e,idx)=>{
        if (e.active) {
          return <AcceptTask key={idx} data={e} />
        }
        if (e.complete) {
          return <CompleteTask key={idx}  data={e}/>
        }
        if (e.failed) {
          return <FaildTask key={idx} data={e}/>
        }
        if (e.newTask) {
          return <NewTask key={idx} data={e}/>
        }
     })}

    </div>
  );
};

export default TaskList;
