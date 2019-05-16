import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import Title from '../../ArticleComponent/Create/Content/Title';

afterEach(cleanup);

describe('Should render the component ', () => {
  test('<Title /> component', () => {
    const articleTitle = render(<Router><Title /></Router>);
    expect(articleTitle).toBeTruthy();
    expect(articleTitle).toMatchSnapshot();
  });
});
