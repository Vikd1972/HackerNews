import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useAppSelector } from './store/hooks';
import Header from './ui/components/Header/Header';
import ListNews from './ui/pages/ListNews/ListNews';
import NewsDescription from './ui/pages/NewsDescription/NewsDescription';
import theme from './theme';

import AppWrapper from './App.styles';

export const App: React.FC = () => {
  const hackerNews = useAppSelector((state) => state.hackerNews);

  return (
    <ThemeProvider theme={hackerNews.isLightTheme ? theme.light : theme.dark}>
      <AppWrapper>
        <Header
          checkedId={hackerNews.idsNews[0]}
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
    </ThemeProvider>
  );
};

export default App;
