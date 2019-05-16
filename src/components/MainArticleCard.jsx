import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const MainArticleCardStyle = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  padding: 20px;
  margin: 15px;
  border-radius: 8px;
  transition: 0.3s;
  width: 600px;
  height: 400px;
`;

const CardFooter = styled.div`
  color: grey;
  text-align: right;
`;


const MainArticleCard = ({ article }) => (
    <MainArticleCardStyle>
        <Header>
            <h1>
                {article.title}
            </h1>
        </Header>
        <p>
            {article.body}
        </p>
        <Link to={`/articles/${article.id}`}>Read More</Link>
        <CardFooter>
            <Header disabled header>
                <h3>Popular on Authors Haven</h3>
            </Header>
        </CardFooter>
    </MainArticleCardStyle>
);

export default MainArticleCard;
