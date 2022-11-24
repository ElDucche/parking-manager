import { Link } from 'gatsby'
import * as React from 'react'

export const Nav = () => {
    return (
        <div className='fixed top-0 rigth-0 h-12 w-80 flex justify-around'>
            <Link to='/' className='p-4'> Home </Link>
            <Link to='/profile' className='p-4'> Profil </Link>
        </div>
    )
}