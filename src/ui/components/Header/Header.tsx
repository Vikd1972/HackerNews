/* eslint-disable no-await-in-loop */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import UpdateIcon from '@mui/icons-material/Update';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

import { addCurrentNews, addIdsNews, addNews, resetNews } from '../../../store/hackerNewsSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import getIdsNews from '../../../api/getIdsNews';
import getNews from '../../../api/getNews';
import MyButton from '../../shared/Button/Button';
import getDate from '../../../utils/getDate';
import Config from '../../shared/Config/Config';

import HeaderWrapper from './Header.styles';

type PropsType = {
  checkedId: number;
};

export const Header: React.FC<PropsType> = (props) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLightTheme = useAppSelector((state) => state.hackerNews.isLightTheme);

  const [today, setToday] = useState<{ date: string; time: string }>();
  const [isList, setIsList] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const { date, time } = getDate(Date.now() / 1000);
      setToday({ date, time });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setIsList(!location.pathname.includes('news'));
  }, [location.pathname]);

  const updateData = async () => {
    try {
      if (isList) {
        const idsArray = await getIdsNews();
        if (idsArray[0] !== props.checkedId) {
          dispatch(addIdsNews(idsArray));
          dispatch(resetNews());
          for (let i = 0; i < idsArray.length; i++) {
            const news = await getNews(idsArray[i]);
            dispatch(addNews(news));
          }
        }
      } else {
        const id = Number(location.pathname.split('/')[2]);
        const currentNews = await getNews(id);
        dispatch(addCurrentNews(currentNews));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onModal = (isModal: boolean) => {
    setIsOpenModal(isModal);
  };

  return (
    <HeaderWrapper
      myTheme={isLightTheme}
    >
      <div className="header-box">
        <div className="logo-box">
          <img alt="The Hacker News Logo" className="no-lazy" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1IAAABdCAMAAACYRqd9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACWUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7KwB0MAAAAxdFJOUwBAwHCwIA+QYNCgAfKA+AUK/FHgOu4YSByq18UveCm76RNZ5Wlkhsql3Jy2jDWUlyR/G9pxAAASqUlEQVR42u2d6WKyvBKAowKqAQFx39e6t+X+b+7U9m2LyWQlgqdf5mcrSibzJJPJZIKQFStWrFixYsWKFStWrFixYsWKFStWrFh5gEw7N2n8ilWJFSt5pJUS8v/1+iu1j+Oh+0+m3xJaG/iSnUNIZHXyX0RqsVb7vE82N3X/Vn92a6ryTU6d1Iz3BM2pUK9bgT84pD64tkhpSTUNsEUqO8akipKgZ0aKeqm0zmCP+mDTIqWJVNoKLVI/ErVVkbpYpCxSBFJpdWWR+paBKlFp1yJlkSKRSsfvFimmCYr8PmyRskhRSKW9rkXqS8aqSNWRRcoiRSOVttcWKYQQHur7fRYpi1QWqVQ28PfHZ6mdKlEbbJGySMFISQb+/jhSI1WkXpFFyiLFQCqdrP7zSOGevt9nkbJIkUilx/f/OlJdVaKW2CJlkWIjJRP4+9tIBapIvSGLlEWKg1Qar//bSE1UkapYpCxSXKTEgb8/jZQX5/D7LFIWKRCp9BD+d5HqqE5SJ2SRskiJkBIE/v40UidVpAYWKYuUGCl+4O9PI5UoEtULLVIWKQmkuIG/v4xU2KGEtsh95r9dJIPUsHGaJL7fSyaHWUX2IE3YnbVuT/nL8eJt2w2fByk878zezs1k6ft+0jy/1Soqp5dXnaBVPW5u6tiPXjrDgpDKrc6wMjudx0lvGWkhlcYNQ0jJtSRyM9L3PgT82KUGhhQ+pJ/9AqiXos/3WPr+cj+aqSi0QTXXkbfeWzOi3f7ub/5BIkM5XDvEsS3faXhPgFQ0uFRpC4gntaHMu+DuhcpKPtYr+NFI5Vfn++t3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" />
        </div>
        <div className="date-box">
          <p>It&apos;s now {today?.date}</p>
          <p>{today?.time}</p>
        </div>
        <div className="button-box">
          {!isList &&
            (<MyButton
              onClick={() => navigate('/')}
            >
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </MyButton>)
          }
          <MyButton
            onClick={updateData}
          >
            <UpdateIcon fontSize="large" />
          </MyButton>

          <MyButton
            onClick={() => onModal(true)}
          >
            <MiscellaneousServicesIcon fontSize="large" />
          </MyButton>
        </div>
      </div>
      {isOpenModal && (<Config
        onModal={() => onModal(false)}
      />)}
    </HeaderWrapper>
  );
};

export default Header;
