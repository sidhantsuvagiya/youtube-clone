import React from 'react'

const NotFound = () => {
    return (
        <div className='w-full flex flex-col justify-start items-center pt-5 text-lg'>
            <img src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" alt="Not Found" />
            <p className='text-center pt-3'>
                This page isn't available. Sorry about that. <br />
                Try searching for something else.
            </p>
        </div>
    )
}

export default NotFound