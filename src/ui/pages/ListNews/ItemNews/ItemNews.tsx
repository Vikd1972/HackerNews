/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TitleIcon from '@mui/icons-material/Title';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import type { INews } from '../../../../store/hackerNewsSlice';

import ItemNewsWrapper from './ItemNews.styles';

type PropsType = {
  itemNews: INews;
};

export const ItemNews: React.FC<PropsType> = ({ itemNews }) => {
  const locale = 'ru';
  const navigate = useNavigate();
  const dateNews = new Date(itemNews.time * 1000);

  const getDetailNews = () => {
    navigate(`/news/${itemNews.id}`);
  };

  return (
    <ItemNewsWrapper
      onClick={getDetailNews}
    >
      <div className="news-info">
        <div className="news-info__by">
          <AccountCircleIcon />
          <p>
            {itemNews.by}
          </p>
        </div>
        <div className="news-info__time">
          <CalendarMonthIcon />
          <p>
            {dateNews.toLocaleDateString(locale)}
          </p>
        </div>
        <div className="news-info__score">
          <ThumbUpOffAltIcon />
          <p>
            {itemNews.score}
          </p>
        </div>
      </div>
      <div className="news-title">
        <TitleIcon />
        <p>
          {itemNews.title}
        </p>
      </div>
    </ItemNewsWrapper >
  );
};

export default ItemNews;
