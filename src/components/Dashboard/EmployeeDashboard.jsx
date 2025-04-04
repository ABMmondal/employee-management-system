import React from 'react'
import Header from '../other/Header'
import TaskListNum from '../other/TaskListNum'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div >
        <Header changeUser={props.changeUser} userData={props.userData}/>
        <TaskListNum userData={props.userData} />
        <TaskList userData={props.userData}/>
    </div>
  )
}

export default EmployeeDashboard