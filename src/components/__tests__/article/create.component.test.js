import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import CreateArticle from '../../ArticleComponent/Create';

afterEach(cleanup);

describe('Should render the component ', () => {
  test('<CreateArticle /> component', () => {
    const createArticle = render(<Router><CreateArticle /></Router>);
    expect(createArticle).toBeTruthy();
    expect(createArticle).toMatchSnapshot();
  });
});