import instance from '.';

import type { INews } from '../store/hackerNewsSlice';

const getNews = async (id: number) => {
  const response = await instance.get<INews>(`/item/${id}.json?print=pretty`);

  return response.data;
};

export default getNews;
