import React, { useEffect } from 'react'
import { VideoCard } from './VideoCard'
import { useDispatch, useSelector } from 'react-redux'
import { setVideos, toggleLoading } from '../redux/videosSlice'
import { useParams } from 'react-router-dom'
import { getCategoryID } from '../utils/videoUtils'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate()
    const { categoryValue } = useParams();
    const dispatch = useDispatch()
    const videoList = useSelector((state) => state.videos.videoList);

    useEffect(() => {
        const categoryID = getCategoryID(categoryValue)
        if (categoryID != null) {
            getPopularVideos(categoryID)
        } else {
            navigate("/not-found")
        }
    }, [categoryValue])

    const getPopularVideos = async (categoryID) => {
        try {
            dispatch(toggleLoading(true))
            const baseUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&type=video&chart=mostPopular&maxResults=6&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&videoCategoryId=${categoryID}`;
            const response = await fetch(baseUrl);
            const apiData = await response.json();
            dispatch(setVideos(apiData.items))
            dispatch(toggleLoading(false))
        } catch (error) {
            console.error('Error fetching data in Home Component:', error);
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {videoList?.map((video) => <VideoCard
                key={video.etag}
                videoId={video.id}
                title={video.snippet?.title}
                channelTitle={video.snippet?.channelTitle}
                publishedAt={video.snippet?.publishedAt}
                thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                viewCount={video.statistics?.viewCount}
            />)}
        </div>
    )
}

export default Home