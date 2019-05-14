import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Articles from '../ProfileComponent/Activity/Articles';

afterEach(cleanup);

const articleText = 'Lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.';

describe('Should render the component', () => {
  test('<Articles /> component', () => {
    const articles = render(<Articles articles={0}>{articleText}</Articles>);
    expect(articles).toBeTruthy();
    expect(articles).toMatchSnapshot();
  });
});