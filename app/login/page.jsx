import React from 'react'

const Login = () => {
  return (
    <div className='mt-20'>
        <h1 className='text-2xl text-center mb-10'>Login</h1><form className='flex flex-col max-w-5xl mr-auto ml-auto' >
        <label>Name</label>
        <input type="text" name="name"/>
        <label>Password</label>
        <input type="password" placeholder='Introduce your Password'/>
        <input type="submit" value="Send" />

        </form></div>
  )
}

export default Login