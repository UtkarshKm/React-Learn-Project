import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userId} =  useParams()
  return (
    <>
    <div className='flex justify-center align-middle bg-slate-500 text-white text-4xl'>
      
    User : {userId} 
    </div>
    </>
  )
}

export default User