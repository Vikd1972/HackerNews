import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HttpIcon from '@mui/icons-material/Http';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentIcon from '@mui/icons-material/Comment';

import { addCurrentNews, resetCurrentNews } from '../../../store/hackerNewsSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import getNews from '../../../api/getNews';
import Comments from './Comments/Comments';
import ItemNote from '../../shared/ItemNote/ItemNote';
import getDate from '../../../utils/getDate';

import NewsDescriptionWrapper from './NewsDescription.styles';

export const NewsDescription: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const newsId = Number(id);
  const news = useAppSelector((state) => state.hackerNews.currentNews);
  const [currentDate, setCurrentDate] = useState<string>();

  useEffect(() => {
    (async () => {
      try {
        const currentNews = await getNews(newsId);
        dispatch(addCurrentNews(currentNews));
      } catch (err) {
        console.error(err);
      }
    })();
    return (() => {
      dispatch(resetCurrentNews());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (news) {
      const { date } = getDate(news.time);
      setCurrentDate(date);
    }
  }, [news]);

  return (
    <NewsDescriptionWrapper>
      <div className="news-info">
        <ItemNote
          text={news?.by || ''}
        >
          <AccountCircleIcon sx={{ fontSize: 15 }} />
        </ItemNote>
        <ItemNote
          text={currentDate || ''}
        >
          <CalendarMonthIcon sx={{ fontSize: 15 }} />
        </ItemNote>
        <ItemNote
          text={news?.score || 0}
        >
          <ThumbUpOffAltIcon sx={{ fontSize: 15 }} />
        </ItemNote>
        <ItemNote
          text={news?.descendants || 0}
        >
          <CommentIcon sx={{ fontSize: 15 }} />
        </ItemNote>
        <Link
          className="news-link"
          target="_blank"
          to={news?.url || ''}
        >
          <ItemNote
            text={news?.url || ''}
          >
            <HttpIcon sx={{ fontSize: 15 }} />
          </ItemNote>
        </Link>
      </div>

      <div className="news-title">
        {news?.title || ''}
      </div>

      {news?.text &&
        <div dangerouslySetInnerHTML={{ __html: news.text }} />
      }

      {news?.kids
        ? <Comments kids={news.kids} /> : null
      }
    </NewsDescriptionWrapper>
  );
};

export default NewsDescription;
