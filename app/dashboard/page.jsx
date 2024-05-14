import React from 'react'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex w-full justify-center'>
      <Sidebar />
      <div className='text-center'> Dashboard</div>
    </div>
  )
}

export default Dashboard