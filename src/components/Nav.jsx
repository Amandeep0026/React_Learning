import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white text-2xl flex items-center justify-between'>
      <h2>Amandeep <input type="text" className='text-black' /></h2>
      <div>
        <ul className='flex gap-10'>
          <Link to="/" className='cursor-pointer hover:text-emerald-900'>Home</Link>
          <Link to="/about" className='cursor-pointer hover:text-emerald-900'>About</Link>
          <Link to="/contact" className='cursor-pointer hover:text-emerald-900'>Contact</Link>
          <Link to="/product" className='cursor-pointer hover:text-emerald-900'>Product</Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav