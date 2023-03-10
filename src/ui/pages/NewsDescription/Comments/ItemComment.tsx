import React, { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentIcon from '@mui/icons-material/Comment';

import type { INews } from '../../../../store/hackerNewsSlice';
import Comments from './Comments';
import ItemNote from '../../../shared/ItemNote/ItemNote';
import getDate from '../../../../utils/getDate';

import ItemCommentWrapper from './ItemComment.styles';

interface IOptions {
  comment: INews;
}

export const ItemComment: React.FC<IOptions> = ({ comment }) => {
  const [isAttachedComments, setIsAttachedComments] = useState(false);
  const [currentDate, setCurrentDate] = useState<string>();

  useEffect(() => {
    const { date } = getDate(comment.time);
    setCurrentDate(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNewComments = () => {
    setIsAttachedComments(!isAttachedComments);
  };

  return (
    <ItemCommentWrapper>
      <div className="news-info">
        <ItemNote
          text={comment.by || ''}
        >
          <AccountCircleIcon />
        </ItemNote>

        <ItemNote
          text={currentDate || ''}
        >
          <CalendarMonthIcon />
        </ItemNote>

        <ItemNote
          text={comment?.kids?.length || 0}
        >
          <CommentIcon />
        </ItemNote>
      </div>

      <div
        onClick={getNewComments}
        className="news-text"
        dangerouslySetInnerHTML={{ __html: comment?.text }}
      />

      {isAttachedComments && <Comments kids={comment.kids} />}
    </ItemCommentWrapper>
  );
};

export default ItemComment;
