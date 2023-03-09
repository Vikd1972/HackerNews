import instance from '.';

const getIdsNews = async () => {
  const response = await instance.get<number[]>('/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100');

  return response.data;
};

export default getIdsNews;
