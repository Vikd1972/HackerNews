import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HttpIcon from '@mui/icons-material/Http';
import TitleIcon from '@mui/icons-material/Title';
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
          <AccountCircleIcon />
        </ItemNote>
        <ItemNote
          text={currentDate || ''}
        >
          <CalendarMonthIcon />
        </ItemNote>
        <ItemNote
          text={news?.score || 0}
        >
          <ThumbUpOffAltIcon />
        </ItemNote>
        <ItemNote
          text={news?.descendants || 0}
        >
          <CommentIcon />
        </ItemNote>
        <Link
          className="news-link"
          target="_blank"
          to={news?.url || ''}
        >
          <ItemNote
            text={news?.url || ''}
          >
            <HttpIcon fontSize="large" />
          </ItemNote>
        </Link>
      </div>

      <div className="news-title">
        <ItemNote
          text={news?.title || ''}
        >
          <TitleIcon />
        </ItemNote>
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
