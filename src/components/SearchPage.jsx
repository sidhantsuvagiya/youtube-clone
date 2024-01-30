import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setVideos, toggleLoading } from '../redux/videosSlice';
import { VideoCard } from './VideoCard';

const SearchPage = () => {

    const { searchValue } = useParams();
    const dispatch = useDispatch()
    const searchVideos = useSelector((state) => state.videos.videoList);

    useEffect(() => { getSearchVideos() }, [searchValue])

    const getSearchVideos = async () => {
        try {
            dispatch(toggleLoading(true))
            const baseUrl = import.meta.env.VITE_YOUTUBE_SEARCH_API;
            const response = await fetch(baseUrl + searchValue)
            const apiData = await response.json()
            dispatch(setVideos(apiData.items))
            dispatch(toggleLoading(false))
        } catch (error) {
            console.error('Error fetching YouTube search:', error);
        }
    }

    console.log(searchVideos);

    return (
        <div>
            <h2 className='text-lg'>Search Results for: <strong className='font-medium'>{searchValue}</strong></h2>
            <hr className="mt-3 mb-4 border-t border border-gray-200" />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {searchVideos?.map((video) => <VideoCard
                    key={video.etag}
                    videoId={video.id.videoId}
                    title={video.snippet?.title}
                    channelTitle={video.snippet?.channelTitle}
                    publishedAt={video.snippet?.publishedAt}
                    thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                    viewCount={video.statistics?.viewCount}
                />)}
            </div>
        </div>
    )
}

export default SearchPage