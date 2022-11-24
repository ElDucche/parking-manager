import * as React from 'react'
import { Nav } from './nav'

export const Layout = ({ children }) => {
    return (
        <div className='grid grid-rows-4 h-screen bg-gradient-to-br from-indigo-500 via-pink-500 to-yellow-500 text-gray-900'>
            <Nav />
            <div className='h-28 w-screen lg:text-center text-right'>
                <h1 className='h-28 w-screen text-center font-bold text-4xl hidden lg:block'> Parking Manager</h1>
                <h1 className='lg:hidden fixed w-screen text-right'>P.M</h1>
            </div>
            <div className='rows-start-2'>
                {children}
            </div>

        </div>
    )
}

