import { useEffect, useState } from "react";
import YoutubeComment from "./YoutubeComment";

const CommnetSection = ({ videoId, commentCount }) => {

  const [commentList, setCommentList] = useState([]);

  useEffect(() => { getVideoComments() }, [])

  const getVideoComments = async () => {
    try {
      const baseUrl = import.meta.env.VITE_YOUTUBE_COMMENTS_API + videoId;
      const response = await fetch(baseUrl);
      const apiData = await response.json();
      setCommentList(apiData?.items)
    } catch (error) {
      console.error('Error fetching video comments:', error);
    }
  };

  return (
    <div>
      <h2 className='text-xl font-bold mt-5 mb-2'>{parseInt(commentCount, 10).toLocaleString()} Comments</h2>
      {commentList?.map((comment, index) => <YoutubeComment key={index} comment={comment} />)}
    </div>
  );
};

export default CommnetSection;
