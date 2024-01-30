import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../redux/sidebarSlice'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState("")

    const getSearchResults = async (e) => {
        e.preventDefault()
        navigate(`/search/${searchQuery.trim().replace(/\s+/g, ' ')}`)
        setSearchQuery("")
    }


    return (
        <div className='flex justify-between items-center flex-wrap py-1'>
            <div className='flex justify-between items-center py-2'>
                <img onClick={() => dispatch(toggleSidebar())} className='w-6 h-6 rounded-sm cursor-pointer hover:bg-gray-200' src="/images/hamburger.svg" alt="&#8801;" />
                <Link to="/"><img className='w-24 ml-5' src="/images/youtube.svg" alt="Youtube" title='YouTube Home' /></Link>
            </div>
            <form onSubmit={(e) => getSearchResults(e)} className='flex justify-between items-center py-2'>
                <input
                    className='max-w-96 border border-gray-300 outline-blue-300 rounded-l-full px-4 py-2'
                    type="text"
                    placeholder='Search'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit'
                    disabled={!searchQuery}
                    className={`flex-col justify-center items-center bg-gray-200 px-4 py-2 border border-gray-300 rounded-r-full border-l-0 hover:bg-gray-300 ${!searchQuery && 'opacity-50'}`}
                    title='Search'>
                    <img className='w-6 h-6 transition-all hover:scale-90' src="/images/search.svg" alt="&#x1F50E;&#xFE0E;" />
                </button>
            </form>
            <div className='py-2 hidden sm:block'>
                <img className='w-8 h-8' src="/images/user.svg" alt="user" />
            </div>
        </div>
    )
}

export default Navbar