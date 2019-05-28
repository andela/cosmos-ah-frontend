import React from 'react';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

import { mount } from 'enzyme';
import { render, cleanup } from 'react-testing-library';

import ViewArticle from '../../ArticleComponent/View';
import ArticleComments from '../../ArticleComponent/Comment/CommentCard';
import CreateNewComment from '../../ArticleComponent/Comment/NewCommentField';
import { ArticleContent } from '../../ArticleComponent/View/Content/Article';

import { mockStoreData, articleIsViewed } from '../../../__mocks__/store';

const mockStore = configureMockStore([thunk]);

afterEach(cleanup);

describe('Handles the rendering of the <ViewArticle />', () => {
  it('Render <ViewArticle /> component with the default state', () => {
    const store = mockStore(mockStoreData);
    const viewArticle = render(<Provider store={store}><Router><ViewArticle /></Router></Provider>);
    expect(viewArticle).toBeTruthy();
    expect(viewArticle).toMatchSnapshot();
  });

  it('Render <ArticleComments /> component with the default state', () => {
    const store = mockStore(mockStoreData);
    const props = {
      match: {
        params: {
          id: 'id-string'
        }
      }
    };
    const articleComments = render(<Provider store={store}><Router><ArticleComments {...props}/></Router></Provider>);
    expect(articleComments).toBeTruthy();
    expect(articleComments).toMatchSnapshot();
  });

  it('Render <NewArticleComments /> component with the default state', () => {
    const store = mockStore(mockStoreData);
    const props = {
      match: {
        params: {
          id: 'id-string'
        }
      }
    };
    const newArticleComments = render(<Provider store={store}><Router><CreateNewComment {...props}/></Router></Provider>);
    expect(newArticleComments.getByPlaceholderText('Add a comment...')).toBeTruthy();
    expect(newArticleComments).toMatchSnapshot();
  });

  it('Render <ViewArticle /> component with the article loaded', () => {
    mockStoreData.articles.articleIsViewed = { ...articleIsViewed };
    const storeWithArticle = mockStore(mockStoreData);
    const viewArticle = render(<Provider store={storeWithArticle}><Router><ViewArticle /></Router></Provider>);
    expect(viewArticle).toBeTruthy();
    expect(viewArticle).toMatchSnapshot();
  });

  it('Render <ContentLoader /> component when the article has been rendered on <ViewArticle /> component', () => {
    delete mockStoreData.articles.articleIsViewed;
    const storeWithArticleDeleted = mockStore(mockStoreData);
    const viewArticle = render(<Provider store={storeWithArticleDeleted}><Router><ViewArticle /></Router></Provider>);
    expect(viewArticle).toBeTruthy();
    expect(viewArticle).toMatchSnapshot();
  });

  it("Should mount the component and register onchange and onclick events", async () => {
    const storeWithArticle = mockStore(mockStoreData);
    const props = {
      articles: { articleIsViewed, },
      match: { params: { id: null } },
      getByID: jest.fn(),
      articleIsViewed, 
      history: { push: jest.fn() },
      setArticleUpdate: jest.fn(),
      userProfile: {
        id: '979eaa2e-5b8f-4103-8192-4639afae2ba9',
        role: 'admin',
      },
      deleteArticleDispatch: jest.fn(),
    }
    const wrapper = mount(<Provider store={storeWithArticle}><Router><ArticleContent {...props} /></Router></Provider>);
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('#approveModal')).toHaveLength(1);
    expect(wrapper.find('.normal-bk')).toHaveLength(1);
    wrapper.find('#approveModal').simulate('click');
    wrapper.find('#rejectModal').simulate('click');
    wrapper.find('.normal-bk').simulate('click');
  });
});

