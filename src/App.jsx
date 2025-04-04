import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { admin, getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'react-router-dom'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedinUserData, setLoggedinUserData] = useState(null)
  const Authdata = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('logedInuser')
    if (loggedInUser){
      const userData= JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedinUserData(userData.data)
    }
  },[])



  // useEffect(() => {
  //   if(Authdata){
  //     const loggedInUser = localStorage.getItem('logedInuser')
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [Authdata])



  const handelLogin = (email, password) => {
      if(email === 'admin@example.com' && password === '1234'){
        setUser('admin')
        localStorage.setItem('logedInuser',JSON.stringify({role:'admin' ,data: admin}))
        

    }
    else if (Authdata) {
      const employee = Authdata.employees.find((emp) => emp.EMAIL === email && emp.PASSWORD === password)

      if (employee) {
        setUser('employee')
        setLoggedinUserData(employee)
        localStorage.setItem('logedInuser', JSON.stringify({ role: 'employee',data: employee }))
      }

    } else {
      alert('Invalid email or password')
    }
  }








  return (
    <>
      {
        !user ? <Login handelLogin={handelLogin} /> : ''
      }
      {user == 'admin' ? <AdminDashboard  changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} userData={loggedinUserData} /> : null)}
    </>
  )
}

export default App