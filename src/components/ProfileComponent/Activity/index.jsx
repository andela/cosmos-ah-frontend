/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import Articles from './Articles';
import Likes from './Likes';
import Bookmarks from './Bookmarks';
import Ratings from './Ratings';

const tabChange = (index, lastIndex, event) => {
  event.persist();

  $(document).ready(() => {
    $('.ui.dropdown').dropdown();
  });
};

const Activity = ({ children }) => (
  <Activity.Container>
    <Tabs>
      <TabList className="ui secondary pointing menu">
        <Tab className="item">Articles</Tab>
        <Tab className="item">Likes</Tab>
        <Tab className="item">Ratings</Tab>
        <Tab className="ui item">Bookmarks</Tab>
      </TabList>
      <TabPanel>
        <Articles>{children}</Articles>
        <Articles>{children}</Articles>
        <Articles>{children}</Articles>
      </TabPanel>
      <TabPanel>
        <Likes />
      </TabPanel>
      <TabPanel>
        <Ratings />
      </TabPanel>
      <TabPanel>
        <Bookmarks />
      </TabPanel>
    </Tabs>
  </Activity.Container>
);

Activity.Container = styled.div`
  padding: 0.78571429em 0.92857143em;
	margin: 5rem 0%;
`;

export default Activity;
