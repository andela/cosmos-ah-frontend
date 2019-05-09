import moment from 'moment';

export default {
  articleCategories: [
    'tech', 'people', 'culture', 'romance',
    'self', 'health', 'fßiction'
  ],

  getArticleTags(allArticles) {
    return allArticles.map(article => article.tags);
  },

  getAccumulator(categories) {
    const accumulator = {};
    categories.forEach(category => {
      accumulator[category] = [];
    });
    return accumulator;
  },

  convertAllToLowerCase(array) {
    return array.map(item => item.toLowerCase());
  },

  flatten(array) {
    return array.reduce((prevArray, curArray) => prevArray.concat(curArray), []);
  },

  filterArticleByCategory(articles, category) {
    return articles.filter(article => article.tags.indexOf(category) !== -1);
  },

  filterByContent(categories, categoryMap) {
    const categoriesWithContent = [];
    categories.forEach(category => {
      if (categoryMap[category].length > 0) {
        categoriesWithContent.push(category);
      }
    });
    return categoriesWithContent;
  },

  /**
   * @param {} mapping
   * @param {string} category
   * @param {function} filter - the function above
   */
  filterArticles(mapping, category, filter) {
    mapping[category] = filter(category);
    return mapping;
  },

  getLargestReadCount(allArticles) {
    let largestReadCount = 0;
    for (let i = 0; i < allArticles.length; i += 1) {
      const { readCount } = allArticles[i];
      if (readCount > largestReadCount) {
        largestReadCount = readCount;
      }
    }
    return largestReadCount;
  },

  getTrendingArticle(allArticles) {
    return allArticles.find(article => article.readCount === this.getLargestReadCount(allArticles));
  },

  getTopTrendingArticles(articles, maxReadCount = 100, number = 3) {
    return articles.filter(article => article.readCount >= maxReadCount).slice(0, number);
  },

  parseArticleCreationDate(articleDate, format = 'MMM Do') {
    return moment(articleDate).format(format).slice(0, -2);
  }
};
