import axios from './axios';

export const getAllArticles = async () => {
  try {
    const articles = await axios.get('/articles');
    return articles;
  } catch (error) {
    // TODO: HANDLE error here
  }
};
