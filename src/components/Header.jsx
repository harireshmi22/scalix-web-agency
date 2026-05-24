import React from 'react'

const Header = () => {
  return (
    <div className="border border-gray-800 h-[75px] w-[1400px] mx-auto mt-6 rounded-4xl flex items-center justify-between px-6
    sticky top-0 
    ">
        <h2 className="text-xl font-bold text-gray-50">Scalix</h2>
        <nav className="flex gap-6">
            <a href="#" className="text-gray-100 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-100 hover:text-gray-800">Services</a>
            <a href="#" className="text-gray-100 hover:text-gray-800">About</a>
            <a href="#" className="text-gray-100 hover:text-gray-800">Contact</a>
        </nav>

        <button className="rounded-md bg-orange-300 px-4 py-2 text-sm font-medium text-black">
            Get Started
        </button>
    </div>
  )
}

export default Header