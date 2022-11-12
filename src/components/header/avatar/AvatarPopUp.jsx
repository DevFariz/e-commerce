import React from 'react'

const AvatarPopUp = () => {
  return (
    <div className='absolute w-32 bg-slate-300 py-3 px-2 flex justify-center text-xl mt-2 rounded-md'>
      <ul>
        <li className='my-2 cursor-pointer'>Log in</li>
        <li className='my-2 cursor-pointer'>Sign Up</li>
        <li className='my-2 cursor-pointer'>Card</li>
        <li className='my-2 cursor-pointer'>Help</li>
      </ul>
    </div>
  )
}

export default AvatarPopUp