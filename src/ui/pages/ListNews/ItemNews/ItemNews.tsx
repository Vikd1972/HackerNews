import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentIcon from '@mui/icons-material/Comment';

import { useAppSelector } from '../../../../store/hooks';
import type { INews } from '../../../../store/hackerNewsSlice';
import ItemNote from '../../../shared/ItemNote/ItemNote';
import getDate from '../../../../utils/getDate';

import ItemNewsWrapper from './ItemNews.styles';

type PropsType = {
  itemNews: INews | null;
};

export const ItemNews: React.FC<PropsType> = ({ itemNews }) => {
  const navigate = useNavigate();
  const numberOfColumns = useAppSelector((state) => state.hackerNews.numberOfColumns);
  const isMosaic = useAppSelector((state) => state.hackerNews.isMosaic);
  const [currentDate, setCurrentDate] = useState<string>();

  if (!itemNews?.id) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const { date } = getDate(itemNews.time);
    setCurrentDate(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDetailNews = () => {
    navigate(`/news/${itemNews?.id}`);
  };

  return (
    <ItemNewsWrapper
      isMosaic={isMosaic}
      onClick={getDetailNews}
      numberOfColumns={numberOfColumns}
    >
      <div className="news-info">
        <ItemNote
          text={itemNews.by || ''}
        >
          <AccountCircleIcon sx={{ fontSize: 15 }} />
        </ItemNote>

        <ItemNote
          text={currentDate || ''}
        >
          <CalendarMonthIcon sx={{ fontSize: 15 }} />
        </ItemNote>

        <ItemNote
          text={itemNews.score || 0}
        >
          <ThumbUpOffAltIcon sx={{ fontSize: 15 }} />
        </ItemNote>

        <ItemNote
          text={itemNews.descendants || 0}
        >
          <CommentIcon sx={{ fontSize: 15 }} />
        </ItemNote>
      </div>

      <div className="news-title">

        {itemNews.title || ''}

      </div>
    </ItemNewsWrapper >
  );
};

export default ItemNews;
