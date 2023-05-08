import React from 'react'
import { useUser } from '../../../hooks/useUser'

const UserInfoBox = () => {
  const user = useUser();
  
  const {email, username} = user
  return (
    <>
      {
        user && (
          <div className='flex gap-2 text-white mt-auto'>
            <picture >
              <img className='rounded-[50%]' src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
            </picture>
            <div>
              <h3>{username}</h3>
              <p>{email}</p>
            </div>
          </div>
        )
      }
    </>
    
  )
}

export default UserInfoBox