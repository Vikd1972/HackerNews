/* eslint-disable no-await-in-loop */
import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import type { INews } from '../../../../store/hackerNewsSlice';
import getNews from '../../../../api/getNews';
import ItemComment from './ItemComment';

import CommentsWrapper from './Comments.styles';

interface IOptions {
  kids: number[];
}

export const Comments: React.FC<IOptions> = ({ kids }) => {
  const [comments, setComments] = useState<INews[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setComments([]);
        const result: INews[] = [];
        for (let i = 0; i < kids.length; i++) {
          const comment = await getNews(kids[i]);
          result.push(comment);
        }
        setComments(result);
        setIsLoading(true);
      } catch (err) {
        console.error(err);
      }
    })();
    return () => {
      setComments([]);
    };
  }, [kids]);

  return (
    <CommentsWrapper>
      {!isLoading
        ? (<CircularProgress color="inherit" className="progress" />)
        : (<>
          {comments.map((comment) => (
            <div key={comment.id}>
              <ItemComment
                comment={comment}
              />
            </div>
          ))
          }
        </>)
      }
    </CommentsWrapper>
  );
};

export default Comments;
