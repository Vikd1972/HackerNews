/* eslint-disable no-await-in-loop */
import React, { useEffect, useMemo } from 'react';

import type { INews } from '../../../store/hackerNewsSlice';
import { addIdsNews, addNews, resetNews } from '../../../store/hackerNewsSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import getIdsNews from '../../../api/getIdsNews';
import getNews from '../../../api/getNews';
import ItemNews from './ItemNews/ItemNews';

import ListNewsWrapper from './ListNews.styles';

let checkedId = 0;

type PrintType = {
  index: number;
  column: number;
  itemNews: INews;
};

const PrintColumn: React.FC<PrintType> = (props) => {
  const columnNumber = props.index % 5;

  return (
    <ItemNews
      itemNews={columnNumber === props.column ? props.itemNews : null}
    />
  );
};

export const ListNews: React.FC = () => {
  const dispatch = useAppDispatch();
  const hackerNews = useAppSelector((state) => state.hackerNews);

  const columnArr = useMemo(() => {
    return new Array(hackerNews.numberOfColumns).fill(0);
  }, [hackerNews.numberOfColumns]);

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
    <ListNewsWrapper
      isMosaic={hackerNews.isMosaic}
    >
      {columnArr.map((_, ind) => (
        <div key={ind}>
          {hackerNews.news.map((itemNews, index) => (
            <div key={index}>
              <PrintColumn
                itemNews={itemNews}
                index={index}
                column={ind}
              />
            </div>
          ))}
        </div>
      ))}
    </ListNewsWrapper >
  );
};

export default ListNews;
