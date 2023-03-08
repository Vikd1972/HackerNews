/* eslint-disable no-console */
import type { AxiosResponse } from 'axios';
import instance from '.';

const getIdsNews = async () => {
  const response = await instance.get('/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100');

  return response;
};

export default getIdsNews;
