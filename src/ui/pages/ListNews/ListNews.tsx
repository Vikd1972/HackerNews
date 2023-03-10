/* eslint-disable no-await-in-loop */
import React, { useEffect } from 'react';

import { addIdsNews, addNews, resetNews } from '../../../store/hackerNewsSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import getIdsNews from '../../../api/getIdsNews';
import getNews from '../../../api/getNews';
import ItemNews from './ItemNews/ItemNews';

import ListNewsWrapper from './ListNews.styles';

let checkedId = 0;

export const ListNews: React.FC = () => {
  const news = useAppSelector((state) => state.hackerNews.news);
  const dispatch = useAppDispatch();

  const getHackerNews = async () => {
    try {
      const idsArray = await getIdsNews();
      if (idsArray[0] === checkedId) {
        return;
      }
      checkedId = idsArray[0];
      dispatch(addIdsNews(idsArray));
      dispatch(resetNews());
      for (let i = 0; i < idsArray.length; i++) {
        const newsItem = await getNews(idsArray[i]);
        dispatch(addNews(newsItem));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getHackerNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      getHackerNews();
    }, 60000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListNewsWrapper>
      {news.length && (<>
        {news.map((itemNews) => (
          <div key={itemNews.id}>
            <ItemNews
              itemNews={itemNews}
            />
          </div>
        ))}
      </>)}
    </ListNewsWrapper >
  );
};

export default ListNews;
