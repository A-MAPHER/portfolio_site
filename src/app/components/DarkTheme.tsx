import React from 'react'
import { MdDarkMode } from 'react-icons/md'
const themeToggler = () => {
    return (
        <>
            <button className='fixed top-2 left-6'>
                <MdDarkMode />
            </button>
        </>
    )
}

export default themeToggler
