import moment from 'moment';
import Validate from 'validatorjs';

export default {
  articleTags: [
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
   * @param {Array} tags
   * @returns {Object} Returns an object that maps to each tag in `tags`
   */
  mapTagsToEmptyArrays(tags) {
    const articleTags = {};
    tags.forEach(tag => {
      articleTags[tag] = [];
    });
    return articleTags;
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
   * @function filterArticleByTags
   * @param {Array} articles
   * @param {String} tag
   * @returns {Array} Returns a list of array
   * filtered by `tag`
   */
  filterArticlesByTags(articles, tag) {
    return articles.filter(article => article.tags.indexOf(tag) !== -1);
  },

  /**
   * @function getTagsThatHaveArticles
   * @param {Array<String>} tags
   * @param {Object} tagMap
   * @returns {Array<String>} Returns a list of
   * tags that have articles
   */
  getTagsThatHaveArticles(tags, tagMap) {
    return tags.filter(tag => tagMap[tag].length > 0);
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
  },

  /**
   * @function extractSubsetOfArticleBody
   * @param {String} articleBody
   * @param {Number} words
   * @returns {String} Returns a subset (words) of an article's body
   */
  extractSubsetOfArticleBody(articleBody, words = 100) {
    return articleBody.split(' ', words).join(' ');
  },

  /**
   * @function getMostRatedArticles
   * @returns {Array} Returns an array of
   * the best rated articles
   */
  getBestRatedArticles(articles, bestMinimumRating = 4) {
    return articles.filter(
      article => article.averageRating >= bestMinimumRating
    );
  },

  /**
   * @function sortArticlesByAvgRating
   * @param {Array} articles
   * @param {String} desc
   * @returns {Array} Sorts an articles by the
   * average rating and returns the sorted array
   */
  sortArticlesByAvgRating(articles, desc = 'asc') {
    return articles.sort((a, b) => (desc === 'asc' ? a.averageRating - b.averageRating : b.averageRating - a.averageRating));
  },

  /**
   * @function prepareArticleCollections
   * @param {Array} articles
   * @returns {Object} Returns a collection object
   */
  prepareArticleCollections(articles) {
    const articleTagsToEmptyArrays = this.mapTagsToEmptyArrays(this.articleTags);

    this.articleTags.forEach(tag => {
      articleTagsToEmptyArrays[tag] = this.filterArticlesByTags(articles, tag);
    });

    const articleTagWithContent = this.getTagsThatHaveArticles(this.articleTags,
      articleTagsToEmptyArrays);

    const collections = {};
    articleTagWithContent.forEach((tag, i) => {
      collections[tag] = {};
      collections[tag].id = i;
      collections[tag].title = tag;
      collections[tag].storyCount = articleTagsToEmptyArrays[tag].length;
      collections[tag].image = articleTagsToEmptyArrays[tag][0].imageUrl;
    });

    return collections;
  },

  /**
   * This is needed to test out mock articles feature
   * since the branch with the changes hasn't been
   * integrated with the codebase base branch
   */
  articles: [
    {
      id: '979eaa2e-5b8f-4103-8192-4639afae2ba7',
      title: 'Hamlet',
      author: { fullName: 'William Shakespeare' },
      description: '',
      body: '',
      createdAt: new Date(),
      totalReadTime: 1,
      averageRating: 4,
      imageUrl: ['https://picsum.photos/200/300'],
      tags: ['fiction', 'drama']
    },
    {
      id: '979eaa2e-5b8f-4103-8192-4639afae2ba8',
      title: 'Macbeth',
      author: { fullName: 'William Shakespeare' },
      description: '',
      body: '',
      createdAt: new Date(),
      totalReadTime: 1,
      averageRating: 2,
      imageUrl: ['https://picsum.photos/200/300'],
      tags: ['fiction']
    },
    {
      id: '979eaa2e-5b8f-4103-8192-4639afae2ba9',
      title: 'The Merchant of Venice',
      author: { fullName: 'William Shakespeare' },
      description: '',
      body: '',
      createdAt: new Date(),
      totalReadTime: 1,
      averageRating: 5,
      imageUrl: ['https://picsum.photos/200/300'],
      tags: ['tech']
    }
  ]
};

export const Validator = async (data, rules, customRules = null) => {
  const result = await new Validate(data, rules, customRules);
  return result;
};
