import React from 'react';

import { useAppSelector } from '../../../store/hooks';

import NewsDescriptionWrapper from './NewsDescription.styles';

export const NewsDescription: React.FC = () => {
  const news = useAppSelector((state) => state.hackerNews.news);

  return (
    <NewsDescriptionWrapper>
      <div className="news-description-container">
        Detail News
      </div>
    </NewsDescriptionWrapper>
  );
};

export default NewsDescription;
