import React from 'react'

const Header = (props) => {

  const LogoutUser=()=>{
    localStorage.setItem('logedInuser','')
    props.changeUser('')

  }

  return (
    <header className="bg-cyan-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-lg text-white font-semibold">Hi </h1>
      <button onClick={LogoutUser} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white cursor-pointer">
        Log out
      </button>
    </header>
  )
}

export default Header