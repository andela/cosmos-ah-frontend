import articleUtil from '../articles';
import articleMock from '../../__mocks__/article';

describe('Article Util test', () => {
  it('returns article tags', () => {
    const articleTags = articleUtil.getArticleTags(articleMock.articles);
    expect(articleTags.length).toEqual(2);
  });

  it('accumulates an object based on category with empty array', () => {
    const accumulator = articleUtil.getAccumulator(articleMock.categories);
    expect(Array.isArray(accumulator.tech)).toBeTruthy();
    expect(accumulator.tech.length).toEqual(0);
  });

  it('flattens an array of arrays', () => {
    const flatArray = articleUtil.flatten([[1, 2], [3, 4]]);
    expect(flatArray.length).toEqual(4);
    expect(typeof flatArray[0]).toEqual('number');
  });

  it('filters article by category', () => {
    const flatArray = articleUtil.filterArticleByCategory(articleMock.articles, 'fiction');
    expect(flatArray.length).toEqual(1);
  });

  it('filters category by content', () => {
    const flatArray = articleUtil.filterByContent(articleMock.categories, articleMock.categoriesMap)
    expect(flatArray.length).toEqual(3);
  });

  it('returns largest read count value', () => {
    const count = articleUtil.getLargestReadCount(articleMock.articles);
    expect(count).toEqual(100);
  });

  it('returns the trending article', () => {
    const article = articleUtil.getTrendingArticle(articleMock.articles);
    expect(article.id).toEqual('10ba038e-48da-487b-96e8-8d3b99b6d18b');
  });

  it('returns 3 trending articles', () => {
    const articles = articleUtil.getTopTrendingArticles(articleMock.articles, 50);
    expect(articles.length).toEqual(2);
  });
});
