import React from 'react'
import DarkTheme from './DarkTheme'

const Navbar = () => {
    return (
        <div className='flex py-2 item-center justify-center text-xl '>
            <div className=' fixed left-4'>
                <h1 className='cursor-pointer'>Logo</h1>
            </div>
            <ul className='flex items-center justify-center gap-5'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <button className=' fixed right-3 mr-4'>CV</button>
        </div>
    )
}

export default Navbar
