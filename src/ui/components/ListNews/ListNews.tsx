import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import ListNewsWrapper from './ListNews.styles';

export const ListNews: React.FC = () => {
  return (
    <ListNewsWrapper>
      <div className="news-container">
        News
      </div>
    </ListNewsWrapper >
  );
};

export default ListNews;
