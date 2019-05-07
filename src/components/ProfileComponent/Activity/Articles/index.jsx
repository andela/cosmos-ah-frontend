import React from 'react';
import styled from 'styled-components';
import { limit, } from 'stringz';
import Option from '../../../shared/Option';
import articleImage from '../../../../assets/images/pictures/demo-article.jpg';

const defaultText = 'Lorem It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.';

const Article = ({ children, articles, imageStyles, }) => {
  if (articles === 0) return true;
  return (
    <div className="ui segment">
      <div className="ui secondary menu">
        <div className="item title-article">
          <Article.Text>{'An Andela Simulation'}</Article.Text>
        </div>
        <div className="right item">
          <Option />
        </div>
      </div>
      <Article.Image src={articleImage} styles={imageStyles} />
      <Article.Body>{defaultText.length > 150 ? `${limit(defaultText, 150)} ...` : defaultText}</Article.Body>
    </div>
  );
};

Article.Text = styled.h4``;

Article.Body = styled.p`
  padding: 0.78571429em 0.92857143em;
  text-align: justify;
  font-size: 12px;
  `;

Article.Image = styled.div`
  /* width: 347px; */
  margin: 0.78571429em 0.92857143em !important;
  height: 92px;
  margin: 0 auto;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  ${props => props.styles};
`;

export default Article;
