import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Grid, Segment, Header, Container, Image, Icon
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getArticleAction } from '../state/article/actions';

const StyledHeading = styled.h3`
  padding-bottom: 10px; 
`;

const StyledHeadingWithBorder = styled(StyledHeading)`
  border-bottom: 2px solid #777;
`;

const articles = [
  {
    id: 1,
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    title: 'my-article',
    author: 'Arya',
  },

  {
    id: 2,
    description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    title: 'my-article',
    author: 'Arya',
  }
];

const MainBodyContent = styled('section')`
  margin-top: 3em;
`;

const NumberStyling = styled.p`
  font-size: 1.8em;
  color: #aaa;
`;

const StyledColumn = styled(Grid.Column)`
  text-align: center;
`;

const pStyle = {
  padding: 0,
  margin: 0
};

const ArticleReadTimeSpan = styled.span`
  color: #3A8FDD;
`;

const HomePageBody = props => {
  useEffect(() => {
    props.getArticleAction();
  }, []);
  return (
    <MainBodyContent>
      <Container>
        <Grid columns="2">
          <Grid.Row>
            <Grid.Column>
              <StyledHeadingWithBorder>Featured for members</StyledHeadingWithBorder>
              <Grid>
                {props.articles.map(article => (
                  <Grid.Row key={article.id}>
                    <Grid.Column width={8}>
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <div>{article.author}</div>

                      <div>
                        <span>{moment(article.createdAt).format('MMM Do')}</span>&nbsp;
                        <ArticleReadTimeSpan>{article.totalReadTime} {article.totalReadTime > 1 ? 'Mins' : 'Min'} read</ArticleReadTimeSpan>&nbsp;
                        <Icon name="star" size="small" color="grey"/>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Image src={props.articleImg} alt="" width={100} height={100} />
                    </Grid.Column>
                  </Grid.Row>
                ))}
              </Grid>
              <StyledHeadingWithBorder>Technology</StyledHeadingWithBorder>
              <Grid columns="equal">
                {articles.map(article => (
                  <Grid.Row key={article.id.toString()}>
                    <Grid.Column>
                      <div>{article.title}</div>
                      <div>{article.description}</div>
                      <div>{article.author}</div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Image src={props.articleImg} alt="" width={100} height={100} />
                    </Grid.Column>
                  </Grid.Row>
                ))}
              </Grid>
              <StyledHeadingWithBorder>Health</StyledHeadingWithBorder>
              <Grid columns="equal">
                {articles.map(article => (
                  <Grid.Row key={article.id.toString()}>
                    <Grid.Column>
                      <div>{article.title}</div>
                      <div>{article.description}</div>
                      <div>{article.author}</div>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Image src={article.image} alt="" width={100} height={100} />
                    </Grid.Column>
                  </Grid.Row>
                ))}
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <aside>
                <StyledHeadingWithBorder>Popular on Author's Haven</StyledHeadingWithBorder>
                <Grid columns="2">
                  <Grid.Row>
                    <StyledColumn width={4} verticalAlign="middle">
                      <NumberStyling>01</NumberStyling>
                    </StyledColumn>

                    <Grid.Column>
                      <h3>Did you know Pandas Can Do so much?</h3>
                      <p style={pStyle}>Jane Doe in Romance</p>
                      <span>Mar 26 &middot; 7 Min Read</span>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <StyledColumn width={4} verticalAlign="middle">
                      <NumberStyling>02</NumberStyling>
                    </StyledColumn>

                    <Grid.Column>
                      <h3>Did you know Pandas Can Do so much?</h3>
                      <p style={pStyle}>Jane Doe in Romance</p>
                      <span>Mar 26 7 Min Read</span>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <StyledColumn width={4} verticalAlign="middle">
                      <NumberStyling>03</NumberStyling>
                    </StyledColumn>

                    <Grid.Column>
                      <h3>Did you know Pandas Can Do so much?</h3>
                      <p style={pStyle}>Jane Doe in Romance</p>
                      <p>Mar 26 7 Min Read</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <StyledHeadingWithBorder>Preferences</StyledHeadingWithBorder>
                <Grid columns="2">
                  <Grid.Row>
                    <StyledColumn width={4} verticalAlign="middle">
                      <NumberStyling>01</NumberStyling>
                    </StyledColumn>

                    <Grid.Column>
                      <h3>Did you know Pandas Can Do so much?</h3>
                      <p style={pStyle}>Jane Doe in Romance</p>
                      <span>Mar 26 &middot; 7 Min Read</span>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <StyledColumn width={4} verticalAlign="middle">
                      <NumberStyling>02</NumberStyling>
                    </StyledColumn>

                    <Grid.Column>
                      <h3>Did you know Pandas Can Do so much?</h3>
                      <p style={pStyle}>Jane Doe in Romance</p>
                      <span>Mar 26 7 Min Read</span>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <StyledColumn width={4} verticalAlign="middle">
                      <NumberStyling>03</NumberStyling>
                    </StyledColumn>

                    <Grid.Column>
                      <h3>Did you know Pandas Can Do so much?</h3>
                      <p style={pStyle}>Jane Doe in Romance</p>
                      <p>Mar 26 7 Min Read</p>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <StyledColumn width={4} verticalAlign="middle">
                      <NumberStyling>04</NumberStyling>
                    </StyledColumn>

                    <Grid.Column>
                      <h3>Did you know Pandas Can Do so much?</h3>
                      <p style={pStyle}>Jane Doe in Romance</p>
                      <p>Mar 26 7 Min Read</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </aside>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </MainBodyContent>
  );
};

HomePageBody.propTypes = {};

const mapStateToProps = state => ({
  articles: state.article.articles
});

export default connect(mapStateToProps, { getArticleAction })(HomePageBody);
