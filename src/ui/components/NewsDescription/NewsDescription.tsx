/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import React from 'react';

import NewsDescriptionWrapper from './NewsDescription.styles';

export const NewsDescription: React.FC = () => {
  return (
    <NewsDescriptionWrapper>
      <div className="news-description-container">
        Detail News
      </div>
    </NewsDescriptionWrapper>
  );
};

export default NewsDescription;
