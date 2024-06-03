import React from 'react'
import Sidebar from '../components/Sidebar'
import Analytics from '../components/Analytics'
import DatosGAds from '../components/DatosGAds'
import DatosMetaAds from '../components/DatosMetaAds'

const Dashboard = () => {
  return (
    <div>
      <Analytics/>
      <DatosGAds/>
      <DatosMetaAds/>
    <div className='flex justify-center p-10 gap-5 min-h-screen w-full'>
      <Sidebar />
      <div className='flex w-4/5 flex-wrap gap-5 justify-center' > 
      <div className='flex   w-2/5 h-3/6 gap-5 bg-indigo-500 rounded justify-center items-center'> Item 1</div>
      <div className='flex  w-2/5 h-3/6 gap-5 bg-indigo-500 justify-center items-center rounded'> Item 2</div>
      <div className='flex  h-3/6 gap-5 bg-indigo-500 w-2/5 justify-center items-center rounded'> Item 3</div>
      <div className='flex  h-3/6 gap-5 bg-indigo-500 w-2/5 justify-center items-center rounded'> Item 4</div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard