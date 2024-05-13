import React from 'react'

const Header = () => {
  return (
    <div className='m-10 flex justify-between'>
        <div>Logo</div>
        <div><ul className='flex '><li className='pr-5'>Item 1</li>
        <li className='pr-5'>Item 2</li>
        <li className='pr-5'>Item 3</li></ul></div>
    </div>
  )
}

export default Header