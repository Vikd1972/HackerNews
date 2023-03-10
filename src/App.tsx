import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './ui/components/Header/Header';
import ListNews from './ui/pages/ListNews/ListNews';
import NewsDescription from './ui/pages/NewsDescription/NewsDescription';

import AppWrapper from './App.styles';
import { useAppSelector } from './store/hooks';

export const App: React.FC = () => {
  const idsNews = useAppSelector((state) => state.hackerNews.idsNews);

  return (
    <AppWrapper>
      <Header
        checkedId={idsNews[0]}
      />
      <Routes>
        <Route
          path="/"
          element={(<ListNews />)}
        />
        <Route
          path="/news/:id"
          element={(<NewsDescription />)}
        />
      </Routes>
    </AppWrapper>
  );
};

export default App;
