import React, { useState } from "react";

const Login = ({handelLogin}) => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    handelLogin(email,password)
    setEmail('')
    setPassword('')

  }
    
  return (
    <div className="flex  h-screen w-screen items-center justify-center ">
      <div className="  border-2 border-cyan-600 px-10 py-10 rounded-lg">
        <form  onSubmit={(e)=>{
          submitHandler(e)
          
        }}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" >
              Email
            </label>
            <input
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              type="email"
              className="w-full px-3 py-2 border-1 border-cyan-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" >
              Password
            </label>
            <input
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              type="password"
              className="w-full px-3 py-2 border-1 border-cyan-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
