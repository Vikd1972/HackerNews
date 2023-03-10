/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleIcon from '@mui/icons-material/Title';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentIcon from '@mui/icons-material/Comment';

import type { INews } from '../../../../store/hackerNewsSlice';
import ItemNote from '../../../shared/ItemNote/ItemNote';
import getDate from '../../../../utils/getDate';

import ItemNewsWrapper from './ItemNews.styles';

type PropsType = {
  itemNews: INews;
};

export const ItemNews: React.FC<PropsType> = ({ itemNews }) => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState<string>();

  useEffect(() => {
    const { date } = getDate(itemNews.time);
    setCurrentDate(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDetailNews = () => {
    navigate(`/news/${itemNews.id}`);
  };

  return (
    <ItemNewsWrapper
      onClick={getDetailNews}
    >
      <div className="news-info">
        <ItemNote
          text={itemNews.by || ''}
        >
          <AccountCircleIcon />
        </ItemNote>

        <ItemNote
          text={currentDate || ''}
        >
          <CalendarMonthIcon />
        </ItemNote>

        <ItemNote
          text={itemNews.score || 0}
        >
          <ThumbUpOffAltIcon />
        </ItemNote>

        <ItemNote
          text={itemNews.descendants || 0}
        >
          <CommentIcon />
        </ItemNote>
      </div>

      <div className="news-title">
        <ItemNote
          text={itemNews.title || ''}
        >
          <TitleIcon />
        </ItemNote>
      </div>
    </ItemNewsWrapper >
  );
};

export default ItemNews;
