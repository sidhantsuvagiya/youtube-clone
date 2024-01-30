import React, { useMemo, useState } from 'react'
import { getTimeAgo, formatViews } from '../utils/videoUtils'
import ShimmerCard from './ShimmerCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const VideoCard = ({ videoId, title, channelTitle, publishedAt, thumbnail, viewCount }) => {

    const timeAgo = useMemo(() => {
        return getTimeAgo(publishedAt);
    }, [publishedAt])

    const formattedViews = useMemo(() => {
        return formatViews(viewCount);
    }, [viewCount])

    const isLoading = useSelector(state => state.videos.isLoading)

    return (
        isLoading ? <ShimmerCard /> :
            <div className='mb-4'>
                <Link to={`/video/${videoId}`}>
                    <div>
                        <img className='w-full bg-contain rounded-xl' src={thumbnail} alt="video" />
                    </div>
                    <div className='flex mt-3'>
                        <img className='w-9 h-9 rounded-full mr-3' src="images/user.svg" alt="user" />
                        <div>
                            <p className='text-base line-clamp-2 font-medium mb-0.5'>{title}</p>
                            <p className='text-sm text-gray-600'>
                                {channelTitle} <br />
                                {(viewCount && publishedAt) ? formattedViews + " views · " + timeAgo : null}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
    )
}
