import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-around p-3 bg-teal-500 text-gray-100'><span className='font-bold text-2xl'>Grammie</span>
        <ul className='flex gap-10'>
            <li>Home</li>
            <li>Profile</li>
        </ul></div>
    )
}

export default Navbar