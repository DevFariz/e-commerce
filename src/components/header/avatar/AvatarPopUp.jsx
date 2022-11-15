import { Link } from "react-router-dom"

const AvatarPopUp = () => {
  return (
    <div className='absolute w-32 bg-slate-300 py-3 px-2 flex justify-center text-xl mt-2 rounded-md'>
      <ul>
        <li className='my-2 cursor-pointer'>
          <Link to="/login">Log in</Link>
        </li>
        <li className='my-2 cursor-pointer'>
          <Link to="/signup">Sign up</Link>
        </li>
        <li className='my-2 cursor-pointer'>
          <Link to="/card">Card</Link>
        </li>
        <li className='my-2 cursor-pointer'>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </div>
  )
}

export default AvatarPopUp