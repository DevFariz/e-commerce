import React from 'react'

const Header = () => {
  return (
    <header className='text-gray-600 py-6 bg-gray-50 border-b-2'>
      <div className='max-w-screen-xl mx-auto flex justify-between	items-center px-3'>
        <div className="text-3xl font-semibold uppercase">Ecommerce</div>
        <nav>
          <ul className="flex">
            <li className="mx-4 text-xl">
              <a href="#a" className="font-medium">Home</a>
            </li>
            <li className="mx-4 text-xl">
              <a href="#a" className="font-medium">About</a>
            </li>
            <li className="mx-4 text-xl">
              <a href="#a" className="font-medium">Products</a>
            </li>
            <li className="mx-4 text-xl">
              <a href="#a" className="font-medium">Contatcs</a>
            </li>
          </ul>
        </nav>
        <div className="login-signup">
          <button className='mx-3'>Login</button>
          <button className='mx-3'>Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Header

