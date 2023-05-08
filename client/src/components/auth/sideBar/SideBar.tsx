import React from 'react'
import BackBtn from './BackBtn'
import NavBar from './NavBar'
import UserInfoBox from './UserInfoBox'

const SideBar = () => {
  return (
    <div className='col-span-1 row-start-1 row-end-3 flex flex-col p-8 bg-black h-full gap-12'>
      <BackBtn />
      <NavBar />
      <UserInfoBox />
    </div>
  )
}

export default SideBar