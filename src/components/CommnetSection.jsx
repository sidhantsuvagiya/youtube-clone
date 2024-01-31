import { useEffect, useState } from "react";
import YoutubeComment from "./YoutubeComment";

const CommnetSection = ({ videoId, commentCount }) => {

  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const commentSectionRef = useRef();

  useEffect(() => { getVideoComments() }, [])

  const getVideoComments = async () => {
    try {
      const baseUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=${import.meta.env.VITE_YOUTUBE_API_KEY}&videoId=${videoId}`;
      const response = await fetch(baseUrl);
      const apiData = await response.json();
      setCommentList(apiData?.items)
      console.log("commmnet", apiData);
    } catch (error) {
      console.error('Error fetching video comments:', error);
    }
  };

  return (
    <div ref={commentSectionRef} className="pb-2">
      <h2 className='text-xl font-bold mt-5 mb-2'>{parseInt(commentCount, 10).toLocaleString()} Comments</h2>
      {commentList?.map((comment, index) => <YoutubeComment key={index} comment={comment} />)}
    </div>
  );
};

export default CommnetSection;
