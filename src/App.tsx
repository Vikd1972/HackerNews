import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './ui/components/Header/Header';
import ListNews from './ui/components/ListNews/ListNews';
import NewsDescription from './ui/components/NewsDescription/NewsDescription';

import AppWrapper from './App.styles';

export const App: React.FC = () => {
  return (
    <AppWrapper className="bookroom">
      <Header />
      <Routes>
        <Route path="/" element={<ListNews />} />
        <Route path="/news/:id" element={<NewsDescription />} />
      </Routes>
    </AppWrapper>
  );
};

export default App;
