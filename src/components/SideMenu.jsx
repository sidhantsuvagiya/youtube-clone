import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = ({ onClick, isActive, name, path, src, alt }) => {
    return (
        <li>
            <Link to={path} onClick={onClick} className={`flex text-sm my-1 p-2 rounded-xl cursor-pointer hover:bg-gray-100 ${isActive && 'bg-gray-100 font-semibold'}`}>
                <img className='w-6 h-6 mr-4' src={src} alt={alt} />
                <span className='leading-normal'>{name}</span>
            </Link>
        </li>
    )
}

export default SideMenu