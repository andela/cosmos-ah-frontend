import React from 'react';
import { Tab, TabList, } from 'react-tabs';

const ActivityTabs = () => (
	<TabList className="ui secondary pointing menu">
		<Tab className="active item">Articles</Tab>
		<Tab className="item">Likes</Tab>
		<Tab className="item">Ratings</Tab>
		<Tab className="ui item">Bookmarks</Tab>
	</TabList>
);

export default ActivityTabs;
