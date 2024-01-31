import React, { useMemo } from 'react';
import { getTimeAgo } from '../utils/videoUtils';
import ShowMoreText from './common/ShowMoreText';

const YoutubeComment = ({ comment }) => {

  const { authorDisplayName, textDisplay, publishedAt, authorProfileImageUrl } = comment.snippet.topLevelComment.snippet;

  const timeAgo = useMemo(() => getTimeAgo(publishedAt), [publishedAt])

  return (
    <div className="flex border-t py-3">
      <img
        src={authorProfileImageUrl}
        className="w-10 h-10 rounded-full mr-4"
        onError={(e) => e.target.src = "/images/user.svg"}
      />
      <div>
        <strong>{authorDisplayName}</strong> <small className='text-gray-900'>{timeAgo}</small>
        <ShowMoreText text={textDisplay} />
      </div>
    </div>
  );
};

export default YoutubeComment;
