import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setVideos } from '../redux/videosSlice';
import CommnetSection from './CommnetSection';
import ShowMoreText from './common/ShowMoreText';
import { formatViews, getTimeAgo } from '../utils/videoUtils';

const VideoPage = () => {

    const dispatch = useDispatch()
    const { videoId } = useParams();
    const currentVideo = useSelector((state) => state.videos.videoList.find((video) => video.id === videoId));

    useEffect(() => {
        if (!currentVideo) {
            fetchSingleVideo();
        }
    }, [videoId])

    const fetchSingleVideo = async () => {
        try {
            const baseUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&id=${videoId}`;
            const response = await fetch(baseUrl);
            const apiData = await response.json();
            if (apiData) {
                dispatch(setVideos(apiData.items));
            }
        } catch (error) {
            console.error('Error fetching single video data:', error);
        }
    };

    const timeAgo = useMemo(() => getTimeAgo(currentVideo?.snippet?.publishedAt), [currentVideo?.snippet?.publishedAt])
    const formattedViews = useMemo(() => formatViews(currentVideo?.statistics?.viewCount), [currentVideo?.statistics?.viewCount])

    console.log(currentVideo);

    return (
        <div className='w-[640px] h-[360px]'>
            <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube Video"
                allowFullScreen
            ></iframe>
            <h2 className='text-xl font-bold my-4'>{currentVideo?.snippet?.title}</h2>

            <div className='bg-gray-100 px-5 py-4 rounded-xl'>
                <p className='font-medium'>
                    {formattedViews} views {timeAgo}
                </p>
                <ShowMoreText text={currentVideo?.snippet?.localized?.description} />
            </div>

            <CommnetSection videoId={videoId} commentCount={currentVideo?.statistics?.commentCount} />
        </div>
    )
}

export default VideoPage