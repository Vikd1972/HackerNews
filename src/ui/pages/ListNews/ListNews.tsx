/* eslint-disable no-await-in-loop */
import React, { useEffect } from 'react';

import getIdsNews from '../../../api/getIdsNews';
import getNews from '../../../api/getNews';
import { addIdsNews, addNews } from '../../../store/hackerNewsSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import ItemNews from './ItemNews/ItemNews';

import ListNewsWrapper from './ListNews.styles';

export const ListNews: React.FC = () => {
  const news = useAppSelector((state) => state.hackerNews.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const idsNews = await getIdsNews();
        dispatch(addIdsNews(idsNews));
        for (let i = 0; i < idsNews.length; i++) {
          const news = await getNews(idsNews[i]);
          dispatch(addNews(news));
        }
      } catch (err) {
        console.error(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListNewsWrapper>
      {news.map((itemNews) => (
        <div key={itemNews.id}>
          <ItemNews
            itemNews={itemNews}
          />
        </div>
      ))}
    </ListNewsWrapper >
  );
};

export default ListNews;
