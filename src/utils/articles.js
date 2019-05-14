import moment from 'moment';

export default {
  articleCategories: [
    'tech', 'people', 'culture', 'romance',
    'self', 'health', 'fiction'
  ],
  /**
   * @function getArticleTags
   * @param {Array} allArticles
   * @returns {Array<String>} Returns an array of tags
   */
  getArticleTags(allArticles) {
    return allArticles.map(article => article.tags);
  },

  /**
   * @function getAccumulator
   * @param {Array} categories
   * @returns {Object} Returns an object that maps to each category in `categories`
   */
  getAccumulator(categories) {
    const accumulator = {};
    categories.forEach(category => {
      accumulator[category] = [];
    });
    return accumulator;
  },

  /**
   * @function flatten
   * @param {Array} array A multi-dimensional array
   * @returns {Array} Returns a flat array
   * @description flattens a multi-dimensional array to a single-dimensional array
   */
  flatten(array) {
    return array.reduce((prevArray, curArray) => prevArray.concat(curArray), []);
  },

  /**
   * @function filterArticleByCategory
   * @param {Array} articles
   * @param {String} category
   * @returns {Array} Returns a list of array
   * filtered by `category`
   */
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
   * @function getLargestReadCount
   * @param {Array} allArticles
   * @returns {Number} Returns the largest read count value
   */
  getLargestReadCount(allArticles) {
    let largestReadCount = 0;
    for (let i = 0, nArticles = allArticles.length; i < nArticles; i += 1) {
      const { readCount } = allArticles[i];
      if (readCount > largestReadCount) {
        largestReadCount = readCount;
      }
    }
    return largestReadCount;
  },

  /**
   * @function getTrendingArticle
   * @param {Array} allArticles
   * @returns {Object} Returns an array with the highest read count value
   */
  getTrendingArticle(allArticles) {
    return allArticles.find(article => article.readCount === this.getLargestReadCount(allArticles));
  },

  /**
   * @function getTopTrendingArticles
   * @param {Array} articles
   * @param {Number} maxReadCount
   * @param {Number} number
   * @returns {Array} Returns `number` most trending articles
   */
  getTopTrendingArticles(articles, maxReadCount = 100, number = 3) {
    return articles.filter(article => article.readCount >= maxReadCount).slice(0, number);
  },

  /**
   * @function parseArticleCreationDate
   * @param {Date} articleDate Date
   * @param {String} format
   * @returns {String} Returns a formatted date string
   */
  parseArticleCreationDate(articleDate, format = 'MMM Do') {
    return moment(articleDate).format(format).slice(0, -2);
  }
};
